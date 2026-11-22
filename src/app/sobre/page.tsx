import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";

export const metadata: Metadata = { title: "Sobre" };

const questions = [
  "Qual dificuldade precisa ser resolvida?",
  "Quem enfrenta esse problema?",
  "O que torna as soluções atuais complicadas?",
  "Qual seria a versão mais simples e útil?",
  "Como validar antes de disponibilizar?",
  "O que automatizar sem retirar o controle do usuário?",
];

export default function SobrePage() {
  return (
    <>
      <PageHeader
        eyebrow="Sobre mim"
        title="Tecnologia, aprendizado e soluções para problemas reais"
        description="Minha trajetoria conecta suporte, infraestrutura, operações, logística e desenvolvimento de ferramentas digitais."
      />
      <section className="section section-alt">
        <div className="container about-grid">
          <aside className="profile-panel">
            <div className="avatar" aria-hidden="true">
              FS
            </div>
            <h2>Fabio Santos</h2>
            <p>
              Desenvolvedor de soluções digitais, automações e protótipos de
              Micro SaaS.
            </p>
            <span className="tag">Maricá, RJ</span>
          </aside>
          <div className="story">
            <h2>Uma curiosidade que se tornou profissão</h2>

            <p>
              Minha relação com a tecnologia começou ainda na infância, quando
              tive contato com um computador 486. Explorar, testar
              possibilidades e entender como cada coisa funcionava transformou a
              curiosidade em uma trajetória profissional.
            </p>

            <p>
              Construí experiência em suporte técnico, infraestrutura, Windows,
              Microsoft 365, redes, inventário, controle patrimonial, Field
              Service, documentação e acompanhamento de chamados dentro de SLA.
            </p>

            <p>
              Ao reconhecer que controle de ativos, rastreabilidade,
              movimentação e logística reversa também faziam parte da minha
              experiência, ampliei meus estudos em Logística e passei a observar
              os processos pelos lados técnico e operacional.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Da necessidade à criação</p>

            <h2>Projetos que começam com uma dificuldade real</h2>
          </div>

          <div className="grid grid-2">
            <article className="card">
              <h3>O ponto de partida</h3>

              <p>
                Durante a busca por emprego, encontrei ferramentas de currículo
                com cadastros obrigatórios, limitações inesperadas e excesso de
                anúncios. Criei uma alternativa mais direta e transparente.
              </p>
            </article>

            <article className="card">
              <h3>O princípio que permaneceu</h3>

              <p>
                Identificar uma dificuldade concreta, compreender o processo,
                construir um protótipo funcional e avaliar como a tecnologia
                pode simplificar a tarefa.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Minha forma de desenvolver</p>

            <h2>IA como apoio, responsabilidade humana nas decisões</h2>

            <p>
              Utilizo inteligência artificial em pesquisa, implementação e
              investigação. Produto, prioridades, testes, validação e revisão
              final permanecem sob minha responsabilidade.
            </p>
          </div>

          <div className="quote-card">
            Desenvolvimento assistido por IA, com revisão humana, validação
            prática e testes automatizados.
          </div>

          <div className="question-grid">
            {questions.map((question) => (
              <div className="question" key={question}>
                {question}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Próximos passos</p>

            <h2>Continuar aproximando experiência prática e tecnologia</h2>

            <p>
              Meu objetivo é criar soluções simples, úteis e adaptadas às
              necessidades reais, economizando tempo, organizando processos e
              tornando tarefas mais acessíveis.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
