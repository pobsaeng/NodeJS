const express = require('express');
const path = require('path');

module.exports = function () {
    var app = express();
    require("../app/routes/index.routes")(app);
    require("../app/routes/customer.routes")(app);

    app.use(express.static(path.join(__dirname, './app/views')));
    app.use(express.static(path.join(__dirname, './public')));
    // app.use(express.json());
    // app.use(express.urlencoded());
    return app;
}