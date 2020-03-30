/*
*   MIT License
*   Copyright (c) 2020 João Paulo Back
*
*/

const Product = require('../models/Product');
const Yup = require('yup');

class ProductController{

    async create(req, res){
        const schema = Yup.object().shape({
            description: Yup.string().required(),
            price: Yup.number().required().positive()
        });

        if(!(await schema.isValid(req.body))){
            return res.status(400).json({
                error: "The validation fails."
            });
        }

        const product = await Product.create(req.body);
        return res.json(product);
    }

    async index(req, res){
        const products = await Product.findAll();
        return res.json(products)    
    }
}

module.exports = new ProductController();