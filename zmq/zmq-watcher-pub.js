/**
 * Node file to pub info for watcher demo - using 0mq - aka zmq
 */


'use strict';

const fs = require('fs');
const zmq = require("zmq");

const publisher = zmq.socket('pub');
const filename = process.argv[2];

fs.watch(filename, function() {
	
	//send message to any subscribers
	publisher.send(JSON.stringify({
		type: 'changed',
		file: filename,
		timestamp: Date.now()
	}));
	
});	//end watch

//listen on TCP port 5442
publisher.bind('tcp://*:5442', function(err) {
	console.log("Listening for zmq subscribers...");	
});