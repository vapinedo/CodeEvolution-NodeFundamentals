const fs = require('node:fs');

fs.readFile(__filename, () => {
    console.log('readFile 1');
});

process.nextTick(() => console.log('process.nextTick 1'));
Promise.resolve().then(() => console.log('promise.resolve 1'));
setTimeout(() => console.log('setTimeout 1'), 0);
setImmediate(() => console.log('setImmediate 1'));

// for (let i = 0; i < 2000000; i++) { }