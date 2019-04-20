// for use in command line
/* 
Example:
md-links ./some/example.md --validate
*/
module.exports = require('./lib/cli');

// for use in any *.js after run npm install in the current project
/*
Example:
const mdLinks = require('mdlinks');
*/
module.exports = require('./lib/mdlinks');

