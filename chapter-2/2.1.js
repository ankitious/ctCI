/*
Remove Dups: Write code to remove duplicates from an unsorted li nked list. 
FOLLOW UP
How would you solve this problem if a temporary buffer is not allowed?
*/

const removeDups = (list) => {

    if (!list) {
        return list;
    }

    let seen = {},
        node = list;

    seen[node.val] = true;
    while (node.next) {
        if (seen[node.next.val]) {
            node.next = node.next.next;
        }
        else {
            seen[node.next.val];
            node = node.next;
        }
    }

    return list;
}

console.log(removeDups({ val: 1, next: { val: 2, next: { val: 1, next: { val: 3 } } } }))