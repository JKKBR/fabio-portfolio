const areas = [
  ["Tecnologia", "Infraestrutura, redes, Microsoft 365 e suporte técnico."],
  ["Logística", "Inventario, rastreabilidade, ativos e operações."],
  ["Automacao", "Reducao de etapas manuais e organizacao de fluxos."],
  ["IA aplicada", "Prototipagem assistida, validação e produtividade."],
];

export function AreasSection() {
  return <section className="section"><div className="container"><div className="section-heading"><p className="eyebrow">Experiência que conecta areas</p><h2>Visao tecnica e operacional</h2></div><div className="grid grid-4">{areas.map(([title, text], index) => <article className="card reveal" style={{ animationDelay: `${index * 70}ms` }} key={title}><span className="card-index">0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>;
}
