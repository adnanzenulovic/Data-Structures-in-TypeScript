class Queue<T> {
  private storage: T[] = [];

  // Appends a new element to a queue
  enqueue(value: T): void {
    this.storage.push(value);
  }

  // Removes a first element from a queue and returns it
  dequeue(): T | undefined {
    if (!this.size()) return;

    return this.storage.shift();
  }

  // Returns the last element of a queue
  peek(): T {
    if (!this.size()) return;

    return this.storage[0];
  }

  // Returns the size of the queue
  size(): number {
    return this.storage.length;
  }

  // Returns a string representation of a queue
  toString() {
    return this.storage.toString();
  }

  // Returns an array representation of a queue
  toArray() {
    return [...this.storage];
  }
}

const queue = new Queue<string>();
queue.enqueue("Test1");
queue.enqueue("Test2");
queue.enqueue("Test3");

queue.dequeue(); // Output: 'Test1'
queue.peek(); // Output: 'Test3'
queue.size(); // Output: 2
queue.toString(); // Output: Test2,Test3
queue.toArray(); //Output: [ 'Test2', 'Test3' ]
