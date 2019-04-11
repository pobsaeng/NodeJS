
/*
 * GET home page.
 */
var fs = require('fs');
exports.index = function(req, res){
  res.render('index', { title: 'Hello World' });
};

exports.templatejs = function(req, res){
	let file = process.cwd() + '/views/templatejs.html';                                                   
	res.writeHead(200, {"Content-Type": "text/html"});                                                
	fs.createReadStream(file).pipe(res);
};

exports.edu = function(req, res){
	let file = process.cwd() + '/views/edu.html';                                                   
	res.writeHead(200, {"Content-Type": "text/html"});                                                
	fs.createReadStream(file).pipe(res);
};

exports.test = function(req, res){
	let file = process.cwd() + '/views/test.html';                                                   
	res.writeHead(200, {"Content-Type": "text/html"});                                                
	fs.createReadStream(file).pipe(res);
};

exports.script = function(req, res){
	let file = process.cwd() + '/views/scirpt.html';                                                   
	res.writeHead(200, {"Content-Type": "text/html"});                                                
	fs.createReadStream(file).pipe(res);
};

exports.showform = function(req, res, param){
	let file = process.cwd() + '/views/customers_test.html';                                                   
    res.writeHead(200, {"Content-Type": "text/html"});                                                
    fs.createReadStream(file).pipe(res);
};

exports.getcustomers = function(req, res, param){
	console.log(param);
	req.getConnection(function(err,connection){
        var query = connection.query('SELECT * FROM book', function(err, rows){
            
            if(err) console.log("Error Selecting : %s ",err );
            res.header('Content-type','application/text');
			res.header('Charset','utf8');
            res.send( {data:rows} );
           
         });
    });
};