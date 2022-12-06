'use strict';

let base64 = require('base-64');
let bcrypt = require('bcrypt');

console.log('--------BASE 64----------');

let string  = 'Ryan pass 123';
let encodedString = base64.encode(string);
let decodedString = base64.decode(encodedString);

console.log('string: ', 'str');
console.log('encodedString:', encodedString);
console.log('decodedString:', decodedString);

console.log('--------HASHING w/ BCRYPT----------');


let password = 'pass123';
let complexity =5;

encrypt(password, complexity);

async function encrypt(password, complexity){
let hashedPass = await bcrypt.hash(password, complexity);
console.log(hashedPassword);
}