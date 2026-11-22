const operationalFlow = [
  "Visualizar os veículos",
  "Acompanhar rotas e localização",
  "Verificar o status operacional",
  "Analisar tempos e entregas",
  "Consultar indicadores",
  "Avaliar eventos de segurança",
  "Apoiar a tomada de decisão",
];

const modules = [
  {
    title: "Rastreabilidade e geofencing",
    description:
      "Visualização geográfica dos ativos, das rotas simuladas e do status operacional de cada veículo.",
    technologies: [
      "Leaflet.js",
      "Mapas interativos",
      "Geolocalização simulada",
    ],
  },
  {
    title: "Gestão de produtividade",
    description:
      "Painel para acompanhar tempos de operação, paradas, entregas e situação dos veículos.",
    technologies: [
      "JavaScript",
      "Status operacional",
      "Controle de entregas",
    ],
  },
  {
    title: "Segurança e prevenção de perdas",
    description:
      "Interface demonstrativa de câmeras embarcadas e registros de vídeo para apoiar a proteção da carga e do motorista.",
    technologies: [
      "CFTV simulado",
      "Auditoria visual",
      "Segurança patrimonial",
    ],
  },
  {
    title: "Torre de Controle e BI",
    description:
      "Dashboard com indicadores para acompanhar entregas, verificações de segurança e tempo médio de trânsito.",
    technologies: [
      "Chart.js",
      "Indicadores",
      "Visualização de dados",
    ],
  },
];

const operationalResources = [
  "Mapa interativo com veículos e rotas",
  "Visualização do status rodando ou parado",
  "Acompanhamento do tempo de operação",
  "Controle simulado de entregas",
  "Painel individual por veículo",
  "Indicadores de desempenho logístico",
  "Tempo médio de trânsito",
  "Médias de entrega",
  "Verificações de segurança",
  "Interface simulada de câmeras embarcadas",
  "Consulta demonstrativa de filmagens anteriores",
  "Experiência responsiva",
];

const strategicBenefits = [
  {
    title: "Visibilidade operacional",
    description:
      "Reúne localização, situação da frota e indicadores em uma visão centralizada.",
  },
  {
    title: "Decisão baseada em dados",
    description:
      "Apresenta informações visuais que podem apoiar a identificação de atrasos, paradas e desvios.",
  },
  {
    title: "Prevenção de perdas",
    description:
      "Demonstra como informações logísticas e protocolos de segurança podem ser apresentados em conjunto.",
  },
  {
    title: "Integração entre áreas",
    description:
      "Conecta conceitos de logística, redes, telemetria, Business Intelligence e segurança patrimonial.",
  },
];

const monitoredData = [
  "Identificação do veículo",
  "Placa",
  "Localização simulada",
  "Rota atribuída",
  "Status de operação",
  "Tempo em movimento",
  "Tempo de parada",
  "Quantidade de entregas",
  "Eventos de segurança",
  "Indicadores consolidados",
];

const responsibilities = [
  "Definição do conceito de Torre de Controle",
  "Pesquisa sobre monitoramento logístico",
  "Organização dos módulos operacionais",
  "Definição das informações dos veículos",
  "Estruturação do painel de rotas",
  "Integração do mapa interativo",
  "Definição dos indicadores",
  "Criação da experiência de monitoramento",
  "Modelagem da interface de segurança",
  "Desenvolvimento da simulação de CFTV",
  "Integração dos gráficos de desempenho",
  "Testes funcionais",
  "Testes de responsividade",
  "Revisão dos textos",
  "Documentação do projeto",
  "Publicação da aplicação",
];

const technologies = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "Leaflet.js",
  "Chart.js",
  "Mapas interativos",
  "Visualização de dados",
  "GitHub Pages",
];

const limitations = [
  "As localizações e movimentações são simuladas",
  "Não existe conexão com rastreadores veiculares reais",
  "Não há integração com GPS, TMS ou sistemas de telemetria",
  "As câmeras e filmagens fazem parte de uma demonstração visual",
  "Os indicadores utilizam dados simulados",
  "Não há autenticação de usuários",
  "Não existe armazenamento permanente em banco de dados",
  "Não substitui uma plataforma profissional de gestão de frotas",
  "Não realiza roteirização real",
  "Não envia alertas automáticos de eventos críticos",
];

const nextSteps = [
  "Criar novos cenários de transporte",
  "Adicionar diferentes tipos de veículos",
  "Implementar histórico de rotas simuladas",
  "Criar alertas de atraso e parada excessiva",
  "Adicionar cercas geográficas configuráveis",
  "Permitir comparação entre veículos",
  "Ampliar os indicadores operacionais",
  "Adicionar filtros por rota, status e período",
  "Criar relatórios demonstrativos",
  "Melhorar a acessibilidade",
  "Adicionar testes automatizados",
  "Evoluir a experiência mobile",
  "Criar modo de demonstração guiada",
  "Permitir exportação dos indicadores",
];

function FeatureList({
  items,
}: {
  items: string[];
}) {
  return (
    <ul className="feature-list">
      {items.map((item) => (
        <li key={item}>
          {item}
        </li>
      ))}
    </ul>
  );
}

export function LogiTrackCaseStudy() {
  return (
    <>
      <section className="section">
        <div className="container narrow">
          <p className="eyebrow">
            LogiTrack
          </p>

          <h2>
            Simulador de Torre de Controle e telemetria de frotas
          </h2>

          <p className="case-lead">
            Uma aplicação demonstrativa que conecta logística, localização,
            indicadores operacionais, redes e segurança patrimonial em um
            ambiente visual de monitoramento.
          </p>

          <p>
            O projeto foi criado para representar o funcionamento básico de
            uma Torre de Controle logística, reunindo rotas, status dos
            veículos, produtividade, indicadores e recursos simulados de
            segurança.
          </p>

          <blockquote className="case-highlight">
            Como reunir localização, produtividade e segurança em uma visão
            operacional centralizada?
          </blockquote>

          <p>
            O LogiTrack utiliza dados simulados e possui finalidade
            educacional e demonstrativa. Ele não se conecta a veículos,
            rastreadores ou câmeras reais.
          </p>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container case-grid">
          <article>
            <p className="eyebrow">
              Problema
            </p>

            <h2>
              Informações dispersas reduzem a visibilidade
            </h2>

            <p>
              Operações de transporte podem envolver localização dos veículos,
              status das rotas, tempos de parada, cumprimento de entregas,
              indicadores e eventos de segurança.
            </p>

            <p>
              Quando essas informações são apresentadas separadamente, torna-se
              mais difícil construir uma visão geral da operação e identificar
              situações que exigem atenção.
            </p>
          </article>

          <article>
            <p className="eyebrow">
              Solução
            </p>

            <h2>
              Uma visão integrada da operação simulada
            </h2>

            <p>
              O LogiTrack apresenta veículos, rotas, indicadores e recursos de
              segurança em uma interface centralizada.
            </p>

            <p>
              A proposta é demonstrar como uma Torre de Controle pode reunir o
              fluxo físico da operação e o fluxo digital das informações para
              apoiar o acompanhamento logístico.
            </p>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">
              Fluxo operacional
            </p>

            <h2>
              Do monitoramento ao apoio à decisão
            </h2>

            <p>
              A experiência conduz o usuário por diferentes níveis de
              informação, começando pela localização dos ativos e avançando
              até os indicadores consolidados.
            </p>
          </div>

          <ol className="case-flow">
            {operationalFlow.map((step, index) => (
              <li key={step}>
                <span>
                  {String(index + 1).padStart(2, "0")}
                </span>

                <strong>
                  {step}
                </strong>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">
              Módulos
            </p>

            <h2>
              Quatro perspectivas da operação logística
            </h2>
          </div>

          <div className="grid grid-2">
            {modules.map((module) => (
              <article
                className="case-panel"
                key={module.title}
              >
                <h3>
                  {module.title}
                </h3>

                <p>
                  {module.description}
                </p>

                <ul
                  className="tech-list"
                  aria-label={`Recursos do módulo ${module.title}`}
                >
                  {module.technologies.map((technology) => (
                    <li key={technology}>
                      {technology}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container case-grid">
          <article>
            <p className="eyebrow">
              Rastreabilidade
            </p>

            <h2>
              Mapa interativo e situação dos ativos
            </h2>

            <p>
              O módulo geográfico utiliza Leaflet.js para apresentar os
              veículos e suas rotas em um mapa interativo.
            </p>

            <p>
              Cada ativo pode demonstrar informações como localização, placa,
              status e tempo de operação, ajudando a representar uma visão
              básica de rastreabilidade.
            </p>
          </article>

          <article>
            <p className="eyebrow">
              Dados monitorados
            </p>

            <h2>
              Informações reunidas no painel
            </h2>

            <FeatureList items={monitoredData} />
          </article>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container case-grid">
          <article>
            <p className="eyebrow">
              Produtividade
            </p>

            <h2>
              Tempos, paradas e entregas
            </h2>

            <p>
              O painel de rotas demonstra como informações operacionais podem
              ser organizadas por veículo.
            </p>

            <p>
              O usuário consegue observar o status do ativo, o tempo em
              movimento, as paradas e a quantidade simulada de entregas,
              formando uma visão básica de produtividade.
            </p>
          </article>

          <article>
            <p className="eyebrow">
              Torre de Controle
            </p>

            <h2>
              Indicadores visuais com Chart.js
            </h2>

            <p>
              O módulo de Business Intelligence utiliza gráficos para
              consolidar informações e tornar a leitura da operação mais
              rápida.
            </p>

            <FeatureList
              items={[
                "Médias de entrega",
                "Tempo médio de trânsito",
                "Situação geral dos veículos",
                "Verificações de segurança",
                "Indicadores consolidados",
              ]}
            />
          </article>
        </div>
      </section>

      <section className="section">
        <div className="container case-grid">
          <article>
            <p className="eyebrow">
              Segurança integrada
            </p>

            <h2>
              Monitoramento demonstrativo de CFTV
            </h2>

            <p>
              O projeto inclui uma interface simulada de câmeras embarcadas e
              consultas a registros anteriores.
            </p>

            <p>
              O objetivo é representar como dados de segurança patrimonial
              poderiam complementar as informações logísticas em situações de
              prevenção de perdas, auditoria e análise de ocorrências.
            </p>
          </article>

          <article>
            <p className="eyebrow">
              Escopo
            </p>

            <h2>
              Uma demonstração visual, não um sistema de vigilância
            </h2>

            <p>
              As câmeras, filmagens e eventos apresentados fazem parte da
              simulação. A aplicação não acessa dispositivos reais nem coleta
              imagens externas.
            </p>

            <p className="callout">
              O módulo existe para demonstrar a integração conceitual entre
              logística, tecnologia de redes e prevenção de perdas.
            </p>
          </article>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">
              Recursos
            </p>

            <h2>
              Principais entregas do simulador
            </h2>
          </div>

          <div className="case-panel">
            <FeatureList items={operationalResources} />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">
              Diferenciais
            </p>

            <h2>
              Tecnologia aplicada à visibilidade operacional
            </h2>
          </div>

          <div className="grid grid-4">
            {strategicBenefits.map((benefit) => (
              <article
                className="card"
                key={benefit.title}
              >
                <h3>
                  {benefit.title}
                </h3>

                <p>
                  {benefit.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container case-grid">
          <article>
            <p className="eyebrow">
              Meu papel
            </p>

            <h2>
              Conceito, integração e experiência visual
            </h2>

            <FeatureList items={responsibilities} />
          </article>

          <article>
            <p className="eyebrow">
              Uso da IA
            </p>

            <h2>
              Desenvolvimento assistido com validação humana
            </h2>

            <p>
              A inteligência artificial foi utilizada como apoio na
              estruturação da interface, implementação inicial dos módulos,
              investigação de problemas e organização da documentação.
            </p>

            <p className="callout">
              O conceito do produto, a seleção dos módulos, a definição dos
              indicadores, os testes funcionais e a revisão do resultado
              permaneceram sob responsabilidade humana.
            </p>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="container case-grid">
          <article>
            <p className="eyebrow">
              Tecnologias
            </p>

            <h2>
              Tecnologias utilizadas
            </h2>

            <ul className="tech-list case-tech-list">
              {technologies.map((technology) => (
                <li key={technology}>
                  {technology}
                </li>
              ))}
            </ul>
          </article>

          <article>
            <p className="eyebrow">
              Status
            </p>

            <h2>
              Simulador funcional e disponível
            </h2>

            <p>
              A aplicação possui mapa, veículos simulados, status operacional,
              painel de rotas, indicadores e uma interface demonstrativa de
              segurança.
            </p>

            <p>
              Seu objetivo é apoiar estudos, demonstrações técnicas e a
              apresentação de conceitos relacionados à Logística 4.0.
            </p>

            <span className="project-status-badge status-available">
              Disponível para demonstração
            </span>
          </article>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container case-grid">
          <article>
            <p className="eyebrow">
              Limitações atuais
            </p>

            <h2>
              Transparência sobre a simulação
            </h2>

            <FeatureList items={limitations} />
          </article>

          <article>
            <p className="eyebrow">
              Próximas melhorias
            </p>

            <h2>
              Evolução da experiência operacional
            </h2>

            <FeatureList items={nextSteps} />
          </article>
        </div>
      </section>

      <section className="section">
        <div className="container narrow result-section">
          <p className="eyebrow">
            Resultado
          </p>

          <h2>
            Uma visão integrada de transporte, dados e segurança
          </h2>

          <p className="case-lead">
            O LogiTrack demonstra como informações de localização,
            produtividade, indicadores e segurança podem ser organizadas em
            uma experiência única de monitoramento.
          </p>

          <div
            className="learning-sequence"
            aria-label="Fluxo conceitual do LogiTrack"
          >
            <span>Veículo</span>
            <span aria-hidden="true">→</span>
            <span>Localização</span>
            <span aria-hidden="true">→</span>
            <span>Status</span>
            <span aria-hidden="true">→</span>
            <span>Indicadores</span>
            <span aria-hidden="true">→</span>
            <span>Segurança</span>
            <span aria-hidden="true">→</span>
            <span>Decisão</span>
          </div>

          <blockquote className="final-quote">
            “Transforme dados de transporte em uma visão operacional mais
            clara, integrada e orientada à tomada de decisão.”
          </blockquote>
        </div>
      </section>
    </>
  );
}