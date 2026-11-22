const mainFeatures = [
  "Certificado profissional em formato A4",
  "Numeração automática dos registros",
  "Cadastro de produtos e compradores",
  "Marca, modelo, categoria e número de série",
  "Estado de conservação e valor declarado",
  "Até quatro fotografias por registro",
  "Redimensionamento automático das imagens",
  "Pré-visualização em tempo real",
  "PDF com QR Code, logo e assinatura",
  "Histórico local com pesquisa e edição",
  "Exportação em CSV e backup em JSON",
  "Tema claro e escuro",
  "Interface responsiva",
];

const userFlow = [
  "Configurar os dados da empresa, o logo e a assinatura",
  "Preencher as informações do produto e do comprador",
  "Adicionar as fotografias do item",
  "Acompanhar a prévia do certificado",
  "Salvar o registro e gerar o PDF",
  "Consultar ou editar o documento pelo histórico",
  "Exportar um backup em JSON",
];

const certificateData = [
  "Identificação do produto",
  "Condição declarada",
  "Registro fotográfico",
  "Número de série",
  "Dados do comprador",
  "Dados da empresa",
  "Número único do registro",
  "Data de emissão",
  "QR Code",
  "Assinatura ou carimbo",
];

const responsibilities = [
  "Definição do conceito do produto",
  "Pesquisa e entendimento do problema",
  "Priorização das funcionalidades",
  "Definição da experiência de cadastro e emissão",
  "Estruturação dos dados do produto e do comprador",
  "Escolha da arquitetura estática",
  "Definição do armazenamento local",
  "Planejamento da estratégia de backup",
  "Validação funcional da geração de PDF",
  "Revisão do conteúdo apresentado no certificado",
  "Definição da identidade visual",
  "Testes de inclusão e redimensionamento de imagens",
  "Avaliação da persistência dos registros",
  "Revisão dos fluxos de edição, pesquisa e exclusão",
  "Documentação e organização do projeto",
];

const technologies = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "localStorage",
  "Canvas",
  "QRCode.js",
  "html2canvas",
  "jsPDF",
  "JSON",
  "CSV",
];

const limitations = [
  "Os dados ficam vinculados ao navegador e ao dispositivo utilizado",
  "A limpeza dos dados do navegador pode apagar os registros",
  "Muitas fotografias podem atingir o limite de armazenamento disponível",
  "O QR Code não consulta uma base pública de validação",
  "O certificado não substitui nota fiscal, documento fiscal ou garantia exigida por lei",
  "Não há autenticação de usuários",
  "Não há sincronização automática entre dispositivos",
  "O arquivo de backup não possui proteção criptográfica",
];

const nextSteps = [
  "Migrar o armazenamento para IndexedDB",
  "Disponibilizar bibliotecas localmente para operação offline",
  "Transformar a aplicação em PWA instalável",
  "Criar uma página local de validação do QR Code",
  "Adicionar modelos alternativos de certificado",
  "Permitir escolha de cores e tipografia",
  "Implementar assinatura desenhada na tela",
  "Incluir impressão direta",
  "Adicionar proteção opcional do backup por senha",
  "Criar alerta periódico para backup",
  "Adicionar testes automatizados",
  "Melhorar a acessibilidade",
  "Verificar duplicidade por número de série",
  "Criar uma versão para volumes maiores",
  "Permitir instalação como aplicativo desktop",
];

function FeatureList({ items }: { items: string[] }) {
  return (
    <ul className="feature-list">
      {items.map((item) => <li key={item}>{item}</li>)}
    </ul>
  );
}

export function UsedProductPassportCaseStudy() {
  return (
    <>
      <section className="section">
        <div className="container narrow">
          <p className="eyebrow">Passaporte do Produto Usado</p>
          <h2>Certificados de procedência sem servidor ou mensalidade</h2>
          <p className="case-lead">
            Uma aplicação web estática para organizar informações, fotografias e dados da comercialização de produtos usados em um certificado visualmente profissional.
          </p>
          <p>
            A proposta combina uma necessidade prática com uma solução simples de operar, sem tentar substituir sistemas fiscais ou administrativos completos.
          </p>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container case-grid">
          <article>
            <p className="eyebrow">Problema</p>
            <h2>Informações importantes ficam dispersas</h2>
            <p>
              Pequenos comerciantes, brechós, revendedores e vendedores independentes nem sempre possuem uma forma organizada de registrar procedência, características e condições dos itens comercializados.
            </p>
            <p>
              Recibos comuns oferecem poucas informações, enquanto sistemas maiores podem ser complexos ou caros para essa necessidade.
            </p>
          </article>

          <article>
            <p className="eyebrow">Solução</p>
            <h2>Um certificado gerado diretamente no navegador</h2>
            <p>
              A aplicação cadastra o produto, o comprador e as fotografias, gerando um Passaporte do Produto Usado em PDF com identificação única, QR Code, logo e assinatura ou carimbo.
            </p>
            <p>
              Os registros permanecem no armazenamento local do dispositivo, sem banco de dados externo.
            </p>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Principais recursos</p>
            <h2>Do cadastro ao histórico dos certificados</h2>
          </div>
          <div className="case-panel">
            <FeatureList items={mainFeatures} />
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Experiência do usuário</p>
            <h2>Um fluxo direto de emissão e consulta</h2>
          </div>
          <ol className="case-flow passport-flow">
            {userFlow.map((step, index) => (
              <li key={step}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{step}</strong>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section">
        <div className="container case-grid">
          <article>
            <p className="eyebrow">Decisões de arquitetura</p>
            <h2>Aplicação estática e processamento local</h2>
            <p>
              O projeto utiliza HTML, CSS e JavaScript, sem backend. Certificados, configurações e imagens redimensionadas são armazenados no localStorage.
            </p>
            <p>
              O documento é renderizado no navegador e convertido para PDF em formato A4. O QR Code também é criado localmente com os principais dados do registro.
            </p>
          </article>

          <article>
            <p className="eyebrow">Diferencial</p>
            <h2>Registro declaratório, não documento fiscal</h2>
            <p>
              A ferramenta reúne informações em um único arquivo de apresentação profissional, mantendo explícita a diferença entre certificado declaratório e documento fiscal.
            </p>
            <FeatureList items={certificateData} />
          </article>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container case-grid">
          <article>
            <p className="eyebrow">Meu papel</p>
            <h2>Produto, experiência e validação</h2>
            <FeatureList items={responsibilities} />
          </article>

          <article>
            <p className="eyebrow">Uso da IA</p>
            <h2>Desenvolvimento assistido com revisão humana</h2>
            <p>
              A IA apoiou a estruturação do HTML, CSS e JavaScript, o layout do certificado e a implementação inicial das funcionalidades.
            </p>
            <p className="callout">
              As decisões de produto, seleção dos recursos, revisão dos textos, validação visual, testes funcionais e ajustes da experiência permaneceram sob supervisão humana.
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
              {technologies.map((technology) => <li key={technology}>{technology}</li>)}
            </ul>
          </article>

          <article>
            <p className="eyebrow">Status</p>
            <h2>Protótipo funcional para demonstração</h2>
            <p>
              A aplicação possui cadastro, pré-visualização, PDF, QR Code, histórico local, fotografias, personalização, pesquisa, edição e restauração de dados.
            </p>
            <p>
              Em apresentações públicas, recomenda-se utilizar informações fictícias, pois os dados ficam armazenados no navegador.
            </p>
            <span className="project-status-badge">Protótipo funcional</span>
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
            <h2>Evolução técnica e de experiência</h2>
            <FeatureList items={nextSteps} />
          </article>
        </div>
      </section>

      <section className="section">
        <div className="container narrow result-section">
          <p className="eyebrow">Resultado</p>
          <h2>Um registro mais completo para produtos usados</h2>
          <p className="case-lead">
            A solução transforma um registro básico de venda em um certificado organizado, visual e documentado, preservando os limites legais da proposta.
          </p>
          <blockquote className="final-quote">
            “Cadastre o produto, reúna as informações e gere um certificado profissional diretamente no navegador.”
          </blockquote>
        </div>
      </section>
    </>
  );
}
