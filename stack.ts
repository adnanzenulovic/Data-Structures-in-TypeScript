class Stack<T> {
  private storage: T[] = [];

  // Appends a new element to a stack
  push(value: T): void {
    this.storage.push(value);
  }

  // Removes the last element from a stack and returns it
  pop(): T | undefined {
    return this.storage.pop();
  }

  // Returns the last element of a stack
  peek(): T | undefined {
    return this.storage[this.storage.length - 1];
  }

  // Returns the size of the stack
  size(): number {
    return this.storage.length;
  }
  // Returns a string representation of a stack
  toString(callback?: (value: T) => string) {
    return this.toArray()
      .map((i) => (callback ? callback(i) : `${i}`))
      .join(", ");
  }

  // Returns an array representation of a stack
  toArray(): T[] {
    return [...this.storage];
  }
}

const stack = new Stack<string>();
stack.push("Test1");
stack.push("Test2");

stack.size(); // Output: 2
stack.peek(); // Output: "Test2"
stack.size(); // Output: 2
stack.pop(); // Output: "Test2"
stack.size(); // Output: 1
stack.toArray(); // Output: [ 'Test1' ]
stack.toString(); // Output 'Test1'

