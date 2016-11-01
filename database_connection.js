require("dotenv").load();

var configuration = {
    client: 'postgresql',
    connection: {
      database: process.env.DATABASE_NAME,
    }
  };
  module.exports = require("knex")(configuration);
