class _Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  push(data) {
    if (this.top === null) {
      this.top = new _Node(data, null)
      return this.top;
    }
    const node = new _Node(data, this.top)
    this.top = node
  }

  pop() {
    const node = this.top;
    this.top = node.next;
    return node.data;
  }

  peek() {
    return `The data at the top of the stack is '${this.top.data}'`;
  }

  isEmpty() {
    if (this.top === null) {
      return "Stack is empty"
    }
    return "Stack is not empty"
  }

  display() {
    if (this.top === null) {
      return "Stack is empty"
    }
    let currNode = this.top;
    let previousNode = this.top;
    while (currNode !== null) {
      previousNode = currNode;
      console.log(currNode)
      currNode = currNode.next
    }
  }

  stackValueToString() {
    if (this.top === null) {
      return "Stack is empty"
    }
    let currNode = this.top;
    let previousNode = this.top;

    let arr = []
    while (currNode !== null) {
      previousNode = currNode;
      console.log(currNode.data)
      arr.push(currNode.data)
      arr.toString();
      currNode = currNode.next
    }

  }
}




module.exports = Stack


// // Creates a node containing the data and a reference to the next item
// class _Node {
//   constructor(data, next) {
//     this.data = data;
//     this.next = next;
//   }
// }


// class Stack {
//   constructor() {
//     this.top = null;
//   }

//   push(data) {
//     /* If the stack is empty, then the node will be the
//        top of the stack */
//     if (this.top === null) {
//       this.top = new _Node(data, null);
//       return this.top;
//     }

//     /* If the stack already has something, 
//        then create a new node,
//        add data to the new node, and
//        have the pointer point to the top */
//     const node = new _Node(data, this.top);
//     this.top = node;
//   }
//   pop() {
//     /* In order to remove the top of the stack, you have to point
//        the pointer to the next item and that next item becomes the
//        top of the stack */
//     const node = this.top;
//     this.top = node.next;
//     return node.data;
//   }
// }

