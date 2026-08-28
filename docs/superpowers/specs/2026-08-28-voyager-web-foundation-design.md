# Voyager Web Foundation Design

## Objective

Criar fundação do frontend do Voyager para visualização operacional, navegação entre módulos, autenticação e consumo seguro da API.

## Scope

Incluído nesta fundação:

- `Next.js` com App Router
- `TypeScript`
- layout base da aplicação
- design tokens iniciais
- shell de navegação
- cliente HTTP para API
- tela inicial e base para login
- estrutura modular por feature

Não incluído nesta fase:

- fluxos completos de autenticação
- CRUDs de domínio
- dashboard final
- IA

## Architecture

Voyager Web será separado da API. A interface consumirá contratos HTTP e nunca concentrará regra crítica de negócio.

Estrutura inicial:

- `app/` para rotas e layouts
- `components/` para UI compartilhada
- `features/` para módulos de produto
- `lib/` para cliente HTTP, auth client e utilidades
- `types/` para tipos compartilhados locais

## Initial Screens

- home inicial
- shell privada
- login base
- área reservada para dashboard

## UX Direction

Voyager é observador operacional. A interface deve priorizar:

- leitura rápida
- estados claros
- drill-down por contexto
- indicadores acionáveis
- navegação simples entre atividades, pendências, convênios e documentos

## Integration Direction

- cliente HTTP centralizado
- tratamento padrão para `401` e `403`
- suporte a variáveis de ambiente para URL da API
- contratos estáveis para evolução dos módulos

## Testing Direction

Fase 1 deve nascer com TDD para:

- render do layout raiz
- navegação base
- leitura de configuração pública
- client HTTP base

## Stop Point

Se esta fase terminar corretamente, frontend sobe localmente, renderiza shell base, possui estrutura preparada para login e integração com API.
