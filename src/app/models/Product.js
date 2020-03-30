/*
*   MIT License
*   Copyright (c) 2020 João Paulo Back
*
*   Definição da classe de modelo Produto.
*
*/


const Sequelize = require('sequelize');
const { Model } = require('sequelize');

class Product extends Model{
    static init(sequelize){
        super.init({
            description: Sequelize.STRING,
        }, { sequelize });

        return this;
    }
}

module.exports = Product;