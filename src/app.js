/*
*   Autor: João Paulo Back
*/


const dotenv = require('dotenv');
const express = require('express');
const routes = require('./routes');

class App{
    constructor(){
        this.initServer();
        this.initEnvironment();
        this.initRoutes();
    }
    initServer(){
        this.server = express();
    }
    initRoutes(){
        this.server.use(routes);
    }
    initEnvironment(){
        switch(process.env.NODE_ENV){
            case "dev":
                dotenv.config({path: './config/.env-prod'});
            default:
                dotenv.config({path: './config/.env-dev'});
        }
    }
}

module.exports = new App().server;