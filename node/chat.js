var net = require('net');

var chatServer = net.createServer();

chatServer.on('connection', function(client){
	client.write('hello world!\n');
	client.write('bye!\n');
	
	client.end();
});

chatServer.listen(9000);