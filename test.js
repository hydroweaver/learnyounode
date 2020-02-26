const mymodule = require('./mymodule.js');

function printit(file){
	console.log(file);
}

mymodule(process.argv[2], process.argv[3], printit);