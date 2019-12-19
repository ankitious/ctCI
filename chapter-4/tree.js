class Node {
    constructor(data, left = null, right = null) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    insert(data) {
        let newNode = new Node(data);
        if (this.root === null) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode)
        }
    }

    insertNode(node, newNode) {
        if (newNode.data < node.data) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }

    remove(data) {
        if (this.root === null) {
            return null;
        }
        this.root = this.removeNode(this.root, data);
    }

    removeNode(node, key) {
        if (node.data > key) {
            this.removeNode(node.left, key);
            return node;
        } else if (node.data < key) {
            this.removeNode(node.right, key);
            return node;
        } else {
            console.log(node)
            // if node is a leaf
            if (node.left === null && node.right === null) {
                node = null;
                return node;
            }
            else if (node.left === null) {
                node = node.right;
                return node;
            }
            else if (node.right === null) {
                node = node.left;
                return node;
            } else {
                console.log('**')
                let aux = this.findMinNode(node.right);
                console.log(aux)
                node.data = aux.data;
                node.right = this.removeNode(node.right, aux.data);
                return node;
            }
        }
    }

    findMinNode(node) {
        if (node.left === null) {
            return node;
        } else {
            this.findMinNode(node.left);
        }
    }

}

let n = new BST();
n.insert(5);
n.insert(4);
n.insert(8);
n.insert(9);
n.insert(2);
n.insert(5);
n.insert(6);
n.insert(10);
n.remove(8);
console.log(JSON.stringify(n));