setTimeout(() => console.log('setTimeout 1'), 1000);
setTimeout(() => console.log('setTimeout 2'), 500);
setTimeout(() => console.log('setTimeout 3'), 0);

// setTimeout(() => console.log('setTimeout 1'), 0);
// setTimeout(() => {
//     console.log('setTimeout 2');
//     process.nextTick(() => console.log('Inner process.nextTick inside setTimeout 2'));
// }, 0);
// setTimeout(() => {
//     console.log('setTimeout 3');
//     console.log('');
// }, 0);

// process.nextTick(() => {
//     console.log('');
//     console.log('process.nextTick 1');
// });
// process.nextTick(() => {
//     console.log('process.nextTick 2');
//     process.nextTick(() => {
//         console.log('Inner process.tick inside nextTick 2');
//         console.log('');
//     });
// });
// process.nextTick(() => console.log('process.nextTick 3'));

// Promise.resolve().then(() => console.log('Promise.resolve 1'));
// Promise.resolve().then(() => {
//     console.log('Promise.resolve 2');
//     process.nextTick(() => {
//         console.log('Inner process.nextTick inside promise 2');
//         console.log('');
//     });
// });
// Promise.resolve().then(() => console.log('promise.resolve 3'));
