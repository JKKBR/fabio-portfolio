const creationFlow = [
  "Adicionar as formas",
  "Renomear os blocos",
  "Organizar o diagrama",
  "Conectar as etapas",
  "Personalizar o visual",
  "Revisar o fluxo",
  "Exportar em PNG",
];

const mainFeatures = [
  "Criação de retângulos",
  "Criação de círculos",
  "Movimentação livre dos blocos",
  "Seleção e desseleção de formas",
  "Renomeação dos blocos",
  "Conexão entre duas formas",
  "Setas direcionais",
  "Exclusão de elementos",
  "Personalização individual das cores",
  "Configuração global da fonte",
  "Configuração da cor dos textos",
  "Configuração da cor das setas",
  "Personalização do fundo",
  "Exportação do diagrama em PNG",
];

const commands = [
  {
    command: "Clique simples",
    description: "Seleciona ou desseleciona uma forma no espaço de trabalho.",
  },
  {
    command: "Shift + clique",
    description: "Abre o seletor para alterar individualmente a cor da forma.",
  },
  {
    command: "Botão direito",
    description: "Permite renomear o texto apresentado dentro da forma.",
  },
  {
    command: "Arrastar",
    description:
      "Move a forma para outra posição dentro do espaço de trabalho.",
  },
  {
    command: "Selecionar duas formas",
    description:
      "Prepara os elementos para criação de uma conexão direcionada.",
  },
  {
    command: "Conectar selecionados",
    description: "Cria uma seta que aponta para a última forma selecionada.",
  },
  {
    command: "Excluir selecionado",
    description: "Remove a forma atualmente selecionada.",
  },
  {
    command: "Salvar em PNG",
    description: "Exporta o diagrama criado como um arquivo de imagem.",
  },
];

const customizationResources = [
  {
    title: "Formas",
    description:
      "Retângulos e círculos podem representar atividades, decisões, pessoas, sistemas ou etapas.",
  },
  {
    title: "Cores",
    description:
      "Os blocos podem receber cores diferentes para facilitar agrupamentos e classificações.",
  },
  {
    title: "Tipografia",
    description:
      "A fonte e a cor do texto podem ser ajustadas de acordo com a apresentação.",
  },
  {
    title: "Conexões",
    description:
      "As setas indicam a direção das relações e a sequência visual do fluxo.",
  },
  {
    title: "Fundo",
    description:
      "A cor do espaço de trabalho pode ser personalizada para diferentes contextos.",
  },
  {
    title: "Exportação",
    description:
      "O resultado pode ser salvo em PNG para utilização em documentos e apresentações.",
  },
];

const academicUses = [
  "Fluxogramas de processos",
  "Mapeamento de atividades",
  "Representação de etapas de projetos",
  "Diagramas operacionais",
  "Organização visual de ideias",
  "Trabalhos acadêmicos",
  "Atividades extensionistas",
  "Apresentações",
  "Documentação de processos",
];

const responsibilities = [
  "Identificação da necessidade acadêmica",
  "Definição do escopo inicial",
  "Planejamento do espaço de trabalho",
  "Definição dos tipos de formas",
  "Desenvolvimento das interações",
  "Implementação da movimentação dos blocos",
  "Implementação da seleção de elementos",
  "Criação das conexões direcionais",
  "Desenvolvimento das opções de personalização",
  "Implementação da quebra automática de texto",
  "Criação da exportação em PNG",
  "Testes em trabalhos acadêmicos",
  "Reutilização em outras atividades da faculdade",
  "Revisão da experiência de uso",
  "Documentação do projeto",
  "Publicação da aplicação",
];

const technologies = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "Canvas",
  "Eventos de mouse",
  "Manipulação do DOM",
  "Exportação PNG",
  "GitHub Pages",
];

const limitations = [
  "Não possui salvamento automático do arquivo editável",
  "O resultado final é exportado como imagem",
  "Não possui histórico de desfazer e refazer",
  "As conexões dependem da seleção manual das formas",
  "Não possui modelos prontos de diagramas",
  "Não possui colaboração em tempo real",
  "Não possui autenticação",
  "Não sincroniza diagramas entre dispositivos",
  "Não importa diagramas existentes",
  "Não possui alinhamento automático avançado",
  "O uso em telas pequenas pode ser limitado pelo espaço disponível",
];

const nextSteps = [
  "Adicionar salvar e carregar projetos editáveis",
  "Implementar desfazer e refazer",
  "Criar alinhamento automático de formas",
  "Adicionar grade e encaixe de elementos",
  "Permitir redimensionamento manual dos blocos",
  "Criar novos tipos de formas",
  "Adicionar estilos diferentes de conexão",
  "Permitir textos nas setas",
  "Adicionar modelos de fluxogramas",
  "Criar exportação em PDF",
  "Permitir exportação em SVG",
  "Melhorar a navegação por teclado",
  "Ampliar a acessibilidade",
  "Criar testes automatizados",
  "Melhorar a experiência em dispositivos móveis",
];

function FeatureList({ items }: { items: string[] }) {
  return (
    <ul className="feature-list">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export function DiagramGeneratorCaseStudy() {
  return (
    <>
      <section className="section">
        <div className="container narrow">
          <p className="eyebrow">Gerador de Diagramas</p>

          <h2>Criação visual de fluxos diretamente no navegador</h2>

          <p className="case-lead">
            Um editor simples para criar blocos, organizar processos, conectar
            etapas e exportar diagramas como imagens PNG.
          </p>

          <p>
            O projeto nasceu durante uma atividade extensionista da faculdade.
            Eu precisava criar um diagrama para representar visualmente as
            etapas do trabalho e procurei uma forma simples de montar o fluxo
            sem depender de uma ferramenta maior do que a necessidade.
          </p>

          <p>
            Depois da primeira utilização, a ferramenta também foi aproveitada
            em outros trabalhos acadêmicos, tornando-se um recurso reutilizável
            para organizar processos e informações de forma visual.
          </p>

          <blockquote className="case-highlight">
            Como criar diagramas rápidos e personalizados sem depender de uma
            plataforma complexa?
          </blockquote>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container case-grid">
          <article>
            <p className="eyebrow">Problema</p>

            <h2>Uma atividade acadêmica precisava de representação visual</h2>

            <p>
              A atividade extensionista exigia a criação de um diagrama capaz de
              comunicar etapas, relações e sequência de um processo.
            </p>

            <p>
              Ferramentas completas de diagramação podem possuir muitos
              recursos, menus e configurações que não são necessários em uma
              atividade mais simples. Também existe a necessidade de exportar o
              resultado para utilizar em documentos e apresentações.
            </p>
          </article>

          <article>
            <p className="eyebrow">Solução</p>

            <h2>Um editor direto para montar e exportar fluxos</h2>

            <p>
              Desenvolvi uma aplicação web que permite adicionar formas,
              movimentar blocos, alterar textos, criar conexões direcionais e
              personalizar o visual do diagrama.
            </p>

            <p>
              O resultado pode ser exportado em PNG e inserido em trabalhos,
              relatórios, documentos acadêmicos e apresentações.
            </p>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Fluxo de utilização</p>

            <h2>Da primeira forma ao diagrama exportado</h2>

            <p>
              O processo de criação foi organizado para permitir que o usuário
              construa o fluxo progressivamente.
            </p>
          </div>

          <ol className="case-flow">
            {creationFlow.map((step, index) => (
              <li key={step}>
                <span>{String(index + 1).padStart(2, "0")}</span>

                <strong>{step}</strong>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Principais funcionalidades</p>

            <h2>Recursos essenciais para construir o fluxo</h2>
          </div>

          <div className="case-panel">
            <FeatureList items={mainFeatures} />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Interação</p>

            <h2>Comandos diretos no espaço de trabalho</h2>

            <p>
              As principais ações são executadas com o mouse e combinações
              simples de interação.
            </p>
          </div>

          <div className="grid grid-2">
            {commands.map((item) => (
              <article className="diagram-command-card" key={item.command}>
                <span className="diagram-command-name">{item.command}</span>

                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container case-grid">
          <article>
            <p className="eyebrow">Formas e blocos</p>

            <h2>Elementos visualmente adaptáveis</h2>

            <p>
              O usuário pode incluir retângulos e círculos para representar
              diferentes elementos do diagrama.
            </p>

            <p>
              Os blocos possuem largura mínima de 100 pixels e máxima de 200
              pixels. Textos maiores são quebrados automaticamente em múltiplas
              linhas para preservar a leitura.
            </p>
          </article>

          <article>
            <p className="eyebrow">Conexões</p>

            <h2>Relações representadas por setas direcionais</h2>

            <p>
              Para criar uma conexão, o usuário seleciona duas formas e utiliza
              o comando de conexão.
            </p>

            <p>
              A seta é direcionada para a última forma selecionada, permitindo
              representar uma sequência ou relação entre as etapas.
            </p>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Personalização</p>

            <h2>Ajustes visuais sem complexidade excessiva</h2>
          </div>

          <div className="grid grid-3">
            {customizationResources.map((resource) => (
              <article className="card" key={resource.title}>
                <h3>{resource.title}</h3>

                <p>{resource.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container case-grid">
          <article>
            <p className="eyebrow">Exportação</p>

            <h2>Diagrama salvo como imagem PNG</h2>

            <p>
              Depois de organizar os blocos e revisar as conexões, o usuário
              pode exportar o espaço de trabalho como uma imagem.
            </p>

            <p>
              O arquivo PNG pode ser utilizado em documentos, apresentações,
              relatórios e outras entregas acadêmicas.
            </p>
          </article>

          <article>
            <p className="eyebrow">Reutilização</p>

            <h2>De uma atividade extensionista a outros trabalhos</h2>

            <p>
              A primeira versão foi desenvolvida para atender uma atividade
              específica da faculdade.
            </p>

            <p className="callout">
              Como a ferramenta resolvia uma necessidade recorrente de
              representação visual, ela também passou a ser utilizada em outros
              trabalhos acadêmicos.
            </p>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Casos de uso</p>

            <h2>Uma ferramenta simples para diferentes representações</h2>
          </div>

          <div className="case-panel">
            <FeatureList items={academicUses} />
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container case-grid">
          <article>
            <p className="eyebrow">Decisão de produto</p>

            <h2>Resolver a necessidade sem reproduzir uma suíte completa</h2>

            <p>
              O objetivo do projeto não foi competir com ferramentas
              profissionais de diagramação.
            </p>

            <p>
              A prioridade foi criar uma experiência direta para adicionar
              formas, conectá-las, personalizar o visual e exportar o resultado.
            </p>
          </article>

          <article>
            <p className="eyebrow">Aprendizado</p>

            <h2>Interações visuais exigem regras claras</h2>

            <p>
              O desenvolvimento envolveu conceitos de seleção, movimentação,
              posicionamento, conexão e atualização visual dos elementos.
            </p>

            <p className="callout">
              A reutilização em outros trabalhos ajudou a validar que uma
              solução pequena pode gerar valor quando atende uma necessidade
              específica de forma clara.
            </p>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="container case-grid">
          <article>
            <p className="eyebrow">Meu papel</p>

            <h2>Da necessidade acadêmica à ferramenta reutilizável</h2>

            <FeatureList items={responsibilities} />
          </article>

          <article>
            <p className="eyebrow">Uso da IA</p>

            <h2>Desenvolvimento assistido com testes práticos</h2>

            <p>
              A inteligência artificial foi utilizada como apoio na estruturação
              do HTML, CSS e JavaScript, na investigação de problemas e na
              implementação inicial das interações.
            </p>

            <p className="callout">
              A definição do escopo, a organização dos comandos, os testes nos
              trabalhos acadêmicos e a validação do resultado permaneceram sob
              responsabilidade humana.
            </p>
          </article>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container case-grid">
          <article>
            <p className="eyebrow">Tecnologias</p>

            <h2>Tecnologias utilizadas</h2>

            <ul className="tech-list case-tech-list">
              {technologies.map((technology) => (
                <li key={technology}>{technology}</li>
              ))}
            </ul>
          </article>

          <article>
            <p className="eyebrow">Status</p>

            <h2>Aplicação funcional e disponível</h2>

            <p>
              A ferramenta permite criar formas, organizar blocos, conectar
              etapas, personalizar cores e exportar o diagrama em PNG.
            </p>

            <p>
              O projeto já foi utilizado em uma atividade extensionista e em
              outros trabalhos acadêmicos.
            </p>

            <span className="project-status-badge status-available">
              Disponível para utilização
            </span>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="container case-grid">
          <article>
            <p className="eyebrow">Limitações atuais</p>

            <h2>Transparência sobre o escopo</h2>

            <FeatureList items={limitations} />
          </article>

          <article>
            <p className="eyebrow">Próximas melhorias</p>

            <h2>Evolução da edição e da exportação</h2>

            <FeatureList items={nextSteps} />
          </article>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container narrow result-section">
          <p className="eyebrow">Resultado</p>

          <h2>Uma necessidade acadêmica transformada em ferramenta</h2>

          <p className="case-lead">
            O Gerador de Diagramas começou como uma solução para uma atividade
            extensionista e se tornou um recurso reutilizável em outros
            trabalhos da faculdade.
          </p>

          <div
            className="learning-sequence"
            aria-label="Fluxo do Gerador de Diagramas"
          >
            <span>Criar</span>
            <span aria-hidden="true">→</span>
            <span>Organizar</span>
            <span aria-hidden="true">→</span>
            <span>Conectar</span>
            <span aria-hidden="true">→</span>
            <span>Personalizar</span>
            <span aria-hidden="true">→</span>
            <span>Exportar</span>
          </div>

          <blockquote className="final-quote">
            “Uma ferramenta simples para transformar processos e ideias em
            representações visuais.”
          </blockquote>
        </div>
      </section>
    </>
  );
}
