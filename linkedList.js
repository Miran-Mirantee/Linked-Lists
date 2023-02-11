class LinkedList {
  constructor() {
    this.headNode = null;
    this.tailNode = null;
  }

  append(value) {
    const node = new Node(value);
    if (this.headNode === null) {
      this.headNode = node;
    } else {
      let next = this.headNode;
      while (next.nextNode != null) {
        next = next.nextNode;
      }
      next.nextNode = node;
      this.tailNode = node;
    }
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
list.append("what");
list.append("what2");
list.append("what3");
list.append("what4");
list.append("what5");
list.append("what6");
console.log(list);
list.head();
list.tail();
