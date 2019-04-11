var Promise = require('es6-promise').Promise;
class PromQueries {
    constructor(connection) {
        this.connection = connection;
    }
    query(sql, args) {
        return new Promise((resolve, reject) => {
            this.connection.query(sql, args, (err, rows) => {
                if (err) return reject(err);
                resolve(rows);
            });
        });
    }
    close() {
        return new Promise((resolve, reject) => {
            this.connection.end(err => {
                if (err) return reject(err);
                resolve();
            });
        });
    }
    // multiQuery(params) {
    //     let option = {
    //         host: "localhost",
    //         port: "3306",
    //         user: "root",
    //         password: "1234",
    //         database: "spring_extjs_db"
    //     };
    //     let sqlclient = require('mysql-queries').init(option);
    //     params = [params.username, params.password];

    //     let sql = ['SELECT * FROM users where username=? && password=?;', 'SELECT * FROM role WHERE id = ?;'];
    //     sqlclient.queries(sql,
    //         [params, [1]],
    //         function (err, results) {
    //             //null to false
    //             if (!!err) {
    //                 console.log(err);
    //             } else {
    //                 console.log(results[0]);
    //                 console.log(results[1]);
    //             }
    //         });
    // }
}

module.exports = PromQueries;