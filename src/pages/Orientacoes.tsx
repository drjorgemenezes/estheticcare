import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import SEO from '../components/SEO';
import { 
  ChevronLeft, 
  ClipboardCheck, 
  FastForward, 
  ShieldAlert, 
  Clock, 
  FileText,
  HeartPulse
} from 'lucide-react';
import { motion } from 'motion/react';
import orientacoesText from '../../conteudos/orientacoes.txt?raw';

export default function Orientacoes() {
  const navigate = useNavigate();

  // Rola a página para o topo ao carregar
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const parsedSections: { title: string; items: { text: string; isIndented: boolean }[] }[] = [];
  let currentSection: any = null;

  const lines = orientacoesText.split('\n');
  for (const rawLine of lines) {
    const line = rawLine.trim();
    if (!line) continue;

    if (line.startsWith('### ')) {
      if (currentSection) parsedSections.push(currentSection);
      currentSection = { title: line.substring(4), items: [] };
    } else if (line.startsWith('- ')) {
      if (currentSection) {
        const isIndented = rawLine.startsWith('  -');
        currentSection.items.push({ text: line.substring(2), isIndented });
      }
    }
  }
  if (currentSection) parsedSections.push(currentSection);

  const icons = [
    <ClipboardCheck className="text-primary" size={24} />,
    <Clock className="text-primary" size={24} />,
    <ShieldAlert className="text-primary" size={24} />,
    <HeartPulse className="text-primary" size={24} />,
    <ClipboardCheck className="text-primary" size={24} />,
    <FileText className="text-primary" size={24} />
  ];

  const sections = parsedSections.map((sec, idx) => ({
    title: sec.title,
    icon: icons[idx % icons.length],
    content: (
      <ul className="list-none space-y-2">
        {sec.items.map((item, i) => (
          <li key={i} className={item.isIndented ? 'pl-4' : ''}>
            ▪ {item.text}
          </li>
        ))}
      </ul>
    )
  }));

  return (
    <div className="bg-surface text-on-surface font-body selection:bg-primary/30 min-h-screen">
      <SEO 
        title="Orientações e Preparo - Esthetic Care"
        description="Orientações importantes para o seu pré e pós-operatório na Esthetic Care."
      />
      <Header />
      {/* Back Button */}
      <div className="fixed top-24 left-0 z-50 p-8">
        <button 
          onClick={(e) => {
            e.preventDefault();
            if (window.history.length > 2) {
              navigate(-1);
            } else {
              navigate('/');
            }
          }}
          className="group flex items-center gap-2 text-primary hover:text-primary-container transition-colors duration-300"
        >
          <ChevronLeft size={24} strokeWidth={1.5} />
          <span className="font-sans text-xs font-bold uppercase tracking-[0.2em] leading-none">Voltar</span>
        </button>
      </div>

      <main>
        {/* Section 1: Hero */}
        <section className="relative pt-48 pb-16 flex flex-col items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              className="w-full h-full object-cover opacity-30" 
              alt="modern surgical environment" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCkdYaAeV2myOvJF35fwOe3uWxEz57cHeVvmMiup5vnPIWd1Fg8qp_6gStjJEYSZ1ELI-ta9S-ZzxF0jyCTYgtMhjPfk9_2nlDcM_fReXphXPszmraA2H0SCSDcwP8Sc7sOZqumc0TYExTGtF_HxJIj7UQlUKOnFUCorH7q5216I68vZC5w1ZHtnNkQpLoDJzNpoxqMJm9gV2yd7iIATzlslLxc0nGdys7jhjgN0ekMndsUwlcFkae7cIPojurOnYmAzIPOLRu36ZM"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-surface via-transparent to-surface"></div>
          </div>
          <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-label uppercase tracking-[0.3em] text-primary mb-6 block text-sm"
            >
              Segurança do Paciente
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-headline text-3xl md:text-5xl font-bold tracking-tight gold-gradient-text leading-tight uppercase"
            >
              Orientações <br/>Pré-Operatórias
            </motion.h1>
          </div>
        </section>
        {/* Section 3: Detailed Guidelines */}
        <section className="py-24 px-6 bg-surface-container-low">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-16">
              {sections.map((item, idx) => (
                <motion.div 
                  key={item.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex gap-8 group"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-surface shadow-lg flex items-center justify-center border border-primary/20 group-hover:bg-primary/10 transition-colors duration-500">
                    {item.icon}
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-headline text-2xl text-on-surface uppercase tracking-tight">{item.title}</h3>
                    <p className="text-on-surface-variant font-light leading-relaxed text-lg">{item.content}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 4: Final Message */}
        <section className="py-32 px-6 bg-surface text-center">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="bg-surface-container-high/30 p-12 border border-primary/20">
              <p className="text-on-surface text-sm md:text-base font-medium leading-relaxed tracking-wider uppercase">
                CONSULTE ESTE INFORMATIVO SEMPRE QUE NECESSÁRIO DURANTE O PERÍODO PRÉ-OPERATÓRIO. SIGA ATENTAMENTE TODAS AS ORIENTAÇÕES, POIS A SUA COLABORAÇÃO É FUNDAMENTAL PARA GARANTIR A SEGURANÇA E O SUCESSO DO SEU PROCEDIMENTO. EM CASO DE DÚVIDAS, A EQUIPE DA ESTHETIC CARE ESTARÁ À SUA INTEIRA DISPOSIÇÃO PARA ORIENTÁ-LO(A) E OFERECER TODO O SUPORTE NECESSÁRIO.
              </p>
            </div>
            <a 
              href="https://api.whatsapp.com/send/?phone=5531995740440&text=Olá, tenho dúvidas sobre as orientações pré-operatórias."
              target="_blank"
              rel="noopener noreferrer"
              className="gold-shimmer-btn text-on-primary px-10 py-5 font-label uppercase tracking-widest font-bold inline-block"
            >
              Falar com nossa equipe
            </a>
          </div>
        </section>
      </main>

      {/* Footer minimal or reuse? */}
      <footer className="py-12 bg-surface-container-lowest border-t border-outline-variant/10 text-center">
        <p className="font-body text-[10px] tracking-widest text-neutral-600 uppercase">Esthetic Care | Excelência e Segurança em Cirurgia Plástica</p>
        <p className="font-body text-[10px] tracking-widest text-neutral-600 mt-2">
          Desenvolvido e Gerenciado por <a href="https://instagram.com/jvmarquest" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">@jvmarquest</a>
        </p>
      </footer>
    </div>
  );
}
