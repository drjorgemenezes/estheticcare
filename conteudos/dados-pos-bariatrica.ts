// Arquivo de dados para a página de Pós-Bariátrica
// Você pode editar os textos abaixo. Mantenha as aspas ("") ao redor dos textos.

export const CABECALHO = {
  tag: "Guia Médico Informativo",
  titulo: "Cirurgias Plásticas Corretivas Pós-Grandes Perdas Ponderais",
  subtitulo: "Desenvolvidas para quem venceu a obesidade — seja por cirurgia bariátrica, emagrecedores modernos (canetas) ou acompanhamento nutricional —, nossas cirurgias restauram o contorno corporal e completam a sua transformação."
};

export const INTRODUCAO = {
  titulo: "Definição e Objetivos das Cirurgias Corretivas",
  paragrafos: [
    "As cirurgias bariátricas, assim como as grandes perdas de peso promovidas por medicamentos orais, canetas emagrecedoras ou dietas hipocalóricas, resultam na redução significativa da gordura localizada em diversas regiões do corpo — como braços, pernas, abdômen, costas, região axilar e submento. Todas essas áreas diminuem de volume com o emagrecimento.",
    "No entanto, essa redução ocorre pela absorção e pelo metabolismo da gordura armazenada, utilizada pelo organismo como fonte de energia diante da diminuição da ingesta calórica. O problema é que a pele não acompanha essa retração: diferentemente da gordura, ela não se remodela sozinha. Assim, a pele que antes recobria grandes depósitos de gordura passa a apresentar flacidez acentuada, dobras e irregularidades no contorno corporal.",
    "Daí surge a necessidade de correção cirúrgica dessas deformidades, que se manifestam principalmente nos braços, pernas, abdômen, dorso lombar, dorso torácico e, em alguns casos, também na face — na região perioral, ao redor do nariz e no submento.",
    "A cirurgia tem como objetivo remover o excesso de pele e restaurar o contorno corporal que a paciente tanto deseja. São procedimentos de excelentes resultados, que devolvem a autoestima e o amor-próprio, permitindo que cada paciente use com confiança e liberdade as roupas que sempre sonhou vestir — agora com o corpo que conquistou."
  ]
};

export const PROCEDIMENTOS = [
  {
    id: "mamas",
    titulo: "Cirurgias Corretivas e Estéticas das Mamas",
    descricao: [
      "Com o passar do tempo, as transformações naturais do corpo — como o envelhecimento, as gestações, a amamentação e as grandes perdas de peso decorrentes de cirurgia bariátrica ou dieta hipocalórica — frequentemente promovem alterações na forma e no volume das mamas. Essas deformidades mamárias se enquadram em dois grandes grupos: perda de volume (hipomastia) e queda das mamas (ptose). O planejamento cirúrgico é individualizado e direcionado à correção específica de cada alteração."
    ],
    tecnicas: [
      { nome: "Redução e Elevação das Mamas (Mamoplastia Redutora)", definicao: "Indicada para pacientes com mamas excessivamente volumosas — quadro que se manifesta principalmente na adolescência ou na fase adulto-jovem. O procedimento combina a redução do volume mamário com a elevação e o reposicionamento das mamas. A cicatriz resultante varia conforme a quantidade de pele removida e se localiza ao redor do complexo areolopapilar, estendendo-se verticalmente até o sulco mamário, onde forma uma cicatriz horizontal — configuração conhecida como cicatriz em T invertido." },
      { nome: "Elevação das Mamas (Mastopexia)", definicao: "Indicada quando há ptose mamária sem necessidade de redução de volume. Neste procedimento, apenas o excesso de pele é removido, promovendo o levantamento e a remodelação das mamas. Em alguns casos, por desejo da paciente ou para complementar o resultado estético, pode-se associar a inclusão de prótese de silicone — posicionada abaixo da glândula ou abaixo do músculo peitoral — com o objetivo de aumentar o volume e proporcionar maior projeção do colo, especialmente valorizada no uso de roupas decotadas." },
      { nome: "Aumento das Mamas (Mamoplastia de Aumento)", definicao: "Indicada para pacientes com mamas muito pequenas (hipomastia ou amastia), porém bem posicionadas e sem ptose significativa. O procedimento consiste na inclusão de prótese de silicone bilateral, posicionada abaixo da glândula mamária ou abaixo do músculo peitoral, promovendo aumento de volume com resultado natural e harmonioso." }
    ],
    infos: {
      anestesia: "Geral ou Peridural com sedação (dependendo da extensão e associação cirúrgica).",
      recuperacao: "O inchaço inicial diminui consideravelmente após 3 a 4 semanas. O resultado definitivo, com o amadurecimento das cicatrizes e acomodação dos tecidos, é visível após 6 a 12 meses.",
      cicatrizes: "Geralmente assumem formato em 'T' invertido, 'L' ou ao redor da aréola (periareolar), dependendo da quantidade de pele a ser retirada. Com os cuidados adequados (1 a 2 anos), tendem a clarear e tornar-se finas.",
      retorno: "Atividades leves após 15 dias. Atividades físicas intensas, como corrida ou musculação focada para o peitoral, são liberadas apenas após 60 a 90 dias."
    }
  },
  {
    id: "abdome",
    titulo: "Abdome (Abdominoplastia e Lipoaspiração)",
    descricao: "A cirurgia do contorno abdominal — indicada para casos de excesso de pele ou acúmulo de gordura — é dividida em três modalidades, definidas pelo cirurgião plástico em conjunto com o paciente, após avaliação individualizada.",
    tecnicas: [
      { nome: "Abdominoplastia Clássica (Dermolipectomia Abdominal)", definicao: "Indicada para abdômens com grande acúmulo de gordura e excesso de pele, especialmente quando há formação de dobra sobre a região pubiana. A técnica consiste em uma incisão infraumbilical suprapúbica — discreta o suficiente para ficar dentro do biquíni — que se estende da crista ilíaca ântero-superior esquerda até a crista ilíaca ântero-superior direita, ou seja, de um lado ao outro da pelve, na região dos ossos que se palpam com os dedos nas laterais do baixo ventre." },
      { nome: "Mini-abdominoplastia", definicao: "Indicada quando há acúmulo gorduroso associado a um pequeno excesso de pele abaixo do umbigo. Combina lipoaspiração com ressecção cutânea localizada. Vale destacar que toda cirurgia abdominal inclui, quando necessário, a correção da musculatura abdominal — estrutura que, quando afastada (condição chamada de diástase dos músculos reto-abdominais), projeta o abdômen para frente, causando o abaulamento característico. Ao corrigir a diástase, além de eliminar essa projeção anterior, obtém-se também uma definição mais marcada da cintura." },
      { nome: "Lipoaspiração Convencional", definicao: "Indicada exclusivamente para casos de acúmulo gorduroso sem excesso de pele. O procedimento consiste na remoção da gordura por meio de pequenas incisões de aproximadamente 1 cm, posicionadas estrategicamente em locais discretos e de fácil dissimulação." }
    ],
    infos: {
      anestesia: "Geral ou Peridural com sedação profunda.",
      recuperacao: "O inchaço (edema) inicial é severo e dura cerca de 1 mês, regredindo gradualmente com drenagens linfáticas. O resultado global se estabiliza a partir de 6 a 9 meses.",
      cicatrizes: "Na técnica clássica, a cicatriz localiza-se na região pélvica (podendo ser oculta por roupas íntimas) e ao redor do umbigo. Na técnica em 'âncora' (fleur-de-lis), adiciona-se uma cicatriz vertical no centro da barriga, necessária para adequar grandes sobras laterais.",
      retorno: "Atividades leves (como trabalho de escritório em home office) podem ser retomadas entre 15 e 20 dias; locomoção completamente ereta ocorre por volta de 15 dias. Atividades físicas moderadas a intensas apenas a partir de 60 dias."
    }
  },
  {
    id: "membros",
    titulo: "Braços e Pernas (Braquioplastia e Cruroplastia)",
    descricao: "A flacidez excessiva nos membros não é apenas uma questão de imagem; ela prejudica diretamente o conforto diário, gerando dermatites de atrito nas coxas ao andar e incômodo severo ao levantar os braços ou usar determinadas roupas (efeito pendular, o 'tchauzinho').",
    tecnicas: [
      { nome: "Lifting de Braços (Braquioplastia)", definicao: "Indicada para pessoas que convivem com o excesso de pele flácida na face interna dos braços — região conhecida popularmente como músculo do tchau —, especialmente aquelas que passaram por perda de peso significativa ou cirurgia bariátrica.Neste procedimento, o fuso de pele é removido ao longo da face medial do braço, da axila até próximo ao cotovelo, promovendo o recontorno e o firmamento da região.A cicatriz resultante posiciona- se estrategicamente na face interna, ficando oculta quando os membros estão ao longo do corpo — com o objetivo de proporcionar maior conforto no dia a dia e braços mais definidos, especialmente valorizados no uso de blusas sem manga e roupas de verão." },
      { nome: "Lifting de Pernas (Cruroplastia)", definicao: "Indicada para pessoas que convivem com o atrito entre as coxas, a flacidez e as dobras que comprometem o contorno das pernas — especialmente aquelas que passaram por perda de peso significativa ou cirurgia bariátrica. Neste procedimento, o excesso de pele e gordura da face interna das coxas é removido, recontornando e firmando a região desde a virilha até o joelho. Em alguns casos, pode-se combinar técnicas complementares para otimizar o resultado estético, com o objetivo de proporcionar maior conforto no dia a dia e uma silhueta mais definida, especialmente valorizada no uso de roupas justas e saias." }
    ],
    infos: {
      anestesia: "Geral (frequentemente associada) ou Peridural (apenas para cruroplastia isolada).",
      recuperacao: "O paciente pode usar malhas compressivas por cerca de um mês. Os resultados finais, livres da maior parte do edema, se mostram evidentes entre 6 e 9 meses.",
      cicatrizes: "Para os braços, a cicatriz localiza-se na face interna (medial) desde a axila. Para as pernas, a incisão inicia-se na virilha (raiz da coxa) e estende-se verticalmente pela face interna, de acordo com o grau da flacidez existente.",
      retorno: "Retorno a atividades rotineiras sem esforço excessivo e elevação de peso em 14 a 21 dias. Atividades desportivas ou que envolvam uso de carga pesada sobre os membros operados devem aguardar de 60 a 90 dias."
    }
  },
  {
    id: "dorso",
    titulo: "Dorso (Dorsoplastia)",
    descricao: "A dorsoplastia trata os acúmulos e dobras formados nas regiões posterior e lateral do tronco (costas e linha do sutiã), que marcam bastante sob as roupas e podem incomodar até para apoiar-se em cadeiras.",
    tecnicas: [
      { nome: "Dorsoplastia (Lifting de Dorso)", definicao: "Ressecção fusiforme transversa do excesso de pele e de gordura na região torácica posterior e lombar, muitas vezes acompanhada de lipoaspiração adjuvante." }
    ],
    infos: {
      anestesia: "Geral. Este tipo de anestesia é imperativo devido à necessidade de posicionamento do paciente de bruços (decúbito ventral) durante o ato operatório.",
      recuperacao: "Recomenda-se evitar movimentos bruscos de alongamento ou torção do tronco. O desaparecimento dos inchaços ocorre de forma progressiva entre 3 a 6 meses.",
      cicatrizes: "Projetada estrategicamente para ficar posicionada debaixo da marca do sutiã ou do biquíni. Trata-se de uma linha horizontal ou levemente arqueada cruzando a região média das costas.",
      retorno: "O retorno ao trabalho em atividades leves ocorre entre 2 a 3 semanas. Exercícios de tronco, musculação para costas ou natação requerem liberação médica e, em geral, mais de 60 dias de repouso relativo desta musculatura."
    }
  },
  {
    id: "face",
    titulo: "Face (Lifting Facial)",
    descricao: "A perda rápida e maciça de peso acarreta um 'esvaziamento' intenso do rosto, acentuando a ptose (queda) das bochechas, evidenciando sulcos (como o bigode chinês) e promovendo uma aparência de envelhecimento severo ou cansaço crônico, independente da idade.",
    tecnicas: [
      { nome: "Lifting Facial (Ritidoplastia)", definicao: "Não trata apenas a superfície. Envolve o reposicionamento anatômico do Sistema Musculoaponeurótico Superficial (SMAS) e dos ligamentos retentores da face, aliado à remoção apenas da pele excedente para rejuvenescer sem perder as feições originais e a naturalidade." }
    ],
    infos: {
      anestesia: "Geral ou Local associada à sedação intravenosa profunda.",
      recuperacao: "Os hematomas (roxos) e inchaços começam a recuar significativamente por volta do 15º dia. O resultado se torna esteticamente muito agradável em 3 meses, com o refinamento final ocorrendo de 6 a 12 meses.",
      cicatrizes: "Incisões meticulosamente planejadas, iniciam-se na região temporal (no cabelo ou margem capilar), descem acompanhando o contorno e o interior da orelha e contornam para a região retroauricular. Devido à excelente vascularização da face, comumente tornam-se quase imperceptíveis.",
      retorno: "Atividades sociais e laborais comumente são reiniciadas entre 15 e 20 dias. Há proibição absoluta de exposição direta ao sol nos primeiros meses e obrigatoriedade de fotoproteção intensa (FPS alto)."
    }
  },
  {
    id: "submento",
    titulo: "Submento (Papada)",
    descricao: "A região cervical inferior, conhecida como submento ou papada, perde sua estrutura de suporte após o emagrecimento. Forma-se então uma dobra dupla ou pele pendular (frequentemente chamada de 'pescoço de peru') com evidente frouxidão do músculo platisma.",
    tecnicas: [
      { nome: "Tratamento Cirúrgico Cervical (Lifting Cervical)", definicao: "Consiste na lipoaspiração cervical (se ainda existir um componente de gordura localizada) conjugada à plicatura (aproximação através de suturas) das bandas do músculo platisma e exérese do excesso de pele, devolvendo o ângulo da mandíbula e um pescoço jovem." }
    ],
    infos: {
      anestesia: "Geral (quando combinada ao Lifting Facial total) ou Local com sedação leve (em procedimentos isolados limitados).",
      recuperacao: "Exige o uso de faixa compressiva mentoniana no pós-operatório imediato. O contorno nítido da mandíbula começa a ser apreciado entre o primeiro e o terceiro mês.",
      cicatrizes: "Envolve uma cicatriz horizontal muito discreta (cerca de 3 a 5 cm) sob o queixo (no sulco submentoniano), que fica escondida na sombra natural da face.",
      retorno: "O afastamento das atividades laborativas leves perdura, em média, de 10 a 14 dias. As atividades físicas intensas são contraindicadas pelos primeiros 30 a 45 dias."
    }
  }
];
