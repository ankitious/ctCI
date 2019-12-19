/*

    URLify: Write a method to replace all spaces in a string with '%20: 
    You may assume that the string has sufficient space at the end to hold 
    the additional characters, and that you are given the "true" length of 
    the string. (Note: If implementing in Java, please use a character array 
    so that you can perform this operation in place.)

*/


const URLify = (str, n = str.length) => {
    if (str.length === 0) {
        return str;
    }

    let chars = 0;
    for (let s of str) {
        if (s !== ' ') {
            chars++;
        }
    }
    let spaces = n - chars;

    let newLength = n - 1 + 2 * spaces;

    for (let i = str.length - 1, j = newLength; i >= 0 && j > i; --i, --j) {
        if (str[i] === ' ') {
            str[j] = '0';
            str[--j] = '2';
            str[--j] = '%';
        }
        else {
            str[j] = str[i];
        }
    }
    return str;
}




console.log(
    URLify('Mr John Smith ', 13)
);