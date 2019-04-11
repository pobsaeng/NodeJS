const UserModel = require("../models/User.Model");
const TablesInfoModel = require("../models/TablesInfo.Model");
var jwt = require('jsonwebtoken');

class UserController {
    constructor() {
        this.userModel = new UserModel();
        this.tablesInfoModel = new TablesInfoModel();
    }
    tokenVerify(token, secretKey, callback) {
        jwt.verify(token, secretKey, function (err, decoded) {
            if (!err) {
                callback(decoded);
            } else {
                callback(null);
            }
        });
    }
    verifyToken(req, res) {
        let token = req.headers["authorization"];
        if (typeof token != 'undefined' && token != null) {
            this.tokenVerify(token, 'secret_key', function (decoded) {
                if (decoded != null) {
                    res.json({ valid: true });
                } else {
                    res.json({ valid: false });
                }
            });
        }
    }
    checkLogin(req, res) {
        //test promise query
        //this.userModel.promiseQuery(req.body);

        this.userModel.authenticateAndRow(req.body, function (record) {
            // const headers = req.headers["authorization"];
            // if (typeof headers == 'undefined') {
            //     res.send({ status: "failure", exception: "You not set header!" });
            //     return;
            // }
            // if (typeof headers != 'undefined' && headers == "1122") {

            // }

            if (record.user != null && record.row != null) {
                let user = record.user;

                if (user.userid != null) {
                    const token = jwt.sign({ userid: user.tokenno }, 'secret_key');
                    res.json({
                        token: token,
                        userid: user.userid,
                        firstname: user.firstname,
                        lastname: user.lastname,
                        status: "success",
                        rows: record.row
                    });
                }

            } else {
                res.send({ status: "failure", exception: "not found! " });
            }
        });
    }
    getAllUser(req, res) {
        this.userModel.findAll(function (err, record) {
            res.send(record);
        });
    }
    getTablesInfo(req, res) {
        this.tablesInfoModel.findTablesInfo(function (record) {
            res.send(record);
        });
    }
}
module.exports = UserController;