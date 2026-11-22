const learningFlow = [
  "Entender os dados de entrada",
  "Registrar a operação atual",
  "Criar um cenário simulado",
  "Alterar uma variável por vez",
  "Comparar indicadores e metas",
  "Registrar uma conclusão",
  "Salvar ou exportar o cenário",
];

const indicators = [
  {
    name: "OTIF",
    description:
      "Percentual de pedidos entregues simultaneamente no prazo e completos.",
  },
  {
    name: "OTD",
    description: "Percentual de pedidos entregues dentro do prazo acordado.",
  },
  {
    name: "Fill Rate",
    description: "Percentual das unidades solicitadas que foram atendidas.",
  },
  {
    name: "Ruptura",
    description: "Percentual da demanda que não pôde ser atendida.",
  },
  {
    name: "Giro de estoque",
    description:
      "Quantidade de vezes que o estoque médio foi consumido no período.",
  },
  {
    name: "Lead time",
    description: "Tempo médio necessário para concluir uma etapa ou processo.",
  },
  {
    name: "Acuracidade",
    description:
      "Compatibilidade entre o estoque físico e as informações registradas.",
  },
  {
    name: "Custo por pedido",
    description:
      "Valor logístico médio associado ao processamento de cada pedido.",
  },
];

const versions = [
  {
    version: "Versão 1.0",
    title: "Indicadores e comparação de cenários",
    description:
      "Estabeleceu a base do simulador, permitindo cadastrar uma operação, criar um cenário futuro, calcular indicadores, definir metas e comparar resultados.",
    resources: [
      "Operação atual e cenário simulado",
      "Metas personalizadas",
      "Indicadores logísticos",
      "Gráfico comparativo",
      "Diagnóstico automático",
      "Salvamento no navegador",
    ],
    learning:
      "Uma operação não deve ser analisada por apenas um indicador. Prazo, atendimento, estoque e custo precisam ser interpretados em conjunto.",
  },
  {
    version: "Versão 2.0",
    title: "Produtos e planejamento mensal",
    description:
      "Ampliou o laboratório para o nível de produtos, SKUs, demanda sazonal, custos de estoque e planejamento ao longo de doze meses.",
    resources: [
      "Cadastro de produtos e SKUs",
      "Curva ABC",
      "Valor anual de consumo",
      "Importação e exportação CSV",
      "Simulação mensal",
      "Sazonalidade",
      "Lote Econômico de Compra",
      "Custos de armazenagem e pedidos",
    ],
    learning:
      "Produtos possuem impactos financeiros diferentes e aumentar o estoque pode reduzir a ruptura, mas normalmente eleva custos e capital empregado.",
  },
  {
    version: "Versão 3.0",
    title: "Decisões, riscos e otimização",
    description:
      "Transformou o simulador em um laboratório de decisões, permitindo analisar contrapartidas, restrições, riscos e combinações de alternativas.",
    resources: [
      "Desafios operacionais",
      "Decisões predefinidas",
      "Impactos estimados",
      "Pontuação ponderada",
      "Pesos configuráveis",
      "Matriz de riscos",
      "Otimizador de cenários",
      "Histórico de execuções",
      "Backup em JSON",
    ],
    learning:
      "Toda decisão possui benefícios, custos e riscos. A melhor alternativa depende das prioridades e restrições do cenário.",
  },
  {
    version: "Versão 4.0",
    title: "Experiência educacional guiada",
    description:
      "Adicionou uma camada de orientação para iniciantes sem modificar os cálculos e recursos desenvolvidos nas versões anteriores.",
    resources: [
      "Guia interativo",
      "Convite opcional na primeira visita",
      "Destaque das áreas principais",
      "Explicações de indicadores",
      "Progresso das etapas",
      "Opção de pular ou repetir",
      "Relatório educacional",
      "Preferência salva no navegador",
      "Experiência responsiva",
    ],
    learning:
      "A orientação progressiva ajuda o usuário a compreender a ferramenta antes de realizar simulações mais complexas.",
  },
];

const modules = [
  {
    title: "Operação atual e cenário simulado",
    description:
      "Compara uma situação de referência com uma hipótese futura criada pelo usuário.",
  },
  {
    title: "Planejamento de reposição",
    description:
      "Calcula demanda durante o lead time, estoque de segurança e ponto de reposição.",
  },
  {
    title: "Gestão de produtos",
    description:
      "Organiza produtos e SKUs com demanda, estoque, custo, prazo e segurança.",
  },
  {
    title: "Curva ABC",
    description:
      "Classifica os produtos de acordo com sua participação no valor anual de consumo.",
  },
  {
    title: "Simulação mensal",
    description:
      "Distribui a demanda ao longo de doze meses e acompanha estoque, ruptura, serviço e custos.",
  },
  {
    title: "Desafios e decisões",
    description:
      "Permite aplicar decisões didáticas e observar possíveis benefícios e contrapartidas.",
  },
  {
    title: "Matriz de riscos",
    description:
      "Organiza os riscos por probabilidade, impacto, responsável e plano de ação.",
  },
  {
    title: "Otimizador de cenários",
    description:
      "Compara combinações de decisões com base nos pesos e prioridades configurados.",
  },
];

const validationRules = [
  "Pedidos no prazo não podem superar o total de pedidos",
  "Pedidos completos e no prazo não podem superar os pedidos entregues no prazo",
  "Unidades atendidas não podem superar as unidades solicitadas",
  "Itens corretos não podem superar os itens conferidos",
  "Demanda máxima não pode ser menor que a demanda média",
  "Lead time máximo não pode ser menor que o lead time médio",
  "Campos usados no cálculo das taxas precisam ser maiores que zero",
];

const decisions = [
  {
    title: "Aumentar estoque de segurança",
    benefit: "Pode reduzir ruptura e melhorar o atendimento",
    tradeoff: "Pode aumentar estoque e custo",
  },
  {
    title: "Utilizar transporte expresso",
    benefit: "Pode reduzir prazo e melhorar pontualidade",
    tradeoff: "Pode aumentar o custo logístico",
  },
  {
    title: "Revisar fornecedor",
    benefit: "Pode melhorar prazo e disponibilidade",
    tradeoff: "Pode exigir negociação ou transição",
  },
  {
    title: "Implementar contagem cíclica",
    benefit: "Pode melhorar a acuracidade",
    tradeoff: "Consome tempo da equipe",
  },
  {
    title: "Aumentar capacidade",
    benefit: "Pode reduzir atrasos",
    tradeoff: "Pode exigir novos investimentos",
  },
  {
    title: "Revisar a previsão",
    benefit: "Pode melhorar o equilíbrio do estoque",
    tradeoff: "Exige dados e revisão frequente",
  },
];

const responsibilities = [
  "Definição do conceito educacional",
  "Organização do fluxo de aprendizagem",
  "Seleção dos indicadores logísticos",
  "Definição das regras de consistência",
  "Estruturação dos módulos",
  "Modelagem dos cenários",
  "Definição das decisões e contrapartidas",
  "Planejamento da matriz de riscos",
  "Definição da pontuação ponderada",
  "Validação dos cálculos",
  "Testes funcionais",
  "Testes de responsividade",
  "Revisão dos textos educacionais",
  "Criação dos manuais",
  "Documentação das versões",
  "Gestão do repositório",
  "Validação do build de produção",
];

const technologies = [
  "Next.js",
  "React",
  "TypeScript",
  "Armazenamento local",
  "CSV",
  "JSON",
  "GitHub",
  "Vercel",
];

const limitations = [
  "Não substitui ERP, WMS ou TMS",
  "Não utiliza dados em tempo real de uma operação",
  "Os impactos das decisões são hipóteses didáticas",
  "A pontuação é uma regra interna da aplicação",
  "Os dados podem ser perdidos se o armazenamento do navegador for apagado",
  "O otimizador não garante a melhor decisão para uma operação real",
  "O relatório do guia não representa uma avaliação profissional",
  "Os níveis intermediário e avançado ainda estão previstos para versões futuras",
];

const nextSteps = [
  "Adicionar níveis intermediário e avançado ao guia",
  "Criar novos desafios operacionais",
  "Incluir mais exercícios orientados",
  "Comparar visualmente diferentes execuções",
  "Ampliar os relatórios educacionais",
  "Melhorar a acessibilidade",
  "Expandir a documentação",
  "Adicionar novas regras de decisão",
  "Ampliar os testes automatizados",
  "Evoluir o módulo de planejamento",
  "Criar novas formas de exportação e compartilhamento",
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

export function CenariLogCaseStudy() {
  return (
    <>
      <section className="section">
        <div className="container narrow">
          <p className="eyebrow">CenariLog Academy</p>

          <h2>Aprenda logística simulando indicadores, cenários e decisões</h2>

          <p className="case-lead">
            Um ambiente educacional criado para ajudar estudantes, iniciantes e
            profissionais em formação a compreender como diferentes variáveis
            afetam uma operação logística.
          </p>

          <p>
            A aplicação permite registrar uma operação atual, criar cenários
            simulados, alterar condições e observar efeitos sobre atendimento,
            estoque, prazo, custo e risco.
          </p>

          <blockquote className="case-highlight">
            O que pode acontecer se uma condição da operação for alterada?
          </blockquote>

          <p>
            O simulador não substitui ERP, WMS, TMS, inventário físico ou
            análise profissional. Sua finalidade é criar um ambiente seguro para
            testar hipóteses e desenvolver raciocínio logístico.
          </p>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container case-grid">
          <article>
            <p className="eyebrow">Problema</p>

            <h2>Indicadores isolados dificultam a compreensão</h2>

            <p>
              Indicadores logísticos costumam ser apresentados separadamente em
              aulas, materiais teóricos e planilhas. Isso dificulta visualizar
              como uma única decisão pode afetar diferentes áreas da operação.
            </p>

            <p>
              Aumentar o estoque de segurança, por exemplo, pode reduzir a
              ruptura, mas também pode elevar o capital empregado e o custo de
              armazenagem.
            </p>
          </article>

          <article>
            <p className="eyebrow">Solução</p>

            <h2>Um laboratório de simulação logística</h2>

            <p>
              O CenariLog Academy reúne dados, indicadores, metas, produtos,
              riscos e decisões em uma experiência interativa.
            </p>

            <p>
              O cenário não afirma que um resultado acontecerá. Ele apresenta o
              efeito matemático esperado caso as condições informadas sejam
              alcançadas.
            </p>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Fluxo de aprendizagem</p>

            <h2>Da leitura dos dados à conclusão da experiência</h2>

            <p>
              Nas primeiras simulações, a recomendação é alterar somente uma
              variável por vez. Isso facilita identificar qual mudança provocou
              determinado efeito.
            </p>
          </div>

          <ol className="case-flow">
            {learningFlow.map((step, index) => (
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
            <p className="eyebrow">Indicadores</p>

            <h2>Serviço, estoque, prazo, custo e qualidade</h2>

            <p>
              A proposta não é avaliar uma operação por apenas um número, mas
              demonstrar que diferentes indicadores precisam ser analisados em
              conjunto.
            </p>
          </div>

          <div className="grid grid-4">
            {indicators.map((indicator) => (
              <article className="card" key={indicator.name}>
                <h3>{indicator.name}</h3>

                <p>{indicator.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Evolução do projeto</p>

            <h2>De painel de indicadores a laboratório educacional</h2>
          </div>

          <div className="version-list">
            {versions.map((version) => (
              <article className="version-card" key={version.version}>
                <div className="version-card-heading">
                  <span className="tag">{version.version}</span>

                  <h3>{version.title}</h3>
                </div>

                <p>{version.description}</p>

                <FeatureList items={version.resources} />

                <div className="version-learning">
                  <strong>Aprendizado principal</strong>

                  <p>{version.learning}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Módulos</p>

            <h2>Recursos conectados em uma experiência única</h2>
          </div>

          <div className="grid grid-2">
            {modules.map((module) => (
              <article className="case-panel" key={module.title}>
                <h3>{module.title}</h3>

                <p>{module.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container case-grid">
          <article>
            <p className="eyebrow">Validação</p>

            <h2>Regras de consistência antes da interpretação</h2>

            <p>
              Toda simulação precisa respeitar relações básicas entre os dados.
              Quando uma inconsistência é identificada, o cenário deve ser
              corrigido antes de ser salvo ou analisado.
            </p>

            <FeatureList items={validationRules} />
          </article>

          <article>
            <p className="eyebrow">Salvamento e backup</p>

            <h2>Continuidade das experiências</h2>

            <p>
              Os cenários podem ser armazenados localmente no navegador,
              permitindo retomar análises e comparar resultados.
            </p>

            <FeatureList
              items={[
                "Salvamento local dos cenários",
                "Registro de observações e conclusões",
                "Backup completo em JSON",
                "Importação e restauração do backup",
                "Importação e exportação de produtos em CSV",
              ]}
            />

            <p className="callout">
              Como os dados locais podem ser apagados com o armazenamento do
              navegador, a ferramenta orienta a criação periódica de backups.
            </p>
          </article>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Decisões operacionais</p>

            <h2>Benefícios e contrapartidas</h2>

            <p>
              As decisões representam hipóteses didáticas. Elas ajudam a
              demonstrar que uma melhoria em determinado indicador pode gerar
              custos ou impactos em outra área.
            </p>
          </div>

          <div className="decision-grid">
            {decisions.map((decision) => (
              <article className="decision-card" key={decision.title}>
                <h3>{decision.title}</h3>

                <div>
                  <span className="decision-label benefit-label">
                    Possível benefício
                  </span>

                  <p>{decision.benefit}</p>
                </div>

                <div>
                  <span className="decision-label tradeoff-label">
                    Possível contrapartida
                  </span>

                  <p>{decision.tradeoff}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container case-grid">
          <article>
            <p className="eyebrow">Meu papel</p>

            <h2>Produto, conteúdo, validação e evolução</h2>

            <FeatureList items={responsibilities} />
          </article>

          <article>
            <p className="eyebrow">Uso da IA</p>

            <h2>Desenvolvimento assistido com revisão humana</h2>

            <p>
              A inteligência artificial foi utilizada como apoio na pesquisa,
              estruturação do código, desenvolvimento dos componentes,
              investigação de problemas e elaboração inicial da documentação.
            </p>

            <p className="callout">
              As decisões sobre produto, indicadores, regras, fluxos
              educacionais, prioridades, testes e interpretação dos resultados
              permaneceram sob revisão humana.
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

            <h2>Protótipo educacional funcional</h2>

            <p>
              A plataforma permite simular indicadores, cadastrar produtos,
              avaliar cenários mensais, classificar itens, analisar riscos e
              comparar decisões.
            </p>

            <p>
              Os resultados dependem dos dados e das premissas informadas e não
              devem ser interpretados como recomendação profissional automática.
            </p>

            <span className="project-status-badge status-available">
              Disponível para demonstração
            </span>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="container case-grid">
          <article>
            <p className="eyebrow">Limitações</p>

            <h2>Transparência sobre a finalidade educacional</h2>

            <FeatureList items={limitations} />
          </article>

          <article>
            <p className="eyebrow">Próximas melhorias</p>

            <h2>Evolução da experiência e do conteúdo</h2>

            <FeatureList items={nextSteps} />
          </article>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container narrow result-section">
          <p className="eyebrow">Resultado</p>

          <h2>Indicadores transformados em experiências de aprendizagem</h2>

          <p className="case-lead">
            O CenariLog Academy evoluiu de um painel de indicadores para um
            ambiente educacional de simulação, planejamento e apoio à decisão.
          </p>

          <div
            className="learning-sequence"
            aria-label="Sequência didática do CenariLog Academy"
          >
            <span>Dados</span>
            <span aria-hidden="true">→</span>
            <span>Indicadores</span>
            <span aria-hidden="true">→</span>
            <span>Comparação</span>
            <span aria-hidden="true">→</span>
            <span>Diagnóstico</span>
            <span aria-hidden="true">→</span>
            <span>Decisão</span>
            <span aria-hidden="true">→</span>
            <span>Risco</span>
            <span aria-hidden="true">→</span>
            <span>Aprendizado</span>
          </div>

          <blockquote className="final-quote">
            “Aprenda logística simulando indicadores, cenários e decisões.”
          </blockquote>
        </div>
      </section>
    </>
  );
}
