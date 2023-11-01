import { upperCase } from 'upper-case';

function greet(name) {
    console.log(upperCase('Hello ' + name));
}
greet('Victor Pinedo');

export default greet;