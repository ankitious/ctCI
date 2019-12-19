/*

    Stack of Plates: Imagine a (literal) stack of plates. If the stack gets too 
    high, it might topple. Therefore, in real life, we would likely start a new 
    stack when the previous stack exceeds some threshold. Implement a data 
    structure SetOfStacks that mimics this. SetOfStacks should be composed of 
    several stacks and should create a new stack once the previous one exceeds 
    capacity. SetOfStacks. push () and SetOfStacks. pop () should behave 
    identically to a single stack (that is, pop ( ) should return the same values 
    as it would if there were just a single stack).

    FOLLOW UP
    Implement a function pop At(int index) which performs a pop operation on 
    a specific sub-stack.

*/

/*

    Stack Min: How would you design a stack which, in addition to push and pop, 
    has a function min which returns the minimum element? Push, pop and min should 
    all operate in 0(1) time.

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


class SetOfStacks {

    constructor(capacity) {
        this.stacks = [];
        this.capacity = capacity;
    }

    push(val) {
        if (this.stacks.length === 0 || this.stacks[this.stacks.length - 1].getSize() >= this.capacity) {
            let s = new Stack();
            s.push(val);
            this.stacks.push(s);
        } else {
            this.stacks[this.stacks.length - 1].push(val)
        }
    }

    pop() {
        if (this.stacks.length === 0) {
            return new Error('Underflow');
        }

        if (this.stacks[this.stacks.length - 1].getSize() === 1) {
            this.stacks.pop();
        } else {
            this.stacks[this.stacks.length - 1].pop();
        }
    }

    popAt(index) {
        if (index < 0 || this.stacks.length <= index) {
            return new Error('Invalid Index!');
        }

        let value = this.stacks[index].pop();
        // let tempStack = [];
        // let count = 0;
        // console.log(index)
        // for (let i = index + 1; i < this.stacks.length; i++) {
        //     let count = this.stacks[index].getSize();
        //     console.log(count)
        //     while (count <= this.capacity) {
        //         console.log('---', count, this.stacks[i].pop())
        //         tempStack.push(this.stacks[i].pop());
        //         count++;
        //     }
        // }
        // console.log('-', tempStack)

    }
}

let stackSet = new SetOfStacks(2);
stackSet.push(10);
stackSet.push(20);
stackSet.push(30);
stackSet.push(40);
stackSet.push(50);
stackSet.push(60);
stackSet.popAt(1);

console.log(stackSet);