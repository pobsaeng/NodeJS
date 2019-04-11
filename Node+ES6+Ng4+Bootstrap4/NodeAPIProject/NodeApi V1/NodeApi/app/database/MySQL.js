var mysql = require('mysql');

class MySQL {
    constructor() {
    }
    getConfig() {
        return {
            connectionLimit: 100,
            host: "localhost",
            port: "3306",
            user: "root",
            password: "1234",
            database: "spring_extjs_db"
        };
    }
    createConnection() {
        let dbconnection = mysql.createPool(this.getConfig());
        dbconnection.on('connection', function (connection) {
            console.log('Database connection established');

            connection.on('error', function (err) {
                console.error(new Date(), 'MySQL error', err.code);
            });
            connection.on('close', function (err) {
                console.error(new Date(), 'MySQL close', err);
            });
        });
        return dbconnection;
        // return mysql.createConnection(this.getConfig());
    }
    getDbName() {
        return this.dbConfig.db;
    }
}
module.exports = new MySQL();