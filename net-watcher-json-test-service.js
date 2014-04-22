/**
 * New node file - test service that sends multiple messages
 */

"use strict";

const net = require('net');
const server = net.createServer(function(connection) {
	
	console.log('Subscriber connected');
	
	connection.write('{"type": "changed", "file": "targ"');
	
	//after a second delay send other chunk
	let timer = setTimeout(function() {
		connection.write('et.txt, "timestamp": 132812738389349}' + '\n');
		connection.end();
	}, 1000);
	
	
	connection.on('end', function() {
		
		clearTimeout(timer);
		
		console.log("Subscriber disconnected");
		
	});
	
});

server.listen(5443, function() {
	
	console.log("Test server listening for subscribers...");
});