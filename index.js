const SuperHero = require("./super-hero");
const superHero = require("./super-hero");

const batman = new SuperHero("Batman");
console.log(batman.getName()); 
batman.setName("Bruce Wayne");
console.log(batman.getName());

console.log("------");

const superman = new SuperHero("Superman");
console.log(superman.getName()); 
superman.setName("Clark Kent");
console.log(superman.getName());