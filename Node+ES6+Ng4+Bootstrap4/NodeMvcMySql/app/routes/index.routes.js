module.exports = function (app) {
    var index = require("../controllers/index.controller.js");
    app.get("/", index.render);

    var person = require("../controllers/person.controller.js");
    app.get("/title", person.title);
}