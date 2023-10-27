const fs = require('node:fs/promises');

// console.log('first');

let filePath = './God.txt';
// fs.readFile(filePath, 'utf-8')
//     .then(data => console.log(data))
//     .catch(error => console.log(error));

// console.log('second');

async function readFile() {
    try {
        const data = await fs.readFile(filePath, 'utf-8');
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}
readFile();