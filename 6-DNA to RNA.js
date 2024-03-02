// Cara Pertama
// function DNAtoRNA(dna) {
//     // create a function which returns an RNA sequence from the given DNA sequence
//     let rna = '';

//         for(let i=0; i < dna.length; i++){ 
//             if(dna[i] === 'T'){
//                 rna += 'U'
//             }else {
//                 rna += dna[i]
//             }
//         }
        
//     return rna;
//   }
//   console.log(DNAtoRNA('KJAHSGASTTSDSABSHDSVAGTTTTT'));

//Cara Kedua
const DNAtoRNA = (dna) => 
dna.split('')
.map((el) => (el === 'T' ? 'U' : el))
.join('')

console.log(DNAtoRNA('DAGSDUEDVADTTTTTUSDATT'));