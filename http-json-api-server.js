const http = require('http');
const url = require('url');

const port = process.argv[2];


const options = {
	'Content-Type': 'application/json',
};

http.createServer((request, response)=>{
	request.on('error', (err)=>{
		console.error(err);
	}).on('data', (data)=>{
		//		
	}).on('end', ()=>{
		newUrl = new URL(request.url, 'http:127.0.0.1:' + port);
		
		if(newUrl.pathname == '/api/unixtime'){
			var time = new Date(newUrl.searchParams.get('iso'));
			var unixtime = JSON.stringify({"unixtime": time.getTime()});			
			response.writeHead(200, options);
			response.end(unixtime);				
		}
		
		else if(newUrl.pathname == '/api/parsetime'){
			var time = new Date(newUrl.searchParams.get('iso'));
			var hours = time.getHours();
			var minutes = time.getMinutes();
			var seconds = time.getSeconds();
			unixtime = JSON.stringify({"hour": hours, "minute": minutes, "second": seconds});		
			response.writeHead(200, options);
			response.end(unixtime);	
		}

	});
}).listen(port);


/*
    'use strict'
    const http = require('http')

    function parsetime (time) {
      return {
        hour: time.getHours(),
        minute: time.getMinutes(),
        second: time.getSeconds()
      }
    }

    function unixtime (time) {
      return { unixtime: time.getTime() }
    }

    const server = http.createServer(function (req, res) {
      const parsedUrl = new URL(req.url, 'http://example.com')
      const time = new Date(parsedUrl.searchParams.get('iso'))
      let result

      if (/^\/api\/parsetime/.test(req.url)) {
        result = parsetime(time)
      } else if (/^\/api\/unixtime/.test(req.url)) {
        result = unixtime(time)
      }

      if (result) {
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify(result))
      } else {
        res.writeHead(404)
        res.end()
      }
    })
    server.listen(Number(process.argv[2]))

*/

