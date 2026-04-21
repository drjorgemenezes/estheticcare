import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
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

export default function Orientacoes() {
  // Rola a página para o topo ao carregar
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    {
      title: "1. CHECKLIST – O QUE LEVAR PARA O HOSPITAL",
      icon: <ClipboardCheck className="text-primary" size={24} />,
      content: (
        <ul className="list-none space-y-2">
          <li>▪ Guia emitida pelo Dr. Jorge Menezes (para cirurgia particular);</li>
          <li>▪ Guia autorizada + termo de consentimento informado (para cirurgia por convênio);</li>
          <li>▪ Laudo da avaliação pré-anestésica;</li>
          <li>▪ Exames realizados (radiografias, ultrassonografias, tomografias, exames laboratoriais, etc.);</li>
          <li>▪ Malha compressiva (sutiã cirúrgico, cinta, faixas, conforme orientação);</li>
          <li>▪ Medicamentos de uso contínuo;</li>
          <li>▪ Roupas confortáveis, preferencialmente de algodão e com abertura frontal;</li>
          <li>▪ Presença de 1 acompanhante maior de 18 anos;</li>
          <li>▪ (Convênios) Levar o termo de consentimento anexado à guia.</li>
        </ul>
      )
    },
    {
      title: "2. ALIMENTAÇÃO",
      icon: <Clock className="text-primary" size={24} />,
      content: (
        <ul className="list-none space-y-2">
          <li>▪ Realizar jejum absoluto de 8 horas antes da cirurgia (inclusive água);</li>
          <li>▪ Para aliviar a sensação de sede, é permitido fazer bochechos com água, sem engolir;</li>
          <li>▪ Não fumar por pelo menos 30 dias antes da cirurgia;</li>
          <li>▪ Evitar ingestão de bebidas alcoólicas nas 24 horas que antecedem o procedimento.</li>
        </ul>
      )
    },
    {
      title: "3. MEDICAMENTOS",
      icon: <ShieldAlert className="text-primary" size={24} />,
      content: (
        <ul className="list-none space-y-2">
          <li>▪ Informe ao médico todos os medicamentos em uso, especialmente: AAS (ácido acetilsalicílico), aspirina, Anador, Sonrisal, Marevan, vitaminas (como Vitamina E), suplementos (como Ginkgo biloba), anticoagulantes (ex: Clexane), diuréticos, anticoncepcionais e inibidores de apetite;</li>
          <li>▪ Alguns medicamentos poderão ser suspensos antes da cirurgia, conforme orientação médica;</li>
          <li>▪ Não utilize nenhum medicamento sem autorização do seu médico;</li>
          <li>▪ O período menstrual não impede a realização da cirurgia.</li>
        </ul>
      )
    },
    {
      title: "4. ALTERAÇÕES NA SAÚDE",
      icon: <HeartPulse className="text-primary" size={24} />,
      content: (
        <ul className="list-none space-y-2">
          <li>▪ Informe imediatamente à equipe médica caso apresente qualquer alteração antes da cirurgia, como:</li>
          <li className="pl-4">▪ Feridas ou infecções na pele;</li>
          <li className="pl-4">▪ Dor de garganta;</li>
          <li className="pl-4">▪ Gripe ou sintomas respiratórios;</li>
          <li className="pl-4">▪ Febre ou mal-estar geral.</li>
        </ul>
      )
    },
    {
      title: "5. HIGIENE",
      icon: <ClipboardCheck className="text-primary" size={24} />,
      content: (
        <ul className="list-none space-y-2">
          <li>▪ Tomar banho com sabonete Johnson Baby® branco, antes da cirurgia;</li>
          <li>▪ Não depilar com ceras, cremes depilatórios ou lâminas por 07 (sete) dias antes da cirurgia;</li>
          <li>▪ Evitar passar esmalte nas unhas, caso utilize deverá ser claro ou apenas uma base</li>
          <li>▪ Não usar maquiagem, piercings, brincos, colares, anéis, relógios, dentre outros acessórios;</li>
          <li>▪ Não levar objetos de valores pessoais como jóias, relógios, etc. Deixá-los em casa.</li>
          <li>▪ Não retirar prótese dentária. Informar ao anestesista o uso.</li>
          <li>▪ Retirar lentes de contato e cílios postiços.</li>
        </ul>
      )
    },
    {
      title: "6. DESPESAS (CIRURGIA PARTICULAR)",
      icon: <FileText className="text-primary" size={24} />,
      content: (
        <ul className="list-none space-y-2">
          <li>▪ Eventuais alterações no tempo cirúrgico podem gerar custos adicionais relacionados a materiais, anestesia ou uso do centro cirúrgico;</li>
          <li>▪ Caso seja necessária internação além do previsto, poderão haver cobranças extras;</li>
          <li>▪ No momento da alta hospitalar, deverão ser realizados os acertos com a equipe médica e anestesista;</li>
          <li>▪ Caso necessite de recibos, solicitá-los no momento do pagamento.</li>
        </ul>
      )
    }
  ];

  return (
    <div className="bg-surface text-on-surface font-body selection:bg-primary/30 min-h-screen">
      
      {/* Back Button */}
      <div className="fixed top-0 left-0 z-50 p-8">
        <Link 
          to="/" 
          className="group flex items-center gap-2 text-primary hover:text-primary-container transition-colors duration-300"
        >
          <ChevronLeft size={24} strokeWidth={1.5} />
          <span className="font-sans text-xs font-bold uppercase tracking-[0.2em] leading-none">Voltar</span>
        </Link>
      </div>

      <main>
        {/* Section 1: Hero */}
        <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
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
              className="font-headline text-4xl md:text-6xl font-bold tracking-tight gold-gradient-text mb-8 leading-tight uppercase"
            >
              Orientações <br/>Pré-Operatórias
            </motion.h1>
          </div>
        </section>

        {/* Section 2: Intro */}
        <section className="py-24 px-6 bg-surface">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xl text-on-surface-variant leading-relaxed font-light italic">
              "Um preparo adequado é o primeiro passo para o sucesso da sua cirurgia e uma recuperação mais rápida e tranquila."
            </p>
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
      </footer>
    </div>
  );
}
