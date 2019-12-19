/*

    Palindrome Permutation: Given a string, write a function to check if 
    it is a permutation of a palin- drome. A palindrome is a word or phrase 
    that is the same forwards and backwards. A permutation is a rearrangement 
    of letters.The palindrome does not need to be limited to just dictionary 
    words.
    EXAMPLE
    Input: Tact Coa
    Output: True (permutations: "taco cat". "atco cta". etc.)
    
*/

const palPerm = (str) => {
    let hash = {};
    let charCount = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === ' ') {
            continue;
        }
        if (hash[str[i]]) {
            delete hash[str[i]];
        } else {
            hash[str[i]] = true;
        }
        charCount++;
    }


    if (charCount % 2 === 0) {
        return Object.keys(hash).length === 0;
    } else {
        return Object.keys(hash).length === 1;
    }
}

console.log(
    palPerm('taco cat'),
    palPerm('atco cat'),
    palPerm('aabc'),
    palPerm('')
);