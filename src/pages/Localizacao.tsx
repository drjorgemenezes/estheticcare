import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, MapPin } from 'lucide-react';
import Header from '../components/Header';
import SEO from '../components/SEO';

export default function Localizacao() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-surface selection:bg-primary/30 text-on-surface flex flex-col font-body">
      <SEO 
        title="Nossa Localização | Esthetic Care" 
        description="Veja como chegar na Esthetic Care. Rua dos Aimorés, 2480 - Conj. 201/205, Lourdes, Belo Horizonte - MG."
      />
      <Header />
      
      <main className="flex-1 pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-12 font-label uppercase tracking-widest text-[10px] font-bold"
          >
            <ArrowLeft size={16} />
            Voltar para o Início
          </Link>

          <div className="space-y-6 mb-12">
            <h1 className="font-headline text-4xl md:text-5xl text-on-surface">Localização</h1>
            <div className="flex items-start gap-3">
              <MapPin className="text-primary mt-1" size={24} />
              <div>
                <h3 className="font-brand text-lg text-on-surface font-bold">Esthetic Care - Dr. Jorge Menezes</h3>
                <p className="text-on-surface-variant text-lg">Rua dos Aimorés, 2480 - Conj. 201/205</p>
                <p className="text-on-surface-variant text-lg">Lourdes, Belo Horizonte - MG, 30140-072, Brasil</p>
              </div>
            </div>
          </div>

          <div className="w-full h-[60vh] min-h-[400px] rounded-2xl overflow-hidden shadow-2xl border border-outline-variant/10">
            <iframe 
              src="https://maps.google.com/maps?q=Rua%20dos%20Aimor%C3%A9s,%202480%20-%20Lourdes,%20Belo%20Horizonte%20-%20MG&t=&z=17&ie=UTF8&iwloc=&output=embed" 
              width="100%" 
              height="100%" 
              frameBorder="0" 
              style={{ border: 0 }} 
              allowFullScreen 
              aria-hidden="false" 
              tabIndex={0}
              title="Mapa de localização da Esthetic Care"
            ></iframe>
          </div>
        </div>
      </main>

      <footer className="bg-surface-container-lowest border-t border-outline-variant/15 py-16 px-6 mt-auto">
        <div className="max-w-7xl mx-auto text-center space-y-4">
           <span className="font-brand text-2xl tracking-tight text-primary font-bold">ESTHETIC CARE</span>
           <p className="font-body text-[10px] tracking-widest text-neutral-500 uppercase">© 2026 Esthetic Care | Dr. Jorge Menezes CRM/MG 19854</p>
        </div>
      </footer>
    </div>
  );
}
