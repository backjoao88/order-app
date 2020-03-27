/*
*   MIT License
*   Copyright (c) 2020 João Paulo Back
*
*   Classe responsável por realizar a inicialização do banco de dados Postgres
*   através do framework Sequelize.
*
*/

const { Sequelize } = require('sequelize');
const databaseConfig = require('../config/database');
const Product = require('../app/models/Product');

class Database{

    static MODELS = [Product]
    
    constructor(){
        this.initDatabase();
    }

    initDatabase(){
        const sequelizeConnection = new Sequelize(databaseConfig);
        Database.MODELS.map((model) => {
            model.init(sequelizeConnection)
        });
    }
}

module.exports = new Database();