const path = require('path')

const test = '/files/names.txt';

console.log(path.dirname(test));   // folder -> /files
console.log(path.basename(test));  // filename -> names.txt
console.log(path.extname(test));   // extension -> .txt

console.log(path.join("node", "files", "names.txt"))   

console.log(path.normalize("node/basics/path/..")) 
