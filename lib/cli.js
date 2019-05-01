#!/usr/bin/env node
'use strict';
const mdLinks = require('./mdlinks');
const woofwoof = require('woofwoof');
const cli = woofwoof(`
    Usage: md-links <file> or <folder> [Options: -f or --flag]

    Options:
     -v, --validate Validate files
     -s, --stats Basic stadistics about links`,
    {
        alias: {
            v: 'validate',
            s: 'stats'
        }, default: {
            validate: '../test.md'
        }
    });

    cli.input.forEach(element => {
        mdLinks.onlyWorksWithCLI(element, cli.flags);
    });
  //console.log('ACA INPUT: ', cli.input[2]);
//console.log('ACA FLAG: ', cli.flags);

