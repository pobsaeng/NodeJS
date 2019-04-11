'use strict';
class ProductRoutes {
    constructor(app) {
        this.app = app;
    }
    appRoutes() {
        this.app.get('/api/products', (request, response) => {
            response.send("This is Product Routing!!");
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