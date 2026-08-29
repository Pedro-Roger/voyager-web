# Voyager Web

Frontend do Voyager.

Voyager = observador operacional. Papel: coordenar atividades, receber dados, mostrar contexto, apoiar tomada de ação.

## Status

- Estado atual: fase 4 concluída
- Última atualização: 2026-08-29
- Última parada: todas as telas atualmente visíveis no Stitch reproduzidas, incluindo operação, detalhes, importação, usuários e permissões; próximo passo = conectar telas às APIs reais

## Stack

- Next.js
- TypeScript
- Tailwind CSS
- shadcn/ui
- Cliente HTTP para API Voyager

## Etapas

- [x] Fase 0: criar repositório público e roadmap inicial
- [x] Fase 1: definir arquitetura front, layout base, navegação, design tokens
- [x] Fase 2: autenticação, sessão, guardas de rota, tratamento 401/403
- [x] Fase 3: dashboard operacional inicial
- [x] Fase 4: módulo municípios e unidades
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

Conectar municípios e unidades à API real, substituindo dados demonstrativos.
