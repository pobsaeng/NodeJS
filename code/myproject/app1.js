var object  = require('./Object.js');

var str = '';
for(let index in object){
	
	let rec = object[ index ];
	for(key in rec) {
		str += rec[ key ]+',';
	}
	str = str.substr(0, str.length - 1) + '\n';
}

console.log( '\n' + str + '\n');