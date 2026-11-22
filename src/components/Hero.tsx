import Link from "next/link";
import { profile } from "@/data/profile";

export function Hero() {
  return (
    <section className="hero section">
      <div className="container hero-content reveal">
        <p className="eyebrow">Projetos criados a partir de necessidades reais</p>
        <h1>{profile.role}</h1>
        <p className="hero-copy">{profile.summary}</p>
        <div className="button-row"><Link className="button primary" href="/projetos">Conhecer projetos</Link><Link className="button secondary" href="/sobre">Minha história</Link></div>
      </div>
    </section>
  );
}
