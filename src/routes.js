/*
*   Autor: João Paulo Back
*/

const { Router } = require('express');
const ProductController = require('./app/controllers/ProductController')

const routes = new Router();

routes.get('/products', ProductController.index)

module.exports = routes;
