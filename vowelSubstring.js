const countVowelSubstrings = word => {
    const vowels = 'aeiuo';
    let count = 0;
    for (let i = 0; i < word.length - 1; i++) {
       let str = '';
       for (let j = i; j < word.length; j++) {
          if (vowels.includes(word[j])) {
             str += word[j];
             new Set(str.split('')).size >= 5 && count++;
          }
          else {
            break;
          }
       }
    }
    return count;
 }
