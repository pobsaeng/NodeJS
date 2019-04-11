var url = require('url');
const dbConfig = require('../../server-db.js');
const loginModel = require('../models/login.model.js');

exports.login = function (req, res, next) {
    console.log('--------------login---------------');
    console.log(req.body);

    let connection = dbConfig.createConnection();

    loginModel.checkLogin(connection, req.body, function (err, data) {
        if(data == null){
            res.send({ status: "failure", exception: "not found!" });
            return;
        }
        if (!err) {
            res.send({ status: "success", data: data });
        } else {
             res.send({ status: "failure", exception: "not found!" });
        }
    });


}