const http = require('http');

var urlList = process.argv.filter((val)=> process.argv.indexOf(val) >= 2);

http.get(



