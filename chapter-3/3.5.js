/*

    Sort Stack: Write a program to sort a stack such that the smallest items 
    are on the top. You can use an additional temporary stack, but you may not 
    copy the elements into any other data structure (such as an array). 
    The stack supports the following operations: push, pop, peek, and isEmpty.

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

    peek() {
        return this.list[this.list.length - 1];
    }

    getSize() {
        return this.size;
    }
}

class sortStack {
    constructor() {
        this.myStack = new Stack();
    }

    push(val) {
        let temp = new Stack();
        while (this.myStack.getSize() !== 0 && this.myStack.peek() < val) {
            temp.push(this.myStack.pop())
        }
        this.myStack.push(val);
        while (temp.getSize() !== 0) {
            this.myStack.push(temp.pop())
        }
    }

    pop() {

    }
}

let ss = new sortStack();

ss.push(100);
ss.push(15);
ss.push(20);
ss.push(30);
ss.push(10);
ss.push(80);
ss.push(50);
ss.push(45);
ss.push(75);
ss.push(35);
ss.push(85);
ss.push(55);
ss.push(40);
ss.push(99);

console.log(ss.myStack.list);