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
        const newNode   = new Node(item);
        this.head.prev  = newNode;
        this.head.next  = newNode;
        newNode.prev    = this.head;
        newNode.next    = this.head;
        ++this.nodeSize;
    }

    addFirst(item) {
        if (this.head.prev === null && this.head.next === null) {
            this.createFirstNode(item);
        } else {
            const newNode       = new Node(item);
            newNode.prev        = this.head;
            newNode.next        = this.head.next;
            this.head.next.prev = newNode;
            this.head.next      = newNode;
            ++this.nodeSize;
        }
    }

    addLast(item) {
        if (this.head.prev === null && this.head.next === null) {
            this.createFirstNode(item);
        } else {
            const newNode       = new Node(item);
            newNode.next        = this.head;
            newNode.prev        = this.head.prev;
            this.head.prev.next = newNode;
            this.head.prev      = newNode;
            ++this.nodeSize;
        }
    }

    add(index, item) {
        if (this.head.prev === null && this.head.next === null) {
            this.createFirstNode(item);
        } else {
            if (index >= this.size()) this.addLast(item);
            else if (index === 0) this.addFirst(item);
            else {
                const prevNode      = this.find(index - 1);
                const newNode       = new Node(item);
                newNode.next        = prevNode.next;
                newNode.prev        = prevNode;
                prevNode.next.prev  = newNode;
                prevNode.next       = newNode;
                ++this.nodeSize;
            }
        }
    }

    delete(index) {
        // --this.nodeSize;
    }

    print(type) {
        let node = this.head.next;
        while (node !== this.head) {
            switch (type) {
                case 'all'  : console.log(node);        break;
                case 'item' : console.log(node.item);   break;
            }
            node = node.next;
        }
    }
}

module.exports = LinkedList;