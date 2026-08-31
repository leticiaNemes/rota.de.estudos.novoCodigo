const respostas = [
  {
    nome: "Letícia",
    faculdade: "Psicologia, Ciência de Dados ou Design Gráfico",
    areaInteresse:
      "Humanas e comportamento, Tecnologia e dados, Design e criatividade"
  },
  {
    nome: "Grupo Isaac, Matheus Ricardo e Rafael",
    faculdade: "Nenhuma ou Medicina",
    areaInteresse:
      "Saúde e bem-estar, Tecnologia e dados, Esportes e movimento"
  }
];

/* =========================================================
   PLANOS DE ESTUDO
========================================================= */

const planos = {
  "Saúde e bem-estar": {
    foco:
      "Entender o corpo humano, saúde, bem-estar e cuidado com pessoas.",

    ondeTrabalhar: [
      "Hospitais e clínicas",
      "Laboratórios",
      "Postos de saúde",
      "Centros de pesquisa",
      "Projetos de saúde e bem-estar"
    ],

    materiasCurso: [
      "Anatomia",
      "Biologia celular",
      "Fisiologia",
      "Química",
      "Bioquímica",
      "Saúde coletiva"
    ],

    basicoAtuar: [
      "Responsabilidade",
      "Boa comunicação",
      "Noções de Biologia e Química",
      "Empatia",
      "Atenção aos detalhes"
    ],

    estudar: [
      "Células e sistemas do corpo humano",
      "Química básica",
      "Saúde e prevenção",
      "Leitura e interpretação"
    ],

    comoEstudar: [
      "Faça resumos curtos",
      "Use mapas mentais",
      "Assista aulas e explique com suas palavras",
      "Resolva questões"
    ],

    pratica:
      "Criar um mapa mental sobre corpo humano, saúde mental ou qualidade de vida.",

    primeiroMes: [
      "Semana 1: Biologia e corpo humano",
      "Semana 2: Química básica",
      "Semana 3: saúde e prevenção",
      "Semana 4: revisão e atividade prática"
    ]
  },

  "Tecnologia e dados": {
    foco:
      "Aprender lógica, programação, organização de dados e criação de soluções digitais.",

    ondeTrabalhar: [
      "Empresas de tecnologia",
      "Startups",
      "Bancos",
      "Áreas de dados",
      "Desenvolvimento de sistemas e sites"
    ],

    materiasCurso: [
      "Lógica de programação",
      "Algoritmos",
      "Banco de dados",
      "Estatística",
      "Desenvolvimento web",
      "Segurança da informação"
    ],

    basicoAtuar: [
      "Raciocínio lógico",
      "Programação básica",
      "Organização de dados",
      "Paciência para testar e corrigir",
      "Projetos práticos"
    ],

    estudar: [
      "Variáveis, condições e funções",
      "HTML e CSS",
      "JavaScript",
      "Planilhas, dados e gráficos"
    ],

    comoEstudar: [
      "Crie pequenos códigos",
      "Faça exercícios práticos",
      "Modifique exemplos",
      "Construa pequenos projetos"
    ],

    pratica:
      "Criar uma página simples que recebe dados e mostra uma recomendação.",

    primeiroMes: [
      "Semana 1: lógica de programação",
      "Semana 2: HTML e CSS",
      "Semana 3: JavaScript",
      "Semana 4: mini projeto"
    ]
  },

  "Humanas e comportamento": {
    foco:
      "Entender pessoas, sociedade, comunicação e comportamento.",

    ondeTrabalhar: [
      "Escolas",
      "ONGs",
      "Projetos sociais",
      "Clínicas e consultorias",
      "Áreas de pessoas e desenvolvimento humano"
    ],

    materiasCurso: [
      "Sociologia",
      "Filosofia",
      "Psicologia básica",
      "Antropologia",
      "Ética",
      "Metodologia de pesquisa"
    ],

    basicoAtuar: [
      "Leitura e interpretação",
      "Empatia",
      "Boa comunicação",
      "Argumentação",
      "Pensamento crítico"
    ],

    estudar: [
      "Sociedade e cultura",
      "Ética e pensamento crítico",
      "Comportamento humano",
      "Interpretação de texto"
    ],

    comoEstudar: [
      "Leia textos curtos",
      "Faça resumos",
      "Compare opiniões",
      "Escreva pequenos textos argumentativos"
    ],

    pratica:
      "Criar um texto ou apresentação sobre comportamento ou sociedade.",

    primeiroMes: [
      "Semana 1: sociedade e cultura",
      "Semana 2: ética",
      "Semana 3: comportamento",
      "Semana 4: produção de texto"
    ]
  },

  "Design e criatividade": {
    foco:
      "Aprender comunicação visual, composição, cores e ferramentas de criação.",

    ondeTrabalhar: [
      "Agências",
      "Design gráfico",
      "Moda",
      "Redes sociais",
      "Criação de conteúdo e projetos visuais"
    ],

    materiasCurso: [
      "Cores",
      "Tipografia",
      "Composição visual",
      "Fotografia",
      "Design digital",
      "História da arte"
    ],

    basicoAtuar: [
      "Criatividade",
      "Senso visual",
      "Uso de ferramentas",
      "Organização",
      "Portfólio"
    ],

    estudar: [
      "Teoria das cores",
      "Tipografia",
      "Alinhamento e espaçamento",
      "Canva ou Figma"
    ],

    comoEstudar: [
      "Analise referências",
      "Recrie layouts",
      "Monte uma pasta de inspiração",
      "Crie versões próprias"
    ],

    pratica:
      "Criar um cartaz, um post e uma capa de apresentação.",

    primeiroMes: [
      "Semana 1: cores",
      "Semana 2: tipografia",
      "Semana 3: ferramentas",
      "Semana 4: mini portfólio"
    ]
  },

  "Negócios e administração": {
    foco:
      "Aprender organização, planejamento, gestão, comunicação e noções financeiras.",

    ondeTrabalhar: [
      "Empresas",
      "Comércio",
      "Indústria",
      "Bancos",
      "Áreas administrativas e financeiras"
    ],

    materiasCurso: [
      "Administração",
      "Contabilidade",
      "Economia",
      "Matemática financeira",
      "Marketing",
      "Gestão de pessoas"
    ],

    basicoAtuar: [
      "Organização",
      "Cumprimento de prazos",
      "Noções de custos",
      "Boa comunicação",
      "Planilhas"
    ],

    estudar: [
      "Porcentagem e média",
      "Metas e tarefas",
      "Noções de mercado",
      "Comunicação profissional"
    ],

    comoEstudar: [
      "Use exemplos reais",
      "Crie tabelas",
      "Faça simulações",
      "Treine apresentações"
    ],

    pratica:
      "Criar um plano simples de negócio com custo, preço, público e divulgação.",

    primeiroMes: [
      "Semana 1: matemática financeira",
      "Semana 2: planejamento",
      "Semana 3: mercado",
      "Semana 4: projeto"
    ]
  },

  "Direito e sociedade": {
    foco:
      "Desenvolver leitura, interpretação, argumentação e compreensão da sociedade.",

    ondeTrabalhar: [
      "Escritórios",
      "Empresas",
      "Órgãos públicos",
      "Tribunais",
      "Áreas de contratos e compliance"
    ],

    materiasCurso: [
      "Introdução ao Direito",
      "Direito Civil",
      "Direito Constitucional",
      "Direito do Trabalho",
      "Direito Tributário",
      "Ética"
    ],

    basicoAtuar: [
      "Ler com atenção",
      "Escrever bem",
      "Argumentar",
      "Entender regras",
      "Acompanhar atualidades"
    ],

    estudar: [
      "Interpretação de texto",
      "Atualidades",
      "Cidadania",
      "Escrita argumentativa"
    ],

    comoEstudar: [
      "Leia notícias",
      "Resuma problemas",
      "Separe fato e opinião",
      "Produza textos argumentativos"
    ],

    pratica:
      "Escrever um texto argumentativo sobre um problema social atual.",

    primeiroMes: [
      "Semana 1: interpretação",
      "Semana 2: cidadania",
      "Semana 3: argumentação",
      "Semana 4: redação"
    ]
  },

  "Educação": {
    foco:
      "Aprender a organizar conteúdos e explicar assuntos com clareza.",

    ondeTrabalhar: [
      "Escolas",
      "Cursos",
      "Reforço escolar",
      "Projetos educacionais",
      "Plataformas de ensino"
    ],

    materiasCurso: [
      "Didática",
      "Psicologia da educação",
      "Metodologia",
      "Gestão escolar",
      "Planejamento",
      "Avaliação"
    ],

    basicoAtuar: [
      "Paciência",
      "Comunicação clara",
      "Organização",
      "Planejamento",
      "Acompanhamento da aprendizagem"
    ],

    estudar: [
      "Leitura e escrita",
      "Comunicação",
      "Didática",
      "Planejamento"
    ],

    comoEstudar: [
      "Explique conteúdos",
      "Crie resumos",
      "Grave explicações",
      "Monte roteiros"
    ],

    pratica:
      "Criar uma mini aula sobre um tema que você domina.",

    primeiroMes: [
      "Semana 1: leitura e escrita",
      "Semana 2: explicação",
      "Semana 3: atividades",
      "Semana 4: mini aula"
    ]
  },

  "Engenharia e exatas": {
    foco:
      "Fortalecer raciocínio lógico, matemática, física e resolução de problemas.",

    ondeTrabalhar: [
      "Indústrias",
      "Construtoras",
      "Laboratórios",
      "Áreas técnicas",
      "Projetos e desenvolvimento"
    ],

    materiasCurso: [
      "Cálculo",
      "Física",
      "Química",
      "Álgebra",
      "Estatística",
      "Desenho técnico"
    ],

    basicoAtuar: [
      "Raciocínio lógico",
      "Matemática básica",
      "Interpretação de gráficos",
      "Organização",
      "Resolução de problemas"
    ],

    estudar: [
      "Frações e porcentagem",
      "Equações",
      "Movimento e força",
      "Interpretação de problemas"
    ],

    comoEstudar: [
      "Resolva exercícios",
      "Anote erros",
      "Refaça problemas",
      "Revise fórmulas"
    ],

    pratica:
      "Montar uma lista resolvida com 10 exercícios comentados.",

    primeiroMes: [
      "Semana 1: matemática básica",
      "Semana 2: equações",
      "Semana 3: física",
      "Semana 4: exercícios e revisão"
    ]
  },

  "Comunicação e marketing": {
    foco:
      "Aprender a criar mensagens, entender públicos e divulgar ideias.",

    ondeTrabalhar: [
      "Agências",
      "Redes sociais",
      "Jornais e portais",
      "E-commerce",
      "Criação de conteúdo"
    ],

    materiasCurso: [
      "Marketing",
      "Comunicação digital",
      "Redação publicitária",
      "Mídias sociais",
      "Pesquisa de mercado",
      "Fotografia"
    ],

    basicoAtuar: [
      "Escrita",
      "Criatividade",
      "Conhecer o público",
      "Comunicação digital",
      "Analisar resultados"
    ],

    estudar: [
      "Títulos e legendas",
      "Público-alvo",
      "Marketing básico",
      "Imagem e conteúdo"
    ],

    comoEstudar: [
      "Analise campanhas",
      "Escreva chamadas",
      "Crie posts",
      "Compare resultados"
    ],

    pratica:
      "Criar uma campanha simples com três posts.",

    primeiroMes: [
      "Semana 1: público",
      "Semana 2: escrita",
      "Semana 3: conteúdo",
      "Semana 4: campanha"
    ]
  },

  "Esportes e movimento": {
    foco:
      "Entender corpo, movimento, saúde, esporte e qualidade de vida.",

    ondeTrabalhar: [
      "Academias",
      "Escolas",
      "Clubes",
      "Treinamento físico",
      "Projetos esportivos"
    ],

    materiasCurso: [
      "Anatomia",
      "Fisiologia",
      "Biomecânica",
      "Treinamento",
      "Nutrição básica",
      "Primeiros socorros"
    ],

    basicoAtuar: [
      "Conhecer o corpo",
      "Gostar de movimento",
      "Orientar com responsabilidade",
      "Comunicação",
      "Prevenção de lesões"
    ],

    estudar: [
      "Músculos e ossos",
      "Anatomia",
      "Saúde e descanso",
      "Regras e treinamento"
    ],

    comoEstudar: [
      "Relacione teoria e prática",
      "Use desenhos",
      "Pesquise modalidades",
      "Observe treino e recuperação"
    ],

    pratica:
      "Criar uma rotina semanal de atividade física com justificativa.",

    primeiroMes: [
      "Semana 1: corpo humano",
      "Semana 2: saúde",
      "Semana 3: modalidades",
      "Semana 4: rotina de exercícios"
    ]
  },

  "Ainda não sei": {
    foco:
      "Descobrir interesses e testar possibilidades antes de escolher uma área.",

    ondeTrabalhar: [
      "Depende da área escolhida",
      "Projetos escolares",
      "Jovem aprendiz",
      "Estágio",
      "Voluntariado"
    ],

    materiasCurso: [
      "Português",
      "Matemática",
      "Atualidades",
      "Tecnologia básica",
      "Comunicação",
      "Inglês"
    ],

    basicoAtuar: [
      "Pesquisar profissões",
      "Conhecer interesses",
      "Testar atividades",
      "Conversar com profissionais",
      "Criar rotina de estudos"
    ],

    estudar: [
      "Autoconhecimento",
      "Pesquisa de profissões",
      "Rotinas profissionais",
      "Comparação de áreas"
    ],

    comoEstudar: [
      "Liste três áreas",
      "Pesquise vídeos",
      "Compare cursos",
      "Teste uma atividade de cada área"
    ],

    pratica:
      "Criar uma tabela comparando três profissões possíveis.",

    primeiroMes: [
      "Semana 1: interesses",
      "Semana 2: profissões",
      "Semana 3: entrevistas e vídeos",
      "Semana 4: escolher uma área para testar"
    ]
  }
};


/* =========================================================
   BANCO DE PERGUNTAS DO QUIZ
========================================================= */

const bancoQuestoes = {
  "Saúde e bem-estar": [
    {
      tema: "Biologia celular",
      pergunta:
        "Qual estrutura é a unidade básica dos seres vivos?",
      alternativas: [
        "Célula",
        "Órgão",
        "Tecido",
        "Sistema"
      ],
      correta: 0
    },

    {
      tema: "Corpo humano",
      pergunta:
        "Qual órgão bombeia o sangue pelo corpo?",
      alternativas: [
        "Pulmão",
        "Estômago",
        "Coração",
        "Rim"
      ],
      correta: 2
    },

    {
      tema: "Química básica",
      pergunta:
        "A água é formada principalmente por quais elementos?",
      alternativas: [
        "Carbono e ferro",
        "Hidrogênio e oxigênio",
        "Cálcio e sódio",
        "Nitrogênio e fósforo"
      ],
      correta: 1
    },

    {
      tema: "Saúde e prevenção",
      pergunta:
        "Qual atitude contribui para a prevenção de problemas de saúde?",
      alternativas: [
        "Ignorar sintomas",
        "Dormir cada vez menos",
        "Manter hábitos saudáveis",
        "Evitar qualquer atividade física"
      ],
      correta: 2
    }
  ],

  "Tecnologia e dados": [
    {
      tema: "HTML",
      pergunta:
        "Qual é a principal função do HTML?",
      alternativas: [
        "Criar a estrutura do conteúdo",
        "Alterar apenas cores",
        "Salvar dados em banco",
        "Editar imagens"
      ],
      correta: 0
    },

    {
      tema: "CSS",
      pergunta:
        "Para que o CSS é usado principalmente?",
      alternativas: [
        "Definir aparência e layout",
        "Criar contas",
        "Substituir o navegador",
        "Armazenar arquivos"
      ],
      correta: 0
    },

    {
      tema: "JavaScript",
      pergunta:
        "O JavaScript é usado principalmente para:",
      alternativas: [
        "Adicionar interações e lógica",
        "Trocar o sistema operacional",
        "Criar internet",
        "Substituir sempre o HTML"
      ],
      correta: 0
    },

    {
      tema: "Lógica",
      pergunta:
        "Em programação, uma variável serve para:",
      alternativas: [
        "Guardar um valor",
        "Desenhar imagens automaticamente",
        "Impedir cálculos",
        "Apagar todo o código"
      ],
      correta: 0
    }
  ],

  "Humanas e comportamento": [
    {
      tema: "Sociologia",
      pergunta:
        "A Sociologia estuda principalmente:",
      alternativas: [
        "Vida em sociedade e relações sociais",
        "Somente matemática",
        "Química dos materiais",
        "Computadores"
      ],
      correta: 0
    },

    {
      tema: "Filosofia",
      pergunta:
        "Pensamento crítico envolve:",
      alternativas: [
        "Aceitar tudo",
        "Analisar ideias e argumentos",
        "Evitar opiniões",
        "Decorar sem entender"
      ],
      correta: 1
    },

    {
      tema: "Psicologia",
      pergunta:
        "Qual tema se relaciona ao comportamento humano?",
      alternativas: [
        "Emoções e relações",
        "Circuitos",
        "Equações químicas",
        "Geometria"
      ],
      correta: 0
    },

    {
      tema: "Interpretação",
      pergunta:
        "Identificar a ideia principal significa:",
      alternativas: [
        "Encontrar o assunto central",
        "Contar linhas",
        "Copiar tudo",
        "Ignorar o contexto"
      ],
      correta: 0
    }
  ],

  "Design e criatividade": [
    {
      tema: "Cores",
      pergunta:
        "O contraste ajuda principalmente a:",
      alternativas: [
        "Destacar elementos",
        "Deixar tudo igual",
        "Eliminar hierarquia",
        "Apagar conteúdo"
      ],
      correta: 0
    },

    {
      tema: "Tipografia",
      pergunta:
        "Tipografia está relacionada a:",
      alternativas: [
        "Escolha e organização de fontes",
        "Impostos",
        "Montagem de computadores",
        "Banco de dados"
      ],
      correta: 0
    },

    {
      tema: "Composição",
      pergunta:
        "Uma boa hierarquia visual ajuda a:",
      alternativas: [
        "Saber o que observar primeiro",
        "Ignorar títulos",
        "Usar só uma cor",
        "Eliminar espaçamento"
      ],
      correta: 0
    },

    {
      tema: "Ferramentas",
      pergunta:
        "Qual ferramenta pode ser usada para layouts e protótipos?",
      alternativas: [
        "Figma",
        "Calculadora",
        "Prompt de comando",
        "Relógio"
      ],
      correta: 0
    }
  ],

  "Negócios e administração": [
    {
      tema: "Matemática financeira",
      pergunta:
        "Quanto é 10% de R$ 200?",
      alternativas: [
        "R$ 2",
        "R$ 10",
        "R$ 20",
        "R$ 200"
      ],
      correta: 2
    },

    {
      tema: "Gestão",
      pergunta:
        "Receita de R$ 1.000 e custos de R$ 700 geram qual resultado simples?",
      alternativas: [
        "R$ 300",
        "R$ 700",
        "R$ 1.700",
        "R$ 0"
      ],
      correta: 0
    },

    {
      tema: "Organização",
      pergunta:
        "Uma boa forma de organizar tarefas é:",
      alternativas: [
        "Definir prioridades e prazos",
        "Fazer tudo sem planejamento",
        "Ignorar tarefas",
        "Nunca revisar"
      ],
      correta: 0
    },

    {
      tema: "Marketing",
      pergunta:
        "Conhecer o público-alvo ajuda a:",
      alternativas: [
        "Comunicar melhor",
        "Evitar planejamento",
        "Eliminar concorrentes",
        "Ignorar clientes"
      ],
      correta: 0
    }
  ],

  "Direito e sociedade": [
    {
      tema: "Interpretação",
      pergunta:
        "Em um texto argumentativo é importante identificar:",
      alternativas: [
        "A ideia e os argumentos",
        "Só o tamanho",
        "A cor da página",
        "Só as vírgulas"
      ],
      correta: 0
    },

    {
      tema: "Cidadania",
      pergunta:
        "Cidadania está relacionada a:",
      alternativas: [
        "Direitos, deveres e participação",
        "Somente esportes",
        "Apenas finanças",
        "Uso de redes sociais"
      ],
      correta: 0
    },

    {
      tema: "Argumentação",
      pergunta:
        "Um argumento consistente deve:",
      alternativas: [
        "Apresentar razões",
        "Ser ofensivo",
        "Ignorar evidências",
        "Fugir do tema"
      ],
      correta: 0
    },

    {
      tema: "Atualidades",
      pergunta:
        "Acompanhar atualidades ajuda a:",
      alternativas: [
        "Compreender debates sociais",
        "Substituir todas as leis",
        "Eliminar leitura",
        "Decorar datas apenas"
      ],
      correta: 0
    }
  ],

  "Educação": [
    {
      tema: "Didática",
      pergunta:
        "Didática está relacionada a:",
      alternativas: [
        "Formas de ensinar",
        "Construção de máquinas",
        "Juros",
        "Jogos apenas"
      ],
      correta: 0
    },

    {
      tema: "Planejamento",
      pergunta:
        "Um bom planejamento deve incluir:",
      alternativas: [
        "Objetivo e atividades",
        "Somente título",
        "Nenhuma sequência",
        "Só prova final"
      ],
      correta: 0
    },

    {
      tema: "Avaliação",
      pergunta:
        "Avaliar a aprendizagem ajuda a:",
      alternativas: [
        "Identificar avanços e dificuldades",
        "Punir erros",
        "Evitar mudanças",
        "Eliminar exercícios"
      ],
      correta: 0
    },

    {
      tema: "Comunicação",
      pergunta:
        "Ao explicar um conteúdo é importante:",
      alternativas: [
        "Usar linguagem clara",
        "Falar o mais rápido possível",
        "Não aceitar perguntas",
        "Evitar exemplos"
      ],
      correta: 0
    }
  ],

  "Engenharia e exatas": [
    {
      tema: "Matemática",
      pergunta:
        "Quanto é 25% de 200?",
      alternativas: [
        "25",
        "40",
        "50",
        "75"
      ],
      correta: 2
    },

    {
      tema: "Equações",
      pergunta:
        "Se 2x = 10, x vale:",
      alternativas: [
        "2",
        "5",
        "10",
        "20"
      ],
      correta: 1
    },

    {
      tema: "Física",
      pergunta:
        "Velocidade média relaciona:",
      alternativas: [
        "Distância e tempo",
        "Massa e temperatura",
        "Volume e cor",
        "Preço e desconto"
      ],
      correta: 0
    },

    {
      tema: "Problemas",
      pergunta:
        "Um bom primeiro passo ao resolver um problema é:",
      alternativas: [
        "Identificar dados e o que é pedido",
        "Escolher qualquer fórmula",
        "Ignorar unidades",
        "Chutar a resposta"
      ],
      correta: 0
    }
  ],

  "Comunicação e marketing": [
    {
      tema: "Público-alvo",
      pergunta:
        "Público-alvo é:",
      alternativas: [
        "O grupo que se pretende atingir",
        "Somente funcionários",
        "Qualquer pessoa sem critério",
        "Um software"
      ],
      correta: 0
    },

    {
      tema: "Escrita",
      pergunta:
        "Um bom título deve:",
      alternativas: [
        "Ser claro e despertar interesse",
        "Não ter relação com o conteúdo",
        "Ser sempre enorme",
        "Evitar informação"
      ],
      correta: 0
    },

    {
      tema: "Marketing",
      pergunta:
        "Uma estratégia de divulgação deve considerar:",
      alternativas: [
        "Produto, público e comunicação",
        "Só a cor favorita",
        "Só o tamanho da empresa",
        "Nenhum objetivo"
      ],
      correta: 0
    },

    {
      tema: "Resultados",
      pergunta:
        "Analisar resultados serve para:",
      alternativas: [
        "Entender o que funcionou",
        "Impedir mudanças",
        "Substituir o público",
        "Evitar planejamento"
      ],
      correta: 0
    }
  ],

  "Esportes e movimento": [
    {
      tema: "Anatomia",
      pergunta:
        "Os músculos participam principalmente de:",
      alternativas: [
        "Movimento",
        "Produção de luz",
        "Formação de plástico",
        "Internet"
      ],
      correta: 0
    },

    {
      tema: "Saúde",
      pergunta:
        "Qual combinação ajuda na recuperação física?",
      alternativas: [
        "Treino, alimentação e descanso",
        "Treino sem pausa",
        "Pouco sono",
        "Evitar hidratação"
      ],
      correta: 0
    },

    {
      tema: "Prevenção",
      pergunta:
        "Antes da atividade física é importante:",
      alternativas: [
        "Preparar o corpo",
        "Ignorar desconforto",
        "Começar sempre no máximo",
        "Evitar orientação"
      ],
      correta: 0
    },

    {
      tema: "Treinamento",
      pergunta:
        "Uma rotina organizada deve considerar:",
      alternativas: [
        "Objetivo, frequência, intensidade e recuperação",
        "Só competição",
        "Só equipamento caro",
        "Nenhum planejamento"
      ],
      correta: 0
    }
  ],

  "Ainda não sei": [
    {
      tema: "Autoconhecimento",
      pergunta:
        "Para começar a escolher uma área é útil:",
      alternativas: [
        "Listar interesses e habilidades",
        "Escolher só pelo nome",
        "Copiar outra pessoa",
        "Não pesquisar"
      ],
      correta: 0
    },

    {
      tema: "Profissões",
      pergunta:
        "Ao pesquisar uma profissão é útil conhecer:",
      alternativas: [
        "Rotina, formação e mercado",
        "Só uniforme",
        "Só o nome do curso",
        "Nada prático"
      ],
      correta: 0
    },

    {
      tema: "Experimentação",
      pergunta:
        "Testar uma atividade prática ajuda a:",
      alternativas: [
        "Perceber se gosta da prática",
        "Garantir profissão para sempre",
        "Evitar decisões",
        "Eliminar estudo"
      ],
      correta: 0
    },

    {
      tema: "Organização",
      pergunta:
        "Para criar constância nos estudos é melhor:",
      alternativas: [
        "Começar com metas possíveis",
        "Estudar tudo em um dia",
        "Nunca revisar",
        "Esperar muitas horas livres"
      ],
      correta: 0
    }
  ]
};


/* =========================================================
   ÁREA ATUAL DO QUIZ
========================================================= */

let areaAtualQuiz =
  localStorage.getItem("areaAtualQuiz") || "";


/* =========================================================
   INICIALIZAÇÃO
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

  configurarFormulario();

  configurarDiarioEstudos();

  configurarQuiz();

  configurarMetasSemanais();

  configurarKanban();

  carregarAnotacoesSalvas();

  carregarMetasSemanais();

  if (areaAtualQuiz) {
    prepararQuiz(areaAtualQuiz);
  }

});


/* =========================================================
   NORMALIZAÇÃO DE TEXTO
========================================================= */

function normalizarTexto(texto) {

  return String(texto || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

}


/* =========================================================
   IDENTIFICAR ÁREA
========================================================= */

function identificarAreaPeloObjetivo(texto) {

  const objetivo =
    normalizarTexto(texto);


  if (
    [
      "medicina",
      "enfermagem",
      "nutricao",
      "fisioterapia",
      "odontologia",
      "farmacia",
      "biomedicina",
      "saude"
    ].some(function (palavra) {
      return objetivo.includes(palavra);
    })
  ) {
    return "Saúde e bem-estar";
  }


  if (
    [
      "educacao fisica",
      "esporte",
      "personal",
      "treinador",
      "preparador fisico"
    ].some(function (palavra) {
      return objetivo.includes(palavra);
    })
  ) {
    return "Esportes e movimento";
  }


  if (
    [
      "ciencia de dados",
      "dados",
      "programacao",
      "sistemas",
      "computacao",
      "software",
      "tecnologia",
      "cyber",
      "ciber",
      "seguranca da informacao",
      "informatica"
    ].some(function (palavra) {
      return objetivo.includes(palavra);
    })
  ) {
    return "Tecnologia e dados";
  }


  if (
    [
      "psicologia",
      "sociologia",
      "filosofia",
      "servico social",
      "historia"
    ].some(function (palavra) {
      return objetivo.includes(palavra);
    })
  ) {
    return "Humanas e comportamento";
  }


  if (
    [
      "design",
      "moda",
      "arquitetura",
      "artes",
      "desenho"
    ].some(function (palavra) {
      return objetivo.includes(palavra);
    })
  ) {
    return "Design e criatividade";
  }


  if (
    [
      "administracao",
      "gestao",
      "contabilidade",
      "economia",
      "empreendedorismo",
      "recursos humanos"
    ].some(function (palavra) {
      return objetivo.includes(palavra);
    })
  ) {
    return "Negócios e administração";
  }


  if (
    [
      "direito",
      "relacoes internacionais",
      "ciencias sociais"
    ].some(function (palavra) {
      return objetivo.includes(palavra);
    })
  ) {
    return "Direito e sociedade";
  }


  if (
    [
      "pedagogia",
      "licenciatura",
      "educacao",
      "professor",
      "ensino"
    ].some(function (palavra) {
      return objetivo.includes(palavra);
    })
  ) {
    return "Educação";
  }


  if (
    [
      "engenharia",
      "matematica",
      "fisica",
      "quimica",
      "estatistica"
    ].some(function (palavra) {
      return objetivo.includes(palavra);
    })
  ) {
    return "Engenharia e exatas";
  }


  if (
    [
      "marketing",
      "jornalismo",
      "publicidade",
      "propaganda",
      "comunicacao",
      "midias"
    ].some(function (palavra) {
      return objetivo.includes(palavra);
    })
  ) {
    return "Comunicação e marketing";
  }


  return "Ainda não sei";

}


/* =========================================================
   FORMULÁRIO PRINCIPAL
========================================================= */

function configurarFormulario() {

  const form =
    document.getElementById("formPlano");


  if (!form) {
    return;
  }


  form.addEventListener(
    "submit",
    function (evento) {

      evento.preventDefault();


      const campoNome =
        document.getElementById("nome");

      const campoFaculdade =
        document.getElementById("faculdade");

      const campoHoras =
        document.getElementById("horas");

      const campoModo =
        document.getElementById("modoEstudo");

      const campoExterior =
        document.getElementById("exterior");


      const nome =
        campoNome
          ? campoNome.value.trim()
          : "Estudante";


      const faculdade =
        campoFaculdade
          ? campoFaculdade.value.trim()
          : "";


      const horas =
        campoHoras
          ? Number(campoHoras.value)
          : 0;


      const modo =
        campoModo
          ? campoModo.value
          : "sozinho";


      const exterior =
        campoExterior
          ? campoExterior.value
          : "nao";


      const area =
        identificarAreaPeloObjetivo(
          faculdade
        );


      gerarPlano(
        nome,
        faculdade,
        area,
        horas,
        modo,
        exterior
      );


      mostrarGrupoEstudo(
        nome,
        area,
        modo
      );


      prepararQuiz(area);

    }
  );

}


/* =========================================================
   OBTER PLANO
========================================================= */

function obterPlanoDetalhado(area) {

  return (
    planos[area] ||
    planos["Ainda não sei"]
  );

}


/* =========================================================
   ORGANIZAR TEMPO
========================================================= */

function organizarTempo(horas) {

  if (horas <= 0) {

    return (
      "Comece com 20 minutos por dia. " +
      "O objetivo inicial é criar constância."
    );

  }


  if (horas <= 1) {

    return (
      "Estude um tema por dia com foco " +
      "e faça uma revisão curta no final."
    );

  }


  if (horas <= 3) {

    return (
      "Divida o tempo entre teoria, " +
      "prática e revisão."
    );

  }


  return (
    "Separe o estudo em blocos de teoria, " +
    "exercícios, projeto e revisão, com pausas entre eles."
  );

}


/* =========================================================
   GERAR PLANO
========================================================= */

function gerarPlano(
  nome,
  faculdade,
  area,
  horas,
  modo,
  exterior
) {

  const resultado =
    document.getElementById(
      "resultadoPlano"
    );


  if (!resultado) {
    return;
  }


  const plano =
    obterPlanoDetalhado(area);


  let dicaModo;


  if (modo === "grupo") {

    dicaModo =
      "Definam um tema por encontro, " +
      "dividam explicações e terminem " +
      "com perguntas e um resumo coletivo.";

  } else {

    dicaModo =
      "Use metas pequenas, checklist, " +
      "resumo curto e uma revisão no fim da semana.";

  }


  let dicaExterior =
    "Foque no mercado brasileiro, mas mantenha " +
    "currículo, projetos e inglês básico organizados.";


  if (exterior === "sim") {

    dicaExterior =
      "Inclua inglês na semana e comece " +
      "a construir currículo, LinkedIn e portfólio.";

  }


  if (exterior === "talvez") {

    dicaExterior =
      "Estude inglês aos poucos para manter " +
      "a possibilidade de estudar ou trabalhar fora aberta.";

  }


  resultado.innerHTML = `
    <h3>
      Plano de estudos de
      ${escaparHTML(nome)}
    </h3>

    <div class="area-identificada">
      Área identificada automaticamente:
      ${escaparHTML(area)}
    </div>

    ${montarBloco(
      "Objetivo principal",
      `
        <p>
          Você informou
          <strong>${escaparHTML(faculdade)}</strong>.
          A área mais próxima identificada foi
          <strong>${escaparHTML(area)}</strong>.
        </p>

        <p>
          <strong>Direção inicial:</strong>
          ${plano.foco}
        </p>
      `
    )}

    ${montarLista(
      "Onde você pode trabalhar",
      plano.ondeTrabalhar
    )}

    ${montarLista(
      "Matérias que podem aparecer no curso",
      plano.materiasCurso
    )}

    ${montarLista(
      "O básico que precisa saber para atuar na área",
      plano.basicoAtuar
    )}

    ${montarLista(
      "O que estudar primeiro",
      plano.estudar
    )}

    ${montarLista(
      "Como estudar na prática",
      plano.comoEstudar
    )}

    <div class="resultado-bloco destaque-plano">

      <h4>
        Primeira atividade prática
      </h4>

      <p>
        ${plano.pratica}
      </p>

    </div>

    ${montarLista(
      "Plano para o primeiro mês",
      plano.primeiroMes
    )}

    ${montarBloco(
      "Organização do tempo",
      `
        <p>
          Você informou aproximadamente
          <strong>${horas} hora(s) por dia</strong>.
        </p>

        <p>
          ${organizarTempo(horas)}
        </p>
      `
    )}

    ${montarBloco(
      "Melhor forma de estudar",
      `
        <p>
          ${dicaModo}
        </p>
      `
    )}

    ${montarBloco(
      "Trabalhar ou estudar fora do Brasil",
      `
        <p>
          ${dicaExterior}
        </p>
      `
    )}
  `;

}


/* =========================================================
   MONTAR BLOCOS
========================================================= */

function montarBloco(
  titulo,
  conteudo
) {

  return `
    <div class="resultado-bloco">

      <h4>
        ${titulo}
      </h4>

      ${conteudo}

    </div>
  `;

}


function montarLista(
  titulo,
  itens
) {

  const lista =
    itens
      .map(function (item) {

        return `
          <li>
            ${escaparHTML(item)}
          </li>
        `;

      })
      .join("");


  return `
    <div class="resultado-bloco">

      <h4>
        ${titulo}
      </h4>

      <ul>
        ${lista}
      </ul>

    </div>
  `;

}


/* =========================================================
   DIÁRIO DE ESTUDOS
========================================================= */

function configurarDiarioEstudos() {

  const form =
    document.getElementById(
      "formDiario"
    );


  const campoData =
    document.getElementById(
      "dataDiario"
    );


  const lista =
    document.getElementById(
      "listaAnotacoes"
    );


  if (
    campoData &&
    !campoData.value
  ) {

    campoData.value =
      dataHoje();

  }


  if (form) {

    form.addEventListener(
      "submit",
      function (evento) {

        evento.preventDefault();


        const campoTema =
          document.getElementById(
            "temaDiario"
          );


        const campoTexto =
          document.getElementById(
            "textoDiario"
          );


        const data =
          campoData
            ? campoData.value
            : dataHoje();


        const tema =
          campoTema
            ? campoTema.value.trim()
            : "";


        const texto =
          campoTexto
            ? campoTexto.value.trim()
            : "";


        if (
          !tema ||
          !texto
        ) {

          return;

        }


        const anotacoes =
          carregarAnotacoes();


        anotacoes.unshift({
          id: Date.now(),
          data: data,
          tema: tema,
          texto: texto
        });


        localStorage.setItem(
          "diarioEstudos",
          JSON.stringify(anotacoes)
        );


        form.reset();


        if (campoData) {

          campoData.value =
            dataHoje();

        }


        carregarAnotacoesSalvas();

      }
    );

  }


  if (lista) {

    lista.addEventListener(
      "click",
      function (evento) {

        const botao =
          evento.target.closest(
            "[data-apagar-anotacao]"
          );


        if (!botao) {
          return;
        }


        const id =
          Number(
            botao.dataset.apagarAnotacao
          );


        apagarAnotacao(id);

      }
    );

  }

}


/* =========================================================
   CARREGAR ANOTAÇÕES
========================================================= */

function carregarAnotacoes() {

  try {

    const dados =
      localStorage.getItem(
        "diarioEstudos"
      );


    if (!dados) {
      return [];
    }


    return JSON.parse(dados);

  } catch (erro) {

    return [];

  }

}


/* =========================================================
   MOSTRAR ANOTAÇÕES
========================================================= */

function carregarAnotacoesSalvas() {

  const lista =
    document.getElementById(
      "listaAnotacoes"
    );


  if (!lista) {
    return;
  }


  const anotacoes =
    carregarAnotacoes();


  if (
    anotacoes.length === 0
  ) {

    lista.innerHTML = `
      <p>
        Nenhuma anotação salva ainda.
        Use o diário para registrar
        o que estudou.
      </p>
    `;

    return;

  }


  lista.innerHTML =
    anotacoes
      .map(function (anotacao) {

        return `
          <div class="anotacao-card">

            <h5>
              ${escaparHTML(
                anotacao.tema
              )}
            </h5>

            <span>
              ${formatarData(
                anotacao.data
              )}
            </span>

            <p>
              ${escaparHTML(
                anotacao.texto
              )}
            </p>

            <button
              type="button"
              class="botao-apagar"
              data-apagar-anotacao="${anotacao.id}"
            >
              Apagar anotação
            </button>

          </div>
        `;

      })
      .join("");

}


/* =========================================================
   APAGAR ANOTAÇÃO
========================================================= */

function apagarAnotacao(id) {

  const anotacoes =
    carregarAnotacoes();


  const atualizadas =
    anotacoes.filter(
      function (anotacao) {

        return (
          anotacao.id !== id
        );

      }
    );


  localStorage.setItem(
    "diarioEstudos",
    JSON.stringify(atualizadas)
  );


  carregarAnotacoesSalvas();

}


/* =========================================================
   DATA ATUAL
========================================================= */

function dataHoje() {

  const hoje =
    new Date();


  const ano =
    hoje.getFullYear();


  const mes =
    String(
      hoje.getMonth() + 1
    ).padStart(2, "0");


  const dia =
    String(
      hoje.getDate()
    ).padStart(2, "0");


  return (
    `${ano}-${mes}-${dia}`
  );

}


/* =========================================================
   FORMATAR DATA
========================================================= */

function formatarData(data) {

  if (!data) {
    return "Sem data";
  }


  const partes =
    data.split("-");


  if (
    partes.length !== 3
  ) {

    return data;

  }


  return (
    `${partes[2]}/${partes[1]}/${partes[0]}`
  );

}


/* =========================================================
   GRUPO DE ESTUDOS
========================================================= */

function mostrarGrupoEstudo(
  nome,
  area,
  modo
) {

  const areaGrupo =
    document.getElementById(
      "areaGrupoEstudo"
    );


  const infoGrupo =
    document.getElementById(
      "infoGrupo"
    );


  const botaoWhatsapp =
    document.getElementById(
      "botaoWhatsapp"
    );


  if (
    !areaGrupo ||
    !infoGrupo ||
    !botaoWhatsapp
  ) {

    return;

  }


  if (
    modo !== "grupo"
  ) {

    areaGrupo.classList.add(
      "escondido"
    );

    return;

  }


  areaGrupo.classList.remove(
    "escondido"
  );


  const areaNormalizada =
    normalizarTexto(area);


  const colegas =
    respostas.filter(
      function (resposta) {

        const faculdade =
          normalizarTexto(
            resposta.faculdade
          );


        const interesse =
          normalizarTexto(
            resposta.areaInteresse
          );


        return (
          faculdade.includes(
            areaNormalizada
          ) ||
          interesse.includes(
            areaNormalizada
          )
        );

      }
    );


  const mensagem =
    `Olá! Meu nome é ${nome}. ` +
    `Quero participar ou criar um grupo de estudos ` +
    `para pessoas com interesse em ${area}.`;


  botaoWhatsapp.href =
    `https://wa.me/?text=${encodeURIComponent(
      mensagem
    )}`;


  if (
    colegas.length > 0
  ) {

    infoGrupo.innerHTML = `
      <p>
        Encontramos perfis
        com interesse parecido:
      </p>

      ${colegas
        .map(function (colega) {

          return `
            <div class="card-colega">

              <strong>
                ${escaparHTML(
                  colega.nome
                )}
              </strong>

              <p>
                Interesse:
                ${escaparHTML(
                  colega.faculdade
                )}
              </p>

              <p>
                Área citada:
                ${escaparHTML(
                  colega.areaInteresse
                )}
              </p>

            </div>
          `;

        })
        .join("")}
    `;

  } else {

    infoGrupo.innerHTML = `
      <p>
        Ainda não encontramos alguém
        exatamente na mesma área,
        mas você pode criar
        um grupo de estudos.
      </p>
    `;

  }

}


/* =========================================================
   QUIZ
========================================================= */

function configurarQuiz() {

  const form =
    document.getElementById(
      "formQuiz"
    );


  const refazer =
    document.getElementById(
      "botaoRefazerQuiz"
    );


  if (form) {

    form.addEventListener(
      "submit",
      function (evento) {

        evento.preventDefault();

        corrigirQuiz();

      }
    );

  }


  if (refazer) {

    refazer.addEventListener(
      "click",
      function () {

        if (areaAtualQuiz) {

          prepararQuiz(
            areaAtualQuiz
          );

        }

      }
    );

  }

}


/* =========================================================
   PREPARAR QUIZ
========================================================= */

function prepararQuiz(area) {

  const aviso =
    document.getElementById(
      "quizAviso"
    );


  const areaQuiz =
    document.getElementById(
      "quizArea"
    );


  const nomeArea =
    document.getElementById(
      "quizAreaNome"
    );


  const lista =
    document.getElementById(
      "listaQuestoes"
    );


  const resultado =
    document.getElementById(
      "resultadoQuiz"
    );


  const refazer =
    document.getElementById(
      "botaoRefazerQuiz"
    );


  if (
    !areaQuiz ||
    !nomeArea ||
    !lista ||
    !resultado ||
    !refazer
  ) {

    return;

  }


  const perguntas =
    bancoQuestoes[area] ||
    bancoQuestoes[
      "Ainda não sei"
    ];


  if (
    bancoQuestoes[area]
  ) {

    areaAtualQuiz =
      area;

  } else {

    areaAtualQuiz =
      "Ainda não sei";

  }


  localStorage.setItem(
    "areaAtualQuiz",
    areaAtualQuiz
  );


  if (aviso) {

    aviso.classList.add(
      "escondido"
    );

  }


  areaQuiz.classList.remove(
    "escondido"
  );


  nomeArea.textContent =
    areaAtualQuiz;


  lista.innerHTML =
    perguntas
      .map(
        function (
          questao,
          indice
        ) {

          const alternativas =
            questao.alternativas
              .map(
                function (
                  alternativa,
                  indiceAlternativa
                ) {

                  return `
                    <label class="alternativa-quiz">

                      <input
                        type="radio"
                        name="questao${indice}"
                        value="${indiceAlternativa}"
                        ${
                          indiceAlternativa === 0
                            ? "required"
                            : ""
                        }
                      >

                      <span>
                        ${escaparHTML(
                          alternativa
                        )}
                      </span>

                    </label>
                  `;

                }
              )
              .join("");


          return `
            <div
              class="questao-card"
              id="questaoCard${indice}"
            >

              <span class="tema-questao">
                ${escaparHTML(
                  questao.tema
                )}
              </span>

              <p class="texto-questao">

                <strong>
                  ${indice + 1}.
                </strong>

                ${escaparHTML(
                  questao.pergunta
                )}

              </p>

              <div class="alternativas-quiz">

                ${alternativas}

              </div>

            </div>
          `;

        }
      )
      .join("");


  resultado.innerHTML =
    "";


  resultado.classList.add(
    "escondido"
  );


  refazer.classList.add(
    "escondido"
  );

}


/* =========================================================
   CORRIGIR QUIZ
========================================================= */

function corrigirQuiz() {

  const resultado =
    document.getElementById(
      "resultadoQuiz"
    );


  const refazer =
    document.getElementById(
      "botaoRefazerQuiz"
    );


  if (
    !resultado ||
    !refazer ||
    !areaAtualQuiz
  ) {

    return;

  }


  const perguntas =
    bancoQuestoes[
      areaAtualQuiz
    ] ||
    bancoQuestoes[
      "Ainda não sei"
    ];


  let acertos = 0;


  const revisar = [];


  perguntas.forEach(
    function (
      questao,
      indice
    ) {

      const marcada =
        document.querySelector(
          `input[name="questao${indice}"]:checked`
        );


      const card =
        document.getElementById(
          `questaoCard${indice}`
        );


      if (!card) {
        return;
      }


      card.classList.remove(
        "questao-correta",
        "questao-incorreta"
      );


      if (
        marcada &&
        Number(
          marcada.value
        ) === questao.correta
      ) {

        acertos += 1;


        card.classList.add(
          "questao-correta"
        );

      } else {

        revisar.push(
          questao.tema
        );


        card.classList.add(
          "questao-incorreta"
        );

      }

    }
  );


  const percentual =
    Math.round(
      (
        acertos /
        perguntas.length
      ) *
      100
    );


  let mensagem =
    "Alguns conteúdos precisam de mais revisão.";


  if (
    percentual === 100
  ) {

    mensagem =
      "Excelente! Você acertou todas as questões.";

  } else if (
    percentual >= 75
  ) {

    mensagem =
      "Muito bom! Falta revisar poucos pontos.";

  } else if (
    percentual >= 50
  ) {

    mensagem =
      "Bom começo. Revise os assuntos indicados antes de avançar.";

  }


  let conteudoRevisao;


  if (
    revisar.length > 0
  ) {

    conteudoRevisao = `
      <div class="assuntos-revisar">

        <h4>
          Assuntos para revisar
        </h4>

        <ul>

          ${revisar
            .map(function (tema) {

              return `
                <li>
                  ${escaparHTML(
                    tema
                  )}
                </li>
              `;

            })
            .join("")}

        </ul>

      </div>
    `;

  } else {

    conteudoRevisao = `
      <div
        class="assuntos-revisar sucesso-revisao"
      >

        <h4>
          Nenhuma revisão obrigatória
        </h4>

        <p>
          Você acertou todos
          os conteúdos apresentados.
        </p>

      </div>
    `;

  }


  resultado.innerHTML = `
    <h3>
      Resultado do quiz
    </h3>

    <div class="nota-quiz">
      ${acertos}/${perguntas.length}
    </div>

    <p>

      <strong>
        ${percentual}% de acertos.
      </strong>

      ${mensagem}

    </p>

    ${conteudoRevisao}
  `;


  resultado.classList.remove(
    "escondido"
  );


  refazer.classList.remove(
    "escondido"
  );


  resultado.scrollIntoView({
    behavior: "smooth",
    block: "center"
  });

}


/* =========================================================
   METAS SEMANAIS
========================================================= */

function configurarMetasSemanais() {

  const form =
    document.getElementById(
      "formMeta"
    );


  const lista =
    document.getElementById(
      "listaMetasSemanais"
    );


  if (form) {

    form.addEventListener(
      "submit",
      function (evento) {

        evento.preventDefault();


        const campoTexto =
          document.getElementById(
            "textoMeta"
          );


        const campoDia =
          document.getElementById(
            "diaMeta"
          );


        const texto =
          campoTexto
            ? campoTexto.value.trim()
            : "";


        const dia =
          campoDia
            ? campoDia.value
            : "";


        if (
          !texto ||
          !dia
        ) {

          return;

        }


        const metas =
          carregarMetas();


        metas.push({
          id: Date.now(),
          texto: texto,
          dia: dia,
          concluida: false
        });


        salvarMetas(
          metas
        );


        form.reset();


        carregarMetasSemanais();

      }
    );

  }


  if (lista) {

    lista.addEventListener(
      "change",
      function (evento) {

        const checkbox =
          evento.target.closest(
            "[data-alternar-meta]"
          );


        if (!checkbox) {
          return;
        }


        const id =
          Number(
            checkbox.dataset.alternarMeta
          );


        alternarMeta(id);

      }
    );


    lista.addEventListener(
      "click",
      function (evento) {

        const botao =
          evento.target.closest(
            "[data-apagar-meta]"
          );


        if (!botao) {
          return;
        }


        const id =
          Number(
            botao.dataset.apagarMeta
          );


        apagarMeta(id);

      }
    );

  }

}


/* =========================================================
   CARREGAR METAS
========================================================= */

function carregarMetas() {

  try {

    const dados =
      localStorage.getItem(
        "metasSemanais"
      );


    if (!dados) {
      return [];
    }


    return JSON.parse(dados);

  } catch (erro) {

    return [];

  }

}


/* =========================================================
   SALVAR METAS
========================================================= */

function salvarMetas(metas) {

  localStorage.setItem(
    "metasSemanais",
    JSON.stringify(metas)
  );

}


/* =========================================================
   MOSTRAR METAS
========================================================= */

function carregarMetasSemanais() {

  const lista =
    document.getElementById(
      "listaMetasSemanais"
    );


  const textoProgresso =
    document.getElementById(
      "textoProgressoMetas"
    );


  const barra =
    document.getElementById(
      "barraProgressoMetas"
    );


  if (
    !lista ||
    !textoProgresso ||
    !barra
  ) {

    return;

  }


  const ordem = {

    "Segunda-feira": 1,

    "Terça-feira": 2,

    "Quarta-feira": 3,

    "Quinta-feira": 4,

    "Sexta-feira": 5,

    "Sábado": 6,

    "Domingo": 7

  };


  const metas =
    carregarMetas();


  metas.sort(
    function (a, b) {

      return (
        (
          ordem[a.dia] ||
          99
        ) -
        (
          ordem[b.dia] ||
          99
        )
      );

    }
  );


  const concluidas =
    metas.filter(
      function (meta) {

        return meta.concluida;

      }
    ).length;


  let percentual = 0;


  if (
    metas.length > 0
  ) {

    percentual =
      Math.round(
        (
          concluidas /
          metas.length
        ) *
        100
      );

  }


  textoProgresso.textContent =
    `${concluidas} de ${metas.length} concluídas (${percentual}%)`;


  barra.style.width =
    `${percentual}%`;


  if (
    metas.length === 0
  ) {

    lista.innerHTML = `
      <div class="sem-metas">

        <p>
          Nenhuma meta criada ainda.
          Adicione sua primeira meta
          para organizar a semana.
        </p>

      </div>
    `;

    return;

  }


  lista.innerHTML =
    metas
      .map(
        function (meta) {

          let classeConcluida =
            "";


          let marcado =
            "";


          if (
            meta.concluida
          ) {

            classeConcluida =
              "meta-concluida";


            marcado =
              "checked";

          }


          return `
            <div
              class="meta-card ${classeConcluida}"
            >

              <label class="meta-check">

                <input
                  type="checkbox"
                  data-alternar-meta="${meta.id}"
                  ${marcado}
                >

                <div>

                  <span class="meta-dia">
                    ${escaparHTML(
                      meta.dia
                    )}
                  </span>

                  <p>
                    ${escaparHTML(
                      meta.texto
                    )}
                  </p>

                </div>

              </label>

              <button
                type="button"
                class="botao-apagar botao-apagar-meta"
                data-apagar-meta="${meta.id}"
              >
                Excluir
              </button>

            </div>
          `;

        }
      )
      .join("");

}


/* =========================================================
   CONCLUIR / DESMARCAR META
========================================================= */

function alternarMeta(id) {

  const metas =
    carregarMetas();


  const atualizadas =
    metas.map(
      function (meta) {

        if (
          meta.id === id
        ) {

          return {
            ...meta,
            concluida:
              !meta.concluida
          };

        }


        return meta;

      }
    );


  salvarMetas(
    atualizadas
  );


  carregarMetasSemanais();

}


/* =========================================================
   APAGAR META
========================================================= */

function apagarMeta(id) {

  const metas =
    carregarMetas();


  const atualizadas =
    metas.filter(
      function (meta) {

        return (
          meta.id !== id
        );

      }
    );


  salvarMetas(
    atualizadas
  );


  carregarMetasSemanais();

}


/* =========================================================
   KANBAN DO PROJETO
========================================================= */

const kanbanInicial = [

  {
    id: "progresso-plano",

    titulo:
      "Controle de progresso do plano de estudos",

    status: "afazer",

    tarefas: [
      "Criar indicador de progresso",
      "Adicionar opção para concluir etapas",
      "Calcular a porcentagem concluída",
      "Salvar o progresso do usuário",
      "Testar a funcionalidade"
    ],

    concluidas: []
  },


  {
    id: "cronometro-foco",

    titulo:
      "Cronômetro de foco",

    status: "afazer",

    tarefas: [
      "Montar a interface do cronômetro",
      "Criar contagem regressiva",
      "Criar botão iniciar",
      "Criar botão pausar e reiniciar",
      "Testar o funcionamento"
    ],

    concluidas: []
  },


  {
    id: "quiz-revisao",

    titulo:
      "Quiz de revisão dos conteúdos estudados",

    status: "concluido",

    tarefas: [
      "Criar perguntas relacionadas aos conteúdos",
      "Criar alternativas de resposta",
      "Definir as respostas corretas",
      "Verificar os acertos do usuário",
      "Calcular a pontuação final",
      "Apresentar o resultado",
      "Indicar conteúdos para revisão",
      "Testar respostas e resultados"
    ],

    concluidas: [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7
    ]
  },


  {
    id: "metas-semanais",

    titulo:
      "Metas semanais de estudo",

    status: "concluido",

    tarefas: [
      "Criar campo para adicionar metas",
      "Criar botão para salvar uma meta",
      "Permitir marcar metas como concluídas",
      "Permitir excluir metas",
      "Salvar as metas no navegador",
      "Testar inclusão, conclusão e exclusão"
    ],

    concluidas: [
      0,
      1,
      2,
      3,
      4,
      5
    ]
  }

];


/* =========================================================
   CONFIGURAR KANBAN
========================================================= */

function configurarKanban() {

  const quadro =
    document.getElementById(
      "quadroKanban"
    );


  const botaoResetar =
    document.getElementById(
      "resetarKanban"
    );


  if (!quadro) {
    return;
  }


  carregarKanbanNaTela();


  quadro.addEventListener(
    "dragstart",
    function (evento) {

      const card =
        evento.target.closest(
          "[data-kanban-id]"
        );


      if (!card) {
        return;
      }


      card.classList.add(
        "arrastando"
      );


      evento.dataTransfer.setData(
        "text/plain",
        card.dataset.kanbanId
      );


      evento.dataTransfer.effectAllowed =
        "move";

    }
  );


  quadro.addEventListener(
    "dragend",
    function (evento) {

      const card =
        evento.target.closest(
          "[data-kanban-id]"
        );


      if (card) {

        card.classList.remove(
          "arrastando"
        );

      }


      document
        .querySelectorAll(
          ".kanban-coluna"
        )
        .forEach(
          function (coluna) {

            coluna.classList.remove(
              "kanban-destino"
            );

          }
        );

    }
  );


  quadro.addEventListener(
    "dragover",
    function (evento) {

      const coluna =
        evento.target.closest(
          ".kanban-coluna"
        );


      if (!coluna) {
        return;
      }


      evento.preventDefault();


      document
        .querySelectorAll(
          ".kanban-coluna"
        )
        .forEach(
          function (item) {

            item.classList.remove(
              "kanban-destino"
            );

          }
        );


      coluna.classList.add(
        "kanban-destino"
      );

    }
  );


  quadro.addEventListener(
    "drop",
    function (evento) {

      const coluna =
        evento.target.closest(
          ".kanban-coluna"
        );


      if (!coluna) {
        return;
      }


      evento.preventDefault();


      const id =
        evento.dataTransfer.getData(
          "text/plain"
        );


      const novoStatus =
        coluna.dataset.status;


      moverCartaoKanban(
        id,
        novoStatus
      );

    }
  );


  quadro.addEventListener(
    "change",
    function (evento) {

      const seletorStatus =
        evento.target.closest(
          "[data-status-card]"
        );


      if (seletorStatus) {

        moverCartaoKanban(
          seletorStatus.dataset.statusCard,
          seletorStatus.value
        );

        return;

      }


      const tarefa =
        evento.target.closest(
          "[data-tarefa-kanban]"
        );


      if (tarefa) {

        alternarTarefaKanban(
          tarefa.dataset.kanbanCard,
          Number(
            tarefa.dataset.tarefaKanban
          ),
          tarefa.checked
        );

      }

    }
  );


  if (botaoResetar) {

    botaoResetar.addEventListener(
      "click",
      function () {

        localStorage.removeItem(
          "kanbanRotaEstudos"
        );


        carregarKanbanNaTela();

      }
    );

  }

}


/* =========================================================
   CARREGAR KANBAN
========================================================= */

function carregarKanban() {

  try {

    const salvo =
      localStorage.getItem(
        "kanbanRotaEstudos"
      );


    if (!salvo) {

      return JSON.parse(
        JSON.stringify(
          kanbanInicial
        )
      );

    }


    const dados =
      JSON.parse(salvo);


    if (!Array.isArray(dados)) {

      return JSON.parse(
        JSON.stringify(
          kanbanInicial
        )
      );

    }


    return dados;

  } catch (erro) {

    return JSON.parse(
      JSON.stringify(
        kanbanInicial
      )
    );

  }

}


/* =========================================================
   SALVAR KANBAN
========================================================= */

function salvarKanban(cartoes) {

  localStorage.setItem(
    "kanbanRotaEstudos",
    JSON.stringify(cartoes)
  );

}


/* =========================================================
   MOSTRAR KANBAN
========================================================= */

function carregarKanbanNaTela() {

  const cartoes =
    carregarKanban();


  const statusDisponiveis = [
    "afazer",
    "fazendo",
    "testando",
    "concluido"
  ];


  statusDisponiveis.forEach(
    function (status) {

      const lista =
        document.querySelector(
          `[data-lista-kanban="${status}"]`
        );


      const contador =
        document.querySelector(
          `[data-contador="${status}"]`
        );


      if (!lista) {
        return;
      }


      const cartoesDaColuna =
        cartoes.filter(
          function (cartao) {

            return (
              cartao.status === status
            );

          }
        );


      if (contador) {

        contador.textContent =
          cartoesDaColuna.length;

      }


      if (
        cartoesDaColuna.length === 0
      ) {

        lista.innerHTML = `
          <div class="kanban-vazio">
            Nenhuma tarefa nesta etapa.
          </div>
        `;

        return;

      }


      lista.innerHTML =
        cartoesDaColuna
          .map(
            function (cartao) {

              return montarCartaoKanban(
                cartao
              );

            }
          )
          .join("");

    }
  );

}


/* =========================================================
   CRIAR CARTÃO
========================================================= */

function montarCartaoKanban(cartao) {

  const nomesStatus = {

    afazer:
      "A Fazer",

    fazendo:
      "Fazendo",

    testando:
      "Testando",

    concluido:
      "Concluído"

  };


  const tarefasConcluidas =
    Array.isArray(
      cartao.concluidas
    )
      ? cartao.concluidas
      : [];


  const total =
    cartao.tarefas.length;


  const feitas =
    tarefasConcluidas.length;


  const tarefasHTML =
    cartao.tarefas
      .map(
        function (
          tarefa,
          indice
        ) {

          const marcada =
            tarefasConcluidas.includes(
              indice
            )
              ? "checked"
              : "";


          return `
            <label class="kanban-tarefa">

              <input
                type="checkbox"
                data-kanban-card="${cartao.id}"
                data-tarefa-kanban="${indice}"
                ${marcada}
              >

              <span>
                ${escaparHTML(tarefa)}
              </span>

            </label>
          `;

        }
      )
      .join("");


  const opcoesStatus =
    Object.keys(
      nomesStatus
    )
      .map(
        function (status) {

          const selecionado =
            cartao.status === status
              ? "selected"
              : "";


          return `
            <option
              value="${status}"
              ${selecionado}
            >
              ${nomesStatus[status]}
            </option>
          `;

        }
      )
      .join("");


  return `
    <article
      class="kanban-card"
      draggable="true"
      data-kanban-id="${cartao.id}"
    >

      <div class="kanban-card-topo">

        <span class="kanban-etiqueta">
          ${feitas}/${total} tarefas
        </span>


        <span
          class="kanban-arrastar"
          title="Arraste o cartão"
        >
          ⋮⋮
        </span>

      </div>


      <h4>
        ${escaparHTML(
          cartao.titulo
        )}
      </h4>


      <div class="kanban-checklist">

        ${tarefasHTML}

      </div>


      <label class="kanban-status-mobile">

        Status:

        <select
          data-status-card="${cartao.id}"
        >

          ${opcoesStatus}

        </select>

      </label>

    </article>
  `;

}


/* =========================================================
   MOVER CARTÃO
========================================================= */

function moverCartaoKanban(
  id,
  novoStatus
) {

  const statusValidos = [
    "afazer",
    "fazendo",
    "testando",
    "concluido"
  ];


  if (
    !statusValidos.includes(
      novoStatus
    )
  ) {

    return;

  }


  const cartoes =
    carregarKanban();


  const atualizados =
    cartoes.map(
      function (cartao) {

        if (
          cartao.id === id
        ) {

          return {

            ...cartao,

            status:
              novoStatus

          };

        }


        return cartao;

      }
    );


  salvarKanban(
    atualizados
  );


  carregarKanbanNaTela();

}


/* =========================================================
   CHECKLIST DOS CARTÕES
========================================================= */

function alternarTarefaKanban(
  id,
  indice,
  concluida
) {

  const cartoes =
    carregarKanban();


  const atualizados =
    cartoes.map(
      function (cartao) {

        if (
          cartao.id !== id
        ) {

          return cartao;

        }


        const concluidas =
          Array.isArray(
            cartao.concluidas
          )
            ? [
                ...cartao.concluidas
              ]
            : [];


        const jaExiste =
          concluidas.includes(
            indice
          );


        if (
          concluida &&
          !jaExiste
        ) {

          concluidas.push(
            indice
          );

        }


        if (
          !concluida &&
          jaExiste
        ) {

          const posicao =
            concluidas.indexOf(
              indice
            );


          concluidas.splice(
            posicao,
            1
          );

        }


        concluidas.sort(
          function (a, b) {

            return a - b;

          }
        );


        return {

          ...cartao,

          concluidas:
            concluidas

        };

      }
    );


  salvarKanban(
    atualizados
  );


  carregarKanbanNaTela();

}


/* =========================================================
   PROTEÇÃO DE TEXTO HTML
========================================================= */

function escaparHTML(texto) {

  return String(
    texto ?? ""
  )

    .replace(
      /&/g,
      "&amp;"
    )

    .replace(
      /</g,
      "&lt;"
    )

    .replace(
      />/g,
      "&gt;"
    )

    .replace(
      /"/g,
      "&quot;"
    )

    .replace(
      /'/g,
      "&#039;"
    );

}
