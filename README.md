---

# 📦 Sistema de Cadastro de Produtos

Aplicação web com frontend em **React** e backend em **Node.js**, que permite o **cadastro, edição e exclusão de produtos**. Ideal para pequenos comércios ou controle interno de estoque.

---

## 🚀 Tecnologias Utilizadas

* **Frontend:** React, Material UI
* **Backend:** Node.js, Express
* **Banco de Dados:** SQLite
* **Comunicação:** API REST

---

## 📂 Estrutura do Projeto

```
/frontend     → Aplicação React (interface)
/backend      → API em Node.js (servidor e banco SQLite)
/README.md    → Este arquivo
```

---

## ▶️ Como Executar o Projeto

### 1. Clonar o repositório

```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio
```

### 2. Iniciar o Backend

```bash
cd backend
npm install
npm start
```

A API será iniciada em: [http://localhost:5000](http://localhost:5000)

> ⚠️ O banco de dados SQLite será criado automaticamente no diretório `/backend` com base no modelo definido.

### 3. Iniciar o Frontend

```bash
cd frontend
npm install
npm start
```

A aplicação React será executada em: [http://localhost:3000](http://localhost:3000)

---

## 🧩 Funcionalidades

* ✅ **Cadastro** de novos produtos
* 📝 **Edição** de produtos existentes
* ❌ **Exclusão** de produtos
* 🔍 Listagem com **busca e filtros** (opcional)
* 🖥️ Interface moderna e intuitiva com Material UI

---

## 📡 Endpoints da API (Exemplo)

* `GET /produtos` → Lista todos os produtos
* `GET /produtos/:id` → Retorna um produto específico
* `POST /produtos` → Cadastra um novo produto
* `PUT /produtos/:id` → Atualiza os dados de um produto
* `DELETE /produtos/:id` → Remove um produto

---

## 🗃️ Banco de Dados

* Utiliza **SQLite** por ser leve, fácil de integrar e ideal para aplicações locais ou de pequeno porte.
* Os dados são persistidos em um arquivo `.sqlite` no backend.
* Tabelas são criadas automaticamente na inicialização (caso não existam).

---

## 📘 Saiba Mais

* [React](https://reactjs.org/)
* [Express.js](https://expressjs.com/)
* [SQLite](https://www.sqlite.org/index.html)
* [Material UI](https://mui.com/)

---


