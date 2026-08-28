# Voyager Web

Frontend do Voyager.

Voyager = observador operacional. Papel: coordenar atividades, receber dados, mostrar contexto, apoiar tomada de ação.

## Status

- Estado atual: design aprovado, aguardando revisão do spec
- Última atualização: 2026-08-28
- Última parada: spec da fase 1 do frontend escrito; próximo passo = revisão do spec e plano de implementação

## Stack

- Next.js
- TypeScript
- Tailwind CSS
- shadcn/ui
- Cliente HTTP para API Voyager

## Etapas

- [x] Fase 0: criar repositório público e roadmap inicial
- [ ] Fase 1: definir arquitetura front, layout base, navegação, design tokens
- [ ] Fase 2: autenticação, sessão, guardas de rota, tratamento 401/403
- [ ] Fase 3: dashboard operacional inicial
- [ ] Fase 4: módulo municípios e unidades
- [ ] Fase 5: módulo convênios e projetos
- [ ] Fase 6: módulo documentos e requisitos
- [ ] Fase 7: módulo pendências
- [ ] Fase 8: módulo tarefas e atualizações
- [ ] Fase 9: alertas, notificações e central in-app
- [ ] Fase 10: resumos diários e histórico
- [ ] Fase 11: observabilidade de UX, estados de erro e empty states
- [ ] Fase 12: testes E2E das jornadas críticas

## Módulos do Front

### Núcleo

- login
- sessão
- shell da aplicação
- navegação
- permissões na UI

### Operação

- dashboard
- municípios
- unidades
- convênios
- projetos
- documentos
- pendências
- tarefas
- notificações
- resumos diários

### Qualidade

- loading, error, empty, success states
- acessibilidade
- responsividade
- testes E2E

## Regra de atualização

Sempre que uma fase subir:

1. marcar checkbox da fase
2. atualizar `Última atualização`
3. atualizar `Última parada`
4. resumir entregas da fase neste README ou changelog

## Próximo passo

Revisar spec da fundação do frontend e gerar plano de implementação TDD.
