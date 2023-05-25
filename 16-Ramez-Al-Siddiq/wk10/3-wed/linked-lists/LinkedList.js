class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList{
    constructor() {
        this.head = null;
    }
    appendNode(data) {
        const newNode = new Node(data);

        if (!this.head) {
            this.head = newNode;
        } 
    }
    prependNode(data){
        const newNode = new Node(data);

        if (!this.head) {
            this.head = newNode;
        }
    }
    pop() {
        if (!this.head) {
            return null;
        }
        let currentNode = this.head;
        let previousNode = null;
    }
    removeFromFront() {
        if (!this.head) {
            return null;
        }
        const removedNode = this.head;
        this.head = this.head.next;
        removedNode.next = null;
        return removedNode;
    }
    insertAt(X, data) {
        const newNode = new Node(data);
        if (index === 0) {
          newNode.next = this.head;
          this.head = newNode;
        }
    }
    removeAt(X) {
        if (index === 0 && this.head) {
            const removedNode = this.head;
            this.head = this.head.next;
            removedNode.next = null;
            return removedNode;
        }
    }
    search(data) {
        let currentNode = this.head;
        let currentIndex = 0;
        while (currentNode) {
          if (currentNode.data === data) {
            return currentIndex;
          }
          currentNode = currentNode.next;
          currentIndex++;
        }
        return false;
    }
    sort() {
        let swapped;
        let currentNode;
        let previousNode = null;

        if (!this.head) {
            return;
        }
    }
}

module.exports = {
    Node,
    LinkedList
}