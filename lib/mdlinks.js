'use strict';

// function test() {
//     for (let i = 0; i < 10; i++) {
//         console.log('Hola desde mdlinks:' + i);   
//     }
// }

// exports.test = test();

const fs = require('fs');
const path = require('path');

function pathtInserted (error, pathFile) {
    if(pathFile == undefined) {
        console.log('Inserte una ruta valida por favor');
        return error;
    } else {
        console.log(pathFile);
        return true;
    }
}
exports.pathtInserted = pathtInserted();


// El modulo fs de node tiene un metodo llamado readFile que nos ayuda a leer un archiivo y requiere de 2 parametros el primero es la ruta delarchivo a leer y el segundo caracter le ponemo utf8 para que asi nos lo codifique.
function readFile() {
    fs.readFile('./test.md', 'utf8', function (error, data) {
        if (error) throw error
        return data;
    })
}
const data = fs.readFileSync('./test.md','utf8');
console.log(data);

exports.readFile = readFile();
