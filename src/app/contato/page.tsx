import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { profile } from "@/data/profile";

export const metadata: Metadata = { title: "Contato" };
export default function ContatoPage() {
  const contacts = [
    { label: "E-mail", value: profile.email, href: `mailto:${profile.email}` },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/fabiofss",
      href: profile.linkedin,
    },
    { label: "GitHub", value: "github.com/JKKBR", href: profile.github },
    {
      label: "WhatsApp",
      value: "+55 21 99401-3747",
      href: "https://wa.me/5521994013747",
    },
    { label: "Localização", value: profile.location },
  ];
  return (
    <>
      <PageHeader
        eyebrow="Contato"
        title="Vamos conversar"
        description="Estou aberto a oportunidades, colaborações e conversas sobre produtos, automação e soluções digitais."
      />
      <section className="section section-alt">
        <div className="container grid grid-2">
          {contacts.map((item) => (
            <article className="contact-card" key={item.label}>
              <span>{item.label}</span>
              <strong>{item.value}</strong>
              {item.href && (
                <a
                  className="text-link"
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                >
                  Abrir contato -&gt;
                </a>
              )}
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
