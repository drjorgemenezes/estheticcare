import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import { 
  ArrowLeft,
  ArrowRight,
  Heart,
  Activity,
  CheckCircle2,
  ChevronDown,
  Phone,
  Mail
} from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface PosBariatricaProcedure {
  title: string;
  slug: string;
  desc: string;
  img: string;
  bullets: string[];
}

const PROCEDIMENTOS_POS_BARIATRIA: PosBariatricaProcedure[] = [
  {
    title: 'Mama Pós-Bariátrica',
    slug: 'mama-pos-bariatrica',
    desc: 'Reposicionamento e restauração do volume das mamas após perda acentuada de tecido.',
    img: '/MAMOPLASTIA.png',
    bullets: ['Mastopexia com ou sem implantes', 'Recuperação do polo superior (colo)', 'Remoção do excesso de flacidez cutânea']
  },
  {
    title: 'Abdômen Pós-Bariátrica',
    slug: 'abdomen-pos-bariatrica',
    desc: 'Correção do "abdômen em avental", diástase e excesso de flacidez de pele.',
    img: '/ABDOMINOPLASTIA.png',
    bullets: ['Dermolipectomia em âncora ou clássica', 'Aproximação dos retos abdominais', 'Lipoaspiração do contorno lateral']
  },
  {
    title: 'Lifting de Braço (Braquioplastia)',
    slug: 'braquioplastia-pos-bariatrica',
    desc: 'Remoção de pele pendular na região do tríceps para resgatar o contorno dos braços.',
    img: '/braquioplastia.png',
    bullets: ['Tratamento do "braço em pêndulo"', 'Incisões discretas na face interna', 'Associação opcional com lipoaspiração']
  },
  {
    title: 'Lifting de Coxas (Cruroplastia)',
    slug: 'cruroplastia-pos-bariatrica',
    desc: 'Tratamento da flacidez na face interna das coxas, eliminando o atrito incômodo ao caminhar.',
    img: '/dermolipectomia crural.png',
    bullets: ['Melhora da mobilidade e conforto', 'Eliminação de assaduras e dermatites', 'Redefinição dos contornos das pernas']
  },
  {
    title: 'Dorsoplastia (Dorso)',
    slug: 'dorsoplastia-pos-bariatrica',
    desc: 'Tratamento de pregas e dobras de pele acumuladas nas regiões torácica e lombar posterior.',
    img: '/dorsoplastia.png',
    bullets: ['Remoção de dobras horizontais nas costas', 'Harmonização com a região dos glúteos', 'Lifting de dorso torácico e lombossacro']
  },
  {
    title: 'Lifting Facial',
    slug: 'lifting-facial-pos-bariatrica',
    desc: 'Recuperação da sustentação e dos volumes do rosto que sofreram esvaziamento acelerado.',
    img: '/lifting facial.png',
    bullets: ['Reposicionamento do SMAS (músculo profundo)', 'Definição da linha da mandíbula', 'Suavização dos sulcos e bochechas caídas']
  },
  {
    title: 'Flacidez de Submento',
    slug: 'flacidez-submento-pos-bariatrica',
    desc: 'Eliminação da pele pendular na papada e reposicionamento dos músculos platismais do pescoço.',
    img: '/lifting facial.png', // Reutilizando a mesma imagem de face de forma coerente
    bullets: ['Tratamento do "pescoço de peru"', 'Plicatura muscular (platismaplastia)', 'Minicicatriz abaixo do queixo']
  }
];

const FAQS_POS_BARIATRIA = [
  {
    q: 'Quando posso realizar a cirurgia plástica após a perda de peso?',
    a: 'O momento ideal é quando o paciente atinge a estabilização do peso corporal por pelo menos 3 a 6 meses. Em pacientes pós-bariátricos, isso costuma acontecer entre 12 e 18 meses após a cirurgia bariátrica. É fundamental contar com o parecer favorável do cirurgião geral/bariátrico e com exames laboratoriais que comprovem a ausência de deficiências nutricionais graves (como anemia ou hipoproteinemia).'
  },
  {
    q: 'É possível realizar mais de uma cirurgia ao mesmo tempo?',
    a: 'Sim, a associação de procedimentos é comum (como braços e mamas, ou abdômen e coxas). Porém, o tempo cirúrgico total não deve ultrapassar limites de segurança (geralmente em torno de 5 a 6 horas) para evitar complicações. A decisão depende do estado de saúde geral do paciente, do nível de anemia e do planejamento do cirurgião plástico.'
  },
  {
    q: 'Essas cirurgias são consideradas puramente estéticas?',
    a: 'Não. Na maioria das vezes, as cirurgias plásticas pós grandes perdas ponderais têm caráter reconstrutivo e funcional. O excesso de pele ("aventais" abdominais, dobras nas coxas e costas) causa dermatites, infecções por fungos secundárias à umidade, dor na coluna e limitação de mobilidade. Portanto, são cirurgias corretivas de reabilitação física e bem-estar geral.'
  },
  {
    q: 'Por que é utilizada a anestesia geral em quase todas as cirurgias corporais?',
    a: 'A anestesia geral é o padrão ouro de segurança. Ela permite o monitoramento e controle total da respiração e dos parâmetros cardíacos do paciente durante procedimentos mais longos e que necessitam de reposicionamento corporal na mesa cirúrgica (como na dorsoplastia, onde o paciente deita de bruços). Além disso, assegura conforto e total ausência de dor.'
  }
];

export default function PosPerdaPonderal() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="bg-surface text-on-surface font-body selection:bg-primary/30 min-h-screen">
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
      <header className="relative pt-32 pb-24 px-6 min-h-[85vh] flex items-center justify-center overflow-hidden bg-[#0a0a0a]">
        {/* Glow Effects */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(ellipse_at_top_right,_rgba(230,195,100,0.12)_0%,transparent_70%)] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-full bg-[radial-gradient(ellipse_at_bottom_left,_rgba(230,195,100,0.06)_0%,transparent_70%)] pointer-events-none"></div>
        
        {/* Watermark logo */}
        <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none overflow-hidden select-none opacity-[0.01]">
          <img src="/logo.svg" alt="" className="w-[100vw] max-w-[900px] h-auto object-contain" />
        </div>

        <div className="max-w-6xl mx-auto w-full text-center relative z-10 space-y-8 mt-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <span className="font-label uppercase tracking-[0.4em] text-primary text-xs block">Programa de Reabilitação Corporal</span>
            <h1 className="font-headline text-5xl md:text-7xl text-[#f5f5f5] leading-tight font-light">
              Pós Grandes <span className="italic font-normal gold-gradient-text">Perdas Ponderais</span>
            </h1>
            <p className="font-headline italic text-lg md:text-2xl text-on-surface-variant max-w-3xl mx-auto leading-relaxed">
              Fechando com chave de ouro o ciclo da sua transformação física e pessoal.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="w-24 h-px bg-gradient-to-r from-transparent via-primary to-transparent mx-auto"
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex flex-wrap justify-center gap-6 pt-4"
          >
            <a 
              href="#procedimentos"
              className="gold-shimmer-btn text-on-primary px-10 py-5 font-label uppercase tracking-widest text-xs font-bold"
            >
              Ver Procedimentos
            </a>
            <a 
              href="https://api.whatsapp.com/send/?phone=5531995740440&text=Olá, gostaria de agendar uma consulta para avaliação pós perda ponderal / bariátrica."
              target="_blank"
              rel="noopener noreferrer"
              className="border border-primary/40 text-primary px-10 py-5 font-label uppercase tracking-widest text-xs font-bold hover:bg-primary/5 transition-all"
            >
              Agendar Avaliação
            </a>
          </motion.div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce opacity-40">
          <ChevronDown className="text-primary w-6 h-6" />
        </div>
      </header>

      {/* Introdução & Conceito */}
      <section className="py-24 bg-surface px-6 relative overflow-hidden">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <span className="font-label uppercase tracking-widest text-primary text-xs">A Última Conquista</span>
            <h2 className="font-headline text-3xl md:text-4xl text-on-surface uppercase leading-tight">O que são as Cirurgias Plásticas Corretivas?</h2>
            <p className="text-on-surface-variant font-light text-lg leading-relaxed">
              A grande perda de peso — seja por cirurgia bariátrica ou por meio de dietas e exercícios físicos intensificados — é uma vitória monumental para a saúde e bem-estar do paciente. No entanto, é muito frequente que a pele e os tecidos conjuntivos percam a elasticidade e não consigam retrair totalmente, resultando em grandes dobras de pele e flacidez muscular generalizada.
            </p>
            <p className="text-on-surface-variant font-light text-lg leading-relaxed">
              As cirurgias plásticas corretivas pós grandes perdas ponderais englobam técnicas específicas para **remover o excesso de pele cutânea, reposicionar os tecidos profundos e refinar as proporções**, redesenhando os contornos naturais que foram obscurecidos pela flacidez extrema.
            </p>
          </div>
          
          <div className="bg-surface-container-low p-10 md:p-12 border border-primary/10 space-y-8 relative">
            <div className="absolute top-0 right-0 w-24 h-24 bg-[radial-gradient(circle_at_top_right,rgba(230,195,100,0.15),transparent)]"></div>
            
            <h3 className="font-headline text-2xl text-primary uppercase tracking-wide">Principais Objetivos</h3>
            <ul className="space-y-6">
              {[
                { title: 'Melhora Funcional', desc: 'Eliminar o atrito constante de dobras de pele que geram desconforto, assaduras crônicas e infecções dermatológicas.' },
                { title: 'Recuperação de Mobilidade', desc: 'Reduzir o peso pendular do abdômen, braços e coxas, promovendo leveza de movimento e conforto nas atividades diárias.' },
                { title: 'Contorno Harmônico', desc: 'Restaurar a firmeza muscular profunda e retirar o excesso de tecido para ajustar o corpo ao novo perfil saudável.' },
                { title: 'Resgate da Autoestima', desc: 'Celebrar a consolidação visual do processo de emagrecimento, permitindo que a pessoa sinta orgulho do seu novo corpo.' }
              ].map((item, i) => (
                <li key={i} className="flex gap-4 items-start">
                  <CheckCircle2 className="text-primary flex-shrink-0 mt-1" size={20} strokeWidth={1.5} />
                  <div>
                    <h4 className="font-headline text-lg text-on-surface">{item.title}</h4>
                    <p className="text-on-surface-variant text-sm font-light leading-relaxed mt-1">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Grid de Procedimentos */}
      <section className="py-24 bg-surface-container-low px-6 relative" id="procedimentos">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 space-y-4">
            <span className="font-label uppercase tracking-widest text-primary text-xs">Opções de Tratamento</span>
            <h2 className="font-headline text-3xl md:text-5xl text-on-surface uppercase">Cirurgias do Programa</h2>
            <div className="w-16 h-px bg-primary mx-auto opacity-30 my-6"></div>
            <p className="text-on-surface-variant font-light text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              Explore os procedimentos específicos planejados para tratar cada área que apresenta flacidez após a perda maciça de peso.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROCEDIMENTOS_POS_BARIATRIA.map((proc) => (
              <div 
                key={proc.slug}
                className="bg-surface hover:bg-surface-container-high transition-all duration-300 border border-primary/10 rounded-sm overflow-hidden flex flex-col group"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img 
                    src={proc.img} 
                    alt={proc.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/90 via-transparent to-transparent"></div>
                  <h3 className="absolute bottom-6 left-6 font-headline text-2xl text-white tracking-tight">{proc.title}</h3>
                </div>
                
                <div className="p-8 flex-grow flex flex-col justify-between space-y-6">
                  <p className="text-on-surface-variant font-light text-sm leading-relaxed">
                    {proc.desc}
                  </p>
                  
                  <ul className="space-y-2 border-t border-primary/10 pt-4 flex-grow">
                    {proc.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex gap-2 items-center text-xs font-light text-on-surface-variant">
                        <span className="w-1 h-1 rounded-full bg-primary flex-shrink-0"></span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-4">
                    <Link 
                      to={`/procedimento/${proc.slug}`}
                      className="group/link inline-flex items-center gap-2 text-primary font-label text-[10px] uppercase tracking-widest font-bold hover:text-primary-container transition-colors"
                    >
                      <span>Detalhes da Cirurgia</span>
                      <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Destaque Cuidados e Segurança */}
      <section className="py-20 bg-surface-container-lowest px-6 border-y border-primary/10">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
            <Activity size={32} strokeWidth={1.5} />
          </div>
          <div className="space-y-3">
            <h3 className="font-headline text-2xl text-on-surface uppercase">A Importância da Anestesia Geral</h3>
            <p className="text-on-surface-variant font-light leading-relaxed">
              Cirurgias corporais estendidas e reconstrutivas — como as cirurgias mamárias, dorsoplastias (costas e tórax lateral/posterior) e braquioplastias — são sempre conduzidas sob **anestesia geral**. Esta é a diretriz mais segura da medicina, permitindo monitorização ventilatória ininterrupta, controle circulatório absoluto e relaxamento muscular ideal. Isso proporciona condições técnicas excelentes para a equipe cirúrgica e bem-estar total para o paciente.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-surface px-6 relative">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-headline text-3xl text-center text-on-surface mb-16 uppercase">Dúvidas Frequentes</h2>
          <div className="space-y-4">
            {FAQS_POS_BARIATRIA.map((faq, index) => (
              <div 
                key={index}
                className="bg-surface-container-low p-8 border-l border-transparent hover:border-primary cursor-pointer transition-all group shadow-sm"
                onClick={() => toggleFaq(index)}
              >
                <div className="flex justify-between items-center">
                  <h4 className="font-headline text-lg text-on-surface">{faq.q}</h4>
                  <ChevronDown className={`text-primary transition-transform duration-500 ${openFaq === index ? 'rotate-180' : ''}`} />
                </div>
                {openFaq === index && (
                  <div className="mt-6 text-on-surface-variant font-light text-base leading-relaxed border-t border-primary/10 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact/CTA Section */}
      <section className="py-24 px-6 bg-surface-container-low">
        <div className="max-w-7xl mx-auto bg-surface-container shadow-2xl rounded-sm overflow-hidden flex flex-col lg:flex-row">
          <div className="lg:w-1/2 p-12 lg:p-20 space-y-8 flex flex-col justify-center">
            <span className="font-label uppercase tracking-widest text-primary text-xs">Agendamento & Avaliação</span>
            <h2 className="font-headline text-4xl gold-gradient-text uppercase leading-tight">Inicie Seu Planejamento</h2>
            <p className="text-on-surface-variant text-lg font-light leading-relaxed">
              O contorno corporal pós-bariátrica requer uma abordagem personalizada e de alta precisão. Agende uma consulta de avaliação para definir as técnicas ideais e criar um plano cirúrgico seguro de acordo com o seu perfil.
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
                window.open("https://api.whatsapp.com/send/?phone=5531995740440&text=" + encodeURIComponent(`Olá, sou ${name}. Gostaria de agendar uma avaliação para o Programa de Cirurgias Pós-Bariátrica.`), "_blank"); 
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

      {/* Footer */}
      <footer className="bg-surface-container-lowest border-t border-outline-variant/15 py-16 px-6">
        <div className="max-w-7xl mx-auto text-center space-y-4">
           <span className="font-brand text-2xl tracking-tight text-primary font-bold">ESTHETIC CARE</span>
           <p className="font-body text-[10px] tracking-widest text-neutral-500 uppercase">© 2026 Esthetic Care | Dr. Jorge Menezes CRM/MG 19854 | RQE 6085</p>
           <p className="font-body text-[10px] tracking-widest text-neutral-600 mt-2">
             Desenvolvido e Gerenciado por <a href="https://instagram.com/jvmarquest" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">@jvmarquest</a>
           </p>
        </div>
      </footer>
    </div>
  );
}
