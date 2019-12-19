// By extending Array

class stackDS {
    constructor(elems, size) {
        this.list = elems;
        this.size = size;
    }

    push(val) {
        this.list.push(val)
        this.size++;
    }

    pop() {
        if (this.size.length === 0) {
            return new Error('Underflow')
        }
        this.list.pop();
        this.size--;
    }
    peek() {
        return this[this.length - 1];
    }
    isEmpty() {
        return this.size === 0;
    }

    print() {
        let str = '';
        for (let i = 0; i < this.length; i++) {
            str += this[i] + ' ';
        }
        console.log(str);
    }
}

const s = new stackDS([1, 2, 3], 3);
s.push(6);
console.log(s);

// By 