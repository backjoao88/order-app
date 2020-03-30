/*
*   MIT License
*   Copyright (c) 2020 João Paulo Back
*
*/

const dotenv = require('dotenv');
const express = require('express');
const routes = require('./routes');
require('./database/index')

class App{
    constructor(){
        this.initServer();
        this.initEnvironment();
        this.initRoutes();
        this.initMiddlewares();
    }
    initServer(){
        this.server = express();
    }
    initRoutes(){
        this.server.use(routes);
    }
    initMiddlewares(){
        this.server.use(express.json());
    }
    initEnvironment(){
        switch(process.env.NODE_ENV){
            case "dev":
                dotenv.config({path: './config/.env-dev'});
            case "prod":
                dotenv.config({path: './config/.env-prod'});
            default:
                dotenv.config({path: './config/.env-dev'});
        }
    }
}

module.exports = new App().server;