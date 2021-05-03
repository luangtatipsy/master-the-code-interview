class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  push(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      const holdingPointer = this.top;
      this.top = newNode;
      this.top.next = holdingPointer;
    }
    this.length++;
  }

  pop() {
    if (this.length === 0) {
      return null;
    }
    if (this.length === 1) {
      this.bottom = null;
    }

    const holdingPointer = this.top;
    this.top = holdingPointer.next;
    this.length--;

    return holdingPointer;
  }

  peek() {
    return this.top;
  }

  isEmpty() {
    return this.length == 0;
  }
}

const st = new Stack();
st.push("google");
st.push("udemy");
st.push("discord");
x = st.pop();
x = st.pop();
x = st.pop();
console.log(st);
