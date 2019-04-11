const dbConfig = require('../../server-db.js');
const contactModel = require('../models/ContactDb.js');

exports.history = function (req, res) {
    let connection = dbConfig.createConnection();
    
    contactModel.getAllRecord(connection, "contact", function (err, data) {
        
        if (err) {
            // handle the error
        } else {
            // handle your data
            console.log("---before send ---");
            res.send(data);            
        }
    });

    
}