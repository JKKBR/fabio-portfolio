import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    slug: "gerador-planilhas-ia",
    title: "Gerador de Planilhas Administrativas",
    category: "Micro SaaS e IA",
    description:
      "Transforma necessidades descritas em português em planilhas Excel editáveis, validadas e prontas para revisão.",
    featured: true,
    status: "Em desenvolvimento",
    technologies: [
      "Next.js",
      "TypeScript",
      "Gemini API",
      "ExcelJS",
      "Zod",
      "Vitest",
    ],
    problem:
      "Criar planilhas administrativas personalizadas exige conhecimento de estrutura, fórmulas e Excel. Modelos prontos raramente correspondem ao processo real do usuário.",
    solution:
      "Uma aplicação que recebe o processo em linguagem natural, gera a estrutura, valida o resultado, permite revisão humana e exporta um arquivo Excel editável.",
    role:
      "Definição do produto, priorização, testes funcionais, validação em Excel, investigação de incompatibilidades, decisões de arquitetura, gestão do repositório e documentação.",
    aiUse:
      "Desenvolvimento assistido por IA, com revisão humana, validação estrutural, testes automatizados e decisões técnicas manuais.",
    resources: [
      "Múltiplas abas",
      "Fórmulas por linha e por célula",
      "Validação com Zod",
      "Confirmação do entendimento",
      "Relatório de qualidade",
      "Exportação XLSX",
      "Testes automatizados",
    ],
    nextSteps: [
      "Correção automática de estruturas inválidas",
      "Perguntas de esclarecimento",
      "Testes reais de arquivos XLSX",
      "Limites de uso",
      "Segurança de fórmulas",
    ],
  },
{
  slug: "cenarilog-academy",
  title: "CenariLog Academy",
  category: "Logística e Educação",
  description:
    "Simulador educacional para estudar indicadores, estoque, planejamento, riscos e decisões logísticas por meio da comparação de cenários.",
  featured: true,
  status: "Disponível",
  technologies: [
    "Next.js",
    "React",
    "TypeScript",
    "Armazenamento local",
    "CSV",
    "JSON",
    "Vercel",
  ],
  problem:
    "Indicadores e conceitos logísticos costumam ser estudados separadamente, dificultando a compreensão de como uma decisão pode afetar diferentes áreas da operação.",
  solution:
    "Um laboratório educacional em que o usuário registra uma operação, cria cenários, altera condições e observa os efeitos sobre atendimento, estoque, prazo, custo e risco.",
  role:
    "Definição do produto educacional, organização do fluxo de aprendizagem, seleção dos indicadores, modelagem dos cenários, validação dos cálculos, testes e documentação.",
  aiUse:
    "Desenvolvimento assistido por IA, com validação dos cálculos, testes funcionais, revisão didática e decisões humanas.",
  resources: [
    "OTIF, OTD e Fill Rate",
    "Planejamento de reposição",
    "Curva ABC",
    "Simulação mensal",
    "Matriz de riscos",
    "Decisões operacionais",
    "Otimizador de cenários",
    "Guia interativo",
    "Backup JSON",
  ],
  nextSteps: [
    "Níveis intermediário e avançado",
    "Novos desafios operacionais",
    "Relatórios educacionais detalhados",
    "Melhorias de acessibilidade",
    "Novos testes automatizados",
  ],
  liveUrl:
    "https://cenarilog-academy.vercel.app/",
},
  {
  slug: "curriculo-ats",
  title: "Currículos Profissionais",
  category: "Carreira",
  description:
    "Aplicação web gratuita para criar, revisar e exportar currículos diretamente no navegador, sem cadastro obrigatório.",
  featured: true,
  status: "Disponível",
  technologies: [
    "HTML",
    "CSS",
    "JavaScript",
    "jsPDF",
  ],
  problem:
    "Durante a busca por emprego, encontrei ferramentas com recursos pagos, limitações inesperadas, cadastro obrigatório ou publicidade invasiva.",
  solution:
    "Uma aplicação direta e transparente para preencher, pré-visualizar e exportar currículos em PDF, com possibilidade de salvar e recuperar os dados em TXT.",
  role:
    "Definição do produto, organização das seções, desenvolvimento da interface, pré-visualização, exportação em PDF, importação e exportação TXT, testes e documentação.",
  aiUse:
    "Desenvolvimento assistido por IA, com decisões de produto, testes funcionais, validação prática e revisão humana.",
  resources: [
    "Formulário por seções",
    "Pré-visualização em tempo real",
    "Múltiplas experiências",
    "Estimativa de páginas",
    "Geração de PDF",
    "Exportação TXT",
    "Importação TXT",
    "Sem cadastro obrigatório",
  ],
  nextSteps: [
    "Novos modelos visuais",
    "Mais opções de personalização",
    "Melhorias de acessibilidade",
    "Histórico local de versões",
    "Testes automatizados",
  ],
  liveUrl:
    "https://criadordecurriculo-nine.vercel.app/",
},
 {
  slug: "sistema-inventario",
  title: "Sistema de Gestão de Inventário",
  category: "Logística",
  description:
    "Sistema de inventário e vitrine digital criado para organizar produtos usados, controlar sua disponibilidade e facilitar o contato com os interessados.",
  featured: true,
  status: "Disponível",
  technologies: [
    "HTML",
    "CSS",
    "JavaScript",
    "Supabase",
    "Cloudinary",
  ],
  problem:
    "Fotografias e informações dos produtos eram apresentadas de forma dispersa, dificultando o controle da disponibilidade e a organização da vitrine.",
  solution:
    "Uma plataforma com painel administrativo, cadastro de produtos, gerenciamento de imagens, estados de disponibilidade, filtros e vitrine digital.",
  role:
    "Levantamento da necessidade, definição do produto, modelagem do estoque, desenvolvimento, integrações, testes, validação e publicação.",
  aiUse:
    "Desenvolvimento assistido por IA, com definição do fluxo, testes funcionais, validação prática e decisões sob responsabilidade humana.",
  resources: [
    "Cadastro de produtos",
    "Gerenciamento de imagens",
    "Controle de entradas e saídas",
    "Status disponível, reservado e vendido",
    "Filtros",
    "Vitrine digital",
    "Contato por WhatsApp",
  ],
  nextSteps: [
    "Histórico de movimentações",
    "Relatórios de estoque",
    "Indicadores de vendas",
    "Alertas de reservas",
    "Testes automatizados",
    "Melhorias de acessibilidade",
  ],
  liveUrl:
    "https://artesanatoslucias.vercel.app/",
},
  {
  slug: "logitrack",
  title: "LogiTrack",
  category: "Logística",
  description:
    "Simulador de Torre de Controle que integra rastreabilidade, produtividade, indicadores e segurança patrimonial em uma visão operacional.",
  status: "Disponível",
  technologies: [
    "HTML",
    "CSS",
    "JavaScript",
    "Leaflet.js",
    "Chart.js",
  ],
  problem:
    "Informações de localização, produtividade, entregas e segurança podem ficar dispersas, dificultando a construção de uma visão geral da operação.",
  solution:
    "Uma aplicação demonstrativa que reúne mapa, veículos, rotas, status, indicadores e recursos simulados de CFTV em uma interface centralizada.",
  role:
    "Definição do conceito, organização dos módulos, integração do mapa, modelagem dos indicadores, criação da experiência de monitoramento, testes e documentação.",
  aiUse:
    "Desenvolvimento assistido por IA, com definição dos módulos, validação funcional, revisão visual e decisões técnicas sob responsabilidade humana.",
  resources: [
    "Mapa interativo",
    "Veículos simulados",
    "Status operacional",
    "Painel de rotas",
    "Indicadores logísticos",
    "Telemetria simulada",
    "Interface de CFTV",
  ],
  nextSteps: [
    "Histórico de rotas",
    "Alertas operacionais",
    "Cercas geográficas configuráveis",
    "Comparação entre veículos",
    "Relatórios demonstrativos",
    "Testes automatizados",
  ],
  liveUrl:
    "https://jkkbr.github.io/simulador-de-frota/",
},
  {
    slug: "gerador-diagramas",
    title: "Gerador de Diagramas",
    category: "Produtividade",
    description:
      "Editor leve para criar fluxos, conectar blocos e exportar diagramas em PNG.",
    status: "Disponível",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Canvas",
    ],
    problem:
      "Criar diagramas simples pode exigir ferramentas maiores e mais complexas do que a necessidade real.",
    solution:
      "Um editor direto para montar blocos, conexões e fluxos visuais no navegador.",
    role:
      "Concepção, desenvolvimento da interação e testes de usabilidade.",
    resources: [
      "Retângulos e círculos",
      "Conexões direcionais",
      "Personalização visual",
      "Arrastar e soltar",
      "Exportação PNG",
    ],
    liveUrl:
      "https://jkkbr.github.io/gerador-de-diagrama/",
  },
  {
    slug: "passaporte-produto-usado",
    title: "Passaporte do Produto Usado",
    category: "Produtividade",
    description:
      "Aplicação web estática para cadastrar produtos usados e gerar certificados em PDF com fotografias, QR Code, histórico local e backup em JSON.",
    status: "Demonstração",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "localStorage",
      "jsPDF",
      "QRCode.js",
    ],
    problem:
      "Pequenos comerciantes e vendedores independentes nem sempre possuem uma forma organizada de reunir procedência, características, condição e dados da venda de produtos usados.",
    solution:
      "Uma aplicação executada no navegador que gera certificados declaratórios em PDF com fotografias, QR Code, dados do comprador e identidade da empresa.",
    role:
      "Definição do produto, arquitetura, experiência, estrutura de dados, estratégia de backup, validação do PDF, testes e documentação.",
    aiUse:
      "Desenvolvimento assistido por IA, com decisões de produto, revisão visual, validação funcional e ajustes realizados com supervisão humana.",
    resources: [
      "Certificado A4",
      "Fotografias",
      "QR Code",
      "Histórico local",
      "Pesquisa e edição",
      "Exportação CSV",
      "Backup JSON",
    ],
    liveUrl:
      "https://jkkbr.github.io/PassaporteProdutoUsado/",
  },
  {
    slug: "rota-a-rota",
    title: "Rota a Rota",
    category: "Experimental",
    description:
      "Projeto pessoal para organizar lugares e rotas de interesse.",
    status: "Em desenvolvimento",
    technologies: [
      "A definir",
    ],
    problem:
      "Organizar referências de lugares e trajetos pessoais de forma simples.",
    solution:
      "Um protótipo para registrar e consultar rotas e locais.",
    role:
      "Concepção e exploração inicial.",
    resources: [
      "Projeto de uso pessoal",
    ],
    liveUrl:
      "https://jkkbr.github.io/rotaarota/",
  },
];

export const getProjectBySlug = (slug: string) =>
  projects.find((project) => project.slug === slug);