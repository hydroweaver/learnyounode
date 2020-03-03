const net = require('net');
const port = process.argv[2];

var server = net.createServer(connListener);
server.listen(port);

function connListener(socket){
	var data = getDateData();
	socket.write(data);
	socket.end();	
	
};

function getDateData(){
	var date = new Date().toISOString() + ' ' + new Date()+' ';
	return date.substr(0, 10) + ' ' + date.substr(41, 5) + '\n'
};
