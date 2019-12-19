/*

    String Rotation: Assume you have amethod isSubstring which checks 
    if one word is asubstring of another. Given two strings, s1 and s2, 
    write code to check if s2 is a rotation of s1 using only one call to 
    isSubstring (e.g.,"waterbottle"is a rotation of"erbottlewat").

*/

const isRotatedSubstring = (s1, s2) => {
    if (s1.length === 0 || s1.length !== s2.length) {
        return false;
    }

    return isSubstring(s1 + s1, s2);
}

const isSubstring = (s1, s2) => s1.includes(s2);

console.log(isRotatedSubstring('waterbottle', 'erbottlewat'));


