const secondHighestElement = (numArr) => {
    if(!numArr.length){
        return [];    
    }
    let highestElement = Number.NEGATIVE_INFINITY;
    let secondHighestElement = Number.NEGATIVE_INFINITY;
    
    for(const num of numArr){
        let myNumber = Number(num);
        
        if(myNumber > highestElement){
            [secondHighestElement, highestElement] = [highestElement, myNumber];
        } else if(myNumber < highestElement && myNumber > secondHighestElement){
            secondHighestElement = myNumber;
        }
    }
    return secondHighestElement;
};

const numArray = [13,6,18,1,2,10];

console.log(secondHighestElement(numArray));
