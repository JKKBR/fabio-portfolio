const operationFlow = [
  "Cadastrar o produto",
  "Adicionar fotos e informações",
  "Definir preço e estado de conservação",
  "Publicar na vitrine",
  "Receber o contato do cliente",
  "Reservar ou vender o item",
  "Atualizar o estoque",
];

const mainFeatures = [
  "Cadastro de produtos",
  "Inclusão de fotografias",
  "Descrição e preço dos itens",
  "Identificação do estado de conservação",
  "Painel administrativo restrito",
  "Controle de entradas e saídas",
  "Status disponível, reservado e vendido",
  "Filtros para localização dos produtos",
  "Vitrine digital atualizada",
  "Contato direto pelo WhatsApp",
  "Interface responsiva",
  "Armazenamento de dados em nuvem",
  "Gerenciamento de imagens",
];

const productData = [
  "Nome do produto",
  "Descrição",
  "Preço",
  "Categoria",
  "Estado de conservação",
  "Status de disponibilidade",
  "Fotografias",
  "Informações para contato",
];

const inventoryStatuses = [
  {
    title: "Disponível",
    description:
      "O item permanece visível e pode ser apresentado aos interessados.",
    className: "inventory-available",
  },
  {
    title: "Reservado",
    description:
      "O item está temporariamente separado para um possível comprador.",
    className: "inventory-reserved",
  },
  {
    title: "Vendido",
    description: "O produto não está mais disponível para novos pedidos.",
    className: "inventory-sold",
  },
];

const benefits = [
  {
    title: "Organização",
    description:
      "Centraliza produtos, imagens, preços e informações de disponibilidade.",
  },
  {
    title: "Acuracidade",
    description:
      "Reduz divergências entre os produtos publicados e o estoque real.",
  },
  {
    title: "Agilidade",
    description:
      "Facilita a localização dos itens e o atendimento aos interessados.",
  },
  {
    title: "Visibilidade",
    description:
      "Transforma os produtos disponíveis em uma vitrine digital acessível.",
  },
  {
    title: "Prevenção de conflitos",
    description:
      "Os estados disponível, reservado e vendido ajudam a evitar pedidos para o mesmo item.",
  },
  {
    title: "Apoio à renda extra",
    description:
      "Cria um canal simples para demonstrar e comercializar produtos usados.",
  },
];

const responsibilities = [
  "Identificação da necessidade",
  "Definição do conceito da vitrine digital",
  "Levantamento do fluxo de cadastro e venda",
  "Organização das informações dos produtos",
  "Definição dos estados de disponibilidade",
  "Modelagem da estrutura do banco de dados",
  "Desenvolvimento da interface",
  "Criação do painel administrativo",
  "Integração com o Supabase",
  "Integração com o Cloudinary",
  "Organização do fluxo de imagens",
  "Criação dos filtros",
  "Integração do contato pelo WhatsApp",
  "Testes funcionais",
  "Testes em dispositivos móveis",
  "Validação com a necessidade real",
  "Documentação",
  "Publicação na Vercel",
];

const technologies = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "Supabase",
  "Cloudinary",
  "WhatsApp",
  "Vercel",
  "Interface responsiva",
];

const limitations = [
  "Não possui integração com sistemas fiscais",
  "Não emite nota fiscal ou documento financeiro",
  "Não possui pagamento integrado",
  "As atualizações dos produtos dependem do painel administrativo",
  "A qualidade das imagens depende dos arquivos enviados",
  "Não possui cálculo automático de frete",
  "Não possui integração com transportadoras",
  "Não possui histórico avançado de movimentações",
  "Não possui relatórios financeiros completos",
  "Não substitui um sistema profissional de gestão varejista",
];

const nextSteps = [
  "Criar relatórios de entradas e saídas",
  "Adicionar histórico de alterações",
  "Implementar categorias configuráveis",
  "Melhorar a pesquisa de produtos",
  "Adicionar ordenação por preço e data",
  "Criar indicadores de produtos vendidos",
  "Adicionar controle de quantidade para itens repetidos",
  "Implementar alerta de produtos reservados",
  "Melhorar a acessibilidade",
  "Criar testes automatizados",
  "Otimizar o carregamento das imagens",
  "Adicionar página individual dos produtos",
  "Criar exportação dos registros",
  "Melhorar a experiência do painel administrativo",
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

export function InventoryStoreCaseStudy() {
  return (
    <>
      <section className="section">
        <div className="container narrow">
          <p className="eyebrow">Artesanatos Lucia&apos;S</p>

          <h2>
            Sistema de inventário e vitrine digital para um pequeno negócio
          </h2>

          <p className="case-lead">
            Uma solução criada para organizar produtos usados, controlar sua
            disponibilidade e apresentá-los aos interessados por meio de uma
            vitrine digital.
          </p>

          <p>
            O projeto começou com uma necessidade simples e real. Minha mãe
            queria um espaço onde pudesse adicionar fotografias de brinquedos,
            roupas e outros itens usados para mostrar às pessoas e gerar uma
            renda extra.
          </p>

          <p>
            A ideia inicial de publicar fotos evoluiu para uma plataforma com
            cadastro de produtos, controle de estoque, estados de
            disponibilidade e contato direto com os interessados.
          </p>

          <blockquote className="case-highlight">
            Como transformar um conjunto de fotografias e produtos usados em uma
            vitrine organizada, atualizada e simples de administrar?
          </blockquote>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container case-grid">
          <article>
            <p className="eyebrow">Problema</p>

            <h2>Fotografias isoladas não formavam um catálogo organizado</h2>

            <p>
              Apresentar produtos por fotografias enviadas individualmente
              dificultava a organização das informações, dos preços e da
              disponibilidade de cada item.
            </p>

            <p>
              Também existia o risco de apresentar como disponível um produto
              que já havia sido reservado ou vendido, criando conflitos no
              atendimento.
            </p>
          </article>

          <article>
            <p className="eyebrow">Solução</p>

            <h2>Uma vitrine conectada ao controle do estoque</h2>

            <p>
              Desenvolvi uma plataforma que reúne cadastro, fotografias,
              descrições, preços e estados de disponibilidade em uma única
              interface.
            </p>

            <p>
              O painel administrativo permite gerenciar os produtos, enquanto a
              vitrine apresenta ao público apenas as informações necessárias
              para conhecer o item e iniciar uma conversa pelo WhatsApp.
            </p>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Fluxo operacional</p>

            <h2>Do cadastro do item à atualização do estoque</h2>

            <p>
              O fluxo foi organizado para facilitar tanto a administração dos
              produtos quanto a comunicação com os interessados.
            </p>
          </div>

          <ol className="case-flow">
            {operationFlow.map((step, index) => (
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

            <h2>Gestão e apresentação dos produtos</h2>
          </div>

          <div className="case-panel">
            <FeatureList items={mainFeatures} />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container case-grid">
          <article>
            <p className="eyebrow">Cadastro</p>

            <h2>Informações reunidas em um único registro</h2>

            <p>
              Cada produto pode ser apresentado com informações suficientes para
              identificação, análise e contato.
            </p>

            <FeatureList items={productData} />
          </article>

          <article>
            <p className="eyebrow">Imagens</p>

            <h2>Fotografias organizadas e acessíveis na nuvem</h2>

            <p>
              As imagens dos produtos são gerenciadas pelo Cloudinary,
              permitindo que a vitrine apresente as fotografias sem depender do
              armazenamento direto no repositório da aplicação.
            </p>

            <p>
              Isso separa os arquivos visuais do código e facilita a inclusão de
              novos produtos no catálogo.
            </p>
          </article>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Controle de disponibilidade</p>

            <h2>Estados que acompanham o ciclo de cada produto</h2>

            <p>
              A situação do item é apresentada de forma clara para apoiar o
              controle e reduzir conflitos de atendimento.
            </p>
          </div>

          <div className="grid grid-3">
            {inventoryStatuses.map((status) => (
              <article
                className={`inventory-status-card ${status.className}`}
                key={status.title}
              >
                <span className="inventory-status-dot" />

                <h3>{status.title}</h3>

                <p>{status.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container case-grid">
          <article>
            <p className="eyebrow">Painel administrativo</p>

            <h2>Controle dos produtos e movimentações</h2>

            <p>
              O painel administrativo foi desenvolvido para permitir o cadastro,
              a atualização e a baixa dos itens.
            </p>

            <p>
              Por meio dele, é possível alterar informações, atualizar o estado
              de conservação e acompanhar se um produto está disponível,
              reservado ou vendido.
            </p>
          </article>

          <article>
            <p className="eyebrow">Vitrine digital</p>

            <h2>Apresentação simples para o cliente</h2>

            <p>
              A vitrine organiza os produtos de maneira visual, mostrando
              fotografias, preço, descrição, condição e disponibilidade.
            </p>

            <p>
              O visitante pode conhecer os itens e utilizar o botão de contato
              para iniciar uma conversa pelo WhatsApp.
            </p>
          </article>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container case-grid">
          <article>
            <p className="eyebrow">Triagem e picking</p>

            <h2>Filtros para localizar e separar os itens</h2>

            <p>
              Os filtros ajudam a encontrar produtos por suas características e
              estado de conservação, facilitando a triagem e a separação para
              entrega.
            </p>

            <p>
              Embora seja uma aplicação voltada a um pequeno negócio, esse fluxo
              aplica conceitos logísticos como identificação, disponibilidade,
              localização e picking.
            </p>
          </article>

          <article>
            <p className="eyebrow">Comunicação</p>

            <h2>Contato direto pelo WhatsApp</h2>

            <p>
              A integração com o WhatsApp reduz a distância entre a consulta do
              catálogo e o início do atendimento.
            </p>

            <p className="callout">
              O sistema apresenta o produto e facilita o contato, mas a
              negociação, o pagamento e a entrega continuam sendo realizados
              fora da plataforma.
            </p>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Resultados e impacto</p>

            <h2>Uma necessidade local transformada em operação digital</h2>
          </div>

          <div className="grid grid-3">
            <article className="card">
              <h3>Acuracidade</h3>

              <p>
                O controle de disponibilidade ajuda a reduzir divergências entre
                a vitrine e o estoque real.
              </p>
            </article>

            <article className="card">
              <h3>Eficiência</h3>

              <p>
                As informações organizadas facilitam a localização dos produtos
                e tornam o atendimento mais rápido.
              </p>
            </article>

            <article className="card">
              <h3>Modernização</h3>

              <p>
                Produtos que antes eram apresentados de maneira informal
                passaram a compor uma vitrine digital estruturada.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Diferenciais</p>

            <h2>Tecnologia adaptada à realidade do pequeno negócio</h2>
          </div>

          <div className="grid grid-3">
            {benefits.map((benefit) => (
              <article className="case-panel" key={benefit.title}>
                <h3>{benefit.title}</h3>

                <p>{benefit.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container case-grid">
          <article>
            <p className="eyebrow">Arquitetura</p>

            <h2>Dados e imagens disponíveis em nuvem</h2>

            <p>
              O Supabase é utilizado para armazenar e sincronizar os dados dos
              produtos. O Cloudinary gerencia os arquivos de imagem utilizados
              na vitrine.
            </p>

            <p>
              A interface foi desenvolvida com HTML, CSS e JavaScript,
              priorizando responsividade e facilidade de utilização.
            </p>
          </article>

          <article>
            <p className="eyebrow">Decisão de produto</p>

            <h2>Começar pelo problema, não pela complexidade</h2>

            <p>
              A aplicação não foi criada para reproduzir todas as funções de um
              ERP ou plataforma de comércio eletrônico.
            </p>

            <p className="callout">
              O foco foi resolver a necessidade principal: cadastrar produtos,
              apresentar fotografias, informar disponibilidade e facilitar o
              contato com os interessados.
            </p>
          </article>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container case-grid">
          <article>
            <p className="eyebrow">Meu papel</p>

            <h2>Da necessidade familiar à publicação</h2>

            <FeatureList items={responsibilities} />
          </article>

          <article>
            <p className="eyebrow">Uso da IA</p>

            <h2>Desenvolvimento assistido com validação prática</h2>

            <p>
              A inteligência artificial foi utilizada como apoio na estruturação
              do código, implementação inicial da interface, investigação de
              problemas e organização da documentação.
            </p>

            <p className="callout">
              A definição da necessidade, o fluxo dos produtos, os estados de
              disponibilidade, os testes e a validação com o uso real
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

            <h2>Aplicação funcional e publicada</h2>

            <p>
              A plataforma possui painel administrativo, cadastro de produtos,
              gerenciamento de imagens, controle de disponibilidade, filtros,
              vitrine pública e contato pelo WhatsApp.
            </p>

            <p>
              O projeto demonstra a aplicação da tecnologia em uma necessidade
              real de um pequeno negócio local.
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

            <h2>Evolução da gestão e da experiência</h2>

            <FeatureList items={nextSteps} />
          </article>
        </div>
      </section>

      <section className="section">
        <div className="container narrow result-section">
          <p className="eyebrow">Resultado</p>

          <h2>Produtos usados transformados em uma vitrine organizada</h2>

          <p className="case-lead">
            O projeto começou com a necessidade de apresentar fotografias de
            objetos usados e evoluiu para uma solução de inventário, catálogo e
            atendimento digital.
          </p>

          <div
            className="learning-sequence"
            aria-label="Fluxo do Sistema de Gestão de Inventário"
          >
            <span>Cadastrar</span>
            <span aria-hidden="true">→</span>
            <span>Publicar</span>
            <span aria-hidden="true">→</span>
            <span>Apresentar</span>
            <span aria-hidden="true">→</span>
            <span>Reservar</span>
            <span aria-hidden="true">→</span>
            <span>Vender</span>
            <span aria-hidden="true">→</span>
            <span>Atualizar</span>
          </div>

          <blockquote className="final-quote">
            “Uma solução criada a partir de uma necessidade familiar para
            organizar produtos, ampliar sua visibilidade e apoiar uma fonte de
            renda extra.”
          </blockquote>
        </div>
      </section>
    </>
  );
}
