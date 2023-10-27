const fs = require('node:fs');

const file1Path = './data.txt';
const file2Path = './data2.txt';

const readbleStream = fs.createReadStream(file1Path, {
    encoding: 'utf-8',
    highWaterMark: 8, // size of chunk in bytes
});
const writableStream = fs.createWriteStream(file2Path);

readbleStream.on('data', (chunkData) => {
    console.log(chunkData);
    writableStream.write(chunkData);
});