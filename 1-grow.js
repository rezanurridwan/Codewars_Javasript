//Cara pertama
// function grow(x){

//     let result =x[0]

//     for (let i = 1; i < x.length; i++){
//         result *= x[i]
//     }; 
//     return result
// }
// console.log(grow([1,2,3,4]));
//Cara Kedua
// function grow(x){
//     const result = x.reduce((acc, curr) => acc * curr,1);
//     return result;
//   }
//   console.log((grow([1,2,3,4])))
// Cara ketiga
const grow = x => x.reduce ((a,b) => a*b)
console.log((grow([1,2,3,4])));