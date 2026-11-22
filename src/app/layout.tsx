import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: { default: "Fabio Santos | Solucoes Digitais", template: "%s | Fabio Santos" },
  description: "Portfolio de solucoes digitais, automacoes e prototipos de Micro SaaS.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body><a className="skip-link" href="#conteudo">Pular para o conteudo</a><Navbar /><main id="conteudo">{children}</main><Footer /></body></html>;
}
