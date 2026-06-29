import { useEffect } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import SEO from '../components/SEO';
import { 
  ArrowLeft,
  Award,
  ChevronDown
} from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import biografiaText from '../../conteudos/biografia.txt?raw';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default function Biografia() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const renderParagraphs = () => {
    const paragraphs = biografiaText.trim().split('\n\n').filter(p => p.trim());
    
    return paragraphs.map((p, idx) => {
      const parts = p.split(/(<destaque>.*?<\/destaque>)/g);
      
      return (
        <p key={idx}>
          {parts.map((part, i) => {
            if (part.startsWith('<destaque>') && part.endsWith('</destaque>')) {
              const innerText = part.substring(10, part.length - 11);
              return <strong key={i} className="text-primary font-medium">{innerText}</strong>;
            }
            return <span key={i}>{part}</span>;
          })}
        </p>
      );
    });
  };

  return (
    <div className="bg-surface text-on-surface font-body selection:bg-primary selection:text-on-primary min-h-screen pb-20">
      <SEO 
        title="Biografia - Dr. Jorge Menezes | Cirurgia Plástica"
        description="Conheça a trajetória profissional e acadêmica do Dr. Jorge Menezes, cirurgião plástico membro titular da Sociedade Brasileira de Cirurgia Plástica (SBCP)."
        schema={{
          "@context": "https://schema.org",
          "@type": "Physician",
          "name": "Dr. Jorge Menezes",
          "url": "https://www.estheticcare.com.br/biografia",
          "jobTitle": "Cirurgião Plástico",
          "memberOf": [
            {
              "@type": "MedicalOrganization",
              "name": "SBCP - Sociedade Brasileira de Cirurgia Plástica"
            }
          ]
        }}
      />
      <Header />
      {/* Back Button */}
      <div className="fixed top-24 left-0 z-50 p-6 md:p-8">
        <Link 
          to="/"
          className="group flex items-center gap-2 text-primary hover:text-primary-container transition-colors duration-300"
        >
          <ArrowLeft size={24} strokeWidth={1.5} />
          <span className="font-sans text-xs font-bold uppercase tracking-[0.2em] leading-none">Voltar</span>
        </Link>
      </div>

      {/* Hero Section */}
      <header className="relative pt-32 pb-20 px-6 min-h-[70vh] flex items-center justify-center overflow-hidden bg-[#0a0a0a]">
        {/* Glow Effects */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-[#0a0a0a]/0 to-transparent pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-full bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-primary/5 via-[#0a0a0a]/0 to-transparent pointer-events-none"></div>

        <div className="max-w-6xl mx-auto w-full flex flex-col md:flex-row items-center gap-12 lg:gap-24 relative z-10 mt-10">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-64 h-64 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px] relative flex-shrink-0"
          >
            <div className="absolute inset-0 border border-primary/40 -rotate-6 transition-transform duration-500"></div>
            <div className="absolute inset-0 border border-primary/20 rotate-3 transition-transform duration-500"></div>
            <img 
              src="/IMAGENS/Jorge.png" 
              alt="Dr. Jorge Menezes" 
              className="w-full h-full object-cover shadow-2xl relative z-10"
            />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center md:text-left"
          >
            <span className="font-label uppercase tracking-[0.4em] text-primary text-xs mb-4 block">Sobre o Especialista</span>
            <h1 className="font-headline text-5xl md:text-6xl lg:text-7xl text-[#f5f5f5] mb-2 leading-tight">Dr. Jorge <span className="italic text-primary">Menezes</span></h1>
            <p className="font-label uppercase tracking-widest text-[11px] md:text-xs text-[#a0a0a0] mb-6">Cirurgião Plástico <span className="text-primary/50 mx-2">|</span> CRM/MG 19854 <span className="text-primary/50 mx-2">|</span> RQE 6085</p>
            
            <p className="text-[#a0a0a0] font-light text-base md:text-lg max-w-xl leading-relaxed mb-8">
              Especialista em procedimentos estéticos e cirúrgicos, faciais e de contorno corporal. Uma carreira construída com base no rigor científico, na busca incansável pela perfeição e no profundo respeito à individualidade de cada paciente.
            </p>

            <a 
              href="https://api.whatsapp.com/send/?phone=5531995740440&text=Olá, gostaria de agendar uma consulta com o Dr. Jorge Menezes."
              target="_blank"
              rel="noopener noreferrer"
              className="gold-shimmer-btn text-on-primary px-8 py-4 font-label uppercase tracking-widest font-bold inline-block text-[11px] md:text-xs"
            >
              Agendar Avaliação
            </a>
          </motion.div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce opacity-40">
          <ChevronDown className="text-primary w-6 h-6" />
        </div>
      </header>

      {/* Trajetória / História */}
      <section className="py-24 bg-surface-container-lowest px-6 relative">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="font-label uppercase tracking-[0.3em] text-primary text-xs mb-3 block">Trajetória Profissional</span>
            <h2 className="font-headline text-3xl md:text-5xl text-on-surface">Minha História</h2>
            <div className="w-16 h-px bg-primary mx-auto opacity-30 mt-6"></div>
          </div>

          <div className="space-y-8 text-on-surface-variant font-light text-base md:text-lg leading-relaxed text-justify">
            {renderParagraphs()}
          </div>
        </div>
      </section>

      {/* Filosofia */}
      <section className="py-24 bg-surface px-6 relative overflow-hidden">
        {/* Subtle background element */}
        <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none overflow-hidden select-none opacity-[0.02]">
          <img src="/logo.svg" alt="Logomarca da Esthetic Care - Cirurgia Plástica" className="w-[120vw] max-w-[1000px] h-auto object-contain" />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <Award className="w-12 h-12 text-primary mx-auto mb-8 opacity-60" />
          <h2 className="font-headline text-3xl md:text-5xl text-on-surface mb-8">Nossa Filosofia</h2>
          <p className="text-on-surface-variant text-lg md:text-xl font-light leading-relaxed italic mb-10">
            "A cirurgia plástica não se trata apenas de transformar a aparência, mas de restaurar a autoestima e a confiança. Cada detalhe é pensado para proporcionar um resultado que respeite as proporções e a essência de cada indivíduo, aliando técnica cirúrgica refinada a uma visão estética apurada."
          </p>
          <span className="font-label uppercase tracking-widest text-primary text-xs font-bold">— Dr. Jorge Menezes</span>
        </div>
      </section>
    </div>
  );
}
