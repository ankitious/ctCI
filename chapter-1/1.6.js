/*

    String Compression: Implement a method to perform basic string compression 
    using the counts of repeated characters. For example, the string aabcccccaaa 
    would become a2b1c5a3. If the "compressed" string would not become smaller 
    than the original string, your method should return the original string. 
    You can assume the string has only uppercase and lowercase letters (a - z).

*/

const strCompression = (str) => {

    if (!str) {
        return str;
    }
    let run = 1;
    let temp = str[0];
    let newStr = temp;
    for (let i = 1; i < str.length; i++) {
        if (temp === str[i]) {
            run++;
        } else {
            temp = str[i];
            newStr += run + temp;
            run = 1;
        }
    }

    newStr += run;

    console.log(newStr.length > str.length ? str : newStr);
}

strCompression('aabcccccaaa')