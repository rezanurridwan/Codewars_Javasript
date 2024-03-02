function min(list){

    let minValue = list[0];

    for(let i=0; i <= list.length; i++){
        if(minValue > list[i]){
            minValue = list[i]
        }
    }
    return minValue
}
console.log(min([-89,1,2,3,4,5,6,7,8,9]));


function max (list){
    let maxValue =list[0];
    for(let i=0; i <= list.length; i++){
        if(maxValue < list[i]){
            maxValue = list[i]
        }
    }
    return maxValue
}
console.log(max([1,2,3,4,5,6,7,8,9]));