const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const ObjectID = mongodb.ObjectID;

class Mongo {
    constructor(dbName) {
        this.MongoUrl = 'mongodb://localhost:27017/meanauth';
        this.dbName = dbName;
        this.Mongodb = Mongodb;
    }
    getUsers(callback) {
        this.Mongodb.onConnect((db, ObjectID) => {
            db.collection('users').find().toArray((err, result) => {
                callback(result);
                db.close();
            });
        });
    }
    onConnect(callback) {
        MongoClient.connect(this.MongoUrl, (err, db) => {
            callback(db, ObjectID);
        });
    }
    getCollection(collName, callback) {
        mongo.connect(this.url, function (err, db) {
            callback(db.collection(collName), db);
        });
    }
    appTest() {
        this.url = "mongodb://localhost:27017/customermanager";
        this.getCollection("customermanager", function (collection, db) {
            collection.findOne({}, function (err, result) {
                if (err) throw err;
                console.log(result.firstName);
                db.close();
            });
        });
    }
}
module.exports = Mongo;