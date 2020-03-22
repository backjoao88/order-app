/*
*   Autor: João Paulo Back
*/

class ProductController{
    async index(req, res){
        return res.json({ok:true})
    }
}

module.exports = new ProductController();