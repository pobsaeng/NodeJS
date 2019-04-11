'use strict';
const express = require("express");
const cors = require('cors');
const bodyParser = require('body-parser');

const UserRoutes = require('./app/routes/User.Routes');
const ProductRoutes = require('./app/routes/Product.Routes');

class Server {
    constructor() {
        this.port = 8080;
        this.host = `172.20.10.3`;
        this.app = express();
    }
    appConfig() {
        this.app.use(bodyParser.json());
        this.app.use(cors());
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }
    appRoutes() {
        new UserRoutes(this.app).getRoutes();
        new ProductRoutes(this.app).getRoutes();
    }
    execute() {
        this.appConfig();
        this.appRoutes();

        this.app.listen(this.port, this.host, () => {
            console.log(`Listening on http://${this.host}:${this.port}`);
        });
    }
}

const server = new Server();
server.execute();

module.exports = server.app;