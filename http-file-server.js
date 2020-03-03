const http = require('http');
const fs = require('fs');

const port = process.argv[2];
const fileLocation = process.argv[3];
var readFile;

http.createServer((request, response)=>{
	const {headers, url} = request;
	request.on('error', (err)=>{
		console.error(err);
	}).on('data', (data)=>{
		//do something
	}).on('end', ()=>{
		readFile = fs.createReadStream(fileLocation);
		readFile.pipe(response);
	});

		

	response.on('error', (err)=>{
		console.error(err);
	});

	
}).listen(port);

/*function readFile(fileLocation){
	return fs.createReadStream(fileLocation);
};*/



/* SOLUTION FROM LESSON, SEE HOW .PIPE IS USED AS CALLBACK
    'use strict'
    const http = require('http')
    const fs = require('fs')

    const server = http.createServer(function (req, res) {
      res.writeHead(200, { 'content-type': 'text/plain' })

      fs.createReadStream(process.argv[3]).pipe(res)
    })

    server.listen(Number(process.argv[2]))

*/



