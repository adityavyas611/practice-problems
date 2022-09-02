function findIntersection(first, second)
{
    let firstSet = new Set(first);
    let secondSet = new Set(second);
    return [...firstSet].filter(item => secondSet.has(item));
};

const multipleArray = (numArray1, numArray2) => {
    const largestofEachArray = [];
    let largestAmongAll = 0;

    const intersection = findIntersection(numArray1, numArray2);

    largestofEachArray.push(Math.max(...numArray1));
    largestofEachArray.push(Math.max(...numArray2));

    largestAmongAll = Math.max(...largestofEachArray);

      console.log("Matching Values: ", intersection);
      console.log("Largest value of arrayOne: ", largestofEachArray[0]);
      console.log("Largest value of arrayTwo: ", largestofEachArray[1]);
      console.log("Largest value of either array: ", largestAmongAll);
      
};

multipleArray([12, 55, 24, 27, 13, 24, 1400],[24, 24, 13, 233, 102]);
