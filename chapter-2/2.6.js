/*

Palindrome: Implement a function to check if a linked list is a palindrome.

*/


const getLength = (list) => {
    let len = 0;

    while (list) {
        list = list.next;
        len++;
    }
    return len;
}

const checkPalindromeList = (list) => {
    let node = list;
    let len = getLength(list);
    if (len <= 1) {
        return true;
    }
    let count = 1;
    let temp = [];
    while (node) {
        if (len % 2 !== 0 && count === Math.ceil(len / 2)) {
            //skip
        } else {
            if (Math.floor(len / 2) >= count) {
                temp.push(node.val)
            } else {
                if (temp.pop() !== node.val) {
                    return false;
                }
            }
        }
        node = node.next;
        count++;
    }
    return true;

}

var obj = {
    val: 'R',
    next: {
        val: 'A',
        next: {
            val: 'D',
            next: {
                val: 'A',
                next: {
                    val: 'R',
                }
            }
        }
    }
}


console.log(checkPalindromeList(obj));