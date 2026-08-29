# Stitch Operational Screens Design

## Objetivo

Continuar a reprodução do projeto Stitch no Voyager Web com as telas operacionais de municípios, unidades, cadastro de unidade, convênios, pendências e documentos.

## Sistema visual

- preservar sidebar, azul elétrico, bordas hairline e tipografia compacta já aplicados
- cabeçalho com título, descrição e ação primária
- filtros em faixa própria
- tabela de alta densidade com badges suaves
- estados de busca e filtros representados por controles reais
- formulário centralizado para cadastro de unidade
- responsividade por rolagem horizontal de tabela e empilhamento de filtros

## Rotas

- `/municipios`
- `/unidades`
- `/unidades/nova`
- `/convenios`
- `/pendencias`
- `/documentos`

## Limites

- dados permanecem demonstrativos até API dos módulos existir
- ações destrutivas não entram
- criação de unidade é interface sem persistência nesta fase
- administração, permissões e importação ficam no próximo bloco visual

## Verificação

- testes garantem títulos, filtros, ações, linhas e navegação
- build Next valida todas as rotas
- validação visual cobre desktop e mobile
