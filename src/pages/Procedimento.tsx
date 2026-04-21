import { useParams, Link } from 'react-router-dom';
import { 
  ChevronLeft, 
  ChevronDown, 
  ArrowRight, 
  Phone, 
  Mail,
  Clock,
  Calendar,
  CheckCircle2
} from 'lucide-react';
import React, { useState, useEffect } from 'react';

interface ProcedureInfo {
  title: string;
  hook: string;
  description: React.ReactNode;
  duration?: string;
  interval?: string;
  indications?: string;
  image?: string;
  faqs?: { q: string, a: string }[];
  isCosmiatria?: boolean;
}

export default function Procedimento() {
  const { id } = useParams<{ id: string }>();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const rawContents = import.meta.glob('../../conteudos/*.txt', { query: '?raw', import: 'default', eager: true }) as Record<string, string>;
  
  function parseProcedure(id: string, text: string): ProcedureInfo | null {
    try {
        const lines = text.split('\n');
        let title = '';
        let hook = '';
        let image = '';
        let isCosmiatria = false;
        let duration = '';
        let interval = '';
        let indications = '';
        let descriptionRaw = '';
        let faqsRaw = '';
        
        let currentSection = 'header';
        
        for (let i = 0; i < lines.length; i++) {
            const line = lines[i].trim();
            if (line.startsWith('### DESCRIÇÃO')) {
                currentSection = 'description';
                continue;
            } else if (line.startsWith('### PERGUNTAS')) {
                currentSection = 'faqs';
                continue;
            }
            
            if (currentSection === 'header') {
                if (line.startsWith('TÍTULO:')) title = line.substring(7).trim();
                else if (line.startsWith('SUBTÍTULO:')) hook = line.substring(10).trim();
                else if (line.startsWith('IMAGEM:')) image = line.substring(7).trim();
                else if (line.startsWith('CATEGORIA:')) isCosmiatria = line.substring(10).trim().includes('Cosmiatria');
                else if (line.startsWith('DURAÇÃO:')) duration = line.substring(8).trim();
                else if (line.startsWith('INTERVALO:')) interval = line.substring(10).trim();
                else if (line.startsWith('INDICAÇÕES:')) indications = line.substring(11).trim();
            } else if (currentSection === 'description') {
                descriptionRaw += line + '\n';
            } else if (currentSection === 'faqs') {
                faqsRaw += line + '\n';
            }
        }
        
        const descParagraphs = descriptionRaw.trim().split('\n\n').filter(p => p.trim());
        const descriptionNodes = (
            <div className="space-y-4">
                {descParagraphs.map((p, idx) => {
                    const text = p.trim();
                    if (text.startsWith('<destaque>') && text.endsWith('</destaque>')) {
                        return <p key={idx} className="font-semibold text-primary/80">{text.substring(10, text.length - 11)}</p>;
                    }
                    return <p key={idx}>{text}</p>;
                })}
            </div>
        );
        
        const faqs = [];
        const faqLines = faqsRaw.trim().split('\n').filter(l => l.trim());
        let currentQ = '';
        for (const line of faqLines) {
            if (line.startsWith('Q:')) {
                currentQ = line.substring(2).trim();
            } else if (line.startsWith('R:')) {
                faqs.push({ q: currentQ, a: line.substring(2).trim() });
                currentQ = '';
            } else if (currentQ) {
                if (faqs.length > 0) faqs[faqs.length - 1].a += ' ' + line.trim();
            }
        }

        return {
            title,
            hook,
            image,
            isCosmiatria,
            duration,
            interval,
            indications,
            description: descriptionNodes,
            faqs: faqs.length > 0 ? faqs : undefined
        };
    } catch {
        return null;
    }
  }

  const procedureData: Record<string, ProcedureInfo> = {};
  for (const [path, content] of Object.entries(rawContents)) {
      const match = path.match(/\/([^\/]+)\.txt$/);
      if (match) {
          const key = match[1];
          const parsed = parseProcedure(key, content);
          if (parsed) {
              procedureData[key] = parsed;
          }
      }
  }

  const current = id ? procedureData[id] : null;

  if (!current) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-surface">
        <Link to="/" className="text-primary hover:underline">Procedimento não encontrado. Voltar para Home.</Link>
      </div>
    );
  }

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const defaultImage = "https://lh3.googleusercontent.com/aida-public/AB6AXuD8Wrze4sMhvbAg4wcCdn7TtJ5zYRrM-qUgZyYI5-J8bYJqxltR3uf578LkKORULhIEhdqf7a6Asr52hHU80eHhBmytcfT3qnKOSCf-NTqw2g1Tcs3K0OUf1ZQCOhVaxf6uOeC1eObK1ncgU4fPKX9yCxfmqSMJdAg3pj_VsosRD12lbX1cSFGn9ryYnA983CTwLQNlpd__ZA173t5VamXpGS4VNxnPX8JBaYc2Z6iUJ5qZXMzivl1PFnMo0F0lMvvhE2LrtSalLXM";
  const currentImage = current.image || defaultImage;

  return (
    <div className="bg-surface text-on-surface font-body selection:bg-primary/30 min-h-screen">
      
      {/* Back Button */}
      <div className="fixed top-0 left-0 z-50 p-6 md:p-8">
        <Link 
          to="/" 
          className="group flex items-center gap-2 text-primary hover:text-primary-container transition-colors duration-300"
        >
          <ChevronLeft size={24} strokeWidth={1.5} />
          <span className="font-sans text-xs font-bold uppercase tracking-[0.2em] leading-none">Voltar</span>
        </Link>
      </div>

      <main>
        {/* Hero Section */}
        <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-20">
          <div className="absolute inset-0 z-0">
            <img 
              className="w-full h-full object-cover opacity-30" 
              alt="background" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCkdYaAeV2myOvJF35fwOe3uWxEz57cHeVvmMiup5vnPIWd1Fg8qp_6gStjJEYSZ1ELI-ta9S-ZzxF0jyCTYgtMhjPfk9_2nlDcM_fReXphXPszmraA2H0SCSDcwP8Sc7sOZqumc0TYExTGtF_HxJIj7UQlUKOnFUCorH7q5216I68vZC5w1ZHtnNkQpLoDJzNpoxqMJm9gV2yd7iIATzlslLxc0nGdys7jhjgN0ekMndsUwlcFkae7cIPojurOnYmAzIPOLRu36ZM"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-surface via-transparent to-surface"></div>
          </div>
          <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
            <span className="font-label uppercase tracking-[0.3em] text-primary mb-6 block text-sm">
              {current.isCosmiatria ? 'Cosmiatria & Rejuvenescimento' : 'Cirurgia Plástica de Excelência'}
            </span>
            <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight gold-gradient-text mb-8 leading-tight">
              {current.title}
            </h1>
            <p className="font-headline italic text-xl md:text-2xl text-on-surface-variant max-w-3xl mx-auto leading-relaxed">
              {current.hook}
            </p>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-24 px-6 md:px-12 bg-surface-container-low">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="relative group overflow-hidden">
              <div className="absolute -top-4 -left-4 w-32 h-32 border-t border-l border-primary/30"></div>
              <img 
                className="w-full aspect-[4/5] object-cover rounded-sm shadow-2xl transition-transform duration-700 group-hover:scale-[1.01]" 
                alt={current.title} 
                src={currentImage}
              />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 border-b border-r border-primary/30"></div>
              
                <div className="absolute bottom-6 left-6 z-10 max-w-[240px]">
                  <div className="border-l border-primary/40 pl-4 py-1">
                    <p className="font-label text-[9px] uppercase tracking-[0.15em] text-white/50 leading-relaxed font-medium">
                      <span className="text-primary/70">*</span> Imagem meramente ilustrativa. Os resultados podem variar de acordo com cada paciente.
                    </p>
                  </div>
                </div>
            </div>
            
            <div className="space-y-12">
              <div className="space-y-8">
                <h2 className="font-headline text-3xl md:text-4xl text-on-surface">Como Funciona?</h2>
                <div className="text-lg text-on-surface-variant leading-relaxed font-light space-y-6">
                  {current.description}
                </div>
              </div>

              {/* Technical Details Cards */}
              {(current.duration || current.interval || current.indications) && (
                <div className="grid grid-cols-1 gap-6 pt-8">
                  {current.duration && (
                    <div className="flex gap-6 items-start p-6 bg-surface border border-primary/10">
                      <Clock className="text-primary flex-shrink-0" size={24} strokeWidth={1.5} />
                      <div>
                        <h4 className="font-label uppercase tracking-widest text-[10px] text-primary mb-2">Duração da Sessão</h4>
                        <p className="text-on-surface-variant text-sm font-light">{current.duration}</p>
                      </div>
                    </div>
                  )}
                  {current.interval && (
                    <div className="flex gap-6 items-start p-6 bg-surface border border-primary/10">
                      <Calendar className="text-primary flex-shrink-0" size={24} strokeWidth={1.5} />
                      <div>
                        <h4 className="font-label uppercase tracking-widest text-[10px] text-primary mb-2">Qual o Intervalo?</h4>
                        <p className="text-on-surface-variant text-sm font-light">{current.interval}</p>
                      </div>
                    </div>
                  )}
                  {current.indications && (
                    <div className="flex gap-6 items-start p-6 bg-surface border border-primary/10">
                      <CheckCircle2 className="text-primary flex-shrink-0" size={24} strokeWidth={1.5} />
                      <div>
                        <h4 className="font-label uppercase tracking-widest text-[10px] text-primary mb-2">Indicações</h4>
                        <p className="text-on-surface-variant text-sm font-light leading-relaxed">{current.indications}</p>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Results Gallery (Only for Surgeries or if images available) */}
        {!current.isCosmiatria && (
          <section className="py-24 px-6 bg-surface overflow-hidden">
            <div className="max-w-7xl mx-auto">
              <div className="mb-16">
                <h2 className="font-headline text-3xl md:text-4xl text-on-surface">Compromisso com o Resultado</h2>
                <p className="text-on-surface-variant font-light mt-4">Cada transformação é planejada respeitando a biologia individual.</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="group relative overflow-hidden bg-surface-container-low">
                  <div className="grid grid-cols-2 gap-px">
                     <div className="relative">
                       <span className="absolute top-4 left-4 z-10 text-[9px] uppercase tracking-[0.2em] font-bold text-white/40">Antes</span>
                       <img className="aspect-square object-cover grayscale brightness-75 transition-all duration-700 group-hover:grayscale-0 group-hover:brightness-100" alt="before" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBSwic_O-woioCjnhZrFTGwL9bcZI4oXvO0VZx-VAVkA-3dz_pIA-uA_qjNDogCRYPH5jGxYo-sDn0BrDSJ9jEUgaZvTEFutnHAowqe2QOrJdxVG11P4LOCsoZiXz8Vxh0Gp-Iv1y9YHl2ri1D3O43tqH1_TlELziBFZzghrGvS2WmTM8VJU0x2E1Aw60s-Qs8JNrNGzNgvmAoujmH7oHYUY0DiOw0Ir4EtB8cOLkx4U4ouykNhjA3ihWRtMbpAg9YvCq7z0EU8Ya4" />
                     </div>
                     <div className="relative">
                       <span className="absolute top-4 right-4 z-10 text-[9px] uppercase tracking-[0.2em] font-bold text-primary">Depois</span>
                       <img className="aspect-square object-cover grayscale brightness-75 transition-all duration-700 group-hover:grayscale-0 group-hover:brightness-100" alt="after" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB2BcSPtquzLawwSWLVwAQjBMu3E9b219nPzgyeII9PpQcmqtQ0PW0mX9P3OBfisFVKI8KG_ILI1r5_v1X-BrZGyz1z8K9NfDO2ykRmW-g22eOeikPAo0OO8CuRRa021OgwHIHKNrq19nyB_dSL81aejVNm53M1GLGVAX8RDC1HC4CqYJ4_upgSsVCpRB8VOOinW5gGadON6uZM9sYJzNZH3Bt50LnIsjOjJTN6wYcHP8krkQCCSEEG4ULvNP2rwbUB2phLJSzZTmI" />
                     </div>
                  </div>
                </div>
                <div className="group relative overflow-hidden bg-surface-container-low">
                  <div className="grid grid-cols-2 gap-px">
                     <div className="relative">
                       <span className="absolute top-4 left-4 z-10 text-[9px] uppercase tracking-[0.2em] font-bold text-white/40">Antes</span>
                       <img className="aspect-square object-cover grayscale brightness-75 transition-all duration-700 group-hover:grayscale-0 group-hover:brightness-100" alt="side before" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_OLx8rZzrBpN1ZGJcREengtYK-q5hyYW9N504j6l2k29x17IsTtMF9s_fXiVOJhNQJ-Xdk4nQr7Ey3eqSfqWCiqXr8mP9cb7T0MmecA5riXQXf32R_oovcy8_GW-AVjKYOZ7-13Go8Dzti6wL880dm4u-2z1rrTxll6IGVT-DF-Hujd2QwBd-Xr4faS4Ge6mlZRzngvx_eSxKvMf3efEGAe_javXuG7loByd0oAWW1Bss1iE7JEJf9SNgegxpClVj0-wGUnrTses" />
                     </div>
                     <div className="relative">
                       <span className="absolute top-4 right-4 z-10 text-[9px] uppercase tracking-[0.2em] font-bold text-primary">Depois</span>
                       <img className="aspect-square object-cover grayscale brightness-75 transition-all duration-700 group-hover:grayscale-0 group-hover:brightness-100" alt="side after" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB0C4TVKWlhaKrdKtt0RnFTaSoJh15ynIo_9bhWMYtPmbzgpm3SQt7roJy4QcxZMMBKFAvjgT4zvyqjcbXP_VezltKEZ-_EErHY7VQoPix1g8GS165vWzpi9biTaAYQ8qK5raCiDTJ6O2XIs3VP_uvfL-d3Qpm-igb6gd48hiWuFRmXFiuxJaeYE1V7ZjBKXijx-C-Fy4UoRG16b7IRxINbTSzMPxkDYEklxULza-IHcb-WC72z2O5lpRspnCwMRDlMxw69Cfdwce0" />
                     </div>
                  </div>
                </div>
              </div>
              <p className="text-[10px] text-on-surface-variant/50 mt-8 italic uppercase tracking-widest text-center">
                *Imagens ilustrativas. Os resultados dependem da resposta orgânica de cada paciente.
              </p>
            </div>
          </section>
        )}

        {/* FAQ Section */}
        {current.faqs && current.faqs.length > 0 && (
          <section className="py-24 bg-surface-container-low px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-headline text-3xl text-center text-on-surface mb-16">Dúvidas Frequentes</h2>
              <div className="space-y-4">
                {current.faqs.map((faq, index) => (
                  <div 
                    key={index}
                    className="bg-surface p-8 border-l border-transparent hover:border-primary cursor-pointer transition-all group shadow-sm"
                    onClick={() => toggleFaq(index)}
                  >
                    <div className="flex justify-between items-center">
                      <h4 className="font-headline text-lg text-on-surface">{faq.q}</h4>
                      <ChevronDown className={`text-primary transition-transform duration-500 ${openFaq === index ? 'rotate-180' : ''}`} />
                    </div>
                    {openFaq === index && (
                      <div className="mt-6 text-on-surface-variant font-light leading-relaxed">
                        {faq.a}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Contact/CTA Section */}
        <section className="py-24 px-6 bg-surface">
          <div className="max-w-7xl mx-auto bg-surface-container shadow-2xl rounded-sm overflow-hidden flex flex-col lg:flex-row">
            <div className="lg:w-1/2 p-12 lg:p-20 space-y-8 flex flex-col justify-center">
              <span className="font-label uppercase tracking-widest text-primary text-xs">Atendimento Personalizado</span>
              <h2 className="font-headline text-4xl gold-gradient-text uppercase leading-tight">Agende sua Avaliação para {current.title}</h2>
              <p className="text-on-surface-variant text-lg font-light leading-relaxed">
                Cada procedimento começa com um plano individualizado na Esthetic Care. Nossa equipe técnica entrará em contato para alinhar os próximos passos.
              </p>
              <div className="space-y-4 pt-4 border-t border-primary/10">
                <div className="flex items-center gap-4">
                  <Phone size={18} className="text-primary/60" />
                  <span className="text-sm font-light">+55 (31) 9983-8157</span>
                </div>
                <div className="flex items-center gap-4">
                  <Mail size={18} className="text-primary/60" />
                  <span className="text-sm font-light">contato@estheticcare.com.br</span>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2 p-12 lg:p-20 bg-surface-container-high/30">
              <form 
                className="space-y-8" 
                onSubmit={(e) => { 
                  e.preventDefault(); 
                  const name = (document.getElementById('name') as HTMLInputElement).value;
                  window.open("https://api.whatsapp.com/send/?phone=5531995740440&text=" + encodeURIComponent(`Olá, sou ${name}. Gostaria de agendar uma avaliação para ${current.title}.`), "_blank"); 
                }}
              >
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-primary font-bold" htmlFor="name">Seu Nome</label>
                  <input className="w-full bg-transparent border-b border-primary/20 py-3 focus:border-primary focus:outline-none transition-colors" id="name" type="text" required />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-primary font-bold" htmlFor="phone">WhatsApp</label>
                  <input className="w-full bg-transparent border-b border-primary/20 py-3 focus:border-primary focus:outline-none transition-colors" id="phone" type="tel" required />
                </div>
                <button type="submit" className="gold-shimmer-btn text-on-primary w-full py-5 font-bold uppercase tracking-widest text-xs transition-all">
                  Solicitar Agendamento
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-surface-container-lowest border-t border-outline-variant/15 py-16 px-6">
        <div className="max-w-7xl mx-auto text-center space-y-4">
           <span className="font-brand text-2xl tracking-tight text-primary font-bold">ESTHETIC CARE</span>
           <p className="font-body text-[10px] tracking-widest text-neutral-500 uppercase">© 2026 Esthetic Care | Dr. Jorge Menezes CRM/MG 19854</p>
        </div>
      </footer>
    </div>
  );
}

