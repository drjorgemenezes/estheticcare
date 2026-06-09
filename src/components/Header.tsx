import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronRight, Menu, X } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { motion, AnimatePresence } from 'motion/react';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default function Header() {
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
    <>
      <nav className={cn(
        "fixed top-0 left-0 w-full z-[100] transition-all duration-500",
        isScrolled ? "bg-surface/80 glass-nav py-4 shadow-2xl" : "bg-transparent py-6"
      )}>
        <div className={cn(
          "px-6 md:px-12 max-w-[1920px] mx-auto",
          "grid grid-cols-2 md:grid-cols-3 items-center"
        )}>
          <div className="flex justify-start items-center gap-3">
            <Link to="/">
              <img src="/logo.svg" alt="Esthetic Care Logo" className="w-10 h-10 md:w-12 md:h-12 object-contain" />
            </Link>
            <div className="flex flex-col">
              <span className="font-brand text-lg md:text-2xl tracking-widest text-primary font-bold leading-none">ESTHETIC CARE</span>
              <span className="font-label text-[7px] md:text-[9px] uppercase tracking-[0.4em] text-primary/80 mt-1">Cirurgia Plástica</span>
            </div>
          </div>
          
          <div className="hidden md:flex justify-center items-center gap-10">
            <Link to="/" className="font-label uppercase tracking-[0.15em] text-[10px] font-medium text-white/80 hover:text-primary transition-colors">
              Home
            </Link>
            <Link to="/biografia" className="font-label uppercase tracking-[0.15em] text-[10px] font-medium text-white/80 hover:text-primary transition-colors">
              Dr. Jorge Menezes
            </Link>

            <div className="relative group">
              <a href="/#procedimentos" className="flex items-center gap-1 font-label uppercase tracking-[0.15em] text-[10px] font-medium text-white/80 group-hover:text-primary transition-colors py-2">
                Cirurgias Plásticas <ChevronDown size={14} className="transition-transform group-hover:rotate-180" />
              </a>
              <div className="absolute top-full left-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 w-56 z-[120]">
                <div className="absolute -top-4 left-0 w-full h-4"></div>
                <div className="bg-[#0a0a0a]/95 backdrop-blur-md border border-primary/20 text-white/90 flex flex-col text-sm shadow-xl font-body relative rounded-md">
                  
                  <div className="relative group/sub">
                    <div className="px-4 py-3 hover:bg-primary/10 hover:text-primary transition-colors flex items-center justify-between cursor-default">
                      Face <ChevronRight size={14} className="opacity-50 group-hover/sub:opacity-100 transition-opacity" />
                    </div>
                    <div className="absolute top-0 left-full opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-300 w-56">
                      <div className="absolute top-0 -left-4 w-4 h-full"></div>
                      <div className="bg-[#0a0a0a]/95 backdrop-blur-md border border-primary/20 text-white/90 flex flex-col shadow-xl rounded-md overflow-hidden">
                        <Link to="/procedimento/rinoplastia" className="px-4 py-3 hover:bg-primary/10 hover:text-primary transition-colors">Rinoplastia</Link>
                        <Link to="/procedimento/otoplastia" className="px-4 py-3 hover:bg-primary/10 hover:text-primary transition-colors">Otoplastia</Link>
                        <Link to="/procedimento/blefaroplastia" className="px-4 py-3 hover:bg-primary/10 hover:text-primary transition-colors">Blefaroplastia</Link>
                        <Link to="/procedimento/mentoplastia" className="px-4 py-3 hover:bg-primary/10 hover:text-primary transition-colors">Mentoplastia</Link>
                        <Link to="/procedimento/lifting-facial" className="px-4 py-3 hover:bg-primary/10 hover:text-primary transition-colors">Lifting Facial</Link>
                      </div>
                    </div>
                  </div>

                  <div className="relative group/sub">
                    <div className="px-4 py-3 hover:bg-primary/10 hover:text-primary transition-colors flex items-center justify-between cursor-default">
                      Corpo <ChevronRight size={14} className="opacity-50 group-hover/sub:opacity-100 transition-opacity" />
                    </div>
                    <div className="absolute top-0 left-full opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-300 w-56">
                      <div className="absolute top-0 -left-4 w-4 h-full"></div>
                      <div className="bg-[#0a0a0a]/95 backdrop-blur-md border border-primary/20 text-white/90 flex flex-col shadow-xl rounded-md overflow-hidden">
                        <Link to="/procedimento/abdominoplastia" className="px-4 py-3 hover:bg-primary/10 hover:text-primary transition-colors">Abdominoplastia</Link>
                        <Link to="/procedimento/lipoaspiracao" className="px-4 py-3 hover:bg-primary/10 hover:text-primary transition-colors">Lipoaspiração</Link>
                        <Link to="/procedimento/dorsoplastia" className="px-4 py-3 hover:bg-primary/10 hover:text-primary transition-colors">Dorsoplastia</Link>
                        <Link to="/procedimento/braquioplastia" className="px-4 py-3 hover:bg-primary/10 hover:text-primary transition-colors">Braquioplastia</Link>
                        <Link to="/procedimento/dermolipectomia-crural" className="px-4 py-3 hover:bg-primary/10 hover:text-primary transition-colors">Dermolipectomia Crural</Link>
                      </div>
                    </div>
                  </div>

                  <div className="relative group/sub">
                    <div className="px-4 py-3 hover:bg-primary/10 hover:text-primary transition-colors flex items-center justify-between cursor-default">
                      Mamas <ChevronRight size={14} className="opacity-50 group-hover/sub:opacity-100 transition-opacity" />
                    </div>
                    <div className="absolute top-0 left-full opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-300 w-56">
                      <div className="absolute top-0 -left-4 w-4 h-full"></div>
                      <div className="bg-[#0a0a0a]/95 backdrop-blur-md border border-primary/20 text-white/90 flex flex-col shadow-xl rounded-md overflow-hidden">
                        <Link to="/procedimento/mamoplastia" className="px-4 py-3 hover:bg-primary/10 hover:text-primary transition-colors">Mamoplastia</Link>
                        <Link to="/procedimento/ginecomastia" className="px-4 py-3 hover:bg-primary/10 hover:text-primary transition-colors">Ginecomastia</Link>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>

            <div className="relative group">
              <Link to="/pos-perda-ponderal" className="flex items-center gap-1 font-label uppercase tracking-[0.15em] text-[10px] font-medium text-white/80 group-hover:text-primary transition-colors py-2">
                Pós-Bariátrica <ChevronDown size={14} className="transition-transform group-hover:rotate-180" />
              </Link>
              <div className="absolute top-full left-1/2 -translate-x-1/2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 w-72 z-[120]">
                <div className="absolute -top-4 left-0 w-full h-4"></div>
                <div className="bg-[#0a0a0a]/95 backdrop-blur-md border border-primary/20 text-white/90 flex flex-col text-sm shadow-xl font-body relative rounded-md max-h-[60vh] overflow-y-auto custom-scrollbar">
                  <Link to="/pos-perda-ponderal" className="px-4 py-3 hover:bg-primary/10 hover:text-primary transition-colors block border-b border-white/10 font-medium text-primary">
                    Programa Pós-Bariátrica (Geral)
                  </Link>
                  {[
                    { name: "Mama Pós-Bariátrica", id: "mama-pos-bariatrica" },
                    { name: "Abdômen Pós-Bariátrica", id: "abdomen-pos-bariatrica" },
                    { name: "Lifting de Braço (Braquioplastia)", id: "braquioplastia-pos-bariatrica" },
                    { name: "Lifting de Coxas (Cruroplastia)", id: "cruroplastia-pos-bariatrica" },
                    { name: "Dorsoplastia (Dorso)", id: "dorsoplastia-pos-bariatrica" },
                    { name: "Lifting Facial", id: "lifting-facial-pos-bariatrica" },
                    { name: "Flacidez de Submento", id: "flacidez-submento-pos-bariatrica" }
                  ].map((item) => (
                    <Link key={item.id} to={`/procedimento/${item.id}`} className="px-4 py-3 hover:bg-primary/10 hover:text-primary transition-colors block border-b border-white/5 last:border-0">
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative group">
              <a href="/#cosmiatria" className="flex items-center gap-1 font-label uppercase tracking-[0.15em] text-[10px] font-medium text-white/80 group-hover:text-primary transition-colors py-2">
                Cosmiatria <ChevronDown size={14} className="transition-transform group-hover:rotate-180" />
              </a>
              <div className="absolute top-full left-1/2 -translate-x-1/2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 w-72 z-[120]">
                <div className="absolute -top-4 left-0 w-full h-4"></div>
                <div className="bg-[#0a0a0a]/95 backdrop-blur-md border border-primary/20 text-white/90 flex flex-col text-sm shadow-xl font-body relative rounded-md max-h-[60vh] overflow-y-auto custom-scrollbar">
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
                  ].map((item) => (
                    <Link key={item.id} to={`/procedimento/${item.id}`} className="px-4 py-3 hover:bg-primary/10 hover:text-primary transition-colors block border-b border-white/5 last:border-0">
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-end gap-4">
            <Link 
              to="/orientacoes"
              className="border border-primary text-primary px-6 py-2.5 rounded-none font-label text-[10px] uppercase tracking-widest font-bold hover:bg-primary hover:text-on-primary transition-all duration-300 hidden sm:block text-center"
            >
              Orientações
            </Link>
            <a 
              href="https://api.whatsapp.com/send/?phone=5531995740440&text&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="gold-shimmer-btn text-on-primary px-6 py-2.5 rounded-none font-label text-[10px] uppercase tracking-widest font-bold hover:scale-105 transition-transform duration-300 hidden sm:block text-center"
            >
              Agendar Consulta
            </a>
            <button 
              className="md:hidden text-primary ml-auto"
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
              <Link to="/" onClick={() => setMobileMenuOpen(false)} className="font-headline text-3xl text-on-surface hover:text-primary transition-colors">Home</Link>
              <Link to="/biografia" onClick={() => setMobileMenuOpen(false)} className="font-headline text-3xl text-on-surface hover:text-primary transition-colors">Dr. Jorge Menezes</Link>
              <a href="/#procedimentos" onClick={() => setMobileMenuOpen(false)} className="font-headline text-3xl text-on-surface hover:text-primary transition-colors">Cirurgias Plásticas</a>
              <Link to="/pos-perda-ponderal" onClick={() => setMobileMenuOpen(false)} className="font-headline text-3xl text-on-surface hover:text-primary transition-colors">Pós-Bariátrica</Link>
              <a href="/#cosmiatria" onClick={() => setMobileMenuOpen(false)} className="font-headline text-3xl text-on-surface hover:text-primary transition-colors">Cosmiatria</a>
              <Link 
                to="/orientacoes"
                onClick={() => setMobileMenuOpen(false)}
                className="border border-primary text-primary py-4 font-label uppercase tracking-widest font-bold text-center"
              >
                Orientações
              </Link>
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
    </>
  );
}
