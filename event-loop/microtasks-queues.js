process.nextTick(() => console.log('process.nextTick 1'));
process.nextTick(() => {
    console.log('process.nextTick 2');
    process.nextTick(() => {
        console.log('Inner process.tick inside nextTick 2');
        console.log('');
    });
});
process.nextTick(() => console.log('process.nextTick 3'));

Promise.resolve().then(() => console.log('Promise.resolve 1'));
Promise.resolve().then(() => {
    console.log('Promise.resolve 2');
    Promise.resolve().then(() => {
        console.log('Inner Promise.resolve inside promise 2');
        console.log('');
    });
});
Promise.resolve().then(() => console.log('promise.resolve 3'));