const db = require('../database/MySQL');

class BookModel {
    constructor() {
        this.connection = db.createConnection();
    }
    findAllBook(callback) {
        this.connection.query("select * from tbl_book", function(err, rows, fields){
            if(err){
                callback(null);
            }else{
                callback(rows);
            }
        });
    }
}
module.exports = BookModel;
