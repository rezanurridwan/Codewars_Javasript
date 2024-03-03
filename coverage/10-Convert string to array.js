//Link soal
//https://www.codewars.com/kata/57e76bc428d6fbc2d500036d/solutions/javascript

//Soal
//Write a function to split a string and convert it into an array of words.

// Examples (Input ==> Output):
// "Robin Singh" ==> ["Robin", "Singh"]

// "I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]

//Jawaban
// Cara Pertama
// function stringToArray (string){
//     return string.split(' ')
// }
// console.log(stringToArray('Robin Sigh'));

//Cara Kedua
const stringToArray = (string) => string.split(' ');
console.log(stringToArray('Hello World'));