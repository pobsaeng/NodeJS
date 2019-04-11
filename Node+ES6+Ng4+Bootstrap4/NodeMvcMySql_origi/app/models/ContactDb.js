exports.getAllRecord = function (connection, table, next) {
    var strQuery = "SELECT * FROM " + table;
    var query = connection.query(strQuery, function (err, rows, fields) {
        //if (err) throw err;
        if (err) {
            //throw err;
            console.log(err);
            logger.info(err);
            next(err);
        } else {
            next(null, rows);
        }
    });
}