//Cara Pertama
// function countSheep(num) {
//     let result ='';
//     for(let i=1; i<= num; i++){
//         result += i +' sheep...';
//     }
//     return result;
// }
// console.log(countSheep(4));

//Cara KEdua
function countSheep(num) {
    return [...Array(num)].map((_,i) => `${i + 1} sheep...`).join('')
}
console.log(countSheep(5));

