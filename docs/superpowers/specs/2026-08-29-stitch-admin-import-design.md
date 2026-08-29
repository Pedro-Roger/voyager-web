# Stitch Administration and Import Design

## Objetivo

Completar o segundo bloco visual do Stitch com importação guiada, diretório de usuários, matriz de permissões e detalhe de usuário.

## Rotas

- `/importar`
- `/importar/revisao`
- `/importar/mapeamento`
- `/importar/sucesso`
- `/usuarios`
- `/permissoes`
- `/usuarios/eleanor-vance`

## Componentes

- `ImportStepper`: progresso consistente nas quatro telas
- `ManagementPage`: reutilizado para diretório de usuários
- telas dedicadas para mapeamento, sucesso, permissões e detalhe

## Comportamento desta fase

- upload e importação são interface demonstrativa, sem transmitir arquivo
- selects de mapeamento e permissões são controles visuais locais
- detalhe de usuário exibe acesso, escopo e histórico
- dados permanecem demonstrativos até API de usuários/importação existir

## Verificação

- testes de todas as rotas e etapas
- build Next
- validação visual desktop/mobile
