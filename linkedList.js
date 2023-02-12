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

  at(index) {
    let next = this.headNode;
    if (!this.checkIndex(index)) return null;
    for (let i = 0; i < index; i++) {
      next = next.nextNode;
    }
    return next;
  }

  pop() {
    if (this.headNode === this.tailNode) {
      this.headNode = null;
      this.tailNode = null;
      return;
    }

    let lastIndex = this.size() - 1;
    let secondLastNode = this.at(lastIndex - 1);
    this.tailNode = secondLastNode;
    secondLastNode.nextNode = null;
  }

  contains(value) {
    if (typeof this.find(value) === "number") return true;
    return false;
  }

  find(value) {
    let index = 0;
    let next = this.headNode;
    while (next != null) {
      if (next.value === value) return index;
      index += 1;
      next = next.nextNode;
    }
    return null;
  }

  toString() {
    const arr = [];
    let sequence;
    let next = this.headNode;
    while (next != null) {
      arr.push(`( ${next.value} )`);
      next = next.nextNode;
    }
    arr.push(new String(this.tailNode.nextNode));
    sequence = arr.join(" -> ");
    return sequence;
  }

  insertAt(value, index) {
    if (!this.checkIndex(index)) return;

    const node = new Node(value);
    let previousNode = this.at(index - 1);
    let currentNode = this.at(index);
    if (previousNode === null) {
      this.headNode = node;
    } else {
      previousNode.nextNode = node;
    }
    node.nextNode = currentNode;
  }

  removeAt(index) {
    if (!this.checkIndex(index)) return;
    let previousNode = this.at(index - 1);
    let currentNode = this.at(index);
    let afterCurrentNode = currentNode.nextNode;

    if (afterCurrentNode === null) {
      this.tailNode = previousNode;
    }

    if (previousNode === null) {
      this.headNode = afterCurrentNode;
    } else {
      previousNode.nextNode = afterCurrentNode;
    }

    currentNode.nextNode = null;
  }

  checkIndex(index) {
    if (index < 0 || index > this.size() - 1) {
      return false;
    }
    return true;
  }
}

class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

const list = new LinkedList();
list.append("what1");
list.append("what2");
list.append("what3");
list.append("what4");

// test functions here
console.log(list.toString());
