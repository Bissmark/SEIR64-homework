class Node{
    constructor(data){
        // a Node starts with a given data property
        // a Node also has a .next property initialized as null
        this.data = data;
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        // a Linked List starts with a "head" property intialized as null
        this.head = null;
    }
    appendNode(data){
        // creates a new node with the given data and adds it to back of the list
        let node = new Node(data);
        // empty
        if (this.head == null) {
            this.head = node;
        }
        else {
            // one or more item
            let temp = this.head;
            while (temp.next != null) {
                temp = temp.next;
            }
            temp.next = node;
        }
    }
    prependNode(data){
        // creates a new node with the given data and adds it to the front of the list
        let node = new Node(data);
        if (this.head == null) {
            this.head = node;
        }
        else {
            let temp = this.head;
            this.head = node;
            node.next = temp;
        }
    }
    pop(){
        // removes the last node from the list and returns it
        if (this.head == null) {
            return;
        }
        else {
            let temp = this.head;
            while (temp.next != null) {
                if (temp.next.next == null) {
                    let lastNode = temp.next;
                    temp.next = null;
                    return lastNode;
                }
                temp = temp.next;
            }
            this.head = null;
            return temp;
        }
    }
    removeFromFront(){
        // remove the head node from the list and return it
        // the next node in the list is the new head node
        if (this.head == null) {
            return;
        } else { 
            let temp = this.head;
            if (temp.next == null) {
                let headNode = temp;
                this.head = null;
                return headNode;
            }
            while (temp.next != null) {
                let headNode = temp;
                this.head = temp.next;
                return headNode;
            }
        }
    }
    insertAt(X, data){
        // insert a new node into the list with the given data
        // place it after X nodes in the list
        // if X exceeds the bounds of the list, put the node at the end
        // insertAt(0, 7) would add the new node as the head
    }
    removeAt(X){
        // remove the Xth node from the list, considering 0 to be the first node
        // return the node that has been removed
    }
    search(data){
        // searches the list for a node with the given data
        // if it is found, return the "index" of the node, considering 0 to be the first node
        // if not, return false
        let temp = this.head;
        if (this.head == null) {
            return false;
        } else {
            let nodeIndex = 0;
            while (temp.next != null) {
                if (temp.data == data) {
                    return nodeIndex;
                }
                temp = temp.next;
                nodeIndex++;
            } 
            if (temp.data == data) {
                return nodeIndex;
            }
            return false;
        }

    }
    sort(){
        // sort the Linked List in ascending order of data values
    }
}

module.exports = {
    Node,
    LinkedList
}