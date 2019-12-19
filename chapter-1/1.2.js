/*

Check Permutation: Given two strings, write a method to decide if one 
is a permutation of the other

*/


/*
    Method - 1 :
    Create hash table for str1.
    check if all the str2 exist in that.
    Time: O(N + M)
    Additional space: O(N)
*/
const str1 = 'abcad';
const str2 = 'bcdaa';

const isPermutationMap = (str1, str2) => {
    if (!str1 || !str2 || str1.length !== str2.length) {
        return false;
    }

    let hash = {};
    for (let i = 0; i < str1.length; i++) {

        if (hash[str1[i]]) {
            hash[str1[i]] += 1;
        } else {
            hash[str1[i]] = 1;
        }
    }


    for (let i = 0; i < str2.length; i++) {
        if (!hash[str2[i]]) {
            return false;
        }
        if (hash[str2[i]] === 1) {
            hash[str2[i]] = 0;
        } else {
            hash[str2[i]] -= 1;
        }
    }
    return true;
}

console.log(isPermutationMap(str1, str2));

/*
    Method : 2
    Sort both the string then check.
    both should be equal.
    Time: O(N lg N + M lg M)
    Additional space: O(1) if able to modify original strings, O(N + M) otherwise
*/

const isPermutationSort = (str1, str2) => {

    if (str1.length === 0 || str1.length !== str2.length) {
        return false;
    }

    str1 = str1.split('').sort().join('')
    str2 = str2.split('').sort().join('')

    return str1 === str2;
}

console.log(isPermutationSort(str1, str2))