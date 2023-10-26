// const path = require('node:path'); also works, though node: prefix is optional
const path = require('path');

// console.log(__dirname);
// console.log(__filename);

// // returns the last portion of a path
// console.log(path.basename(__dirname));
// console.log(path.basename(__filename));

// // return the file extension for any file, when appears as last element on path
// console.log(path.extname(__dirname));
// console.log(path.extname(__filename));

// // returns an object which contains 5 properties related to the path
// console.log(path.parse(__filename));

// // Returns a path when giving an object as parameter
// let object = path.parse(__filename);
// console.log(path.format(object));

// // returns a boolean value, indicating whether is or not a absolute path
// console.log(path.isAbsolute(__filename));

// console.log(path.join('/folder1', 'folder2', 'index.html'));
// console.log(path.join('/folder1', '/folder2', 'index.html'));
// console.log(path.join('/folder1', '//folder2', 'index.html'));
// console.log(path.join('/folder1', '//folder2', '../index.html'));
// console.log(path.join(__dirname, 'data.json'));

console.log(path.resolve('/folder1', 'folder2', 'index.html'));
console.log(path.resolve('/folder1', '/folder2', 'index.html'));
console.log(path.resolve('/folder1', '//folder2', 'index.html'));
console.log(path.resolve('/folder1', '//folder2', '../index.html'));
console.log(path.resolve(__dirname, 'data.json'));