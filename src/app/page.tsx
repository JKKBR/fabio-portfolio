import { Hero } from "@/components/Hero";
import { AreasSection } from "@/components/AreasSection";
import { FeaturedProjects } from "@/components/FeaturedProjects";
import { ProcessSection } from "@/components/ProcessSection";
import Link from "next/link";

export default function Home() {
  return <><Hero /><AreasSection /><FeaturedProjects /><ProcessSection /><section className="section"><div className="container cta"><p className="eyebrow">Vamos construir algo util</p><h2>Ideias ganham valor quando resolvem uma necessidade concreta.</h2><Link className="button primary" href="/contato">Entrar em contato</Link></div></section></>;
}
