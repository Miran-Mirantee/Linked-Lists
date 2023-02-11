class LinkedList {
  constructor() {
    this.headNode = null;
    this.tailNode = null;
  }

  append(value) {
    const node = new Node(value);
    if (this.headNode === null) {
      this.headNode = node;
      this.tailNode = node;
    } else {
      let next = this.headNode;
      while (next.nextNode != null) {
        next = next.nextNode;
      }
      next.nextNode = node;
      this.tailNode = node;
    }
  }

  prepend(value) {
    const node = new Node(value);
    if (this.headNode != null) {
      node.nextNode = this.headNode;
    } else {
      this.tailNode = node;
    }
    this.headNode = node;
  }

  size() {
    let count = 0;
    let next = this.headNode;
    while (next != null) {
      count += 1;
      next = next.nextNode;
    }
    return count;
  }

  head() {
    return this.headNode;
  }

  tail() {
    return this.tailNode;
  }
}

class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

const list = new LinkedList();
// list.append("what1");
// list.append("what2");
// list.append("what3");
// list.append("what4");
// list.append("what5");
// list.append("what6");
list.prepend("what7");
console.log(list.head());
console.log(list.tail());
console.log(list.size());
// console.log(list);

// list.prepend("test");
// list.head();
// list.tail();
// list.append("test2");
// list.head();
// list.tail();
