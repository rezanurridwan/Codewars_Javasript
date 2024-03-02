// function smash (words){
// return words.join(' ')
// }
// console.log(smash(['hello', 'world', 'this', 'is', 'great']));

// const smash = (words) => words.join(' ')
// console.log(smash(['hello', 'world', 'this', 'is', 'great']));

function smash (words) {
    let result = '';

    for (let i = 0; i < words.length; i++) {
        result += words[i];
        if(i != words.length - 1){
            result += ' '
        }
        
    }
    return result;

}
console.log(smash(['hello', 'world', 'this', 'is', 'great']));