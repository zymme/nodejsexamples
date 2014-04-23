/**
 * New node file
 */

"use strict";

const fs = require('fs');
const net = require('net');
const filename = process.argv[2];

const server = net.createServer( function(connection) {
	
//	console.log("Subscriber connected.");
//	
//	connection.write("About to watch " + filename + " for changes " + "\n");
	
	
	
	connection.on('close', function() {
		
		console.log("Subscriber disconnected.");
		
	});
	
});


if(!filename) {
	throw Error("No target filename was specified.");
}

server.listen(5530, function() {
	
	console.log("Listening for subscribers...");
	
});

server.on('connection', function(connection) {
	
	console.log("Connection made - in server.connect event emitter");
	
	connection.write("About to monitor file: " + filename + " for changes \n");
	
	
	
});