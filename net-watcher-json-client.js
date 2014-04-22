/**
 * node file that will act as a client processing json messages from a service hosted by a node.js server
 */


"use strict";

const net = require('net');
const client = net.connect({port: 5443});


//declare EventEmitter listener when client receives data
client.on('data', function(data) {
	
	let message = JSON.parse(data);
	
	if(message.type == 'watching') {
		console.log("Now watching: " + message.file);
	}
	else if (message.type == 'changed'){
	
		let date = Date(message.timestamp);
		console.log("File '" + message.file + "' changed at " + date);
		
	}
	else {
		throw Error ("Unrecognized message type: " + message.type);
	}
	
	
});
