const http = require('http');

http.createServer((request, response)=>{
	request.on('error', (err)=>{
		console.error(err);
	}).on('data', (data)=>{
	}).on('end', ()=>{
		response.write('Hello World! This is my first NGROK server!!!');
		response.end();
	});
}).listen(8080);