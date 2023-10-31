const fs = require('node:fs');

fs.readFile(__filename, () => {
    console.log('readFile 1');
    setImmediate(() => console.log('inner setImmediate 1 inside readFile 1'));
    process.nextTick(() => console.log('inner process.nextTick 2 inside readFile 1'));
    Promise.resolve().then(() => console.log('inner promise.resolve 2 inside readFile 1'));
});

process.nextTick(() => console.log('process.nextTick 1'));
Promise.resolve().then(() => console.log('promise.resolve 1'));
setTimeout(() => console.log('setTimeout 1'), 0);

// for (let i = 0; i < 2000000; i++) { }