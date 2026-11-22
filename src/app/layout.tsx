import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://ffssportfolio.vercel.app"),

  title: {
    default: "Fabio Santos | Soluções Digitais e Micro SaaS",
    template: "%s | Fabio Santos",
  },

  description:
    "Portfólio de Fabio Santos com soluções digitais, automações, projetos de logística e protótipos de Micro SaaS orientados a problemas reais.",

  applicationName: "Portfolio Fabio Santos",

  keywords: [
    "Fabio Santos",
    "soluções digitais",
    "Micro SaaS",
    "automação",
    "inteligência artificial",
    "logística",
    "Next.js",
    "portfólio",
  ],

  authors: [
    {
      name: "Fabio Ferreira de Souza Santos",
      url: "https://ffssportfolio.vercel.app",
    },
  ],

  creator: "Fabio Ferreira de Souza Santos",

  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://ffssportfolio.vercel.app",
    siteName: "Portfolio Fabio Santos",
    title: "Fabio Santos | Soluções Digitais e Micro SaaS",
    description:
      "Soluções digitais, automações e protótipos criados a partir de necessidades reais.",
  },

  twitter: {
    card: "summary_large_image",
    title: "Fabio Santos | Soluções Digitais e Micro SaaS",
    description:
      "Soluções digitais, automações e protótipos criados a partir de necessidades reais.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body><a className="skip-link" href="#conteudo">Pular para o conteudo</a><Navbar /><main id="conteudo">{children}</main><Footer /></body></html>;
}
