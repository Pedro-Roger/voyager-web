# Stitch Administration and Import Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Entregar sete telas administrativas e de importação vistas no Stitch.

**Architecture:** Um stepper reutilizável mantém fluxo de importação; diretório reutiliza tabela operacional; permissões e detalhe usam componentes específicos e dados locais.

**Tech Stack:** Next.js 15, React 19, TypeScript, CSS, Jest, Testing Library.

---

### Task 1: Fluxo de importação

- [x] Escrever testes das quatro etapas.
- [x] Confirmar RED.
- [x] Implementar stepper e quatro rotas.
- [x] Confirmar GREEN.

### Task 2: Administração de usuários

- [x] Escrever testes de diretório, matriz e detalhe.
- [x] Confirmar RED.
- [x] Implementar três rotas e navegação.
- [x] Confirmar GREEN.

### Task 3: Verificação e publicação

- [x] Executar testes completos.
- [x] Executar build.
- [x] Validar visualmente.
- [x] Atualizar README.
- [x] Commitar e enviar ao GitHub público.
