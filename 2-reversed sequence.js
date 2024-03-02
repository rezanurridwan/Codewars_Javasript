//cara pertama
// const reverseSeq = n => {
//     const result =[];
//     for (let i = n; i >= 1; i--){
//         result.push(i);
//     }
//     return result
// }
//   console.log(reverseSeq(5));

//cara kedua
reverseSeq = (n) => {
    return Array(n).fill().map((el, i) => i +1).reverse()
}
console.log(reverseSeq(5));

