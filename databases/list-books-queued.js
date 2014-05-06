/**
 * list queued node file
 */


'use strict';

const async = require('async');
const file = require('file');
const rdfParser = require('./lib/rdf-parser.js');
const request = require('request');

const work = async.queue(function(path, done) {

	rdfParser(path, function(err, doc) {
		
		console.log(doc);
		
		done();
		
	});	//rdfParser
	
}, 1000);

console.log("beginning directory walk");

file.walk(__dirname + '/cache', function(err, dirPath, dirs, files) {
	
	files.forEach(function(path) {
		
		work.push(path);
		
	});	//forEach
	
});	//file.walk