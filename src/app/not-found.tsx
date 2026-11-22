import Link from "next/link";
export default function NotFound() {
  return (
    <section className="section">
      <div className="container narrow center">
        <p className="eyebrow">404</p>
        <h1>Página não encontrada</h1>
        <p>O conteúdo pode ter mudado de endereco.</p>
        <Link className="button primary" href="/">
          Voltar ao inicio
        </Link>
      </div>
    </section>
  );
}
