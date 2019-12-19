/*

Return Kth to Last: Implement an algorithm to find the kth to last 
element of a singly linked list.


*/

const getLength = (list) => {
    let len = 0;

    while (list) {
        list = list.next;
        len++;
    }
    return len;
}

const getByIndex = (list, k) => {

    let count = 0;
    let length = getLength(list);
    if (k > length) {
        return new Error('invalid value of k')
    }
    let run = length - k;
    while (run > count) {
        list = list.next;
        count++;
    }

    return list.val;
}

console.log(getByIndex({ val: 2, next: { val: 4, next: { val: 5 } } }, 2))