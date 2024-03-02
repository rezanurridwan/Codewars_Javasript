//Cara Pertama
// function countBy(x,n){
//     let z=[];
// for(let i=1; i<=n; i++){
// z.push(i*x)
// }
// return z;
// }
// console.log(countBy(3,10));

//Cara Kedua
const countBy = (x,n) => [...Array(n)].map((el,i) => (i+1) * n )
console.log(countBy(2,5));