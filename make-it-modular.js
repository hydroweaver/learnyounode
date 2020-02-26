const mymodule = require('./mymodule.js');


function printit(err, data){
	if(err){
		console.log('error');
	}
	else{
		data.forEach(function(val){
			console.log(val);
		});
	}
}


mymodule(process.argv[2], process.argv[3], printit);