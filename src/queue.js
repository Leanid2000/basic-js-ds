const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
constructor(){
        this.elem = {}
}
getUnderlyingList() {
  return this.elem
}
enqueue(value) {
    if(Object.keys(this.elem).length!==0){
        let node = this.elem;
    let last;
    while (node !==null) {
      last = node,
       node = node.next;
       if(node===null){
        last.next={value: value, next: null}
       }
     }
     }
     if(Object.keys(this.elem).length===0){
        this.elem.value = value;
        this.elem.next = null
     }
    }

dequeue() {
    let a = this.elem.value;
    this.elem=this.elem.next
  return a
}
}

module.exports = {
  Queue
};
