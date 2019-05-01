'use strict';

const fs = require('fs');
const path = require('path');
const http = require('http');
const https = require('https');
const markdownLinkExtractor = require('markdown-link-extractor');


function readFromFolder(pathDir){
  fs.readdir(pathDir, function(err, files) {
    files.forEach(function(element) {
      validateExtension(element);
    })
  });
}

function validateExtension(pathFile) {
  if (path.extname(pathFile) === '.md') {
    console.log('Tus archivos son validos:', pathFile);
    readFile(pathFile);
  } else {
    console.log('No es un archivo md: ', pathFile);
  }
};

function readFile(pathFile) {
  let markdown = fs.readFileSync(pathFile).toString();
  let links = markdownLinkExtractor(markdown);
  links.forEach(function (link) {
    if (link.substring(0, 5) == 'https') {
      validateLinksHTTPS(link);
    } else {
      validateLinksHTTP(link);
    }
  });
};

function validateLinksHTTPS(link) {
  https.get(link, (res) => {
    const {
      statusCode
    } = res;
    if (statusCode !== 200) {
      console.log(link, ' Status Code:', statusCode, ' Links rotos');
    } else if (statusCode == 200) {
      console.log(link, ' Status Code', statusCode, ' Links validos');
    }
  });
};

function validateLinksHTTP(link) {
  http.get(link, (res) => {
    const {
      statusCode
    } = res;
    if (statusCode !== 200) {
      console.log(link, ' Status Code:', statusCode, ' Links rotos');
    } else if (statusCode == 200) {
      console.log(link, ' Status Code:', statusCode, ' Links validos');
    }
  });
};


function onlyWorksWithCLI(value, flags) {
  let stats = fs.statSync(value);
  if (flags.validate == true) {
    if (stats.isDirectory()){
      readFromFolder(value); 
    }else{
      validateExtension(value);
    }
  }
}


module.exports = {
  onlyWorksWithCLI,
  
  readFromFolder,
  validateExtension,
  readFile,
  validateLinksHTTPS,
  validateLinksHTTP
}
