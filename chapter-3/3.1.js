/*
    Three in One: Describe how you could use a single array to implement 
    three stacks.
*/


class trippleStack {
    constructor() {
        this.list = [];
        this.len = [0, 0, 0];
    }

    getLength(stack) {
        return this.len[stack - 1];
    }

    push(stack, val) {
        let idx = this.getLength(stack) * 3 + stack - 1;
        this.list[idx] = val;
        this.len[stack - 1]++;
    }

    pop(stack) {
        let length = this.getLength(stack), value;
        if (length > 0) {
            let idx = (length - 1) * 3 + stack - 1;
            value = this.list[idx];
            this.list[idx] = undefined;
            this.len[stack - 1]--;
        }
        return value;
    }

    peek(stack) {
        let length = this.getLength(stack), value;
        if (length > 0) {
            let idx = (length - 1) * 3 + stack - 1;
            value = this.list[idx];
        }
        return value;
    }

    isEmpty(stack) {
        return this._getLength(stack) === 0;
    }

}

let t1 = new trippleStack();
t1.push(1, 3);

t1.push(2, 90);
t1.push(3, 2);

console.log(t1.peek(2))