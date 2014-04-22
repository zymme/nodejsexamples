/**
 * New node file - demo of spawning a child process
 */

"use strict";

const fs = require('fs');

var spawn = require('child_process').spawn;
var filename = process.argv[2];

if(!filename) {
	
	throw Error("A file to watch must be specified!");

}


fs.watch(filename, function () {
	
	let ls = spawn('ls', ['-lh', filename]);
	
	ls.stdout.pipe(process.stdout);
	
});

console.log("Now watching " + filename + " for changes...");
console.log("Number of args " + process.argv.length);