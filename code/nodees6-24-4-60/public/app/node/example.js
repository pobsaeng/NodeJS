
let fs = require('fs');
class Example {
    constructor() {

        let path = this.writeFile();
        this.readFile(path);
    }
    readFile(path) {
       let data = fs.readFile(path, 'utf8', function (err, buffer) {
            if (err) { console.log(err); }
            console.log( SON.parse(buffer.toString()) );
        });
        
    }
    writeFile() {
        let fs = require('fs');
        let stream = fs.createWriteStream("public/data/message.json");
        stream.once('open', function (fd) {
            let data = '{\n';
            for (let i = 0; i < 10; i++) {
                data += '\t"key_' + i + '":"value_' + i + '",\n';
            }
            data = data.substr(0, data.length - 2);
            data += '\n}';
            stream.write(data);

            stream.end();
        });

        // fs.writeFile('public/data/message.json',
        // JSON.stringify(rowData)+';',
        //     'utf8',
        //     function (err) {
        //         if (err) { console.log(err); }
        //         console.log('It\'s saved!')
        //     }
        // );
        return 'public/data/message.json';
    }
}

let ex = new Example();