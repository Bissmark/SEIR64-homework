// STACK IMPLEMENTATION
class Stack {
    constructor() {
      this.items = []
    }
    push(item){
      this.items.push(item)
    }
    pop(){
      return this.items.pop()
    }
    peek(){
      return this.items[this.items.length - 1]
    }
    isEmpty(){
      return this.items.length === 0
    }
}

// this function will take in a string as input
// it will return true or false based on whether the brackets are properly matched
// the valid brackets it will scan for are {}, [], and ()
// you must use a Stack in your implementation of this function
// refer to the bracket matching readMe.md for more details
function bracketMatching(input){

}


class Node{
    constructor(data, priority){
        this.data = data;
        this.priority = priority;
        this.next = null;
    }
}

// This priority queue is implemented as a Linked List
// Your challenge is to implement the insert method of the priority queue
class priorityQueue{
    constructor(){
        this.head = null;
    }
    enqueue(data, priority){
        // Insert the new data into the proper place in the queue
        // the lowest priority number should be the head node
        // the priorities should remain in order
        // if two nodes have the same priority, put the new one first
        const newNode = new Node(data, priority);
        
        if (this.head === null || priority < this.head.priority || priority === this.head.priority) {
          newNode.next = this.head; //or should I assign a new variable?
          this.head = newNode;
          
        } else {
          let temp = this.head;
          while (temp.next != null) {
            if (temp.next.priority < priority) { // to cover cases like priority[0, 0(temp), 1(temp.next)] 
              temp = temp.next;
            } else { 
              newNode.next = temp.next;
              temp.next = newNode;
              break;
            }
         }
        if (temp.next == null) { // [0, 0, 0]
        newNode.next = null;
        temp.next = newNode;
        }
        }
    }
    peek(){
        // return the highest priority node in the queue
        if (this.head == null) {
          return;
        } else {
          return this.head;
        }
        
      }
      dequeue(){
        // remove and return the highest priority node in the queue
        if (this.head == null) {
          return;
        } else {
          let temp = this.head;
          this.head = temp.next;
          return temp;
        }
    }
}

module.exports = {
    bracketMatching,
    priorityQueue
}