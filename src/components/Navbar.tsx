import Link from "next/link";
import { profile } from "@/data/profile";

const links = [
  { href: "/", label: "Início" },
  { href: "/sobre", label: "Sobre" },
  { href: "/projetos", label: "Projetos" },
  { href: "/contato", label: "Contato" },
];

export function Navbar() {
  return (
    <header className="site-header">
      <div className="container nav-inner">
        <Link className="brand" href="/" aria-label="Ir para a página inicial">{profile.shortName}</Link>
        <nav aria-label="Navegação principal">
          <ul className="nav-list">
            {links.map((link) => <li key={link.href}><Link href={link.href}>{link.label}</Link></li>)}
          </ul>
        </nav>
      </div>
    </header>
  );
}
