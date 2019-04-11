'use strict';
const UserController = require('../controllers/User.Controller');

class UserRoutes {
    constructor(app) {
        this.app = app;
        this.userController = new UserController();
    }
    appRoutes() {
        this.app.post('/api/signin', (request, response) => {
            this.userController.checkLogin(request, response);
        });

        this.app.post('/api/verify', (request, response) => {
            this.userController.verifyToken(request, response);
        });

        this.app.get('/api/users', (request, response) => {
            // this.userCtroller.(request, response);
        });

        this.app.get('/api/tableinfo', (request, response) => {
            this.userCtroller.userController(request, response);
        });

        this.app.post('/api/users/', (request, response) => {

        });

        this.app.delete('/api/users/:id', (request, response) => {

        });

        this.app.put('/api/users/:id', (request, response) => {

        });
    }
    getRoutes() {
        this.appRoutes();
    }
}
module.exports = UserRoutes;
