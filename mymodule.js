const fs = require('fs');
const path = require('path');
var final_arr = [];

module.exports = function (directory, fileExt, callback){
	fs.readdir(directory, function(err, list){
		if(err) {return callback(err);}
		list.forEach((val) => {
			if(path.extname(val) == '.' + fileExt){
				final_arr.push(val);
			}	
		});
		callback(null, final_arr);
	})
}


