/*

    Stack Min: How would you design a stack which, in addition to push and pop, 
    has a function min which returns the minimum element? Push, pop and min should 
    all operate in 0(1) time.

*/

class stack {
    constructor() {
        this.list = [];
        this.size = 0;
    }

    push(val) {
        let min = this.min();
        this.list.push({ val, min: Math.min(min !== undefined ? min : Number.POSITIVE_INFINITY, val) })
        this.size++;
    }

    pop() {
        if (this.size.length === 0) {
            return new Error('Underflow')
        }
        this.list.pop();
        this.size--;
    }

    min() {
        if (!this.isEmpty()) {
            return this.list[this.list.length - 1].min;
        }
    }

    isEmpty() {
        return this.size === 0;
    }

}

const s = new stack();
s.push(6);
s.push(8);
s.push(3);
s.push(5);
s.push(10);
console.log(s.min());

// By 
