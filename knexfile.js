// knexfile.js
module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './produtos.db'
    },
    useNullAsDefault: true
  }
};
