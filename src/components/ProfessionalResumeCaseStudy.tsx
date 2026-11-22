const creationFlow = [
  "Preencher os dados pessoais",
  "Adicionar objetivo e resumo profissional",
  "Cadastrar experiências e formações",
  "Incluir habilidades, cursos e idiomas",
  "Acompanhar a pré-visualização",
  "Revisar o tamanho do documento",
  "Gerar o PDF ou salvar os dados em TXT",
];

const mainFeatures = [
  "Formulário organizado por seções",
  "Pré-visualização atualizada durante o preenchimento",
  "Foto e subtítulo profissional opcionais",
  "Cadastro de múltiplas experiências profissionais",
  "Cadastro de formações acadêmicas",
  "Registro de habilidades técnicas",
  "Inclusão de cursos e qualificações",
  "Cadastro de idiomas",
  "Informações complementares opcionais",
  "Estimativa da quantidade de páginas A4",
  "Geração do currículo em PDF",
  "Exportação dos dados em TXT",
  "Importação de arquivos TXT",
  "Processamento diretamente no navegador",
  "Utilização sem cadastro obrigatório",
];

const identificationSections = [
  "Nome completo",
  "Subtítulo profissional opcional",
  "Foto opcional",
  "Dados de contato",
];

const professionalSections = ["Objetivo profissional", "Resumo profissional"];

const careerSections = ["Experiência profissional", "Formação acadêmica"];

const knowledgeSections = [
  "Habilidades técnicas",
  "Cursos e qualificações",
  "Idiomas",
  "Informações complementares opcionais",
];

const previewBenefits = [
  "Identificar informações ausentes",
  "Revisar a organização das seções",
  "Verificar o tamanho dos textos",
  "Observar a distribuição do conteúdo",
  "Avaliar a quantidade estimada de páginas",
  "Fazer correções antes de gerar o PDF",
];

const evolutionItems = [
  {
    title: "Resumo profissional",
    description:
      "A antiga área de projetos acadêmicos foi substituída por uma seção de resumo profissional, mais adequada a diferentes perfis e momentos de carreira.",
  },
  {
    title: "Informações complementares",
    description:
      "Foi adicionada uma seção opcional para disponibilidade, habilitação, viagens, conhecimentos adicionais e outros dados relevantes.",
  },
  {
    title: "Simplificação da experiência",
    description:
      "O assistente de adaptação à vaga foi removido após uma revisão do fluxo, reduzindo elementos que desviavam o foco da criação do currículo.",
  },
];

const differences = [
  {
    title: "Transparência",
    description:
      "As funcionalidades principais estão disponíveis desde o início, sem cobrança inesperada no momento da exportação.",
  },
  {
    title: "Simplicidade",
    description:
      "O formulário é dividido em seções claras, evitando etapas excessivas e elementos desnecessários.",
  },
  {
    title: "Sem cadastro obrigatório",
    description:
      "O usuário pode começar a criar o currículo sem fornecer dados para uma conta na plataforma.",
  },
  {
    title: "Processamento local",
    description:
      "As informações são tratadas diretamente no navegador, sem armazenamento permanente em servidor.",
  },
  {
    title: "Continuidade",
    description:
      "A exportação e a importação em TXT permitem atualizar o currículo posteriormente.",
  },
  {
    title: "Controle do usuário",
    description:
      "A pré-visualização permite acompanhar o resultado e decidir quais informações serão incluídas.",
  },
];

const responsibilities = [
  "Identificação do problema",
  "Pesquisa de ferramentas existentes",
  "Definição do escopo",
  "Organização das seções do currículo",
  "Planejamento do fluxo de preenchimento",
  "Desenvolvimento da interface",
  "Implementação da pré-visualização",
  "Criação da exportação em PDF",
  "Criação da exportação e importação em TXT",
  "Definição das seções opcionais",
  "Simplificação da experiência",
  "Testes funcionais",
  "Revisão dos textos",
  "Validação do documento gerado",
  "Documentação",
  "Gestão do repositório",
  "Publicação da aplicação",
];

const technologies = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "jsPDF",
  "Processamento local",
  "Importação TXT",
  "Exportação TXT",
  "Vercel",
];

const limitations = [
  "Não possui autenticação",
  "Os dados não são sincronizados entre dispositivos",
  "O arquivo TXT precisa ser guardado pelo usuário",
  "Não importa currículos em PDF ou Word",
  "O conteúdo precisa ser revisado antes do envio",
  "A estimativa de páginas pode variar conforme o navegador e o conteúdo",
  "Não substitui a orientação de um profissional de recrutamento",
  "Não possui histórico automático de versões",
  "Não analisa automaticamente uma vaga",
  "As opções visuais ainda são limitadas",
];

const nextSteps = [
  "Adicionar novos modelos visuais",
  "Criar opções de cores e tipografia",
  "Melhorar a acessibilidade",
  "Permitir a reordenação das seções",
  "Adicionar exportação estruturada em JSON",
  "Criar histórico local de versões",
  "Permitir a comparação entre versões",
  "Ampliar a personalização do PDF",
  "Melhorar a experiência mobile",
  "Adicionar testes automatizados",
  "Ampliar a validação dos campos",
  "Permitir ocultar e reexibir seções",
  "Melhorar o tratamento de currículos com várias páginas",
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

export function ProfessionalResumeCaseStudy() {
  return (
    <>
      <section className="section">
        <div className="container narrow">
          <p className="eyebrow">Currículos Profissionais</p>

          <h2>
            Criação de currículos simples, gratuita e sem cadastro obrigatório
          </h2>

          <p className="case-lead">
            Uma aplicação web para criar, editar, visualizar e exportar
            currículos diretamente no navegador.
          </p>

          <p>
            O projeto surgiu durante minha própria busca por emprego. Ao testar
            diferentes plataformas, encontrei ferramentas que exigiam pagamento
            para liberar recursos essenciais, apresentavam limitações somente
            depois do preenchimento, solicitavam cadastro obrigatório ou
            utilizavam publicidade excessiva e invasiva.
          </p>

          <blockquote className="case-highlight">
            Se a ferramenta poderia facilitar minha busca por uma oportunidade,
            ela também poderia ajudar outras pessoas em início de carreira,
            recolocação profissional ou transição.
          </blockquote>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container case-grid">
          <article>
            <p className="eyebrow">Problema</p>

            <h2>Ferramentas gratuitas nem sempre são realmente gratuitas</h2>

            <p>
              Algumas plataformas permitem preencher o currículo sem custo, mas
              exigem pagamento no momento do download. Outras restringem
              recursos importantes, exigem cadastro ou apresentam publicidade
              que interfere na experiência.
            </p>

            <p>
              Além disso, muitas pessoas têm dificuldade para organizar
              experiências, formações, habilidades e informações profissionais
              em um documento claro e consistente.
            </p>
          </article>

          <article>
            <p className="eyebrow">Solução</p>

            <h2>Uma alternativa direta e transparente</h2>

            <p>
              Desenvolvi uma aplicação executada no navegador que organiza o
              preenchimento em seções e atualiza a pré-visualização conforme os
              dados são inseridos.
            </p>

            <p>
              O usuário pode acompanhar o resultado, estimar a quantidade de
              páginas e exportar o currículo em PDF, sem criar uma conta.
            </p>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Fluxo de utilização</p>

            <h2>Do preenchimento ao currículo exportado</h2>

            <p>
              A experiência foi planejada para manter o usuário no controle
              durante todo o processo.
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

            <h2>Recursos para criar e atualizar o currículo</h2>
          </div>

          <div className="case-panel">
            <FeatureList items={mainFeatures} />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Estrutura do currículo</p>

            <h2>Informações organizadas por finalidade</h2>

            <p>
              Somente as seções preenchidas são exibidas na pré-visualização e
              no documento final.
            </p>
          </div>

          <div className="grid grid-4">
            <article className="card">
              <h3>Identificação</h3>

              <FeatureList items={identificationSections} />
            </article>

            <article className="card">
              <h3>Apresentação</h3>

              <FeatureList items={professionalSections} />
            </article>

            <article className="card">
              <h3>Trajetória</h3>

              <FeatureList items={careerSections} />
            </article>

            <article className="card">
              <h3>Conhecimentos</h3>

              <FeatureList items={knowledgeSections} />
            </article>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container case-grid">
          <article>
            <p className="eyebrow">Pré-visualização</p>

            <h2>Revisão antes da exportação</h2>

            <p>
              Enquanto o formulário é preenchido, o currículo é atualizado na
              tela. Isso reduz a diferença entre o conteúdo informado e o
              resultado exportado.
            </p>

            <FeatureList items={previewBenefits} />
          </article>

          <article>
            <p className="eyebrow">Exportação em PDF</p>

            <h2>Um documento pronto para utilização</h2>

            <p>
              A aplicação utiliza a biblioteca jsPDF para montar o currículo.
              Seções opcionais somente são adicionadas quando possuem algum
              conteúdo.
            </p>

            <p>
              O arquivo pode ser utilizado em candidaturas, enviado por e-mail,
              anexado a plataformas de recrutamento ou impresso.
            </p>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="container case-grid">
          <article>
            <p className="eyebrow">Continuidade</p>

            <h2>Exportação e importação em TXT</h2>

            <p>
              O usuário pode salvar os dados preenchidos em um arquivo TXT e
              importá-los novamente quando precisar atualizar o currículo.
            </p>

            <ol className="simple-process">
              <li>Preencher o currículo</li>
              <li>Exportar os dados em TXT</li>
              <li>Guardar o arquivo no dispositivo</li>
              <li>Importar quando precisar atualizar</li>
              <li>Editar as informações</li>
              <li>Gerar uma nova versão em PDF</li>
            </ol>
          </article>

          <article>
            <p className="eyebrow">Privacidade</p>

            <h2>Os dados permanecem sob controle do usuário</h2>

            <FeatureList
              items={[
                "Não exige criação de conta",
                "Não exige login",
                "Não depende de banco de dados",
                "Não armazena o currículo em servidor",
                "Permite guardar os arquivos no próprio dispositivo",
              ]}
            />

            <p className="callout">
              O usuário continua responsável por guardar os arquivos exportados
              e revisar as informações antes de enviar o currículo.
            </p>
          </article>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Evolução do produto</p>

            <h2>Simplificar também significa remover</h2>
          </div>

          <div className="grid grid-3">
            {evolutionItems.map((item) => (
              <article className="case-panel" key={item.title}>
                <h3>{item.title}</h3>

                <p>{item.description}</p>
              </article>
            ))}
          </div>

          <blockquote className="case-highlight">
            Uma funcionalidade não deve permanecer apenas porque é tecnicamente
            possível. Ela precisa contribuir de forma clara para a experiência
            do usuário.
          </blockquote>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Diferenciais</p>

            <h2>Uma experiência previsível e sem etapas ocultas</h2>
          </div>

          <div className="grid grid-3">
            {differences.map((difference) => (
              <article className="card" key={difference.title}>
                <h3>{difference.title}</h3>

                <p>{difference.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container case-grid">
          <article>
            <p className="eyebrow">Meu papel</p>

            <h2>Da identificação do problema à publicação</h2>

            <FeatureList items={responsibilities} />
          </article>

          <article>
            <p className="eyebrow">Uso da IA</p>

            <h2>Desenvolvimento assistido com validação humana</h2>

            <p>
              A inteligência artificial foi utilizada como apoio na estruturação
              do código, investigação de problemas, revisão da interface e
              implementação inicial de funcionalidades.
            </p>

            <p className="callout">
              As decisões sobre o produto, a organização das seções, a remoção
              de recursos, os testes, a validação do PDF e a revisão final
              permaneceram sob responsabilidade humana.
            </p>
          </article>
        </div>
      </section>

      <section className="section">
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
              A ferramenta permite preencher, revisar, exportar e recuperar os
              dados de um currículo diretamente no navegador.
            </p>

            <p>
              Pode ser utilizada na criação do primeiro currículo, recolocação,
              transição de carreira e atualização de experiências.
            </p>

            <span className="project-status-badge status-available">
              Disponível para utilização
            </span>
          </article>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container case-grid">
          <article>
            <p className="eyebrow">Limitações atuais</p>

            <h2>Transparência sobre o escopo</h2>

            <FeatureList items={limitations} />
          </article>

          <article>
            <p className="eyebrow">Próximas melhorias</p>

            <h2>Personalização, acessibilidade e continuidade</h2>

            <FeatureList items={nextSteps} />
          </article>
        </div>
      </section>

      <section className="section">
        <div className="container narrow result-section">
          <p className="eyebrow">Resultado</p>

          <h2>Uma dificuldade pessoal transformada em ferramenta</h2>

          <p className="case-lead">
            O projeto transformou uma dificuldade encontrada durante minha busca
            por emprego em uma solução funcional que também pode apoiar outras
            pessoas.
          </p>

          <div
            className="learning-sequence"
            aria-label="Fluxo do projeto Currículos Profissionais"
          >
            <span>Preencher</span>
            <span aria-hidden="true">→</span>
            <span>Visualizar</span>
            <span aria-hidden="true">→</span>
            <span>Revisar</span>
            <span aria-hidden="true">→</span>
            <span>Exportar</span>
            <span aria-hidden="true">→</span>
            <span>Atualizar</span>
          </div>

          <blockquote className="final-quote">
            “Crie seu currículo com clareza, mantenha o controle dos seus dados
            e exporte o resultado sem etapas inesperadas.”
          </blockquote>
        </div>
      </section>
    </>
  );
}
