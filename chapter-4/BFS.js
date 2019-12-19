class Node {
    constructor(value) {
        this.value = value;
        this.edges = [];
        this.searched = false;
        this.parent = null;
    }

    connect(neighbors) {
        for (let i = 0; i < neighbors.length; i++) {
            this.edges.push(neighbors[i]);
        }
    }

}

class Graph {
    constructor() {
        this.nodes = [];
        this.graph = {};
        this.start = null;
        this.end = null;
    }

    addNode(value) {
        let node = new Node(value);
        this.nodes.push(node);
        this.graph[value] = node.edges;
        return node;
    }

    setStart(node) {
        this.start = node;
    }
    setEnd(node) {
        this.end = node;
    }
}

function inIt() {

    let BFS = new Graph();
    // Add a bunch of nodes
    var you = BFS.addNode('you');
    var bob = BFS.addNode('bob');
    var alice = BFS.addNode('alice');
    var claire = BFS.addNode('claire');
    var anuj = BFS.addNode('anuj');
    var peggy = BFS.addNode('peggy');
    var thom = BFS.addNode('thom');
    var jonny = BFS.addNode('jonny');

    // Add node connections
    you.connect(alice, bob, claire);
    bob.connect(anuj, peggy);
    alice.connect(peggy);
    claire.connect(thom, jonny);

    BFS.setStart(you);
    BFS.setEnd(thom);
    bfs(BFS);
}

function bfs(BFS) {

    let queue = [];
    let path = [];
    queue.push(BFS.start)
    while (queue.length > 0) {
        let person = queue.shift();
        if (!person.searched) {
            if (person.value === BFS.end.value) {
                path.push(person);
                let next = person.parent;
                console.log(next.parent.parent.parent.parent)
                while (next) {
                    path.push(next);
                    next = next.parent;
                }
                console.log(path);
                break;
            } else {
                let neighbors = person.edges;
                for (let i = 0; i < neighbors.length; i++) {
                    queue.push(neighbors[i]);
                    neighbors[i].parent = person;
                }
                person.searched = true;
            }
        }

    }
}


inIt();

