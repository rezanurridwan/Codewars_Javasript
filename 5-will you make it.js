//Cara Pertama
// const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
//     if(distanceToPump / mpg <= fuelLeft){
//         return true
//     }else {
//         return false
//     }
//   };
//   console.log(zeroFuel(100,50,2));

//Cara Kedua
const zeroFuel = (distanceoFToPump, mpg, fuelLeft) => distanceoFToPump / mpg <= fuelLeft;
console.log(zeroFuel(100,50,2));