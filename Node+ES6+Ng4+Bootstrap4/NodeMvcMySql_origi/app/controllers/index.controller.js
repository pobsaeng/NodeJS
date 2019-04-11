var fs = require('fs');
exports.render = function (req, res) {
    // let file = process.cwd() + '/index.html';
    // res.writeHead(200, { "Content-Type": "text/html" });
    // fs.createReadStream(file).pipe(res);

    res.send("Hello World");
}