/**
 * input : {{ab}}}{
    output: true
 */
/**
 * input : {}}c}}d{{
    output: false
 */

const bracketMatcher = (bracketString) => {
    let left = 0;
    let right = 0;
    const brackets = [];
    // for(const str of bracketString){
    //     // check if the str is present in object then push
    //     if(brackets.includes('{') && str === '}'){
    //         brackets.pop('{');
    //     } else if(brackets.includes('}') && str === '{'){
    //         brackets.pop('}');
    //     } else if(bracketObj[str]){
    //         brackets.push(str);
    //     }
    // }
    for(let i = 0; i < bracketString.length; i += 1){
        if(bracketString[i] === '{'){
            left += 1;
        }else if(bracketString[i] === '}'){
            right += 1;
        }
    }
    return left === right ? true : false;
};

console.log(bracketMatcher('{{ab}}}{'));
console.log(bracketMatcher('{}}c}}d{{'));
console.log(bracketMatcher(''));

// }{
