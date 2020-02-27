const http = require('http');

const url = process.argv[2];
var urlDataList = '';

http.get(url, (response) => {
	response.setEncoding('utf-8');
	response.on('data', (data) => {
		urlDataList = urlDataList + data.toString();
	});
	response.on('end', () => {
		console.log(urlDataList.length);
		console.log(urlDataList);
	});
	response.on('error', (err) => {
		console.error(err);
	});
});