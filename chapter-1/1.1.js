/* 

Is Unique: Implement an algorithm to determine if a string has 
all unique characters. What if you cannot use additional data structures? 

*/

const str = "abcadd";

/*  
*  Method : 1
*  With built in Set
*  Time: O(N)
*  Additional space: O(N)
*/

const isUnique = (str) => {
    const s1 = new Set();
    for (let i = 0; i < str.length; i++) {
        if (s1.has(str[i])) {
            return false;
        }
        s1.add(str[i]);
    }
    return true;
}


/*
 *   Method : 2
 *   First quicksort the string then check if neighbouring are equal
 *   Time: O(N logN)
 *   Additional space: O(1)
*/

const isUnique2 = (str) => {
    str = str.split('').sort().join('');
    for (let i = 0; i < str.length - 1; i++) {
        if (str[i] === str[i + 1]) {
            return false;
        }
    }
    return true;
}

console.log(isUnique(str))
console.log(isUnique2(str))