const UserModel = require("../models/User.Model");
const Utilities = require("../common/Utilities");
const TablesInfoModel = require("../models/TablesInfo.Model");

class UserController {
    constructor() {
        this.userModel = new UserModel();
        this.tablesInfoModel = new TablesInfoModel();
        this.util = new Utilities();
    }
    verifyToken(req, res) {
        let me = this;
        let token = req.headers["authorization"];
        if (typeof token != 'undefined' && token != null) {
            me.util.jwtVerify(token, 'secret_key', function (decoded) {
                if (decoded != null) {
                    res.json({
                        valid: true
                    });
                } else {
                    res.json({
                        valid: false
                    });
                }
            });
        }
    }
    checkLogin(req, res) {
        //test promise query
        //this.userModel.promiseQuery(req.body);
        let me = this;
        this.userModel.authenticateAndRow(req.body, function (record) {
            // const headers = req.headers["authorization"];
            // if (typeof headers == 'undefined') {
            //     res.send({ status: "failure", exception: "You not set header!" });
            //     return;
            // }
            // if (typeof headers != 'undefined' && headers == "1122") {

            // }

            if (record != null) {
                let user = record.user;

                if (user.user_id != null) {
                    // const token = jwt.sign({ userid: user.token }, 'secret_key');
                    let token = me.util.jwtGenerator({
                        jwtToken: user.token
                    }, 'secret_key');

                    res.json({
                        token: token,
                        user_id: user.user_id,
                        firstname: user.firstname,
                        lastname: user.lastname,
                        status: "success",
                        role: record.role,
                        role_detail: record.role_detail,
                    });
                }

            } else {
                res.send({
                    status: "failure",
                    exception: "not found! "
                });
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
