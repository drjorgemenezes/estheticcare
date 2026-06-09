/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowRight, 
  ArrowLeft,
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
import { BeforeAfterSlider } from './components/BeforeAfterSlider';
import Header from './components/Header';
import homePosBariatricaText from '../conteudos/home-pos-bariatrica.txt?raw';

const parsePosBariatrica = (text: string) => {
  const data: Record<string, string> = {};
  text.split('\n').forEach(line => {
    const splitIndex = line.indexOf(':');
    if (splitIndex > -1) {
      const key = line.slice(0, splitIndex).trim();
      const value = line.slice(splitIndex + 1).trim();
      data[key] = value;
    }
  });
  return data;
};
const homePosBariatricaData = parsePosBariatrica(homePosBariatricaText);

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const IMAGES = {
  hero: "/IMAGENS/2.webp",
  drJorge: "/IMAGENS/Jorge.png",
  contact: "https://lh3.googleusercontent.com/aida-public/AB6AXuAt_dkj-uhMl9UayZwtTM9I-PpplnVBfYQ6spu4EWSBPeoL6IGaXAh7Z8J05nYrz0BdkboFE-yhmOyLDElbM348XhSAHQ4-eyEzZkWTrr2TpR4UUcfEQ0AABJu7BQngBoqmzZ9tTe-mRwHuhaDYLdbIPjzOdpoZue1L4bGzq_XyBP5QDucW6-NpYwIfGnQZNgoxDmqGLemRGAE26XnaPI56-90juUsh2BVTaRCKl4tYYYqfWBsxDasMYAugXXvFaVtiz1UltymeExk"
};

type ProcedureCategory = 'FACE' | 'CORPO' | 'MAMAS';

const PROCEDIMENTOS = [
  { title: 'Rinoplastia', desc: 'Harmonia facial através do equilíbrio e da naturalidade.', category: 'FACE' as ProcedureCategory, img: '/rinoplastia.png' },
  { title: 'Otoplastia', desc: 'Correção das orelhas em abano, valorizando sua autoestima.', category: 'FACE' as ProcedureCategory, img: '/otoplastia.png' },
  { title: 'Blefaroplastia', desc: 'Rejuvenescimento do olhar com naturalidade e leveza.', category: 'FACE' as ProcedureCategory, img: '/blefaroplastia.png' },
  { title: 'Mentoplastia', desc: 'Remodelação do queixo para um perfil facial mais equilibrado.', category: 'FACE' as ProcedureCategory, img: '/mentoplastia.png' },
  { title: 'Lifting Facial', desc: 'Rejuvenescimento facial avançado, suavizando rugas e flacidez profundas.', category: 'FACE' as ProcedureCategory, img: '/lifting facial.png' },
  { title: 'Abdominoplastia', desc: 'Cirurgia que remove excesso de pele e gordura abdominal, indicada após gravidez ou perda de peso.', category: 'CORPO' as ProcedureCategory, img: '/ABDOMINOPLASTIA.png' },
  { title: 'Lipoaspiração', desc: 'Cirurgia que remove gordura localizada e remodela o corpo, melhorando o contorno corporal.', category: 'CORPO' as ProcedureCategory, img: '/LIPOASPIRACAO.png' },
  { title: 'Dorsoplastia', desc: 'Remoção de dobras de pele e flacidez na região das costas.', category: 'CORPO' as ProcedureCategory, img: '/dorsoplastia.png' },
  { title: 'Braquioplastia', desc: 'Cirurgia para tratar a flacidez e o excesso de pele nos braços.', category: 'CORPO' as ProcedureCategory, img: '/braquioplastia.png' },
  { title: 'Dermolipectomia Crural', desc: 'Remoção do excesso de pele e gordura da parte interna das coxas.', category: 'CORPO' as ProcedureCategory, img: '/dermolipectomia crural.png' },
  { title: 'Mamoplastia', desc: 'Cirurgia que aumenta, reduz ou eleva as mamas, corrigindo assimetrias e restaurando harmonia.', category: 'MAMAS' as ProcedureCategory, img: '/MAMOPLASTIA.png' },
  { title: 'Ginecomastia', desc: 'Correção do aumento das mamas em homens, restaurando o contorno torácico.', category: 'MAMAS' as ProcedureCategory, img: '/ginecomastia.png' },
];

const PORTFOLIO_CASES = [
  { id: 1, before: "/Comparativo/1 - antes.jpeg", after: "/Comparativo/1 - depois.jpeg" },
  { id: 2, before: "/Comparativo/2 - antes.jpeg", after: "/Comparativo/2 - depois.jpeg" },
  { id: 3, before: "/Comparativo/3 - antes.jpeg", after: "/Comparativo/3 - depois.jpeg" },
  { id: 4, before: "/Comparativo/4 - antes.jpeg", after: "/Comparativo/4 - depois.jpeg" },
  { id: 5, before: "/Comparativo/5 - antes.jpeg", after: "/Comparativo/5 - depois.jpeg" },
  { id: 6, before: "/Comparativo/6 - antes.jpeg", after: "/Comparativo/6 - depois.jpeg" },
];

const HERO_SLIDES = [
  {
    id: 'home',
    image: IMAGES.hero,
    featuredImage: undefined,
    subtitle: 'EXCELÊNCIA QUE REALÇA',
    titleMain: 'Cirurgia Plástica',
    titleItalic: '& Cosmiatria',
    description: 'CENTRO AVANÇADO DE ESTÉTICA FACIAL E CORPORAL.',
    buttons: (
      <>
        <a 
          href="https://api.whatsapp.com/send/?phone=5531995740440&text&type=phone_number&app_absent=0"
          target="_blank"
          rel="noopener noreferrer"
          className="gold-shimmer-btn text-on-primary px-12 py-4 font-label uppercase tracking-widest text-[11px] font-bold w-full sm:w-auto text-center"
        >
          Agendar Consulta
        </a>
        <a 
          href="#equipe"
          className="border border-primary/40 text-primary px-12 py-4 font-label uppercase tracking-widest text-[11px] font-bold hover:bg-primary/5 hover:border-primary/80 transition-all duration-300 w-full sm:w-auto text-center"
        >
          Conheça Nossa Clínica
        </a>
      </>
    )
  },

  {
    id: 'drjorge',
    image: IMAGES.hero,
    featuredImage: IMAGES.drJorge,
    subtitle: 'ATENDIMENTOS',
    titleMain: 'Dr. Jorge Menezes',
    titleItalic: 'Cirurgião Plástico',
    description: (
      <div className="flex flex-col gap-3 items-center md:items-start text-[10px] md:text-xs">
        <div className="flex items-center gap-2">
          <MapPin size={16} className="text-primary flex-shrink-0" />
          <span>Rua Dos Aimores, 2480 - Lourdes, Belo Horizonte - MG</span>
        </div>
        <div className="flex items-center gap-2">
          <Clock size={16} className="text-primary flex-shrink-0" />
          <span>Segunda à Sexta: 09:00 - 18:00</span>
        </div>
      </div>
    ),
    buttons: (
      <Link 
        to="/biografia"
        className="gold-shimmer-btn text-on-primary px-12 py-4 font-label uppercase tracking-widest text-[11px] font-bold w-full sm:w-auto text-center"
      >
        Conheça a Trajetória
      </Link>
    )
  }
];

const ProcedureCarousel = ({ category, title }: { category: ProcedureCategory, title: string }) => {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollCarousel = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = window.innerWidth > 768 ? 392 : window.innerWidth * 0.85 + 24;
      carouselRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const filtered = PROCEDIMENTOS.filter(p => p.category === category);

  return (
    <div className="mb-24 last:mb-0 w-full">
      <div className="max-w-[1920px] mx-auto px-6 mb-8 text-left md:text-center">
        <h3 className="font-headline text-3xl md:text-4xl text-primary border-b border-primary/20 pb-4 inline-block">
          {title}
        </h3>
      </div>
      
      {/* Carousel Wrapper */}
      <div className="relative group max-w-[1920px] mx-auto px-0 md:px-6">
        {/* Navigation Arrows */}
        <button 
          onClick={() => scrollCarousel('left')}
          className="absolute left-2 md:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#0a0a0a]/80 backdrop-blur-sm border border-primary/50 shadow-[0_0_20px_rgba(0,0,0,0.8)] flex items-center justify-center text-primary hover:bg-primary hover:text-on-primary transition-all opacity-0 group-hover:opacity-90 hover:opacity-100 hover:scale-105 hidden md:flex"
        >
          <ArrowLeft size={24} />
        </button>
        <button 
          onClick={() => scrollCarousel('right')}
          className="absolute right-2 md:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#0a0a0a]/80 backdrop-blur-sm border border-primary/50 shadow-[0_0_20px_rgba(0,0,0,0.8)] flex items-center justify-center text-primary hover:bg-primary hover:text-on-primary transition-all opacity-0 group-hover:opacity-90 hover:opacity-100 hover:scale-105 hidden md:flex"
        >
          <ArrowRight size={24} />
        </button>

        {/* Carousel Container */}
        <div 
          ref={carouselRef}
          className={cn(
            "flex overflow-x-auto snap-x snap-mandatory gap-6 md:gap-8 pb-8 pt-4 px-6 md:px-4 [&::-webkit-scrollbar]:hidden",
            filtered.length <= 3 ? "md:justify-center" : ""
          )}
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {filtered.map((service, idx) => (
            <Link 
              key={service.title}
              to={`/procedimento/${service.title.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, "-")}`}
              className="flex-none w-[85vw] sm:w-[320px] md:w-[360px] h-[480px] md:h-[500px] snap-center block relative rounded-2xl overflow-hidden group cursor-pointer border border-white/5"
            >
              {/* Background Image */}
              <img 
                src={service.img} 
                alt={service.title} 
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" 
              />
              
              {/* Dark Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/70 to-transparent opacity-100"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/40 via-transparent to-transparent opacity-60"></div>
              
              {/* Content */}
              <div className="absolute inset-0 p-8 md:p-10 flex flex-col">
                {/* Top Number */}
                <div className="mb-auto">
                  <span className="font-label text-primary text-xs tracking-[0.2em] block">{String(idx + 1).padStart(2, '0')}</span>
                  <div className="w-8 h-[1px] bg-primary mt-3 opacity-50"></div>
                </div>
                
                {/* Bottom Info */}
                <div className="mt-auto">
                  <h3 className="font-headline text-3xl md:text-4xl text-[#f5f5f5] mb-4 tracking-tight">{service.title}</h3>
                  <p className="text-[#a0a0a0] font-light text-sm leading-relaxed mb-8 max-w-[90%]">
                    {service.desc}
                  </p>
                  
                  {/* Arrow button */}
                  <div className="w-10 h-10 rounded-full border border-primary/40 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary group-hover:border-primary transition-all duration-300">
                    <ArrowRight size={16} />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activePortfolioIndex, setActivePortfolioIndex] = useState(0);
  const [currentHeroSlide, setCurrentHeroSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHeroSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextHeroSlide = () => setCurrentHeroSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  const prevHeroSlide = () => setCurrentHeroSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);

  return (
    <div className="bg-surface text-on-surface font-body selection:bg-primary selection:text-on-primary min-h-screen">
      <Header />

      {/* Hero Section */}
      <header className="relative h-screen w-full flex items-center justify-center overflow-hidden group">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentHeroSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 z-0"
          >
            {HERO_SLIDES[currentHeroSlide].image && (
              <img 
                className="w-full h-full object-cover opacity-40 scale-105" 
                src={HERO_SLIDES[currentHeroSlide].image}
                alt={HERO_SLIDES[currentHeroSlide].titleMain}
                referrerPolicy="no-referrer"
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-b from-surface via-transparent to-surface"></div>
          </motion.div>
        </AnimatePresence>

        <div className="absolute left-4 z-20 hidden md:block opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button 
            onClick={prevHeroSlide}
            className="w-14 h-14 rounded-full bg-[#0a0a0a]/80 backdrop-blur-sm border border-primary/50 shadow-[0_0_20px_rgba(0,0,0,0.8)] flex items-center justify-center text-primary hover:bg-primary hover:text-on-primary transition-all hover:scale-105"
          >
            <ChevronLeft size={32} />
          </button>
        </div>

        <div className="absolute right-4 z-20 hidden md:block opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button 
            onClick={nextHeroSlide}
            className="w-14 h-14 rounded-full bg-[#0a0a0a]/80 backdrop-blur-sm border border-primary/50 shadow-[0_0_20px_rgba(0,0,0,0.8)] flex items-center justify-center text-primary hover:bg-primary hover:text-on-primary transition-all hover:scale-105"
          >
            <ChevronRight size={32} />
          </button>
        </div>
        
        <div className={cn(
          "relative z-10 px-6 mt-16 md:mt-24 pb-20 w-full transition-all duration-500",
          HERO_SLIDES[currentHeroSlide].featuredImage ? "max-w-6xl text-left" : "max-w-5xl text-center"
        )}>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentHeroSlide}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              {HERO_SLIDES[currentHeroSlide].featuredImage ? (
                <div className="flex flex-col md:flex-row items-center justify-between gap-10 lg:gap-16 w-full">
                  {/* Coluna de Texto */}
                  <div className="flex flex-col items-center md:items-start text-center md:text-left flex-1 max-w-xl order-2 md:order-1">
                    <div className="mb-4">
                      <span className="font-label text-[10px] md:text-xs uppercase tracking-[0.5em] md:tracking-[0.8em] text-on-surface-variant font-medium">
                        {HERO_SLIDES[currentHeroSlide].subtitle}
                      </span>
                    </div>
                    
                    <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl tracking-tight leading-tight flex flex-col items-center md:items-start gap-1 mb-6">
                      <span className="text-on-surface font-normal">{HERO_SLIDES[currentHeroSlide].titleMain}</span>
                      {HERO_SLIDES[currentHeroSlide].titleItalic && (
                        <span className="italic font-normal gold-gradient-text">{HERO_SLIDES[currentHeroSlide].titleItalic}</span>
                      )}
                    </h1>

                    <div className="w-2/3 md:w-1/2 h-[1px] bg-gradient-to-r from-transparent via-primary/60 to-transparent md:from-primary/60 md:to-transparent mb-8" />
                    
                    <div className="font-label text-xs md:text-[13px] uppercase tracking-[0.15em] text-on-surface-variant font-medium mb-10">
                      {HERO_SLIDES[currentHeroSlide].description}
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-4 w-full justify-center md:justify-start items-center">
                      {HERO_SLIDES[currentHeroSlide].buttons}
                    </div>
                  </div>

                  {/* Coluna da Imagem com Moldura Premium */}
                  <div className="w-52 h-64 sm:w-60 sm:h-76 md:w-[320px] md:h-[420px] relative flex-shrink-0 mt-6 md:mt-0 select-none order-1 md:order-2">
                    {/* Elementos decorativos da moldura */}
                    <div className="absolute inset-0 border border-primary/40 -rotate-3 rounded-lg transition-transform duration-500"></div>
                    <div className="absolute inset-0 border border-primary/20 rotate-3 rounded-lg transition-transform duration-500"></div>
                    
                    {/* Imagem emoldurada */}
                    <img 
                      src={HERO_SLIDES[currentHeroSlide].featuredImage} 
                      alt={HERO_SLIDES[currentHeroSlide].titleMain} 
                      className="w-full h-full object-cover object-top shadow-2xl rounded-lg relative z-10 border border-primary/10"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
              ) : (
                /* Layout padrão para os demais slides */
                <>
                  <div className="mb-6 flex justify-center">
                    <span className="font-label text-[10px] md:text-xs uppercase tracking-[0.5em] md:tracking-[0.8em] text-on-surface-variant font-medium">
                      {HERO_SLIDES[currentHeroSlide].subtitle}
                    </span>
                  </div>
                  
                  <h1 className="font-headline text-5xl md:text-[5.5rem] tracking-tight leading-tight flex flex-col items-center gap-1 mb-8">
                    <span className="text-on-surface font-normal">{HERO_SLIDES[currentHeroSlide].titleMain}</span>
                    {HERO_SLIDES[currentHeroSlide].titleItalic && (
                      <span className="italic font-normal gold-gradient-text">{HERO_SLIDES[currentHeroSlide].titleItalic}</span>
                    )}
                  </h1>

                  <div className="w-3/4 max-w-lg h-[1px] bg-gradient-to-r from-transparent via-primary/60 to-transparent mx-auto mb-8" />
                  
                  <div className="font-label text-xs md:text-[13px] uppercase tracking-[0.2em] md:tracking-[0.3em] text-on-surface-variant font-medium mb-16 max-w-2xl mx-auto">
                    {HERO_SLIDES[currentHeroSlide].description}
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                    {HERO_SLIDES[currentHeroSlide].buttons}
                  </div>
                </>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
          {HERO_SLIDES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentHeroSlide(idx)}
              className={cn(
                "w-2 h-2 rounded-full transition-all duration-300",
                currentHeroSlide === idx ? "bg-primary scale-125" : "bg-primary/30 hover:bg-primary/60"
              )}
            />
          ))}
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
                  <span className="font-label text-primary/60 text-[10px] tracking-widest block mb-8">{doc.crm}</span>
                  <Link 
                    to="/biografia" 
                    className="gold-shimmer-btn text-on-primary px-8 py-3 font-label uppercase tracking-widest font-bold text-[10px] inline-block"
                  >
                    Conheça a Trajetória
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* Services */}
      <section className="py-32 bg-[#0a0a0a] relative overflow-hidden" id="procedimentos">
        {/* Subtle golden waves background at the bottom */}
        <div className="absolute bottom-0 left-0 w-full h-64 opacity-20 pointer-events-none" style={{ background: 'radial-gradient(ellipse at bottom, rgba(201, 168, 76, 0.4) 0%, transparent 70%)' }}></div>
        
        {/* Logo Watermark Background */}
        <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none overflow-hidden select-none">
          <img 
            src="/logo.svg" 
            alt="Esthetic Care Watermark" 
            className="w-[85vw] max-w-[800px] h-auto opacity-[0.025] object-contain select-none pointer-events-none filter brightness-105 contrast-95"
          />
        </div>
        
        <div className="max-w-[1920px] mx-auto px-6 mb-16 text-center relative z-10">
          <span className="font-label uppercase tracking-[0.4em] md:tracking-[0.6em] text-primary text-[10px] md:text-xs mb-6 block font-medium">Excelência em cada detalhe</span>
          <h2 className="font-headline text-4xl md:text-6xl text-[#f5f5f5] mb-6">Procedimentos</h2>
          <p className="text-[#a0a0a0] font-light max-w-2xl mx-auto text-sm md:text-base">
            Tecnologia avançada, técnicas exclusivas e um olhar artístico para realçar o que você tem de melhor.
          </p>
        </div>
        
        <div className="w-full relative z-10 flex flex-col">
          <ProcedureCarousel category="FACE" title="Cirurgias de Face" />
          <ProcedureCarousel category="CORPO" title="Cirurgias de Corpo" />
          <ProcedureCarousel category="MAMAS" title="Cirurgias de Mamas" />
        </div>
      </section>

      {/* Programa Pós-Bariátrica Highlight Section */}
      <section className="py-32 bg-[#090909] relative overflow-hidden border-t border-primary/10">
        {/* Glow Effects */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute right-0 bottom-0 w-80 h-80 bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
            
            {/* Coluna de Texto */}
            <div className="lg:col-span-6 space-y-8 text-left">
              <div className="space-y-4">
                <span className="font-label uppercase tracking-[0.4em] text-primary text-xs block font-bold">
                  {homePosBariatricaData['LABEL'] || 'Programa Especializado'}
                </span>
                <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl text-[#f5f5f5] leading-tight">
                  {homePosBariatricaData['TITULO_1'] || 'A Escultura do Seu'} <br />
                  <span className="italic text-primary gold-gradient-text font-normal">{homePosBariatricaData['TITULO_2'] || 'Novo Contorno'}</span>
                </h2>
                <div className="w-16 h-[1px] bg-primary/50 my-6"></div>
              </div>
              
              <p className="text-[#a0a0a0] text-base md:text-lg font-light leading-relaxed">
                {homePosBariatricaData['DESCRICAO'] || 'A perda massiva de peso é um marco histórico na sua saúde. Para consolidar essa vitória, o programa de cirurgias reconstrutoras pós-bariátrica foca no tratamento do excesso de pele e flacidez muscular, restaurando a firmeza e redesenhando a silhueta natural do corpo.'}
              </p>
              
              <div className="pt-6">
                <Link 
                  to="/pos-perda-ponderal" 
                  className="gold-shimmer-btn text-on-primary px-10 py-5 font-label uppercase tracking-widest font-bold text-xs inline-block hover:scale-[1.02] transition-transform duration-300"
                >
                  {homePosBariatricaData['BOTAO'] || 'Conhecer Programa Pós-Bariátrica'}
                </Link>
              </div>
            </div>

            {/* Coluna da Imagem */}
            <div className="lg:col-span-6 relative flex justify-center items-center h-full select-none mt-10 lg:mt-0">
              {/* Imagem Principal */}
              <div className="relative w-full max-w-[460px] aspect-[4/5] z-20 shadow-2xl rounded-2xl overflow-hidden border border-white/5 hover:shadow-[0_0_40px_rgba(201,168,76,0.1)] transition-all duration-700 bg-surface group">
                <img 
                  src="/cirurgiacorretiva.png" 
                  alt="Cirurgia Plástica Corretiva Pós-Perda Ponderal" 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#090909] via-transparent to-transparent opacity-90 pointer-events-none"></div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Pre-op Orientations */}
      <section className="py-32 bg-surface-container-low px-6 relative overflow-hidden" id="orientacoes">
        {/* Golden Waves Background */}
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden select-none opacity-35">
          {/* Radial glow for depth */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-72 bg-[radial-gradient(ellipse_at_bottom,rgba(230,195,100,0.15)_0%,transparent_70%)] pointer-events-none"></div>
          
          <svg 
            className="absolute bottom-0 left-0 w-full h-80" 
            viewBox="0 0 1440 288" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg" 
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="gold-wave-grad-1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#e6c364" stopOpacity="0"/>
                <stop offset="25%" stopColor="#e6c364" stopOpacity="0.35"/>
                <stop offset="50%" stopColor="#f3d484" stopOpacity="0.5"/>
                <stop offset="75%" stopColor="#c9a84c" stopOpacity="0.35"/>
                <stop offset="100%" stopColor="#c9a84c" stopOpacity="0"/>
              </linearGradient>
              <linearGradient id="gold-wave-grad-2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#c9a84c" stopOpacity="0"/>
                <stop offset="35%" stopColor="#e6c364" stopOpacity="0.25"/>
                <stop offset="65%" stopColor="#c9a84c" stopOpacity="0.25"/>
                <stop offset="100%" stopColor="#e6c364" stopOpacity="0"/>
              </linearGradient>
            </defs>
            {/* Wave 1 */}
            <path 
              d="M0,180 C240,240 480,120 720,180 C960,240 1200,120 1440,180" 
              stroke="url(#gold-wave-grad-1)" 
              strokeWidth="1.5" 
              fill="none" 
            />
            {/* Wave 2 */}
            <path 
              d="M0,130 C200,80 500,220 800,150 C1100,80 1300,180 1440,130" 
              stroke="url(#gold-wave-grad-2)" 
              strokeWidth="1" 
              fill="none" 
            />
            {/* Wave 3 */}
            <path 
              d="M0,210 C300,160 600,260 900,180 C1200,100 1350,230 1440,210" 
              stroke="url(#gold-wave-grad-1)" 
              strokeWidth="0.5" 
              fill="none" 
            />
          </svg>
        </div>

        <div className="max-w-4xl mx-auto text-center space-y-10 relative z-10">
          <div className="space-y-6">
            <span className="font-label uppercase tracking-[0.3em] text-primary text-sm block">Irá realizar algum procedimento?</span>
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

          <div className="flex flex-wrap justify-center gap-6">
            {[
              { name: "Toxina Botulínica (Botox®)", id: "botox" },
              { name: "Preenchimento", id: "preenchimento" },
              { name: "Peeling químico", id: "peeling-quimico" },
              { name: "Laser de CO² fracionado", id: "laser-de-co2-fracionado" },
              { name: "Ellansé® (Bioestimulador)", id: "ellanse" },
              { name: "V10 (flacidez e gordura localizada)", id: "v10" },
              { name: "Fios de sustentação", id: "fios-de-sustentacao" },
              { name: "Fios subcutâneos de PDO", id: "fios-de-pdo" },
              { name: "Drenagem linfática", id: "drenagem-linfatica" },
              { name: "Enzima subcutânea", id: "enzima-subcutanea" },
              { name: "Lipo enzimática de papada", id: "lipo-enzimatica" },
              { name: "PRP (Plasma)", id: "prp" },
              { name: "Microagulhamento", id: "microagulhamento" },
              { name: "Skinbooster (hidratante subcutâneo)", id: "skinbooster" }
            ].map((item, idx) => (
              <Link
                key={item.id}
                to={`/procedimento/${item.id}`}
                className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] block"
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

      {/* Portfólio de Resultados */}
      <section className="py-32 bg-[#0a0a0a] relative overflow-hidden" id="experiencia">
        {/* Glow Effects */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-[#0a0a0a]/0 to-transparent pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-full bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-primary/5 via-[#0a0a0a]/0 to-transparent pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
            
            {/* Slider Column */}
            <div className="lg:col-span-7">
              <BeforeAfterSlider 
                beforeImage={PORTFOLIO_CASES[activePortfolioIndex].before} 
                afterImage={PORTFOLIO_CASES[activePortfolioIndex].after} 
              />
            </div>
            
            {/* Text & Controls Column */}
            <div className="lg:col-span-5 space-y-8">
              <span className="font-label uppercase tracking-[0.3em] text-primary text-sm block">Transformações Reais</span>
              <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl text-[#f5f5f5] leading-tight">Resultados que <br/><span className="text-primary italic">Inspiram</span></h2>
              <p className="text-[#a0a0a0] text-lg font-light leading-relaxed">
                Explore nossa galeria de resultados. Cada transformação é fruto de um planejamento minucioso e respeito à anatomia individual de cada paciente. Deslize para ver o antes e depois.
              </p>
              
              {/* Thumbnails / Case Selector */}
              <div className="pt-8 border-t border-primary/20">
                <span className="font-label uppercase tracking-widest text-xs text-primary/80 block mb-6">Navegue pelos casos</span>
                <div className="grid grid-cols-3 gap-4 sm:flex sm:flex-wrap">
                  {PORTFOLIO_CASES.map((caso, index) => (
                    <button
                      key={caso.id}
                      onClick={() => setActivePortfolioIndex(index)}
                      className={`relative w-16 h-16 rounded-lg overflow-hidden transition-all duration-300 ${
                        activePortfolioIndex === index 
                          ? 'border-2 border-primary scale-110 shadow-[0_0_15px_rgba(189,147,84,0.3)]' 
                          : 'border border-primary/20 opacity-60 hover:opacity-100 hover:border-primary/50 grayscale'
                      }`}
                    >
                      <img src={caso.after} alt={`Caso ${caso.id}`} className="w-full h-full object-cover" />
                      {activePortfolioIndex === index && (
                        <div className="absolute inset-0 bg-primary/20"></div>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-8 space-y-4">
                <p className="font-label italic text-primary/60 text-xs tracking-wide">* Resultados individuais podem variar. Consulte o médico especialista.</p>
                <a 
                  href="https://api.whatsapp.com/send/?phone=5531995740440&text=Olá, me inspirei nos resultados e gostaria de agendar uma avaliação."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gold-shimmer-btn text-on-primary px-8 py-4 font-label uppercase tracking-widest font-bold inline-block text-xs"
                >
                  Agendar Minha Avaliação
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>


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
              <div className="flex flex-wrap gap-6">
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
                <a 
                  className="text-on-surface-variant hover:text-primary transition-colors text-sm" 
                  href="https://web.facebook.com/estheticcare"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Facebook
                </a>
                <a 
                  className="text-on-surface-variant hover:text-primary transition-colors text-sm" 
                  href="https://www.doctoralia.com.br/jorge-antonio-de-menezes/cirurgiao-plastico/belo-horizonte"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Doctoralia
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
          <p className="font-body text-[10px] tracking-widest text-neutral-600 mt-6">
            Desenvolvido e Gerenciado por <a href="https://instagram.com/jvmarquest" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">@jvmarquest</a>
          </p>
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
