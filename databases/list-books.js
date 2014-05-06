/**
 * list books node file
 */

'use strict';

const file = require('file');
const rdfParser = require('./lib/rdf-parser.js');

console.log("beginning directory walk");

file.walk(__dirname + '/cache', function(err, dirPath, dirs, files) {
	
	files.forEach(function(path) {
		
		rdfParser(path, function(err, doc) {
			
			if(err) {
				throw err;
			}
			else {
				console.log(doc); 
			}
			
		});	//rdfParser
		
	});	//files.forEach
	
});	//file.walk