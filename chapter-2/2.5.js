/*

Sum Lists: You have two numbers represented by a linked list, 
where each node contains a single digit. The digits are stored in 
reverse order, such that the 1's digit is at the head of the list. 
Write a function that adds the two numbers and returns the sum as a linked list.
EXAMPLE
Input: (7-) 1 -) 6) + (5 -) 9 -) 2).Thatis,617 + 295. Output: 2 -) 1 -) 9.
That is, 912.
FOLLOW UP
Suppose the digits are stored in forward order. Repeat the above problem. 
EXAMPLE
Input: (6 -) 1 -) 7) + (2 -) 9 -) 5).Thatis,617 + 295. Output: 9 -) 1 -) 2.
That is, 912.

*/


const getNumber = (list) => {
    let count = 0;
    let num = 0;
    while (list) {
        num += (10 ** count) * list.val
        list = list.next;
        count++;
    }
    return num;
}

const sumList = (l1, l2) => {
    if (!l1 || !l2) {
        return new Error('Invalid list');
    }

    return getNumber(l1) + getNumber(l2);
}


console.log(sumList({ val: 5, next: { val: 4, next: { val: 3 } } },
    { val: 0, next: { val: 1, next: { val: 3 } } }))