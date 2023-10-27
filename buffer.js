const buffer = new Buffer.from('Valp');
buffer.write('He');
console.log(buffer.toJSON());
console.log(buffer);
console.log(buffer.toString());
