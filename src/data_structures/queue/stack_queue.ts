import { Stack } from "../stack/stack";
import { Queue } from "./queue";

/**
 * A Stack Based Queue Implementation.
 * The Queue data structure which follows the FIFO (First in First Out) rule.
 * The dequeue operation in a normal stack based queue would be o(n), as the entire has to be shifted
 * With the help of two stacks, the time complexity of this can be brought down to amortized-O(1).
 * Here, one stack acts as an Enqueue stack where elements are added.
 * The other stack acts as a dequeue stack which helps in dequeuing the elements
 */
export class StackQueue<T> implements Queue<T> {
  private enqueueStack: Stack<T> = new Stack<T>();
  private dequeueStack: Stack<T> = new Stack<T>();

  /**
   * Adds an item to the queue.
   * We always add a new item to the enqueueStack.
   * @param item The item being added to the queue.
   */
  enqueue(item: T): void {
    this.enqueueStack.push(item);
  }

  /**
   * Removes an item from the queue and returns it.
   *
   * @throws Queue Underflow if the queue is empty.
   * @returns The item that was removed from the queue.
   */
  dequeue(): T {
    if (this.isEmpty()) {
      throw new Error("Queue Underflow");
    }

    if (this.dequeueStack.isEmpty()) {
      this.shift();
    }

    return this.dequeueStack.pop();
  }

  /**
   * Shifts the elements from the enqueueStack to the dequeueStack
   * In the worst case, all the elements from the enqueue stack needs to shifted, which needs O(n) time.
   * However, after the shift, elements can de dequeued at O(1).
   * This helps in dequeuing the elements in amortized O(1) time.
   */
  private shift(): void {
    while (!this.enqueueStack.isEmpty()) {
      const enqueueStackTop = this.enqueueStack.pop();
      this.dequeueStack.push(enqueueStackTop);
    }
  }

  peek(): T | null {
    if (this.isEmpty()) {
      return null;
    }

    if (this.dequeueStack.isEmpty()) {
      this.shift();
    }

    return this.dequeueStack.top();
  }

  /**
   * Checks if the queue is empty.
   *
   * @returns {boolean} Whether the queue is empty or not.
   */
  isEmpty(): boolean {
    return this.length() === 0;
  }

  /**
   * Returns the length of the Queue
   *
   * @returns {number} the length of the Queue
   */
  length(): number {
    return this.enqueueStack.length() + this.dequeueStack.length();
  }
}
