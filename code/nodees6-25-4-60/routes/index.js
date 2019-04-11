var fs = require('fs');

exports.index = function(req, res){
	let file = process.cwd() + '/index.html';                                                   
	res.writeHead(200, {"Content-Type": "text/html"});                                                
	fs.createReadStream(file).pipe(res);
};
exports.getcustomers = function(req, res, param){
	req.getConnection(function(err,connection){
        var query = connection.query('SELECT * FROM book', function(err, rows){
            
            if(err) console.log("Error Selecting : %s ",err );
            res.header('Content-type','application/text');
			res.header('Charset','utf8');
            res.send( {data:rows} );
           
         });
    });
};
