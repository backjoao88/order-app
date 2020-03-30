/*
*   MIT License
*   Copyright (c) 2020 João Paulo Back
*
*/

const Product = require('../models/Product')

class ProductController{
    async index(req, res){
        const products = await Product.findAll();
        return res.json(products)    
    }
}

module.exports = new ProductController();