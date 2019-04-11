const db = require('../database/MySQL');

class TablesInfoModel {
    constructor() { }

    findTablesInfo(callback) {
        let connection = db.createConnection();
        let jsonResponse = {
            "children": []
        };

        let dbArray = [];
        // query to get all tables in all databases 

        connection.query('SELECT distinct(table_schema) as text from information_schema.TABLES', function (err, rows, fields) {
            if (typeof (rows) == "undefined") return;
            for (let i = 0; i < rows.length; i++) {
                rows[i].children = [];
                jsonResponse.children.push(rows[i]);
                dbArray.push(rows[i].text); //all database name
            }

            let sql = "SELECT  table_schema as dbname,table_name as tableName from information_schema.tables where table_schema in (?)";
            connection.query(sql, [dbArray], function (err, rowsWithTables, fields) {
                for (let i = 0; i < rowsWithTables.length; i++) {
                    for (let j = 0; j < rows.length; j++) {
                        if (rowsWithTables[i].dbname === rows[j].text) {
                            rows[j].children.push({ text: rowsWithTables[i].tableName, leaf: true });
                        }
                    }
                }
                callback(jsonResponse);
            });

        });

    }
}
module.exports = TablesInfoModel;