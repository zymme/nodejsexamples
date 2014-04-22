/**
 * New node file
 */

const fs = require('fs');

fs.watch('target.txt',  function() {
	
	console.log("file 'target.txt' just changed");
}

);

console.log("Now watching 'target.txt' for changes ...");