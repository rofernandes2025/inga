# Extinsete — App de Vistoria e Auditoria

Aplicativo web (React + Vite) para registrar vistorias de extintores, acompanhar não conformidades e visualizar o histórico técnico.

## Requisitos

- Node.js 20+
- pnpm 10+

## Como rodar localmente

```bash
pnpm install
pnpm dev --host 0.0.0.0 --port 4173
```

Depois abra no navegador:

- `http://localhost:4173`

> Se você estiver rodando em servidor/VM/container, use o IP mostrado no terminal em **Network**.

## Build de produção

```bash
pnpm build
pnpm preview --host 0.0.0.0 --port 4173
```

Acesse em `http://localhost:4173`.

## Problemas comuns (quando “não abre nada”)

1. **Dependências não instaladas**
   - Rode `pnpm install` antes de iniciar.
2. **Porta ocupada**
   - Troque a porta: `pnpm dev --host 0.0.0.0 --port 4174`.
3. **Abrindo o arquivo `index.html` direto (duplo clique)**
   - Não funciona com Vite. Precisa subir servidor com `pnpm dev` ou `pnpm preview`.
4. **Ambiente remoto/container**
   - Use a URL de **Network** mostrada no terminal.

## Scripts

- `pnpm dev` — modo desenvolvimento.
- `pnpm build` — gera build de produção.
- `pnpm preview` — serve a build localmente.
- `pnpm lint` — validação de lint.
