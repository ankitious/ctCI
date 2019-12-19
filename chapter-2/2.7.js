/*

Intersection: Given two (singly) linked lists, determine if the two 
lists intersect. Return the inter- secting node. Note that the intersection 
is defined based on reference, not value. That is, if the kth node of the 
first linked list is the exact same node (by reference) as the jth node of 
the second linked list, then they are intersecting.

*/



const getLength = (list) => {
    let len = 0;

    while (list) {
        list = list.next;
        len++;
    }
    return len;
}


const intersect = (l1, l2) => {
    let len1 = getLength(l1);
    let len2 = getLength(l2);

    let diff = len1 - len2;

    while (diff > 0) {
        l1 = l1.next;
        diff--;
    }

    while (l1) {
        if (l1.val === l2.val) {
            console.log('found the inter section!');
            break;
        }
        l1 = l1.next;
        l2 = l2.next;
    }

    return l1;
}

const l1 = {
    val: 'R',
    next: {
        val: 'A',
        next: {
            val: 'D'
        }
    }
}
const l2 = {
    val: 'A',
    next: {
        val: 'D'
    }
}
console.log(intersect(l1, l2))