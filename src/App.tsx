/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowRight, 
  ChevronDown, 
  ChevronLeft,
  ChevronRight,
  MapPin, 
  Phone, 
  Clock, 
  Share2, 
  Menu,
  X,
  Heart
} from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const IMAGES = {
  hero: "/IMAGENS/2.webp",
  drJorge: "/IMAGENS/Jorge.png",
  contact: "https://lh3.googleusercontent.com/aida-public/AB6AXuAt_dkj-uhMl9UayZwtTM9I-PpplnVBfYQ6spu4EWSBPeoL6IGaXAh7Z8J05nYrz0BdkboFE-yhmOyLDElbM348XhSAHQ4-eyEzZkWTrr2TpR4UUcfEQ0AABJu7BQngBoqmzZ9tTe-mRwHuhaDYLdbIPjzOdpoZue1L4bGzq_XyBP5QDucW6-NpYwIfGnQZNgoxDmqGLemRGAE26XnaPI56-90juUsh2BVTaRCKl4tYYYqfWBsxDasMYAugXXvFaVtiz1UltymeExk"
};

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-surface text-on-surface font-body selection:bg-primary selection:text-on-primary min-h-screen">
      {/* Navigation */}
      <nav className={cn(
        "fixed top-0 w-full z-[100] transition-all duration-500",
        isScrolled ? "bg-surface/80 glass-nav py-4 shadow-2xl" : "bg-transparent py-6"
      )}>
        <div className="flex justify-between items-center px-6 md:px-12 max-w-[1920px] mx-auto">
          <span className="font-brand text-2xl tracking-tight text-primary font-bold">ESTHETIC CARE</span>
          
          <div className="hidden md:flex gap-10">
            {['Equipe', 'Procedimentos', 'Cosmiatria', 'Orientações', 'Contato'].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`}
                className="font-label uppercase tracking-[0.15em] text-[10px] font-medium text-white/80 hover:text-primary transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <a 
              href="https://api.whatsapp.com/send/?phone=5531995740440&text&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="gold-shimmer-btn text-on-primary px-6 py-2.5 rounded-none font-label text-[10px] uppercase tracking-widest font-bold hover:scale-105 transition-transform duration-300 hidden sm:block text-center"
            >
              Agendar Consulta
            </a>
            <button 
              className="md:hidden text-primary"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-[90] bg-surface pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col gap-8 text-center">
              {['Equipe', 'Procedimentos', 'Cosmiatria', 'Orientações', 'Contato'].map((item) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-headline text-3xl text-on-surface hover:text-primary transition-colors"
                >
                  {item}
                </a>
              ))}
              <a 
                href="https://api.whatsapp.com/send/?phone=5531995740440&text&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="gold-shimmer-btn text-on-primary py-4 font-label uppercase tracking-widest font-bold text-center"
              >
                Agendar Consulta
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <header className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            className="w-full h-full object-cover opacity-40 scale-105" 
            src={IMAGES.hero}
            alt="Luxurious clinic interior"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-surface via-transparent to-surface"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-5xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8 flex justify-center"
          >
            <img src="/logo.svg" alt="Esthetic Care Logo" className="w-24 h-24 object-contain" />
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-headline text-5xl md:text-8xl mb-6 tracking-tight gold-gradient-text leading-tight"
          >
            Cirurgia Plástica <br />& Cosmiatria
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-body text-xl md:text-2xl text-on-surface-variant font-light tracking-wide mb-12 max-w-2xl mx-auto"
          >
            Centro Avançado de Estética Facial e Corporal.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col md:flex-row gap-6 justify-center"
          >
            <a 
              href="https://api.whatsapp.com/send/?phone=5531995740440&text&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="gold-shimmer-btn text-on-primary px-10 py-5 font-label uppercase tracking-widest font-bold text-center"
            >
              Agendar Consulta
            </a>
            <a 
              href="#equipe"
              className="border border-outline-variant/30 text-primary px-10 py-5 font-label uppercase tracking-widest font-bold hover:bg-primary/5 transition-colors text-center"
            >
              Conheça Nossa Clínica
            </a>
          </motion.div>
        </div>
        
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce opacity-40">
          <ChevronDown className="text-primary w-8 h-8" />
        </div>
      </header>

      {/* Doctors */}
      <section className="py-32 bg-surface-container-lowest overflow-hidden" id="equipe">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start mb-20 gap-8">
             <div className="max-w-2xl">
               <span className="font-label uppercase tracking-[0.3em] text-primary text-sm mb-4 block">Especialista</span>
               <h2 className="font-headline text-4xl md:text-6xl text-on-surface">Excelência que Inspira Confiança</h2>
             </div>
            <ul className="text-on-surface-variant font-light max-w-xl space-y-1.5">
              {[
                "Membro titular da Sociedade Brasileira de Cirurgia Plástica",
                "Cirurgião plástico certificado pelo Conselho Federal de Medicina",
                "39 anos de experiência em cirurgia plástica",
                "Mestre em Cirurgia Plástica pela Universidade Federal de São Paulo – Escola Paulista de Medicina (UNIFESP/EPM)"
              ].map((item, i) => (
                <li key={i} className="text-sm md:text-base leading-relaxed">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="flex justify-center">
            {[
              { name: 'Dr. Jorge Menezes', role: 'Cirurgião Plástico', desc: 'Especialista em procedimentos estéticos e cirúrgicos, faciais e de contorno corporal.', img: IMAGES.drJorge, crm: 'CRM/MG 19854 | RQE 6085' }
            ].map((doc) => (
              <motion.div 
                key={doc.name}
                whileHover={{ y: -10 }}
                className="group relative flex flex-col md:flex-row items-center gap-12 p-8 bg-surface-container-low hover:bg-surface-container-high transition-colors"
              >
                <div className="relative w-64 h-64 flex-shrink-0">
                  <div className="absolute inset-0 border-2 border-primary rotate-3 group-hover:rotate-0 transition-transform duration-500"></div>
                  <img 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" 
                    src={doc.img}
                    alt={doc.name}
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="text-center md:text-left">
                  <h4 className="font-headline text-3xl text-primary mb-2">{doc.name}</h4>
                  <p className="font-label uppercase tracking-widest text-[10px] text-on-surface-variant mb-4">{doc.role}</p>
                  <p className="text-on-surface-variant text-sm font-light mb-6">{doc.desc}</p>
                  <span className="font-label text-primary/60 text-[10px] tracking-widest">{doc.crm}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* Services */}
      <section className="py-32 bg-surface" id="procedimentos">
        <div className="max-w-7xl mx-auto px-6 mb-20 text-center">
          <span className="font-label uppercase tracking-[0.3em] text-primary text-sm mb-4 block">Especialidades</span>
          <h2 className="font-headline text-4xl md:text-6xl text-on-surface">Procedimentos de Elite</h2>
        </div>
        
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Abdominoplastia', desc: 'Cirurgia que remove excesso de pele e gordura abdominal, indicada após gravidez ou perda de peso.', icon: "/SVG/Abdominoplastia.svg" },
              { title: 'Mamoplastia', desc: 'Cirurgia que aumenta, reduz ou eleva as mamas, corrigindo assimetrias e restaurando harmonia.', icon: "/SVG/Mamoplastia.svg" },
              { title: 'Lipoaspiração', desc: 'Cirurgia que remove gordura localizada e remodela o corpo, melhorando o contorno corporal.', icon: "/SVG/Lipoaspiracao.svg" },
              { title: 'Rinoplastia', desc: 'Aperfeiçoamento estético e funcional do nariz, promovendo harmonia facial.', icon: "/SVG/Rinoplastia.svg" },
              { title: 'Ginecomastia', desc: 'Correção do aumento das mamas em homens, restaurando o contorno torácico.', icon: "/SVG/Ginecomastia.svg" },
              { title: 'Otoplastia', desc: 'Cirurgia para correção das orelhas em abano, melhorando a proporção facial.', icon: "/SVG/Otoplastia.svg" },
              { title: 'Mentoplastia', desc: 'Remodelação do queixo para um perfil facial mais equilibrado.', icon: "/SVG/Mentoplastia.svg" },
              { title: 'Lifting Facial', desc: 'Rejuvenescimento facial avançado, suavizando rugas e flacidez profundas.', icon: "/SVG/Lifting facial.svg" },
              { title: 'Blefaroplastia', desc: 'Remoção do excesso de pele das pálpebras, rejuvenescendo o olhar.', icon: "/SVG/Blefaroplastia.svg" },
              { title: 'Dorsoplastia', desc: 'Remoção de dobras de pele e flacidez na região das costas.', icon: "/SVG/Dorsoplastia.svg" },
              { title: 'Braquioplastia', desc: 'Cirurgia para tratar a flacidez e o excesso de pele nos braços.', icon: "/SVG/Braquioplastia.svg" },
              { title: 'Dermolipectomia Crural', desc: 'Remoção do excesso de pele e gordura da parte interna das coxas.', icon: "/SVG/Dermolipectomia crural.svg" },
            ].map((service, idx) => (
              <Link 
                key={service.title}
                to={`/procedimento/${service.title.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, "-")}`}
                className="block h-full"
              >
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="h-full group bg-surface-container-low p-10 hover:bg-surface-container-high transition-all duration-500 relative border-l border-primary/10 hover:border-primary cursor-pointer flex flex-col"
                >
                  {service.icon ? (
                    <img src={service.icon} alt={service.title} className="w-12 h-12 mb-6" />
                  ) : (
                    <div className="w-12 h-12 mb-6 flex items-center justify-center text-primary/60 border border-primary/20 rounded-sm">
                      <Heart size={20} />
                    </div>
                  )}
                  <h3 className="font-headline text-2xl text-on-surface mb-4">{service.title}</h3>
                  <p className="text-on-surface-variant font-light mb-8 flex-grow">{service.desc}</p>
                  <div className="font-label uppercase text-[10px] tracking-widest text-primary flex items-center gap-2 group-hover:gap-4 transition-all mt-auto">
                    Ver detalhes <ArrowRight size={14} />
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Pre-op Orientations */}
      <section className="py-32 bg-surface-container-low px-6" id="orientacoes">
        <div className="max-w-4xl mx-auto text-center space-y-10">
          <div className="space-y-6">
            <span className="font-label uppercase tracking-[0.3em] text-primary text-sm block">Preparação e Segurança</span>
            <h2 className="font-headline text-4xl md:text-5xl text-on-surface leading-tight uppercase">Principais Orientações Pré-Operatória</h2>
          </div>
          
          <div className="space-y-6 max-w-3xl mx-auto">
            <p className="text-on-surface-variant text-lg md:text-xl font-light leading-relaxed">
              É fundamental compreender como o organismo se prepara para a intervenção cirúrgica, seja ela mamoplastia, abdominoplastia, lipoaspiração, entre outras. Ao se informar previamente, você se sentirá mais seguro(a) e confiante, além de entender a importância de seguir corretamente todas as orientações fornecidas pelo médico e sua equipe.
            </p>
            <p className="text-on-surface-variant text-lg md:text-xl font-light leading-relaxed">
              Pensando nisso, reunimos neste material as principais orientações para o pré-operatório, com o objetivo de proporcionar um preparo tranquilo, seguro e adequado para o seu procedimento.
            </p>
          </div>

          <div className="pt-6 space-y-4">
            <p className="text-primary/80 font-label text-xs uppercase tracking-widest animate-pulse">
              Clique no botão abaixo
            </p>
            <Link 
              to="/orientacoes" 
              className="gold-shimmer-btn text-on-primary px-12 py-6 font-label uppercase tracking-widest font-bold inline-block"
            >
              Ver Orientações Completas
            </Link>
          </div>
        </div>
      </section>

      {/* Cosmiatria Section */}
      <section className="py-32 bg-surface px-6 overflow-hidden" id="cosmiatria">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 space-y-4">
            <span className="font-label uppercase tracking-[0.3em] text-primary text-sm block">Rejuvenescimento e Estética</span>
            <h2 className="font-headline text-4xl md:text-6xl text-on-surface uppercase">Cosmiatria</h2>
            <div className="w-24 h-px bg-primary mx-auto opacity-30 my-8"></div>
            
            <div className="max-w-3xl mx-auto space-y-6">
              <h3 className="font-headline text-2xl md:text-3xl text-primary uppercase tracking-wide">O que é?</h3>
              <p className="text-on-surface-variant text-lg md:text-xl font-light leading-relaxed">
                É a especialidade médica voltada à saúde e ao rejuvenescimento da pele — e é justamente o "médica" que faz toda a diferença. Diferente de procedimentos estéticos realizados por profissionais não médicos, a cosmiatria une formação clínica aprofundada, domínio da anatomia e capacidade diagnóstica para oferecer tratamentos verdadeiramente personalizados, seguros e baseados em evidências.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Botox® (Toxina Botulínica)", id: "botox" },
              { name: "Preenchimento", id: "preenchimento" },
              { name: "Ellansé® (Bioestimulador)", id: "ellanse" },
              { name: "Peeling químico", id: "peeling-quimico" },
              { name: "Enzima subcutânea", id: "enzima-subcutanea" },
              { name: "Lipo enzimática de papada", id: "lipo-enzimatica" },
              { name: "Laser de CO² fracionado", id: "laser-de-co2-fracionado" },
              { name: "PRP (Plasma)", id: "prp" },
              { name: "V10", id: "v10" },
              { name: "Microagulhamento", id: "microagulhamento" },
              { name: "Skinbooster", id: "skinbooster" },
              { name: "Drenagem linfática", id: "drenagem-linfatica" },
              { name: "Fios de sustentação", id: "fios-de-sustentacao" },
              { name: "Fios subcutâneos de PDO", id: "fios-de-pdo" }
            ].map((item, idx) => (
              <Link
                key={item.id}
                to={`/procedimento/${item.id}`}
                className="block"
              >
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="group flex items-center gap-4 p-6 bg-surface-container-low hover:bg-surface-container-high border-l border-transparent hover:border-primary/40 transition-all duration-300 h-full"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-primary/40 group-hover:bg-primary transition-colors"></div>
                  <span className="font-label uppercase tracking-widest text-[11px] text-on-surface-variant group-hover:text-primary transition-colors">
                    {item.name}
                  </span>
                </motion.div>
              </Link>
            ))}
          </div>

          <div className="mt-20 text-center">
            <p className="text-on-surface-variant font-light italic text-sm mb-8 max-w-2xl mx-auto">
              Cada procedimento é planejado para realçar sua beleza natural com máxima segurança e resultados refinados.
            </p>
            <a 
              href="https://api.whatsapp.com/send/?phone=5531995740440&text=Olá, gostaria de saber mais sobre os procedimentos de cosmiatria."
              target="_blank"
              rel="noopener noreferrer"
              className="border border-primary/20 text-primary px-10 py-5 font-label uppercase tracking-widest text-[10px] font-bold hover:bg-primary hover:text-on-primary transition-all"
            >
              Agendar Avaliação
            </a>
          </div>
        </div>
      </section>

      {/* 
      {/* Transformações (Temporariamente Oculto) */}
      {/* <section className="py-32 bg-surface-container-lowest" id="experiência">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="relative group cursor-pointer overflow-hidden">
              <div className="flex">
                <div className="w-1/2 overflow-hidden border-r-2 border-primary/50 relative">
                  <span className="absolute top-4 left-4 bg-black/60 px-4 py-1 text-[10px] uppercase tracking-widest font-bold z-10">Antes</span>
                  <img 
                    className="h-[600px] w-full object-cover" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuB6f0lLU1-o4F4uL2vCWQJMCR_JmMfF15MUfReZZpDAEKegWsTRkA_iafWe8ziQawFwog4naftEcGXs1Ilqlyj_n_3gu7TbxlIDY4dB6AEncTC76guAPgYI_0CsdkUgm1jaQJbT231F3PshA6h2xT8jwGLw_rpM9yBxGxpsjCMccZdxgTZ1MyvIm2Z6gsIq1JWC-Z0-R2nceD0RYRPdNaKzTXr77R66lAx4yszaGPc9EyRYkxUV3mOr5ECGgXS---2ePLjUSAjwA3E"
                    alt="Before treatment"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="w-1/2 overflow-hidden relative">
                  <span className="absolute top-4 right-4 bg-primary/80 text-on-primary px-4 py-1 text-[10px] uppercase tracking-widest font-bold z-10">Depois</span>
                  <img 
                    className="h-[600px] w-full object-cover scale-105 saturate-110" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAXdkRwaRDTZf8HIuK_BymwL_LiuWWvYgMVKYTfuMNP9ohQXtfjC2sCYPD323tyvssE5Spw2F4C1d7tl-mdselM4WxsQ6ntKE_562D0FdJTMlKDNPLFsT2c7Wtr3ZICefN61_dG9P60Nr_55E1cV5qo0r40P0UoYgSnTvGNoDla1f9278icSbItkvvl-SF7uJCiUu-lTUZpE7fyd38Ya0TP06RRZ6SJbNKC2t4gLPvPGlchRqxXbzjFUutownDaotB0HtQJR6G5b_s"
                    alt="After treatment"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
              <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-10 h-10 bg-primary rounded-full flex items-center justify-center top-1/2 -mt-5 shadow-xl">
                <ArrowRight className="text-on-primary rotate-180" size={16} />
                <ArrowRight className="text-on-primary" size={16} />
              </div>
            </div>
            
            <div className="space-y-8">
              <span className="font-label uppercase tracking-[0.3em] text-primary text-sm block">Transformações</span>
              <h2 className="font-headline text-4xl md:text-6xl text-on-surface">Resultados que Falam por Si</h2>
              <p className="text-on-surface-variant text-lg font-light">Explore nossa galeria de resultados. Cada transformação é fruto de um planejamento minucioso e respeito à anatomia individual de cada paciente.</p>
              <p className="font-label italic text-primary/60 text-sm">* Resultados individuais podem variar. Consulte um especialista para uma avaliação personalizada.</p>
              <button className="border border-primary text-primary px-10 py-5 font-label uppercase tracking-widest font-bold hover:bg-primary hover:text-on-primary transition-all">
                Ver Galeria Completa
              </button>
            </div>
          </div>
        </div>
      </section> */}


      {/* Contact */}
      <section className="py-32 bg-surface-container-lowest" id="contato">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-24 items-start">
          <div className="lg:col-span-5">
            <span className="font-label uppercase tracking-[0.3em] text-primary text-sm mb-4 block">Fale Conosco</span>
            <h2 className="font-headline text-4xl md:text-6xl text-on-surface mb-8 leading-tight">Canais de Atendimento</h2>
            <p className="text-on-surface-variant font-light text-lg max-w-md">Estamos prontos para atender você. Escolha o canal de sua preferência para tirar dúvidas ou agendar uma consulta.</p>
          </div>
          
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-16">
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-primary">
                <MapPin size={18} />
                <span className="font-label uppercase tracking-widest text-[10px]">Endereço</span>
              </div>
              <p className="text-on-surface-variant font-light text-sm">Rua Dos Aimores, 2480 <br />Lourdes, Belo Horizonte - MG</p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-primary">
                <Phone size={18} />
                <span className="font-label uppercase tracking-widest text-[10px]">Contato</span>
              </div>
              <p className="text-on-surface-variant font-light text-sm text-[16px]">+55 (31) 9983-8157 <br />contato@estheticcare.com.br</p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-primary">
                <Clock size={18} />
                <span className="font-label uppercase tracking-widest text-[10px]">Horários</span>
              </div>
              <p className="text-on-surface-variant font-light text-sm">Segunda à Sexta: 09:00 - 18:00</p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-primary">
                <Share2 size={18} />
                <span className="font-label uppercase tracking-widest text-[10px]">Siga-nos</span>
              </div>
              <div className="flex gap-6">
                <a 
                  className="text-on-surface-variant hover:text-primary transition-colors text-sm" 
                  href="https://www.instagram.com/esthetic.care/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
                <a 
                  className="text-on-surface-variant hover:text-primary transition-colors text-sm" 
                  href="https://www.youtube.com/channel/UCRYoHUjKAWKfFh3aEtjKlyw"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  YouTube
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-surface-container-lowest border-t border-outline-variant/15 pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-24">
          <div className="col-span-1">
            <span className="font-brand text-3xl text-primary mb-8 block">ESTHETIC CARE</span>
            <p className="font-body text-sm tracking-wide text-neutral-400 mb-8 max-w-sm">Elevando os padrões da cirurgia plástica através da arte, tecnologia e humanismo.</p>
          </div>
          
          <div className="space-y-6">
            <h5 className="font-label uppercase tracking-widest text-[10px] text-on-surface">Agendamento</h5>
            <p className="font-body text-sm tracking-wide text-neutral-400">Solicite uma pré-consulta via WhatsApp ou por telefone.</p>
            <a 
              href="https://api.whatsapp.com/send/?phone=5531995740440&text&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-primary/30 text-primary w-full py-4 font-label uppercase text-[10px] tracking-widest font-bold hover:bg-primary/10 transition-colors text-center inline-block"
            >
              Fale Conosco agora
            </a>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-8 mt-24 pt-8 border-t border-outline-variant/5 text-center">
          <p className="font-body text-sm tracking-wide text-neutral-400 mb-4 italic">© 2026 Esthetic Care. Todos os direitos reservados. Responsável Técnico: Dr. Jorge Menezes CRM/MG 19854. RQE 6085.</p>
          <p className="font-body text-[10px] tracking-widest text-neutral-600 uppercase">Imagens meramente ilustrativas | Consulte seu médico</p>
        </div>
      </footer>

      {/* Floating Action Button */}
      <a 
        className="fixed bottom-10 right-10 z-[200] w-16 h-16 bg-primary text-on-primary flex items-center justify-center rounded-full shadow-2xl hover:scale-110 transition-transform group" 
        href="https://api.whatsapp.com/send/?phone=5531995740440&text&type=phone_number&app_absent=0"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="/whatsapp.svg" alt="WhatsApp" className="w-8 h-8 group-hover:rotate-12 transition-transform" />
        <span className="absolute -top-12 right-0 bg-surface-container-high text-primary font-label text-[10px] uppercase tracking-widest px-4 py-2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-primary/20">
          WhatsApp
        </span>
      </a>
    </div>
  );
}
