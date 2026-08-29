# Voyager Web Foundation Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Criar fundação executável do frontend Voyager com Next.js, TypeScript, shell inicial, configuração pública e cliente HTTP base.

**Architecture:** Frontend Next.js App Router separado da API. `app/` contém rotas e layout; `lib/` contém config e cliente HTTP; `components/` e `features/` recebem evolução dos módulos.

**Tech Stack:** Node.js 22, npm, Next.js, React, TypeScript, Jest, Testing Library.

---

### Task 1: Bootstrap e layout inicial

**Files:**
- Create: `package.json`
- Create: `tsconfig.json`
- Create: `next.config.ts`
- Create: `app/layout.tsx`
- Create: `app/page.tsx`
- Test: `__tests__/app-page.test.tsx`

- [ ] Escrever teste falhando para render da home
- [ ] Rodar teste e confirmar falha
- [ ] Implementar app mínima
- [ ] Rodar teste e confirmar sucesso

### Task 2: Config pública + cliente HTTP

**Files:**
- Create: `lib/env.ts`
- Create: `lib/http.ts`
- Test: `lib/env.test.ts`
- Test: `lib/http.test.ts`

- [ ] Escrever testes falhando
- [ ] Rodar testes e confirmar falha
- [ ] Implementar config pública e client
- [ ] Rodar testes e confirmar sucesso

### Task 3: Shell base

**Files:**
- Create: `app/(app)/layout.tsx`
- Create: `app/(app)/dashboard/page.tsx`
- Create: `components/app-shell.tsx`
- Test: `__tests__/app-shell.test.tsx`

- [ ] Escrever teste falhando para shell
- [ ] Rodar teste e confirmar falha
- [ ] Implementar shell mínima
- [ ] Rodar teste e confirmar sucesso

### Task 4: Docs e status

**Files:**
- Modify: `README.md`
- Create: `.env.example`

- [ ] Atualizar checklist da fase 1
- [ ] Registrar última parada
- [ ] Validar `test` e `build`
