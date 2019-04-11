const express = require('express');
const path = require('path');
var cors = require('cors');
var bodyParser = require('body-parser')

module.exports = function () {
    var app = express();
    app.use(cors());
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));

    require("../app/routes/index.routes")(app);
    require("../app/routes/customer.routes")(app);
    require("../app/routes/users.routes")(app);


    app.use(express.static(path.join(__dirname, './app/views')));
    app.use(express.static(path.join(__dirname, './public')));

    // app.use(express.json());
    // app.use(express.urlencoded());
    return app;
}