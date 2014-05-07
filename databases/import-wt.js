/**
 * import wt file process
 */

'use strict';

const async = require('async');
const file = require('file');
const wtParser = require('./lib/wt-parser.js');
const request = require('request');

const work = async.queue( function(path, done) {
	
	wtParser(path, function(err, doc) {
		
		console.log("in work async.queue call - " + doc);
		
		if(err) {
			throw err;
		}
		
		done();
		
	});	//wtParser
	
}, 10);

console.log("beginning walk of directory...");

file.walk(__dirname + "/weight_cache", function(err, dirPath, dirs, files) {
	
	files.forEach(function(path) {
		
		work.push(path);
		
	});	//forEach
	
});	//file.walk
