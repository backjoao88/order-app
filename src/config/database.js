const dotenv = require('dotenv').config({path: './config/.env-dev'});

/* Define o JSON a ser passado por parâmetro para o Sequelize */

module.exports = {
    dialect: process.env.DIALECT || 'postgres',
    host: process.env.POSTGRES_HOST,
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD, 
    database: process.env.POSTGRES_DATABASE,
    define: {
      timestamps: true,
      underscored: true,
      underscoredAll: true,
    },
  };
  