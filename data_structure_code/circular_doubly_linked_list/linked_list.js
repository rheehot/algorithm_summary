const Node = require('./node');

// Circular Doubly Linked List
class LinkedList {
    constructor() {
        this.head = new Node('head');
        this.nodeSize = 0;
    }

    size() { return this.nodeSize; }

    find(index) {
        const tIndex = index + 1;
        const mid = parseInt(this.size()) / 2 + 1;
        let count = (mid <= tIndex) ? (this.size() - index) : tIndex;
        let targetNode = this.head;
        while (count--) {
            if (mid <= tIndex) targetNode = targetNode.prev;
            else targetNode = targetNode.next;
        }
        return targetNode;
    }

    getItem(index) {
        if (index >= this.size()) return -1;
        return this.find(index).item;
    }

    createFirstNode(item) {
        const newNode = new Node(item);
        this.head.prev = newNode;
        this.head.next = newNode;
        newNode.prev = this.head;
        newNode.next = this.head;
        ++this.nodeSize;
    }

    addFirst(item) {
        if (this.head.prev === null && this.head.next === null) {
            this.createFirstNode(item);
            return;
        }

        const newNode = new Node(item);
        newNode.prev = this.head;
        newNode.next = this.head.next;
        this.head.next.prev = newNode;
        this.head.next = newNode;
        ++this.nodeSize;
    }

    addLast(item) {
        if (this.head.prev === null && this.head.next === null) {
            this.createFirstNode(item);
            return;
        }

        const newNode = new Node(item);
        newNode.next = this.head;
        newNode.prev = this.head.prev;
        this.head.prev.next = newNode;
        this.head.prev = newNode;
        ++this.nodeSize;
    }

    add(index, item) {
        if (this.head.prev === null && this.head.next === null) {
            this.createFirstNode(item);
            return;
        }

        if (index === 0) {
            this.addFirst(item);
            return;
        }

        if (index >= this.size()) {
            this.addLast(item);
            return;
        }

        const prevNode = this.find(index - 1);
        const newNode = new Node(item);
        newNode.next = prevNode.next;
        newNode.prev = prevNode;
        prevNode.next.prev = newNode;
        prevNode.next = newNode;
        ++this.nodeSize;
    }

    deleteFirst() {
        if (this.head.prev === null && this.head.next === null)
            throw Error(`Linked List is empty!`);

        if ((--this.nodeSize) === 0) {
            this.head.prev = this.head.next = null;
            return;
        }

        this.head.next.next.prev = this.head;
        this.head.next = this.head.next.next;
    }

    deleteLast() {
        if (this.head.prev === null && this.head.next === null)
            throw Error(`Linked List is empty!`);

        if ((--this.nodeSize) === 0) {
            this.head.prev = this.head.next = null;
            return;
        }

        this.head.prev.prev.next = this.head;
        this.head.prev = this.head.prev.prev;
    }

    delete(index) {
        if ((this.head.prev === null && this.head.next === null) || index >= this.size())
            throw Error(`Linked List is empty!`);

        if (index === 0 || this.size() === 1) {
            this.deleteFirst();
            return;
        }

        if (index === this.size() - 1) {
            this.deleteLast();
            return;
        }

        const prevNode = this.find(index - 1);
        prevNode.next.next.prev = prevNode;
        prevNode.next = prevNode.next.next;
        --this.nodeSize;
    }

    printAll() {
        let node = this.head.next;
        while (node !== this.head) {
            console.log(node);
            node = node.next;
        }
    }
}

module.exports = LinkedList;