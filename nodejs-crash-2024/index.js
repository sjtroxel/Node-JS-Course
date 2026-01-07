// console.log('Hello World')
// console.log(window);
// console.log(global);
// console.log(document);
// console.log(process);

// const { generateRandomNumber, celsiusToFahrenheit } = require('./utils');

// console.log(`Random Number: ${generateRandomNumber()}`);
// console.log(`Celsius to Fahrenheit: ${celsiusToFahrenheit(0)}`);

// import { getPosts } from "./postController.js";
import getPosts, { getPostsLength } from "./postController.js";

console.log(getPosts());
console.log(`Posts Length: ${getPostsLength()}`)