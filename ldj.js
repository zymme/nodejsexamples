/**
 * New node file
 */

"use strict";

const events = require('events');
const util = require('util');

//client constructor
const LDJClient = function(stream) {
	
	events.EventEmitter.call(this);
	
	let self = this;
	
	let buffer = '';
	
	stream.on('data', function(data) {
		
		buffer += data;
		
		let boundary = buffer.indexOf('\n');
		
		while (boundary !== -1) {
			
			let input = buffer.substr(0, boundary);
			
			buffer = buffer.substr(boundary + 1);
			
			self.emit('message', JSON.parse(input));
			
			boundary = buffer.indexOf('\n');
			
		}	//end while
		
	});
	
}

util.inherits(LDJClient, events.EventEmitter);

//expose module methods
exports.LDJClient = LDJClient;

exports.connect = function (stream) {
	return new LDJClient(stream);
}