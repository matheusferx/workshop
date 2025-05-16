#Node.js CRUD com SQLite3 e Knex.js

Este projeto foi desenvolvido como parte de um workshop de Node.js promovido por uma empresa de extensão da PUC Minas. O objetivo foi entender os conceitos fundamentais do desenvolvimento backend, incluindo protocolos HTTP, CRUD simples, middlewares e a integração com bancos de dados usando SQLite e Knex.js.

# Tecnologias Utilizadas

Node.js

Express.js

Knex.js

SQLite3

# Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:

Node.js (versão 18 ou superior)

SQLite3

Git

# Clonando o Repositório

 Clone o repositório
git clone https://github.com/seu-usuario/nome-do-repositorio.git

Entre no diretório do projeto
cd nome-do-repositorio

 Instalando as Dependências

npm install

# Configurando o Banco de Dados

Crie o banco de dados SQLite e configure as migrations:

npx knex migrate:latest

# Executando o Servidor

node index.js

O servidor estará disponível em http://localhost:3000.

# Endpoints Disponíveis

POST /products - Cria um novo produto

GET /products - Lista todos os produtos

GET /products/****:id - Retorna um produto pelo ID

PUT /products/****:id - Atualiza um produto pelo ID

DELETE /products/****:id - Deleta um produto pelo ID

# Estrutura do Projeto

├── index.js
├── knexfile.js
├── migrations/
│   └── 20230516_create_products_table.js
└── package.json

# Contribuindo

Se quiser contribuir com melhorias, sinta-se à vontade para abrir issues ou enviar PRs.

