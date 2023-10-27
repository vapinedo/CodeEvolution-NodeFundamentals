const fs = require('node:fs');
const zlib = require('node:zlib');

const gzip = zlib.createGzip();

const file1Path = './data.txt';
const file2Path = './data2.txt';
const file3Path = './data2.txt.gzip';

const readbleStream = fs.createReadStream(file1Path, {
    encoding: 'utf-8',
    highWaterMark: 8, // size of chunk in bytes
});
readbleStream.pipe(gzip).pipe(fs.WriteStream(file3Path));
const writableStream = fs.createWriteStream(file2Path);

readbleStream.pipe(writableStream)
