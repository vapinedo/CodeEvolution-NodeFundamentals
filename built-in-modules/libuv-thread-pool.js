const crypto = require('node:crypto');

process.env.UV_THREADPOOL_SIZE = 10;
const MAX_CALLS = 10;

const start = Date.now();
for (let i = 0; i < MAX_CALLS; i++) {
    crypto.pbkdf2('password', 'salt', 100000, 512, 'sha512', () => {
        console.log(i + 1 + ' hash password algo in:', Date.now() - start + 'ms');
    });
}

// const start = Date.now();
// crypto.pbkdf2Sync('password', 'salt', 100000, 512, 'sha512');
// crypto.pbkdf2Sync('password', 'salt', 100000, 512, 'sha512');
// crypto.pbkdf2Sync('password', 'salt', 100000, 512, 'sha512');
// crypto.pbkdf2Sync('password', 'salt', 100000, 512, 'sha512');
// console.log('Password hashed in:', Date.now() - start + 'ms');