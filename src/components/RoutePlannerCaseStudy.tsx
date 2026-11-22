const routeFlow = [
  "Informar a origem",
  "Informar o destino",
  "Localizar os endereços",
  "Calcular o trajeto",
  "Visualizar a rota no mapa",
  "Consultar distância e tempo",
  "Salvar a consulta no histórico",
];

const mainFeatures = [
  "Campo de endereço de origem",
  "Campo de endereço de destino",
  "Uso opcional da localização atual",
  "Conversão de endereços em coordenadas",
  "Exibição da rota no mapa",
  "Cálculo da distância estimada",
  "Cálculo do tempo estimado",
  "Marcador da localização atual",
  "Histórico das últimas pesquisas",
  "Armazenamento local do histórico",
  "Interface com poucos elementos",
  "Layout dividido entre painel e mapa",
];

const searchQuestions = [
  "Onde fica a empresa?",
  "Qual é a distância aproximada até minha residência?",
  "Quanto tempo o trajeto pode levar?",
  "A oportunidade está em uma região viável para deslocamento?",
  "Quais endereços já foram pesquisados?",
];

const locationSteps = [
  "Solicitar autorização para acessar a localização",
  "Obter latitude e longitude do dispositivo",
  "Centralizar o mapa na posição atual",
  "Adicionar um marcador no mapa",
  "Converter as coordenadas em endereço",
  "Preencher automaticamente o campo de origem",
];

const routeInformation = [
  "Endereço de origem",
  "Endereço de destino",
  "Trajeto no mapa",
  "Distância estimada em quilômetros",
  "Tempo estimado em minutos",
];

const externalServices = [
  {
    title: "Leaflet",
    description:
      "Responsável pela criação do mapa interativo e pela apresentação das camadas geográficas.",
  },
  {
    title: "Leaflet Routing Machine",
    description:
      "Utilizado para calcular e desenhar o trajeto entre a origem e o destino.",
  },
  {
    title: "OpenStreetMap",
    description: "Fornece os dados visuais utilizados como base para o mapa.",
  },
  {
    title: "Nominatim",
    description:
      "Converte os endereços pesquisados em coordenadas e a localização atual em um endereço.",
  },
  {
    title: "Geolocation API",
    description:
      "Permite obter a localização atual do dispositivo após a autorização do usuário.",
  },
  {
    title: "localStorage",
    description:
      "Mantém no navegador as consultas recentes realizadas pelo usuário.",
  },
];

const productDecisions = [
  {
    title: "Interface reduzida",
    description:
      "A tela apresenta somente origem, destino, ações principais, informações da rota e histórico.",
  },
  {
    title: "Consulta em poucas etapas",
    description:
      "O usuário não precisa navegar por diferentes páginas para visualizar o resultado.",
  },
  {
    title: "Histórico local",
    description:
      "As últimas pesquisas ficam disponíveis sem exigir conta ou autenticação.",
  },
  {
    title: "Escopo específico",
    description:
      "A aplicação não tenta reproduzir todos os recursos de uma plataforma completa de mapas.",
  },
];

const responsibilities = [
  "Identificação da necessidade durante a busca por emprego",
  "Definição do escopo da aplicação",
  "Organização da interface",
  "Integração do mapa interativo",
  "Implementação da busca de endereços",
  "Conversão de endereços em coordenadas",
  "Implementação da localização atual",
  "Criação do cálculo de rotas",
  "Exibição da distância e do tempo estimado",
  "Criação do histórico local",
  "Limitação do histórico às consultas mais recentes",
  "Tratamento de endereços não encontrados",
  "Testes funcionais",
  "Testes de localização",
  "Validação da experiência",
  "Publicação da aplicação",
  "Documentação do projeto",
];

const technologies = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "Leaflet",
  "Leaflet Routing Machine",
  "OpenStreetMap",
  "Nominatim",
  "Geolocation API",
  "localStorage",
  "GitHub Pages",
];

const limitations = [
  "Não apresenta condições de trânsito em tempo real",
  "Não compara diferentes meios de transporte",
  "Não calcula custos de deslocamento",
  "Não apresenta tarifas de transporte público",
  "Não organiza as rotas por vaga ou empresa",
  "O histórico fica restrito ao navegador utilizado",
  "A limpeza dos dados do navegador pode apagar as consultas",
  "O funcionamento depende de serviços externos de mapas",
  "Alguns endereços podem apresentar resultados imprecisos",
  "A estimativa de tempo pode não refletir as condições reais",
  "Não possui autenticação",
  "Não sincroniza pesquisas entre dispositivos",
];

const nextSteps = [
  "Permitir salvar o nome da empresa e da vaga",
  "Adicionar observações às rotas",
  "Criar uma lista de oportunidades pesquisadas",
  "Organizar oportunidades por distância",
  "Adicionar rotas favoritas",
  "Permitir exclusão individual do histórico",
  "Comparar diferentes trajetos",
  "Calcular uma estimativa de custo de deslocamento",
  "Adicionar filtro por distância máxima",
  "Exportar a lista de oportunidades",
  "Melhorar a experiência em dispositivos móveis",
  "Adicionar estados de carregamento",
  "Melhorar o tratamento de erros",
  "Adicionar testes automatizados",
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

export function RoutePlannerCaseStudy() {
  return (
    <>
      <section className="section">
        <div className="container narrow">
          <p className="eyebrow">Rota a Rota</p>

          <h2>
            Consulta rápida de trajetos entre casa e possíveis locais de
            trabalho
          </h2>

          <p className="case-lead">
            Uma aplicação web enxuta para pesquisar endereços, visualizar
            trajetos e consultar a distância e o tempo estimado entre dois
            locais.
          </p>

          <p>
            O projeto surgiu durante minha busca por emprego. Ao encontrar
            oportunidades em diferentes bairros e cidades, eu precisava
            verificar rapidamente a distância entre minha residência e o
            possível local de trabalho.
          </p>

          <p>
            Embora existam diversas plataformas de mapas, eu queria uma
            experiência mais direta, com apenas os recursos necessários para
            essa consulta e sem excesso de informações na interface.
          </p>

          <blockquote className="case-highlight">
            Como verificar rapidamente se a localização de uma oportunidade faz
            sentido para o deslocamento diário?
          </blockquote>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container case-grid">
          <article>
            <p className="eyebrow">Problema</p>

            <h2>A localização também influencia uma candidatura</h2>

            <p>
              Antes de avaliar determinadas oportunidades, eu precisava
              compreender se o endereço da empresa era compatível com minha
              rotina de deslocamento.
            </p>

            <p>
              A consulta precisava ser rápida, sem menus adicionais,
              recomendações ou elementos que não contribuíam para aquela decisão
              inicial.
            </p>

            <FeatureList items={searchQuestions} />
          </article>

          <article>
            <p className="eyebrow">Solução</p>

            <h2>Origem, destino e resultado em uma única tela</h2>

            <p>
              Desenvolvi uma aplicação com um painel lateral para informar os
              endereços e um mapa central para apresentar o trajeto.
            </p>

            <p>
              A ferramenta localiza os dois pontos, calcula a rota, apresenta
              distância e tempo estimado e mantém as consultas recentes no
              navegador.
            </p>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Fluxo de utilização</p>

            <h2>Da oportunidade ao trajeto estimado</h2>

            <p>
              O fluxo foi planejado para permitir a conclusão da consulta com
              poucas ações.
            </p>
          </div>

          <ol className="case-flow">
            {routeFlow.map((step, index) => (
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

            <h2>Somente os recursos necessários para a consulta</h2>
          </div>

          <div className="case-panel">
            <FeatureList items={mainFeatures} />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container case-grid">
          <article>
            <p className="eyebrow">Busca de endereços</p>

            <h2>Conversão do texto em coordenadas</h2>

            <p>
              Os endereços informados pelo usuário são enviados ao serviço de
              geocodificação, que retorna latitude e longitude para cada local.
            </p>

            <p>
              Quando um endereço não é encontrado, a aplicação interrompe o
              cálculo e apresenta uma mensagem de erro.
            </p>

            <p className="callout">
              A precisão da busca depende da forma como o endereço foi escrito e
              dos dados disponíveis no serviço de geocodificação.
            </p>
          </article>

          <article>
            <p className="eyebrow">Resultado da consulta</p>

            <h2>Informações apresentadas ao usuário</h2>

            <FeatureList items={routeInformation} />
          </article>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container case-grid">
          <article>
            <p className="eyebrow">Localização atual</p>

            <h2>Uso opcional da posição do dispositivo</h2>

            <p>
              Quando autorizado, o navegador fornece a posição atual do
              dispositivo para preencher automaticamente a origem.
            </p>

            <FeatureList items={locationSteps} />
          </article>

          <article>
            <p className="eyebrow">Privacidade</p>

            <h2>O compartilhamento depende da autorização</h2>

            <p>
              A localização somente é solicitada quando o usuário escolhe usar
              esse recurso.
            </p>

            <p>
              Caso a permissão não seja concedida, a origem pode ser preenchida
              manualmente e as demais funcionalidades continuam disponíveis.
            </p>

            <p className="callout">
              A aplicação não mantém um histórico de coordenadas. O histórico
              local registra apenas os textos usados como origem e destino.
            </p>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="container case-grid">
          <article>
            <p className="eyebrow">Cálculo da rota</p>

            <h2>Trajeto, distância e tempo estimado</h2>

            <p>
              Após localizar os dois endereços, a aplicação cria uma rota entre
              os pontos e apresenta o percurso no mapa.
            </p>

            <p>
              A distância total é convertida para quilômetros e o tempo estimado
              é apresentado em minutos.
            </p>

            <p>
              Os resultados servem como referência inicial e não substituem a
              consulta das condições reais de trânsito ou do transporte
              disponível.
            </p>
          </article>

          <article>
            <p className="eyebrow">Histórico</p>

            <h2>As últimas consultas continuam acessíveis</h2>

            <p>
              Origem e destino são armazenados no `localStorage` depois da
              solicitação de uma rota.
            </p>

            <p>
              O histórico mantém até dez consultas recentes, apresentadas da
              mais nova para a mais antiga.
            </p>

            <p className="callout">
              Como os dados ficam no navegador, a limpeza do armazenamento local
              pode apagar o histórico.
            </p>
          </article>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Serviços e integrações</p>

            <h2>Recursos externos que apoiam a aplicação</h2>
          </div>

          <div className="grid grid-3">
            {externalServices.map((service) => (
              <article className="case-panel" key={service.title}>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Decisões de produto</p>

            <h2>A simplicidade faz parte da proposta</h2>

            <p>
              O objetivo nunca foi reproduzir todos os recursos de uma
              plataforma profissional de mapas, mas resolver uma necessidade
              específica com menos etapas.
            </p>
          </div>

          <div className="grid grid-2">
            {productDecisions.map((decision) => (
              <article className="card" key={decision.title}>
                <h3>{decision.title}</h3>
                <p>{decision.description}</p>
              </article>
            ))}
          </div>

          <blockquote className="case-highlight">
            Informar dois endereços, visualizar o trajeto e consultar
            rapidamente a distância e o tempo estimado.
          </blockquote>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container case-grid">
          <article>
            <p className="eyebrow">Meu papel</p>

            <h2>Da necessidade pessoal à ferramenta publicada</h2>

            <FeatureList items={responsibilities} />
          </article>

          <article>
            <p className="eyebrow">Uso da IA</p>

            <h2>Desenvolvimento assistido com validação prática</h2>

            <p>
              A inteligência artificial foi utilizada como apoio na estruturação
              do HTML, CSS e JavaScript, na integração inicial das bibliotecas e
              na investigação de problemas.
            </p>

            <p className="callout">
              A definição do objetivo, a seleção das funcionalidades, os testes
              das rotas e a validação da experiência permaneceram sob revisão
              humana.
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

            <h2>Protótipo funcional e disponível</h2>

            <p>
              A aplicação permite pesquisar endereços, utilizar a localização
              atual, visualizar uma rota, consultar distância e tempo estimado e
              manter um histórico local.
            </p>

            <p>
              Seu escopo permanece intencionalmente reduzido para preservar a
              rapidez e a clareza da consulta.
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

            <h2>Transparência sobre o resultado</h2>

            <FeatureList items={limitations} />
          </article>

          <article>
            <p className="eyebrow">Próximas melhorias</p>

            <h2>Conectar a rota às oportunidades pesquisadas</h2>

            <FeatureList items={nextSteps} />
          </article>
        </div>
      </section>

      <section className="section">
        <div className="container narrow result-section">
          <p className="eyebrow">Resultado</p>

          <h2>Uma tarefa recorrente transformada em consulta direta</h2>

          <p className="case-lead">
            O Rota a Rota nasceu para reduzir o tempo necessário para verificar
            se a localização de uma oportunidade era compatível com meu
            deslocamento diário.
          </p>

          <div
            className="learning-sequence"
            aria-label="Fluxo do projeto Rota a Rota"
          >
            <span>Oportunidade</span>
            <span aria-hidden="true">→</span>
            <span>Endereço</span>
            <span aria-hidden="true">→</span>
            <span>Rota</span>
            <span aria-hidden="true">→</span>
            <span>Distância</span>
            <span aria-hidden="true">→</span>
            <span>Tempo</span>
            <span aria-hidden="true">→</span>
            <span>Avaliação</span>
          </div>

          <blockquote className="final-quote">
            “Uma ferramenta enxuta para verificar rapidamente se a localização
            de uma oportunidade faz sentido para o deslocamento diário.”
          </blockquote>
        </div>
      </section>
    </>
  );
}
