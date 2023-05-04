class ListNode<T> {
  value: T;
  next: ListNode<T> | null;

  constructor(value: T, next: ListNode<T> | null = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList<T> {
  private head: ListNode<T> | null;

  constructor() {
    this.head = null;
  }

  // Adds a new node at the end of the list.
  append(value: T): void {
    const newNode = new ListNode(value); // Create a new node with given value

    if (!this.head) {
      this.head = newNode; // If the list is empty, set the head to the new node
      return;
    }

    let currentNode = this.head; // Initialize current to head

    //Traverse the list to find the last node
    // While currentNode.next is not null
    while (currentNode.next) {
      currentNode = currentNode.next;
    }

    currentNode.next = newNode; // Set the next reference of the last node to the new node
  }
  // Adds a new node at the beginning of the list.
  prepend(value: T): void {
    const newNode = new ListNode(value); // Create a new node with the given value
    newNode.next = this.head; //  Set newNode's next to the current head
    this.head = newNode; //  Set the head of the list to the new node
  }
  // Adds a new node at a specific index in the list.
  insertAt(value: T, position: number): boolean {
    if (position < 0 || position > this.length()) {
      return false; //  If the position is out of range, return false
    }

    const newNode = new ListNode(value); // Create a new node with the given value

    if (position === 0) {
      newNode.next = this.head; // If inserting at the head, set newNode's next to the current head
      this.head = newNode; // Set the head of the list to the new node
    } else {
      let current = this.head; //  Initialize current to head
      let previous: ListNode<T> | null = null;
      let index = 0;

      //  Traverse the list until the desired position is reached
      while (index < position) {
        previous = current;
        current = current!.next;
        index++;
      }

      newNode.next = current; // Set newNode's next to the current node at the position
      previous!.next = newNode; //  Set the next reference of the previous node to the new node
    }

    return true; // Return true to indicate successful insertion
  }
  // Removes a node at a specific index in the list.
  removeAt(position: number): T | null {
    if (position < 0 || position >= this.length()) {
      return null; //  If the position is out of range, return null
    }

    let removedValue: T;

    if (position === 0) {
      removedValue = this.head!.value; // If removing the head, store its value
      this.head = this.head!.next; // Set the head of the list to the second node
    } else {
      let current = this.head; // Initialize current to head
      let previous: ListNode<T> | null = null;
      let index = 0;

      // Traverse the list until the desired position is reached
      while (index < position) {
        previous = current;
        current = current!.next;
        index++;
      }

      removedValue = current!.value; //  Store the value of the node being removed
      previous!.next = current!.next; //  Set the next reference of the previous node to the node after the current node
    }

    return removedValue; // Return the value of the removed node
  }
  // Removes the first node from the list.
  removeFirst(): T | null {
    if (this.isEmpty()) return null;

    const firstValue = this.head!.value; // Store the value of the first node
    this.head = this.head!.next; // Set the head of the list to the second node

    return firstValue; // 3. Return the value of the removed first node
  }
  // Removes the last node from the list.
  removeLast(): T | null {
    if (this.isEmpty()) {
      return null; // If the list is empty, return null
    }

    if (this.head!.next === null) {
      const lastValue = this.head!.value;
      this.head = null; // If there's only one node in the list, set head to null
      return lastValue;
    }

    let current = this.head;

    // Traverse the list to find the second to last node
    while (current!.next!.next !== null) {
      current = current!.next;
    }

    const lastValue = current!.next!.value;
    current!.next = null; // Set the next reference of the second to last node to null

    return lastValue;
  }
  // Remove the first node with a given value
  remove(value: T): boolean {
    if (!this.head) {
      return false;
    }

    if (this.head.value === value) {
      this.head = this.head.next;
      return true;
    }

    let currentNode = this.head;
    while (currentNode.next) {
      if (currentNode.next.value === value) {
        currentNode.next = currentNode.next.next;
        return true;
      }
      currentNode = currentNode.next;
    }

    return false;
  }
  // Find a node with a given value
  find(value: T): ListNode<T> | null {
    let currentNode = this.head; // Initialize current to head
    while (currentNode !== null) {
      if (currentNode.value === value) {
        // If a match is found, return the node
        return currentNode;
      }
      currentNode = currentNode.next;
    }

    return null; // If no match is found, return null
  }
  // Returns the number of nodes in the list.
  length(): number {
    let count = 0; // Initialize a count variable
    let current = this.head; //  Initialize current to head

    // Traverse the list and increment the count for each node
    while (current !== null) {
      count++;
      current = current.next;
    }

    return count; // Return the count value
  }
  // Prints all nodes in the list.
  print(): void {
    let current = this.head; // Initialize current to head
    let output = ""; // Initialize an empty output string

    // Traverse the list and append each node's value to the output string
    while (current !== null) {
      output += `${current.value}`;

      // Add an arrow (->) between node values, except for the last node
      if (current.next !== null) {
        output += " -> ";
      }

      current = current.next;
    }

    console.log(output); // Print the output string to the console
  }
  // Checks whether the list is empty.
  isEmpty(): boolean {
    return this.head === null; // If 'head' is null it means that there is no Node in the list
  }
}

const list = new LinkedList<number>();
list.append(1); // 1
list.append(2); // 1 -> 2
list.append(3); // 1 -> 2 -> 3
list.append(4); // 1 -> 2 -> 3 -> 4
list.append(5); // 1 -> 2 -> 3 -> 4 -> 5
list.insertAt(10, 2); // 1 -> 2 -> 10 -> 3 -> 4 -> 5
list.removeFirst(); // 2 -> 10 -> 3 -> 4 -> 5
list.removeAt(3); // 2 -> 10 -> 3 -> 5
list.removeLast(); // 2 -> 10 -> 3
list.isEmpty(); // false
list.length(); // 3
list.find(10); // ListNode { value: 10, next: ListNode { value: 3, next: null } }
list.print();

