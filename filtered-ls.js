const fs = require('fs');
const path = require('path');
const directory = process.argv[2];
const fileExt = '.' + process.argv[3];

fs.readdir(directory, function getList(err, list){
	for(var i =0; i < list.length; i++){
		if(path.extname(list[i]) == fileExt) {
			console.log(list[i]);
		}
	}
});