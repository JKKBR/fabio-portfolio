# Fabio Portfolio

Portfolio inicial em Next.js, TypeScript e App Router, preparado para GitHub Codespaces e Vercel.

## Implantar no repositorio existente

1. Baixe e extraia o ZIP.
2. No Codespace do repositorio `fabio-portfolio`, envie ou copie o conteudo desta pasta para a raiz.
3. Execute:

```bash
npm install
npm run dev
```

4. Abra a porta indicada pelo Codespaces e revise o site.
5. Valide a compilacao:

```bash
npm run build
```

6. Envie as alteracoes:

```bash
git add .
git commit -m "feat: estrutura inicial do portfolio"
git push origin main
```

A Vercel conectada ao repositorio deve criar um novo deploy apos o push.

## Estrutura

- `src/app`: paginas e rotas
- `src/components`: componentes reutilizaveis
- `src/data`: perfil e projetos
- `src/types`: tipos TypeScript
- `src/app/globals.css`: identidade visual responsiva

## Personalizacao imediata

- Revise os textos em `src/data/profile.ts`.
- Revise links e detalhes em `src/data/projects.ts`.
- Adicione imagens futuras em `public/projects`.
- Evite publicar chaves de API ou arquivos `.env.local`.
