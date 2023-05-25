class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class LinkedList{
    constructor(head = null){
        this.head = head;
    }

    appendNode(data){
        let node = new Node(data)

        if (!this.head) {
            this.head = node
            return
        }

        let current = this.head;
        while (current.next) {
          current = current.next;
        }
        
        current.next = node;
        // creates a new node with the given data and adds it to back of the list
    }
    prependNode(data){
        let node = new Node(data)

        node.next = this.head 

        this.head = node
        
        // creates a new node with the given data and adds it to the front of the list
    }
    pop(){
        let previous = null
        let current = this.head
        
        while (current.next) {
            previous = current
            current = current.next
        }

        if (previous) {
            previous.next = null;
        } else {
            this.head = null;
        }
        return current
        // removes the last node from the list and returns it
    }
    removeFromFront(){

        let current = this.head

        this.head = current.next

        return current
        // remove the head node from the list and return it
        // the next node in the list is the new head node
    }
    insertAt(X, data){

        let node = new Node(data);

        if (!this.head) {
            this.head = node;
            return;
        }

        if (X === 0) {
            node.next = this.head
            this.head = node
            return
        }
        
        let current = this.head;
        let count = 0;
        let previous = null;
        while (current) {
            
            if (count === X) {
                previous.next = node
                node.next = current
                return;
            }
            count ++;
            previous = current;
            current = current.next;
        }

        current.next = node;
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
    }
    sort(){
        // sort the Linked List in ascending order of data values
    }
}

module.exports = {
    Node,
    LinkedList
}