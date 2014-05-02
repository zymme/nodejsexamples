/**
 * Requestor node file for demo client
 */

'use strict';

const zmq = require('zmq');
const filename = process.argv[2];

//create request endpoint
const requester = zmq.socket('req');


//handle replies from responder
requester.on('message', function(data){
	
	console.log("data received : " + data);
	
	let response = JSON.parse(data);
	
	console.log("Received response.content: " + response.content);
	console.log("Received response.timestamp: " + response.timestamp);
	
});	//requester.on

//connect 
requester.connect("tcp://localhost:5433");

//send request for content
console.log("Sending request for ' " + filename + "'");

requester.send(JSON.stringify({

	path: filename

}));




