/*

Rotate Matrix: Given an image represented by an NxN matrix, where 
each pixel in the image is 4 bytes, write a method to rotate the 
image by 90 degrees. Can you do this in place?
    
*/


/*

first find the transpose then reverse it

*/

const rotateMatrix = (mat) => {
    for (let i = 0; i < mat.length; i++) {
        for (let j = i; j < mat[0].length; j++) {
            var temp = mat[i][j];
            mat[i][j] = mat[j][i];
            mat[j][i] = temp;
        }
    }

    for (let i = 0; i < mat.length; i++) {
        mat[i] = mat[i].reverse();
    }

    return mat;

}

console.log(rotateMatrix([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));

