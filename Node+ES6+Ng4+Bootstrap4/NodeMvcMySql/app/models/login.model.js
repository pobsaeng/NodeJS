exports.checkLogin = function (connection, _object, next) {
    var strQuery = "SELECT * FROM users where username='" + _object.username + "' && password='" + _object.password+"';";
    var query = connection.query(strQuery, function (err, rows, fields) {
        //if (err) throw err;
        if (err) {
            //throw err;
            console.log(err);
            logger.info(err);
            next(err);
        } else {
            if(rows.length > 0){
                next(null, rows);
            }else{
                next(null, null);
            }
            
        }
    });
}