module.exports = function (app) {
    var logIn = require("../controllers/login.controller.js");
    // app.get("/login", logIn.login);

    app.post("/login", logIn.login);
}