/**
 * wt-parser node file
 */

'use strict';

const fs = require('fs');


module.exports = function(filename, callback) {
	
	fs.readFile(filename, function(err, data) {
		
		if(err) {
			return callback(err);
		}
		
		let wtjson = JSON.parse(data);
		
		console.log("JSON read from file " + wtjson);
		
	}); //end read file
	
	
	
	
};