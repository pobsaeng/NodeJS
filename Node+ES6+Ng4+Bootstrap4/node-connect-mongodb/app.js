// Retrieve
var MongoClient = require('mongodb').MongoClient;

// Connect to the db
MongoClient.connect("mongodb://localhost:27017/customermanager", function (err, db) {
  if (!err) {
    console.log("We are connected");

    db.collection("customers").findOne({}, function (err, result) {
      if (err) throw err;
      console.log(result.firstName);
      db.close();
    });

  }
});