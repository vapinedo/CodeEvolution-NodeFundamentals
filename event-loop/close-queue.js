const fs = require('node:fs');

const readableStream = fs.createReadStream(__filename);
readableStream.close();

readableStream.on('close', () => {
    console.log('Close event callBack from readableStream');
});

setImmediate(() => console.log('setImmediate 1'));
setTimeout(() => console.log('setTimeout 1'), 0);
Promise.resolve().then(() => console.log('promise resolve 1'));
process.nextTick(() => console.log('process.nextTick 1'));