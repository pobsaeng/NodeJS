const db = require('../database/MySQL');
const PromQueries = require('../database/PromQueries');

class ProductModel {
    constructor() {
        this.connection = db.createConnection();
        this.promQueries = new PromQueries(this.connection);
    }
    findAll(callback) {
        this.connection.query("select * from tbl_product", function (err, rows, fields) {
            if (err) {
                callback({ exception: 'Query error: ' + err, success: false });

            } else if (rows.length > 0) {
                callback({ rows: rows, success: true });
            }
        });
    }
    insert(params, callback) {
        console.log("insert!");
        var sql = "INSERT INTO tbl_product" +
            " (product_id, product_name, supplier_id, category_id, last_cost, cost_avg, sale_price, product_status)" +
            " VALUES(?,?,?,?,?,?,?,?)";

        this.connection.query(sql, params, function (err, result) {
            if (err) throw err;
            callback(result);
        });
    }
    update() {

    }
    delete() {

    }
}
module.exports = ProductModel;