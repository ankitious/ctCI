/*
One Away: There are three types of edits that can be performed on strings: insert a character, remove a character, or replace a character. Given two strings, write a function to check if they are one edit (or zero edits) away.
EXAMPLE
pale, pIe -> true pales. pale -> true pale. bale -> true pale. bake -> false

*/

const oneWay = (str1, str2) => {
    if (str1.length === 0 || Math.abs(str1.length - str2.length) > 1) {
        return false;
    }

    let hash = {};

    for (let i = 0; i < str1.length; i++) {
        hash[str1[i]] = true;
    }

    for (let i = 0; i < str2.length; i++) {
        delete hash[str2[i]];
    }

    return Object.keys(hash).length === 1;

}

console.log(oneWay('pale', 'ple'))
console.log(oneWay('pale', 'bake'))