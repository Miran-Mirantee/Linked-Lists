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

  head() {
    console.log(this.headNode);
  }

  tail() {
    console.log(this.tailNode);
  }
}

class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

const list = new LinkedList();
// list.append("what");
// list.append("what2");
// list.append("what3");
// list.append("what4");
// list.append("what5");
// list.append("what6");
// console.log(list);
// list.head();
// list.tail();
// list.prepend("what7");
// list.head();
// list.tail();

list.prepend("test");
list.head();
list.tail();
list.append("test2");
list.head();
list.tail();
