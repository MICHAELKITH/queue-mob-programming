
class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  add(number) {
    const newNode = { value: number, next: null };

    if (!this.tail) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  remove() {
    if (!this.head) {
      return -1;
    }

    const removedNodeValue = this.head.value;
    this.head = this.head.next;

    if (!this.head) {
      this.tail = null;
    }

    return removedNodeValue;
  }
}

const queue = new Queue();

queue.add(3);
queue.add(5);
console.log(queue.remove());
// Output: 3

queue.add(2);
queue.add(7);
console.log(queue.remove());
// Output: 5

console.log(queue.remove());
// Output: 2

console.log(queue.remove());
// Output: 7

console.log(queue.remove());
// Output: -1

module.exports = Queue;
