# POC · Component-Driven Development com Angular e Storybook

Estudo de caso de **desenvolvimento orientado a componentes (CDD)**: a interface é construída de baixo para cima, começando por componentes isolados e documentados e terminando na montagem de páginas a partir deles.

## O que foi testado

- **Componentes isolados no Storybook**: botão, título, container de texto e select, cada um com suas *stories* cobrindo variações (tamanho, peso da fonte, ícone, estado desabilitado etc.).
- **Documentação automática**: Storybook integrado ao Compodoc, gerando a página de docs a partir dos comentários JSDoc dos componentes (`tags: ['autodocs']`).
- **APIs modernas do Angular 20**: componentes standalone com `input()`, `input.required()` e `output()` (signals), e o novo controle de fluxo `@if`.
- **Angular Material** como base visual, com tokens próprios de cor e tipografia em `src/app/shared/styles`.
- **Composição de página**: `pages/page` monta uma tela inteira só com os componentes do design system, renderizada no próprio Storybook com dados mockados.
- Testes unitários com Jasmine/Karma para alguns componentes.

## Estrutura

```
src/app/
├── shared/
│   ├── components/   # componentes do design system + stories
│   └── styles/       # tokens de cor e fontes
└── pages/page/       # página montada a partir dos componentes
```

## Como rodar

Pré-requisitos: Node.js 20+ e npm.

```bash
npm install
npm run storybook    # abre o Storybook em http://localhost:6006
```

Outros comandos:

```bash
npm start                 # aplicação Angular em http://localhost:4200
npm test                  # testes unitários
npm run build-storybook   # gera o Storybook estático
```

## Stack

Angular 20 · TypeScript · Angular Material · Storybook 9 · Compodoc · Jasmine/Karma