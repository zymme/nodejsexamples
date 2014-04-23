/**
 * New node file - sample using the ldj module to implement our client watcher to handle
 * multiple segmented messages.
 * 
 */

"use strict";

const net = require('net');
const ldj = require('./ldj.js');
const netClient = net.connect({port: 5443});
const ldjClient = ldj.connect(netClient);

ldjClient.on('message', function(message) {
	
	if(message.type === 'watching') {
		
		console.log("Now watching: " + message.file);
		
	}
	else if(message.type === 'changed') {
		
		console.log("File '" + message.file + "' changed at " + new Date(message.timestamp));
		
	}
	else {
		throw Error ("Unrecognized message type: " + message.type);
	}
	
});