const db = require('../database/MySQL');
const PromQueries = require('../database/PromQueries');

class UserModel {
    constructor() {
        this.connection = db.createConnection();
        this.promQueries = new PromQueries(this.connection);
    }
    promiseQuery(params) {
        params = [params.username, params.password];

        let someRows, otherRows;
        this.promQueries.query('SELECT * FROM tbl_user where username=? && password=?', params)
            .then(rows => {
                someRows = rows;
                return this.promQueries.query('SELECT * FROM tbl_role WHERE role_id=?', 1);
            })
            .then(rows => {
                otherRows = rows;
                //return this.promQueries.close();
            })
            .then(() => {
                // do something with someRows and otherRows
                console.log(someRows);
                console.log(otherRows);
            });
    }
    authen(params, callback) {
        let strQuery = "SELECT * FROM tbl_user where username=? && password=?;";
        params = [params.username, params.password];

        this.connection.query(strQuery, params, function (err, rows, fields) {
            if (err) {
                callback(err, null);
            } else {
                callback(null, rows);
            }
        });
    }
    toJSON(rows) {
        let items = {};
        for (let key in rows[0]) {
            items[key] = rows[0][key];
        }
        return items;
    }
    getAuthenticate(params, callback) {
        let me = this;
        let strQuery = "SELECT * FROM tbl_user where username=? && password=?;";
        params = [params.username, params.password];

        this.connection.query(strQuery, params, function (err, rows, fields) {
            if (err) {
                callback(null);
            } else {
                callback(me.toJSON(rows));
            }
        });
    }
    getUserRole(user_id, callback) {
        let me = this;
        this.connection.query('SELECT * FROM tbl_role WHERE role_id=?', user_id, function (err, rows, fields) {
            callback(me.toJSON(rows));;
        });
    }
    getUserRoleDetail(role_id, callback) {
        let me = this;
        this.connection.query('SELECT * FROM tbl_role_detail WHERE role_de_id=?', role_id, function (err, rows, fields) {
            callback(me.toJSON(rows));;
        });
    }
    authenticateAndRow(params, callback) {
        let me = this;
        let listOfUser = {};
        this.getAuthenticate(params, function (user) {
            if (user != null) {
                listOfUser.user = user; //keep user

                me.getUserRole(user.user_id, function (role) {
                    if (role != null) {
                        listOfUser.role = role; //keep role

                        me.getUserRoleDetail(role.role_id, function (role_detail) {
                            if (role_detail != null) {
                                listOfUser.role_detail = role_detail; //keep role

                                callback(listOfUser);

                            } else {
                                listOfUser.role_detail = null; //role_detail is null
                                callback(listOfUser);
                            }
                        });

                    } else {
                        listOfUser.role = null; //role is null
                        callback(listOfUser);
                    }
                });
            } else {
                listOfUser.user = null; //user is null
                callback(listOfUser);
            }
        });
    }
    findAll(callback) {
        this.connection.query('SELECT * FROM tbl_user', function (err, rows, fields) {
            if (err) {
                callback(null);
            } else
                callback(rows);
        });
    }
}
module.exports = UserModel;
