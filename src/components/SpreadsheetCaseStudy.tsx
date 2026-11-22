const generatedItems = [
  "Múltiplas abas organizadas",
  "Fórmulas automáticas",
  "Indicadores e resumos",
  "Linhas preparadas para novos registros",
  "Arquivo Excel (.xlsx) pronto para edição",
];

const problems = [
  "Conhecimento de Excel",
  "Criação manual de fórmulas",
  "Estruturação de abas",
  "Configuração de filtros",
  "Criação de indicadores",
  "Ajustes constantes conforme o processo muda",
];

const generationFeatures = [
  "Nome da planilha",
  "Estrutura das abas",
  "Colunas",
  "Fórmulas",
  "Indicadores",
  "Exemplos de registros",
  "Regras de preenchimento",
];

const validationItems = [
  "Estrutura de abas",
  "Colunas duplicadas",
  "Fórmulas inválidas",
  "Referências inexistentes",
  "Limites de dados",
  "Conflitos de configuração",
];

const reviewItems = [
  "Quantidade de abas",
  "Quantidade de colunas",
  "Fórmulas criadas",
  "Campos calculados",
  "Campos manuais",
  "Avisos importantes",
];

const excelFeatures = [
  "Múltiplas abas",
  "Fórmulas reais",
  "AutoFiltros",
  "Cabeçalhos formatados",
  "Congelamento da primeira linha",
  "Formatação de datas e moedas",
  "Regras condicionais",
  "Planilha de instruções",
  "Suporte para expansão futura",
];

const useCases = [
  "Controle de estoque",
  "Gestão financeira",
  "Orçamentos",
  "Equipamentos e patrimônio",
  "Manutenções",
  "Licenças de software",
  "Cadastros administrativos",
  "Indicadores operacionais",
  "Processos personalizados",
];

const technologies = [
  "Next.js",
  "React",
  "TypeScript",
  "Gemini API",
  "ExcelJS",
  "Zod",
  "Vitest",
  "GitHub Actions",
  "Vercel",
];

const responsibilities = [
  "Definição do produto",
  "Arquitetura da solução",
  "Modelagem dos fluxos",
  "Engenharia de prompts",
  "Estratégias de validação",
  "Testes funcionais",
  "Tratamento de erros",
  "Geração de arquivos Excel",
  "Documentação",
  "Gestão do repositório",
];

const nextSteps = [
  "Correção automática de respostas inválidas da IA",
  "Perguntas de esclarecimento antes da geração",
  "Auditoria completa de arquivos XLSX",
  "Proteções avançadas de fórmulas",
  "Importação de planilhas existentes",
  "Remodelação assistida por IA",
  "Histórico de versões",
  "Dashboards e gráficos automáticos",
  "Autenticação e gerenciamento de usuários",
];

const flow = [
  "Descrever a necessidade",
  "Gerar a estrutura com IA",
  "Executar a validação automática",
  "Revisar o entendimento",
  "Confirmar a estrutura",
  "Analisar a qualidade",
  "Exportar para Excel",
];

type FeatureListProps = {
  items: string[];
};

function FeatureList({ items }: FeatureListProps) {
  return (
    <ul className="feature-list">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export function SpreadsheetCaseStudy() {
  return (
    <>
      <section className="section spreadsheet-introduction">
        <div className="container narrow">
          <p className="eyebrow">Gerador de Planilhas com IA</p>

          <h2>
            Transforme uma descrição em uma planilha Excel pronta para uso
          </h2>

          <p className="case-lead">
            Muitas pessoas sabem exatamente o que precisam controlar em uma
            planilha, mas não dominam Excel o suficiente para criar abas,
            fórmulas, filtros, resumos e indicadores.
          </p>

          <p>
            Pensando nisso, desenvolvi uma aplicação que utiliza inteligência
            artificial para transformar descrições em linguagem natural em
            arquivos Excel editáveis e estruturados automaticamente.
          </p>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Exemplo de uso</p>

            <h2>Da necessidade informada ao arquivo estruturado</h2>
          </div>

          <div className="example-grid">
            <article className="case-panel">
              <span className="case-panel-label">O usuário escreve</span>

              <blockquote>
                “Preciso controlar equipamentos, manutenções e peças de
                reposição, com indicadores de itens em reparo e equipamentos
                disponíveis.”
              </blockquote>
            </article>

            <article className="case-panel">
              <span className="case-panel-label">A aplicação gera</span>

              <FeatureList items={generatedItems} />
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container case-grid">
          <article>
            <p className="eyebrow">O problema</p>

            <h2>Planilhas personalizadas exigem conhecimento técnico</h2>

            <p>
              Modelos prontos raramente atendem exatamente à realidade de cada
              pessoa ou processo. A criação manual normalmente exige:
            </p>

            <FeatureList items={problems} />
          </article>

          <article>
            <p className="eyebrow">A solução</p>

            <h2>
              Uma estrutura gerada a partir de uma solicitação em português
            </h2>

            <p>
              O sistema interpreta a necessidade, monta a estrutura da planilha
              e apresenta o entendimento para revisão antes da criação do
              arquivo.
            </p>

            <p>
              O usuário mantém o controle sobre o que será aplicado e pode
              revisar o pedido antes da exportação.
            </p>
          </article>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Fluxo da aplicação</p>

            <h2>Uma experiência guiada e verificável</h2>
          </div>

          <ol className="case-flow">
            {flow.map((step, index) => (
              <li key={step}>
                <span>{String(index + 1).padStart(2, "0")}</span>

                <strong>{step}</strong>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Principais funcionalidades</p>

            <h2>Controle do pedido até a exportação</h2>
          </div>

          <div className="grid grid-2">
            <article className="case-panel">
              <h3>Geração por linguagem natural</h3>

              <p>
                A inteligência artificial interpreta o processo e propõe os
                elementos necessários para o controle.
              </p>

              <FeatureList items={generationFeatures} />
            </article>

            <article className="case-panel">
              <h3>Validação inteligente</h3>

              <p>
                Toda resposta da IA é tratada como potencialmente incorreta
                antes de ser utilizada.
              </p>

              <FeatureList items={validationItems} />
            </article>

            <article className="case-panel">
              <h3>Revisão antes da aplicação</h3>

              <p>
                O sistema apresenta um resumo da estrutura para que o usuário
                possa aprovar ou ajustar o pedido.
              </p>

              <FeatureList items={reviewItems} />
            </article>

            <article className="case-panel">
              <h3>Relatório de qualidade</h3>

              <p>
                Antes do download, a estrutura passa por uma análise interna e
                recebe uma classificação.
              </p>

              <ul className="quality-list">
                <li className="quality-ready">Pronto para baixar</li>

                <li className="quality-warning">Pronto com avisos</li>

                <li className="quality-blocked">Download bloqueado</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container case-grid">
          <article>
            <p className="eyebrow">Exportação</p>

            <h2>Arquivo Excel editável</h2>

            <p>
              O objetivo não é produzir apenas uma visualização, mas entregar um
              arquivo que possa ser utilizado e ampliado no dia a dia.
            </p>

            <FeatureList items={excelFeatures} />
          </article>

          <article>
            <p className="eyebrow">Casos de uso</p>

            <h2>Estruturas adaptadas ao contexto</h2>

            <FeatureList items={useCases} />
          </article>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Diferenciais</p>

            <h2>Transparência, segurança e flexibilidade</h2>
          </div>

          <div className="grid grid-4">
            <article className="card">
              <h3>Transparência</h3>

              <p>
                As fórmulas utilizadas são documentadas e apresentadas ao
                usuário.
              </p>
            </article>

            <article className="card">
              <h3>Segurança</h3>

              <p>
                A estrutura gerada passa por camadas de validação antes da
                exportação.
              </p>
            </article>

            <article className="card">
              <h3>Flexibilidade</h3>

              <p>
                Cada planilha é criada a partir do contexto informado, sem
                depender exclusivamente de modelos fixos.
              </p>
            </article>

            <article className="card">
              <h3>Excel real</h3>

              <p>
                O resultado é um arquivo editável, preparado para utilização e
                expansão futura.
              </p>
            </article>
          </div>
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
            <p className="eyebrow">Meu papel</p>

            <h2>Atuação em todas as etapas</h2>

            <FeatureList items={responsibilities} />

            <p className="callout">
              O desenvolvimento foi assistido por IA, mas as decisões de
              arquitetura, validação, testes e comportamento da aplicação
              passaram por revisão humana.
            </p>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="container case-grid">
          <article>
            <p className="eyebrow">Status</p>

            <h2>Protótipo funcional em desenvolvimento</h2>

            <p>
              A solução já pode ser utilizada em demonstrações, aprendizado,
              portfólio e testes controlados.
            </p>

            <p>
              O acesso público permanece desativado para evitar consumo indevido
              da API e uso não autorizado dos recursos da plataforma. Uma
              demonstração completa poderá ser apresentada em vídeo.
            </p>

            <span className="project-status-badge">Em desenvolvimento</span>
          </article>

          <article>
            <p className="eyebrow">Próximas evoluções</p>

            <h2>Expansão do produto</h2>

            <FeatureList items={nextSteps} />
          </article>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container narrow result-section">
          <p className="eyebrow">Resultado</p>

          <h2>Da descrição ao Excel estruturado</h2>

          <p className="case-lead">
            Uma experiência guiada que transforma uma descrição em um arquivo
            Excel estruturado, validado e preparado para uso, reduzindo a
            complexidade da criação manual de controles administrativos e
            operacionais.
          </p>

          <blockquote className="final-quote">
            “Descreva o que precisa controlar. A aplicação cria a estrutura,
            valida o resultado e entrega um Excel pronto para trabalhar.”
          </blockquote>
        </div>
      </section>
    </>
  );
}
