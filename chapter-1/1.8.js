/*

Zero Matrix: Write an algorithm such that if an element in an MxN matrix is 0, 
its entire row and column are set to O.

1 2 3
0 4 5
7 4 6

*/

const zeroMatrix = (mat) => {
    let rowIndex = [];
    let columnIndex = [];
    for (let i = 0; i < mat.length; i++) {
        for (let j = i; j < mat[0].length; j++) {
            if (mat[i][j] === 0) {
                rowIndex.push(i);
                columnIndex.push(j);
            }
        }
    }

    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat[0].length; j++) {
            if (rowIndex.includes(i) || columnIndex.includes(j)) {
                mat[i][j] = 0;
            }
        }
    }



    return mat;
}

console.table(zeroMatrix([[0, 2, 3], [4, 1, 0], [8, 7, 6]]));