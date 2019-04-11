'use strict';
const BookModel = require("../models/Book.Model");
const ProductModel = require("../models/Product.Model");

class ProductRoutes {
    constructor(app) {
        this.app = app;

        this.bookModel = new BookModel();
        this.productModel = new ProductModel();
    }
    appRoutes() {
        let me = this;
        let arr_product = [null, 'Node.JS', '11220', '20123', 500, 500, 690, '1'];

        this.app.get('/api/product', (request, response) => {
            me.productModel.findAll(function (result) {
                if (result != null) {
                    response.send(result);
                }
            });
        });

        this.app.post('/api/insert/', (request, response) => {
            me.productModel.insert(arr_product, function (status) {
                response.send(status);
            });
        });

        this.app.delete('/api/products/:id', (request, response) => {

        });

        this.app.put('/api/products/:id', (request, response) => {

        });
    }

    getRoutes() {
        this.appRoutes();
    }
}
module.exports = ProductRoutes;
