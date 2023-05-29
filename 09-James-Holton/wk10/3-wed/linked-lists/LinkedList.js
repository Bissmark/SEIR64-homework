class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
    }
    appendNode(data){
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
        } else {
            let currentNode = this.head;
            while (currentNode.next) {
                currentNode = currentNode.next;
            }
            currentNode.next = newNode;
        }
    }
    prependNode(data){
        const newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
    }
    pop(){
        if (!this.head) return null;
        if (!this.head.next) {
            const removedNode = this.head;
            this.head = null;
            return removedNode;
        }
        let currentNode = this.head;
        while (currentNode.next.next) {
            currentNode = currentNode.next;
        }
        const removedNode = currentNode.next;
        currentNode.next = null;
        return removedNode;
    }
    removeFromFront(){
        if (!this.head) return null;
        const removedNode = this.head;
        this.head = this.head.next;
        return removedNode;
    }
    insertAt(X, data){
        if (X === 0) {
            this.prependNode(data);
        } else {
            let count = 0;
            let currentNode = this.head;
            while (count < X - 1 && currentNode.next) {
                currentNode = currentNode.next;
                count++;
            }
            const newNode = new Node(data);
            newNode.next = currentNode.next;
            currentNode.next = newNode;
        }
    }
    removeAt(X){
        if (X === 0) {
            return this.removeFromFront();
        } else {
            let count = 0;
            let currentNode = this.head;
            while (count < X - 1 && currentNode.next) {
                currentNode = currentNode.next;
                count++;
            }
            const removedNode = currentNode.next;
            currentNode.next = currentNode.next ? currentNode.next.next : null;
            return removedNode;
        }
    }
    search(data){
        let currentNode = this.head;
        while (currentNode) {
            if (currentNode.data === data) {
                return currentNode;
            }
            currentNode = currentNode.next;
        }
        return false;
    }
    sort(){
        let swapped;
        do {
            swapped = false;
            let currentNode = this.head;
            while (currentNode && currentNode.next) {
                if (currentNode.data > currentNode.next.data) {
                    const temp = currentNode.data;
                    currentNode.data = currentNode.next.data;
                    currentNode.next.data = temp;
                    swapped = true;
                }
                currentNode = currentNode.next;
            }
        } while (swapped);
    }
}

module.exports = {
    Node,
    LinkedList
}