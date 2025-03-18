# Documentação do Projeto AuthKnex

## Visão Geral

O **AuthKnex** é uma API simples para gerenciamento de usuários, com funcionalidades básicas como criação, leitura, atualização e exclusão de usuários. O projeto utiliza **Express** para o servidor, **Knex.js** como query builder para interagir com o banco de dados MySQL, e **bcrypt** para criptografar senhas.

---

## Estrutura do Projeto

O projeto está organizado da seguinte forma:

```
AuthKnex/
├── .gitignore
├── controllers/
│   ├── UserController.js
│   └── homeController.js
├── database/
│   └── connection.js
├── index.js
├── models/
│   └── UserModel.js
├── package-lock.json
├── package.json
└── routes/
    └── routes.js
```

---

## Dependências

### Dependências Principais

- **express**: Framework para criar o servidor HTTP.
- **knex**: Query builder para interagir com o banco de dados.
- **mysql2**: Driver para conexão com o MySQL.
- **bcrypt**: Biblioteca para criptografar senhas.
- **dotenv**: Carrega variáveis de ambiente a partir de um arquivo `.env`.
- **body-parser**: Middleware para parsear o corpo das requisições.

### Dependências de Desenvolvimento

- **nodemon**: Reinicia automaticamente o servidor durante o desenvolvimento.

---

## Configuração

### 1. Instalação

Clone o repositório e instale as dependências:

```bash
git clone https://github.com/Benevanio/AuthKnex.git
cd AuthKnex
npm install
```

### 2. Configuração do Banco de Dados

Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis de ambiente:

```env
DB_HOST=localhost
DB_PORT=3306
DB_USER=seu_usuario
DB_PASSWORD=sua_senha
DB_NAME=nome_do_banco
PORT=3000
```

Substitua os valores pelas credenciais do seu banco de dados MySQL.

### 3. Migrações e Seeds (Opcional)

Se você quiser criar tabelas e dados iniciais, pode usar o Knex para gerar migrações e seeds. Exemplo:

```bash
npx knex migrate:make create_users_table
npx knex seed:make 01_users
```

---

## Executando o Projeto

Para iniciar o servidor em modo de desenvolvimento:

```bash
npm run dev
```

O servidor estará rodando em `http://localhost:3000`.

---

## Rotas da API

### 1. **Home**
- **GET /**  
  Retorna uma mensagem simples de "Home page".

### 2. **Usuários**

- **POST /user**  
  Cria um novo usuário.  
  **Corpo da Requisição:**
  ```json
  {
    "email": "usuario@example.com",
    "password": "senha123",
    "name": "Nome do Usuário",
    "role": "user"
  }
  ```

- **GET /user/:email**  
  Retorna um usuário pelo email.

- **GET /user/id/:id**  
  Retorna um usuário pelo ID.

- **PUT /user/:id**  
  Atualiza um usuário pelo ID.  
  **Corpo da Requisição:**
  ```json
  {
    "name": "Novo Nome",
    "email": "novoemail@example.com",
    "role": "admin"
  }
  ```

- **GET /users**  
  Retorna todos os usuários.

- **PUT /user/edit**  
  Edita um usuário.  
  **Corpo da Requisição:**
  ```json
  {
    "id": 1,
    "name": "Nome Atualizado",
    "email": "emailatualizado@example.com",
    "role": "admin"
  }
  ```

- **DELETE /user/delete/:id**  
  Exclui um usuário pelo ID.

---

## Exemplos de Uso

### Criar um Usuário

**Requisição:**
```bash
curl -X POST http://localhost:3000/user \
-H "Content-Type: application/json" \
-d '{
  "email": "usuario@example.com",
  "password": "senha123",
  "name": "Nome do Usuário",
  "role": "user"
}'
```

**Resposta:**
```json
{
  "message": "User created"
}
```

### Buscar Usuário por Email

**Requisição:**
```bash
curl -X GET http://localhost:3000/user/usuario@example.com
```

**Resposta:**
```json
{
  "id": 1,
  "name": "Nome do Usuário",
  "email": "usuario@example.com",
  "role": "user"
}
```

---

## Modelo de Dados

### Tabela `users`

| Coluna     | Tipo        | Descrição               |
|------------|-------------|-------------------------|
| id         | INT         | ID único do usuário.    |
| name       | VARCHAR(255)| Nome do usuário.        |
| email      | VARCHAR(255)| Email do usuário.       |
| password   | VARCHAR(255)| Senha criptografada.    |
| role       | VARCHAR(50) | Papel do usuário.       |

---

## Contribuição

1. Faça um fork do projeto.
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`).
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`).
4. Push para a branch (`git push origin feature/nova-feature`).
5. Abra um Pull Request.

---

## Licença

Este projeto está sob a licença ISC. Consulte o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## Contato

- **Autor**: Benevanio
- **GitHub**: [Benevanio](https://github.com/Benevanio)
- **Repositório**: [AuthKnex](https://github.com/Benevanio/AuthKnex)

