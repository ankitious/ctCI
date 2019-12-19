/*

Partition: Write code to partition a linked list around a value x, 
such that all nodes less than x come before all nodes greater than or 
equal to x. lf x is contained within the list, the values of x only need 
to be after the elements less than x (see below).The partition element 
x can appear anywhere in the "right partition"; it does not need to appear 
between the left and right partitions.
2.4
94
EXAMPLE
Input: 3 -> 5 -> 8 -> 5 ->10 -> 2 -> 1[partition=5) 
Output: 3 -> 1 -> 2 -> 10 -> 5 -> 5 -> 8
    
*/

const partition = (list, p) => {

    let largerHead, largerTail, smallerTail, smallerHead;
    largerHead = largerTail = smallerTail = smallerHead = null;
    let next = null;
    let node = list;
    while (node) {
        next = node.next;
        node.next = null;

        if (node.val >= p) {
            if (!largerTail) {
                largerHead = largerTail = node;
            } else {
                largerTail.next = node;
                largerTail = largerTail.next;
            }
        } else {
            if (!smallerTail) {
                smallerHead = smallerTail = node;
            } else {
                smallerTail.next = node;
                smallerTail = smallerTail.next;
            }
        }
        node = next;
    }

    if (smallerTail) {
        smallerTail.next = largerHead;
    }
    return smallerHead || largerHead;
}

console.log(

    partition({
        val: 3,
        next: {
            val: 5,
            next: {
                val: 8,
                next: {
                    val: 5,
                    next: {
                        val: 1,
                        next: {
                            val: 2
                        }
                    }
                }
            }
        }
    }, 5)
)