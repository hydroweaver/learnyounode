const http = require('http');
const port = process.argv[2];

var body = [];

http.createServer((request, response)=>{
	request.on('error', (err)=>{
		console.error(err);
	}).on('data', (data)=>{
		if(request.method == 'POST'){
			body.push(data.toString().toUpperCase());
		}
	}).on('end', ()=>{
		//body = Buffer.concat(body).toString();
		for(var i = 0; i < body.length; i++){
			response.write(body[i]);
		}
	});
}).listen(port);
