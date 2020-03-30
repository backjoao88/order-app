/*
*   MIT License
*   Copyright (c) 2020 João Paulo Back
*
*   Classe responsável por realizar a inicialização do banco de dados Postgres
*   através do framework Sequelize.
*
*/

const Sequelize = require('sequelize');
const databaseConfig = require('../config/database');
const Product = require('../app/models/Product');

class Database{

    static models(){
        return [Product]
    }
    
    constructor(){
        this.initDatabase();
    }
    
    initDatabase(){
        this.sequelizeConnection = new Sequelize(databaseConfig);
        console.log(this.sequelizeConnection.authenticate());
        Database.models().map((model) => {
            model.init(this.sequelizeConnection)
        });
    }
}

module.exports = new Database();