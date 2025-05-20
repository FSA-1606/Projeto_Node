const express = require('express');
const cors = require('cors');
const path = require('path');
const Database = require('better-sqlite3');

const dbPath = path.join(__dirname, 'produtos.db');
const db = new Database(dbPath);

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Cria tabela se não existir
db.prepare(`
  CREATE TABLE IF NOT EXISTS produtos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT NOT NULL,
    preco REAL NOT NULL
  )
`).run();

// Rotas
app.get('/', (req, res) => {
  res.send('API de Produtos funcionando!');
});

app.get('/api/produtos', (req, res) => {
  const produtos = db.prepare('SELECT * FROM produtos').all();
  res.json(produtos);
});

app.post('/api/produtos', (req, res) => {
  const { nome, preco } = req.body;
  if (!nome || preco == null || isNaN(preco)) {
    return res.status(400).json({ erro: 'Nome e preço são obrigatórios e preço deve ser um número' });
  }
  const stmt = db.prepare('INSERT INTO produtos (nome, preco) VALUES (?, ?)');
  const info = stmt.run(nome, preco);
  res.status(201).json({ id: info.lastInsertRowid, nome, preco });
});

app.put('/api/produtos/:id', (req, res) => {
  const { id } = req.params;
  const { nome, preco } = req.body;

  const produto = db.prepare('SELECT * FROM produtos WHERE id = ?').get(id);
  if (!produto) {
    return res.status(404).json({ erro: 'Produto não encontrado' });
  }

  if ((nome && typeof nome !== 'string') || (preco != null && isNaN(preco))) {
    return res.status(400).json({ erro: 'Nome deve ser texto e preço deve ser um número' });
  }

  const novoNome = nome || produto.nome;
  const novoPreco = preco != null ? preco : produto.preco;

  db.prepare('UPDATE produtos SET nome = ?, preco = ? WHERE id = ?')
    .run(novoNome, novoPreco, id);

  res.json({ id: Number(id), nome: novoNome, preco: novoPreco });
});

app.delete('/api/produtos/:id', (req, res) => {
  const { id } = req.params;
  const info = db.prepare('DELETE FROM produtos WHERE id = ?').run(id);
  if (info.changes === 0) {
    return res.status(404).json({ erro: 'Produto não encontrado' });
  }
  res.status(204).send();
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});