API DE PRODUTOS

Esta API foi desenvolvida para gerenciar produtos. Ela permite a criação, leitura, atualização e exclusão de produtos (operações CRUD). A API foi construída utilizando Node.js com o framework Express e MongoDB para persistência dos dados.

TECNOLOGIAS UTILIZADAS

Node.js: Plataforma de desenvolvimento para a criação de aplicações em JavaScript no lado do servidor.
Express: Framework web para Node.js, utilizado para gerenciar as rotas e middlewares da aplicação.
MongoDB: Banco de dados NoSQL orientado a documentos, usado para armazenar os dados dos produtos.
Mongoose: Biblioteca ODM (Object Data Modeling) para MongoDB e Node.js, que facilita a manipulação dos dados no MongoDB.

CONFIGURAÇÃO

1)Clonar o repositório

git clone https://github.com/seuusuario/api-produtos.git

cd api-produtos

2)Instalar as dependências

npm install

3)Configurar o banco de dados

  Certifique-se de ter um banco de dados MongoDB em execução.

  Atualize a string de conexão do MongoDB no arquivo "server.js":

mongoose.connect('mongodb+srv://seu_usuario:sua_senha@seu_cluster.mongodb.net/seu_banco_de_dados');

4)Iniciar o servidor

npm start

A aplicação estará disponível em http://localhost:5001.

ENDPOINTS

PRODUTOS

  GET /api/produtos: Retorna todos os produtos.
  
  POST /api/produtos: Cria um novo produto.

Corpo da Requisição:

{

  "nome": "Nome do Produto",
  
  "preco": 100,
  
  "descricao": "Descrição do Produto"

}
  GET /api/produtos/:produto_id: Retorna um produto pelo ID.

  PUT /api/produtos/:produto_id: Atualiza um produto pelo ID.

Corpo da Requisição:

{
 
  "nome": "Nome Atualizado",
  
  "preco": 150,
  
  "descricao": "Descrição Atualizada"

}

  DELETE /api/produtos/:produto_id: Remove um produto pelo ID.

ESTRUTURA DO PROJETO

  server.js: Arquivo principal da aplicação, onde as rotas e a conexão com o banco de dados são configuradas.

  app/models/produtos.js: Modelo do produto definido com Mongoose, que representa a estrutura dos dados no MongoDB.

MIDDLEWARES

  body-parser: Utilizado para fazer o parsing do corpo das requisições HTTP.
Observações

  Certifique-se de proteger suas credenciais do banco de dados e outras informações sensíveis antes de publicar o código.

  Esta API foi configurada para funcionar localmente, mas pode ser adaptada para ambientes de produção conforme necessário.
