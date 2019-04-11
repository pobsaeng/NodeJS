'use strict';
const BookModel = require("../models/Book.Model");

class ProductRoutes {
    constructor(app) {
        this.app = app;

        this.bookModel = new BookModel();
    }
    appRoutes() {
        let me = this;
        this.app.get('/api/books', (request, response) => {
            me.bookModel.findAllBook(function(rows){
                if(rows != null){
                    response.send(rows);
                }
            });
        });

        this.app.post('/api/products/', (request, response) => {

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
