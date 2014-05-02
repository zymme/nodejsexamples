/**
 * Subscriber node file
 */

'use strict';

const zmq = require('zmq');

//create subscriber endpoint
const subscriber = zmq.socket('sub');

//subscribe to all messages
subscriber.subscribe("");

subscriber.on("message", function(data) {
	
	let message = JSON.parse(data);
	let date = new Date(message.timestamp);
	
	console.log("File '" + message.file + "' changed at " + date);
	
});

//connect to publisher
console.log("About to connect to sub on tcp://localhost:5442")
subscriber.connect("tcp://localhost:5442");	