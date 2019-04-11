var jwt = require('jsonwebtoken');

class Utilities {
    jwtGenerator(object, secretKey) {
        return jwt.sign(object, secretKey);
    }
    jwtVerify(token, secretKey, callback) {
        jwt.verify(token, secretKey, function (err, decoded) {
            if (err) {
                callback(decoded);
            } else {
                callback(null);
            }
        });
    }
}
module.exports = Utilities;
