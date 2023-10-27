const fs = require('node:fs');

const filePath = './data.txt';
console.log("First")
const fileContent = fs.readFileSync(filePath, 'utf-8');
console.log(fileContent);
console.log("Second")

fs.readFile(filePath, 'utf-8', (error, data) => {
    if (error) {
        console.log(error);
    } else {
        console.log(data);
    }
});
console.log("Third");

let newFilePath = './God.txt';
let newContent = 'God is love';
fs.writeFileSync(newFilePath, newContent);

fs.writeFile(newFilePath, '\nThat is way keeping reading holy bible, rocks', { flag: 'a' }, (error) => {
    if (error) {
        console.log(error);
    } {
        console.log('Content has been written succesfully!');
    }
});