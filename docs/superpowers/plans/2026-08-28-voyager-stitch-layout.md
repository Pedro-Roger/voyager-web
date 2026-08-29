# Voyager Stitch Layout Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Reproduzir no Voyager Web o layout aprovado no Stitch.

**Architecture:** Manter o App Router e dividir a interface entre `AppShell`, responsável pela navegação, e `DashboardOverview`, responsável pelo conteúdo operacional. Tokens e comportamento responsivo ficam em CSS global sem biblioteca visual adicional.

**Tech Stack:** Next.js 15, React 19, TypeScript, CSS, Jest, Testing Library.

---

### Task 1: Contrato visual do shell

**Files:**
- Modify: `__tests__/app-shell.test.tsx`
- Modify: `components/app-shell.tsx`
- Create: `app/globals.css`
- Modify: `app/layout.tsx`

- [x] Escrever teste falhando para marca, navegação, suporte e usuário.
- [x] Executar `npm test -- __tests__/app-shell.test.tsx` e confirmar falha.
- [x] Implementar shell e tokens mínimos.
- [x] Reexecutar teste e confirmar sucesso.

### Task 2: Conteúdo operacional

**Files:**
- Modify: `components/dashboard-overview.test.tsx`
- Modify: `components/dashboard-overview.tsx`
- Modify: `app/(app)/dashboard/page.tsx`

- [x] Escrever teste falhando para filtros, métricas, atividade e prioridades.
- [x] Executar `npm test -- components/dashboard-overview.test.tsx` e confirmar falha.
- [x] Implementar dashboard mínimo compatível com a referência.
- [x] Reexecutar teste e confirmar sucesso.

### Task 3: Verificação e publicação

**Files:**
- Modify: `README.md`

- [x] Executar suíte Jest completa.
- [x] Executar build Next de produção.
- [x] Atualizar `Última parada` no README.
- [x] Commitar e enviar ao GitHub público.
