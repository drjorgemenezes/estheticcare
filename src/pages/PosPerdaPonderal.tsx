import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import { ArrowLeft } from 'lucide-react';
import { CABECALHO, INTRODUCAO, PROCEDIMENTOS } from '../../conteudos/dados-pos-bariatrica';


export default function PosPerdaPonderal() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white font-sans min-h-screen">
      <Header />

      <div className="fixed top-24 left-0 z-50 p-6 md:p-8 hidden md:block">
        <Link 
          to="/"
          className="group flex items-center gap-2 text-primary hover:text-primary-container transition-colors"
        >
          <ArrowLeft size={20} strokeWidth={1.5} />
          <span className="text-xs font-bold uppercase tracking-widest leading-none">Voltar</span>
        </Link>
      </div>

      {/* Hero Section Escura para abrigar o Header transparente e dar Contraste */}
      <header className="bg-surface text-on-surface pt-40 pb-20 px-6 border-b border-outline-variant/20 relative">
        <div className="max-w-4xl mx-auto space-y-8">
          <p className="text-primary uppercase tracking-widest text-sm font-bold mb-4 font-label">{CABECALHO.tag}</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-headline font-bold leading-tight mb-8">
            {CABECALHO.titulo}
          </h1>
          <p className="text-xl md:text-2xl text-on-surface-variant leading-relaxed font-light">
            {CABECALHO.subtitulo}
          </p>
        </div>
      </header>

      <main className="w-full bg-white text-gray-900 font-sans pt-16 pb-24">
        <div className="max-w-6xl mx-auto px-6 flex flex-col lg:flex-row gap-12 items-start">
          
          {/* Sidebar Navigation */}
          <aside className="w-full lg:w-1/4 static lg:sticky lg:top-32 bg-gray-50 p-6 border-l-4 border-gray-400 z-10">
            <h3 className="text-xl font-serif font-bold text-gray-900 mb-4">Índice</h3>
            <nav className="flex flex-col space-y-3 text-gray-700">
              {PROCEDIMENTOS.map((proc) => (
                <a 
                  key={`nav-${proc.id}`} 
                  href={`#${proc.id}`}
                  className="hover:text-primary transition-colors hover:underline text-sm font-medium"
                >
                  {proc.titulo}
                </a>
              ))}
            </nav>
          </aside>

          {/* Main Content Area */}
          <div className="w-full lg:w-3/4">

        {/* Editorial Introduction */}
        <section className="mb-16">
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6 border-b border-gray-200 pb-3">
            {INTRODUCAO.titulo}
          </h2>
          <div className="text-lg text-gray-800 leading-relaxed space-y-6 font-serif">
            {INTRODUCAO.paragrafos.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>

          <div className="mt-8 bg-gray-50 p-8 border-l-4 border-gray-400">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Requisitos Clínicos</h3>
            <ul className="list-disc pl-5 space-y-3 text-lg text-gray-800">
              <li>
                <strong>Atenção ao Momento Certo:</strong> A indicação cirúrgica só é autorizada para pacientes que estejam com peso estabilizado (platô de peso) há pelo menos 3 a 6 meses. O emagrecimento ativo precisa ter sido interrompido.
              </li>
              <li>
                <strong>Critérios de Nutrição:</strong> É mandatório realizar uma triagem laboratorial que comprove níveis seguros de proteínas, ferro e vitaminas, evitando complicações na cicatrização e no risco anestésico.
              </li>
            </ul>
          </div>
        </section>

        {/* Procedures - Editorial Layout */}
        <section>
          {PROCEDIMENTOS.map((proc, idx) => (
            <article 
              key={proc.id} 
              id={proc.id} 
              className={`scroll-mt-32 ${idx !== 0 ? "mt-16 pt-16 border-t border-gray-200" : ""}`}
            >
              
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6">
                {proc.titulo}
              </h2>
              
              <p className="text-xl text-gray-800 leading-relaxed font-serif mb-8">
                {proc.descricao}
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Técnicas Envolvidas</h3>
              <ul className="list-disc pl-6 space-y-4 text-lg text-gray-800 mb-8">
                {proc.tecnicas.map((tec, i) => (
                  <li key={i}>
                    <strong className="text-gray-900">{tec.nome}:</strong> {tec.definicao}
                  </li>
                ))}
              </ul>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Informações Práticas</h3>
              <div className="text-lg text-gray-800 space-y-3 bg-gray-50 p-6">
                <p>
                  <strong className="text-gray-900">Tipo de Anestesia:</strong> {proc.infos.anestesia}
                </p>
                <p>
                  <strong className="text-gray-900">Evolução do Resultado:</strong> {proc.infos.recuperacao}
                </p>
                <p>
                  <strong className="text-gray-900">Padrão de Cicatrizes:</strong> {proc.infos.cicatrizes}
                </p>
                <p>
                  <strong className="text-gray-900">Retorno à Rotina:</strong> {proc.infos.retorno}
                </p>
              </div>

            </article>
          ))}
        </section>

          </div>
        </div>
      </main>

      {/* Footer (Idêntico ao da Tela Inicial) */}
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

    </div>
  );
}
