/*

    Animal Shelter: An animal shelter, which holds only dogs and cats, 
    operates on a strictly"first in, first out" basis. People must adopt
    either the "oldest" (based on arrival time) of all animals at the shelter, 
    or they can select whether they would prefer a dog or a cat (and will 
    receive the oldest animal of that type). They cannot select which specific 
    animal they would like. Create the data structures to maintain this system 
    and implement operations such as enqueue, dequeueAny, dequeueDog, and 
    dequeueCat. You may use the built-in Linked List data structure.
    
*/

class Node {
    constructor(data, age, next) {
        this.data = data;
        this.id = age;
        this.next = next;
    }
}
class QueueWithLL {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    enqueue(value, age) {
        let node = new Node(value, age, null)
        let current = this.head;
        if (this.head === null) {
            this.head = node;
        } else {
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }

        this.size++;
    }

    dequeue() {
        if (this.head === null) {
            return new Error('Queue is empty');
        }

        let value = this.head.data;
        this.head = this.head.next;
        this.size--;
        return value;
    }

    peek() {
        if (this.head === null) {
            return new Error('Queue is empty');
        }

        return this.head;
    }

    getSize() {
        return this.size;
    }

}

class AnimalShelter {
    constructor() {
        this.catQueue = new QueueWithLL();
        this.dogQueue = new QueueWithLL();
        this.id = 1;
    }

    enqueueCat(value) {
        this.catQueue.enqueue(value, this.id);
        this.id++;
    }

    enqueueDog(value) {
        this.dogQueue.enqueue(value, this.id);
        this.id++;
    }

    dequeueCat() {
        this.catQueue.dequeue();
    }

    dequeueDog() {
        this.dogQueue.dequeue();
    }

    dequeueAny() {
        if (this.dogQueue.getSize() === 0) {
            this.dequeueCat();
        } else if (this.catQueue.getSize() === 0) {
            this.dequeueDog();
        } else {
            let dog = this.dogQueue.peek();
            let cat = this.catQueue.peek();

            if (dog.id < cat.id) {
                this.dequeueDog()
            } else {
                this.dequeueCat()
            }
        }
    }
}

let animals = new AnimalShelter();

animals.enqueueCat('Cat 1');
animals.enqueueDog('Dog 1');
animals.enqueueCat('Cat 2');
animals.enqueueCat('Cat 3');
animals.enqueueDog('Dog 2');
animals.enqueueCat('Cat 4');
animals.enqueueDog('Dog 3');
animals.enqueueDog('Dog 4');
animals.enqueueCat('Cat 5');
animals.enqueueDog('Dog 5');

animals.dequeueAny();
animals.dequeueAny();
animals.dequeueDog();
animals.dequeueCat();

animals.dequeueAny()

console.log(animals);