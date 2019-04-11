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
        this.promQueries.query('SELECT * FROM users where username=? && password=?', params)
            .then(rows => {
                someRows = rows;
                return this.promQueries.query('SELECT * FROM role WHERE id=?', 1);
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
        let strQuery = "SELECT * FROM users where username=? && password=?;";
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
        let strQuery = "SELECT * FROM users where username=? && password=?;";
        params = [params.username, params.password];

        this.connection.query(strQuery, params, function (err, rows, fields) {
            if (err) {
                callback(null);
            } else {
                callback(me.toJSON(rows));
            }
        });
    }
    getUserRows(userid, callback) {
        let me = this;
        this.connection.query('SELECT * FROM role WHERE id=?', userid, function (err, rows, fields) {
            callback(me.toJSON(rows));;
        });
    }
    authenticateAndRow(params, callback) {
        let me = this;
        let listOfUser = {};
        this.getAuthenticate(params, function (user) {
            listOfUser.user = user; //Detail

            if (user.userid != null) {
                me.getUserRows(user.userid, function (row) {
                    listOfUser.row = row; //Rows
                    callback(listOfUser);
                });

            } else {
                listOfUser.row = null;
                callback(listOfUser);
            }

        });
    }
    findAll(callback) {
        this.connection.query('SELECT * FROM users', function (err, rows, fields) {
            if (err) {
                callback(err, null);
            } else
                callback(null, rows);
        });
    }
}
module.exports = UserModel;