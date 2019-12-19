/*
    Queue via Stacks: Implement a MyQueue class which implements a queue 
    using two stacks.

*/

class Stack {
    constructor() {
        this.list = [];
        this.size = 0;
    }

    push(val) {
        this.list.push(val)
        this.size++;
    }

    pop() {
        if (this.size.length === 0) {
            return new Error('Underflow')
        }
        this.size--;
        return this.list.pop();
    }

    isEmpty() {
        return this.size === 0;
    }

    getSize() {
        return this.size;
    }

}


class MyQueue {

    constructor() {
        this.items = [];
        this.s1 = new Stack();
        this.s2 = new Stack();
    }

    enqueue(val) {
        this.s1.push(val);
    }

    dequeue() {
        if (this.s2.getSize() === 0) {
            if (this.s1.getSize() === 0) {
                return new Error('Nothing to POP!');
            }
            while (this.s1.getSize() !== 0) {
                this.s2.push(this.s1.pop());
            }
        }
        return this.s2.pop();
    }
}

let mq = new MyQueue();

mq.enqueue(10);
mq.enqueue(20);
mq.enqueue(30);
mq.enqueue(40);
mq.enqueue(50);
mq.dequeue();

console.log(mq.dequeue());