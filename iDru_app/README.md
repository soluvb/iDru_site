# iDru App

Esta pasta é o espaço reservado para o aplicativo operacional do iDru, separado da landing page institucional existente em `client/`.

## Estado inicial

O repositório atual possui uma aplicação web única, com frontend Vite/React em `client/` e servidor Express em `server/`. A pasta `iDru_app/` foi criada como uma área isolada para a evolução do app, sem alterar o ponto de entrada ou o build da landing page atual.

## Diretriz de organização

O código do aplicativo deve ser adicionado aqui somente após definir sua estratégia de execução e publicação. Se o app for uma aplicação web independente, recomenda-se manter seu próprio `package.json`, configuração de build e documentação. Se ele for incorporado à aplicação atual, a estrutura deverá ser revisada antes de alterar `vite.config.ts`, `.replit` ou os workflows do Replit.

## Sincronização com Replit

Durante a adaptação, trabalhar em uma branch específica e realizar commits pequenos e identificáveis. Não armazenar chaves, senhas ou tokens nesta pasta ou no repositório.
