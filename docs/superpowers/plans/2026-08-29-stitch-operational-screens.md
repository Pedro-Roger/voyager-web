# Stitch Operational Screens Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Entregar seis rotas operacionais fiéis ao sistema visual do Stitch.

**Architecture:** Um `ManagementPage` concentra cabeçalho, busca, filtros, tabela e badges. Cada rota fornece apenas conteúdo e colunas; o formulário de unidade permanece isolado.

**Tech Stack:** Next.js 15, React 19, TypeScript, CSS, Jest, Testing Library.

---

### Task 1: Componente de catálogo operacional

**Files:**
- Create: `components/management-page.test.tsx`
- Create: `components/management-page.tsx`
- Modify: `app/globals.css`

- [x] Testar cabeçalho, busca, filtro, ação e linhas.
- [x] Confirmar RED por módulo ausente.
- [x] Implementar componente e confirmar GREEN.

### Task 2: Municípios e unidades

**Files:**
- Create: `__tests__/operational-pages.test.tsx`
- Create: `app/(app)/municipios/page.tsx`
- Create: `app/(app)/unidades/page.tsx`
- Create: `app/(app)/unidades/nova/page.tsx`
- Modify: `components/app-shell.tsx`

- [x] Testar títulos, dados e formulário.
- [x] Confirmar RED.
- [x] Implementar rotas e navegação.
- [x] Confirmar GREEN.

### Task 3: Convênios, pendências e documentos

**Files:**
- Modify: `__tests__/operational-pages.test.tsx`
- Create: `app/(app)/convenios/page.tsx`
- Create: `app/(app)/pendencias/page.tsx`
- Create: `app/(app)/documentos/page.tsx`

- [x] Testar conteúdo principal das três rotas.
- [x] Confirmar RED.
- [x] Implementar rotas e confirmar GREEN.

### Task 4: Verificação e publicação

**Files:**
- Modify: `README.md`

- [x] Executar testes completos.
- [x] Executar build.
- [x] Validar desktop e mobile.
- [x] Atualizar última parada e fases.
- [x] Commitar e enviar ao GitHub público.
