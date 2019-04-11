exports.list = function(req, res){
  req.getConnection(function(err,connection){
        var query = connection.query('SELECT * FROM product ',function(err,rows){
            if(err) console.log("Error Selecting : %s ",err );
            res.render('customers', { page_title:"Customers - Node.js", data:rows } );
         });
         
    });
  
};

