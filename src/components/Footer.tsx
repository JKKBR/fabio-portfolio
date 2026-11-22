import Link from "next/link";
import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <strong>{profile.shortName}</strong>
          <p>Soluções digitais orientadas a problemas reais.</p>
        </div>
        <div className="footer-links">
          <Link href="/projetos">Projetos</Link>
          <Link href="/sobre">Sobre</Link>
          <Link href="/contato">Contato</Link>
        </div>
      </div>
    </footer>
  );
}
