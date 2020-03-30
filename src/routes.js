/*
*   MIT License
*   Copyright (c) 2020 João Paulo Back
*
*/

const { Router } = require('express');
const ProductController = require('./app/controllers/ProductController')

const routes = new Router();

routes.post('/products', ProductController.create);
routes.get('/products', ProductController.index)

module.exports = routes;
