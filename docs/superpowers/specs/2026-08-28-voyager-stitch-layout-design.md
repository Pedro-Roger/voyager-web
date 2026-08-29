# Voyager Stitch Layout Design

## Objetivo

Aplicar ao Voyager Web o sistema visual do projeto Stitch `Dub Management System`, mantendo nomenclatura, rotas e domínio do Voyager.

## Referência aprovada

- shell claro com sidebar fixa e compacta
- marca no topo e usuário no rodapé da sidebar
- azul elétrico como cor de ação e seleção
- bordas hairline e sombras discretas
- tipografia de alta densidade com hierarquia curta
- dashboard com quatro métricas, atividade recente e prioridades
- cabeçalho com título, descrição, período e filtro
- layout adaptável para telas menores

## Limites

- não copiar o nome `Dub Management System`
- não adicionar dependência de UI sem necessidade
- não alterar autenticação ou integração com API
- não prometer dados reais: conteúdo desta fase permanece demonstrativo

## Testes

- shell expõe navegação e identidade do usuário
- dashboard expõe cabeçalho, filtros, métricas, atividade e prioridades
- suíte Jest e build Next devem permanecer verdes
