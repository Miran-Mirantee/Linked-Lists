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
    if (index < 0 || index >= this.size()) return null;
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
list.append("what5");
list.append("what6");
list.append("what7");
list.append("what8");

console.log(list.toString());

// console.log(list.contains(1));
// console.log(list.contains("1"));
// console.log(list.contains("what1"));
// console.log(list.contains("what2"));
// console.log(list.contains("what3"));
// console.log(list.contains("what4"));

// console.log(list.find("what2"));
// console.log(list.find(22));
// console.log(list.at(1));

// console.log(list.head());
// console.log(list.tail());
// console.log(list.size());

// console.log(list.at(0));
// console.log(list.at(1));
// console.log(list.at(2));
// console.log(list.at(3));
// console.log(list.at(-1));
// console.log(list.at(5));

// console.log(list.tail());
// list.pop();
// console.log(list.tail());
// list.pop();
// console.log(list.tail());
// list.pop();
// console.log(list.tail());
// list.pop();
// console.log(list.tail());

// list.prepend("test");
// list.head();
// list.tail();
// list.append("test2");
// list.head();
// list.tail();
