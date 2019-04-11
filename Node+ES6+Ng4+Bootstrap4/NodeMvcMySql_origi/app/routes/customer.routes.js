module.exports = function (app) {
    var cust = require("../controllers/customer.controller.js");
    app.get("/history", cust.history);
}