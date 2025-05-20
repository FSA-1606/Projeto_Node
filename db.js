// db.js
const knex = require('knex');

const db = knex({
  client: 'sqlite3',
  connection: {
    filename: './produtos.db',
  },
  useNullAsDefault: true,
});

module.exports = db;
