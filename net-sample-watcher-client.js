/**
 * New node file
 */


"use strict";

const net = require('net');
const client = net.connect({port: 5530});

client.on('data', function(data) {
	
	console.log("I received some data ...");
	console.log("I received " + data);
	
});


client.on('end', function(data) {
	console.log('client disconnected.');
});


