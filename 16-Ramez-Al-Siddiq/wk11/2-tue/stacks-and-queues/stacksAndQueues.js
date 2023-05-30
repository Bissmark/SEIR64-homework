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
  const stack = new Stack();
  const openingBrackets = ['{', '[', '('];
  const closingBrackets = ['}', ']', ')'];

  for (let i = 0; i < input.length; i++) {
    const char = input[i];
    if (openingBrackets.includes(char)) {
      stack.push(char);
    } else if (closingBrackets.includes(char)) {
      const top = stack.peek();
      if (
        stack.isEmpty() ||
        (char === '}' && top !== '{') ||
        (char === ']' && top !== '[') ||
        (char === ')' && top !== '(')
      ) {
        return false;
      }
      stack.pop();
    }
  }

  return stack.isEmpty();
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
        if (!this.head || priority < this.head.priority) {
          newNode.next = this.head;
          this.head = newNode;
        } else {
          let current = this.head;
          while (current.next && priority >= current.next.priority) {
            current = current.next;
          }
          newNode.next = current.next;
          current.next = newNode;
        }
    }
    peek(){
        // return the highest priority node in the queue
        return this.head ? this.head.data : null;
    }
    dequeue(){
        // remove and return the highest priority node in the queue
        if (!this.head) {
          return null;
        }
        const data = this.head.data;
        this.head = this.head.next;
        return data;
      }
}

module.exports = {
    bracketMatching,
    priorityQueue
};