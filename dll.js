export class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

export default class DoubleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  /**
   * Push a new value to the tail of the linked list.
   */

  push(val){
      let node = new Node(val)
      
      if (!this.head || !this.tail){
       this.head = node
       this.tail = node
      //  this.size++
       this.length = 1
      }else{
        this.tail.next = node
        node.prev = this.tail
        this.tail = node
        this.length++
      }
    }

  /**
   * Remove an item from the end of the linked list.
   */
  pop() {

    let node = this.tail
    
    if(this.length === 1){
      this.head = null
      this.tail = null
      this.length--
    }

    if(this.tail){
      this.tail = this.tail.prev
      this.tail.next = null
      this.length--
      // this.tail.prev.next = null
    }
  }
  /**
   * Remove a node from the beginning of the list.
   */
  shift() {
    if(!this.head){
      return null
    }else{
      this.head = this.head.next
      this.head.prev = null
    }

    
    }


  /**
   * Add a node to the head of the linked list.
   */
  unshift(val) {
      const node = new Node(val)

      if(!this.head){
        this.head = node
        this.tail = node
      }else{
        this.head.prev = node
        node.next = this.head
        this.head = node
      }
    }
  

  /**
   * Get a Node at a specific index
   */
  getNodeAtIndex(index) {
    let current = this.head
    let count = 0
    while (current != null){
        if (current.index === index){
          return count
        }
          count++
          current = current.next
        
      }

      return false
 
  }

  /**
   * Set a node at a specific index.
   */
  setNodeAtIndex(index, value) {
    let current = this.head
    let currVal = null
    let count = 0
    while (current != null){
      if (current.index == index){
        currVal = value
      }
      count++
      current = current.next
    }
    return false

  }

  /**
   *  Insert a node at a specific index.
   */
  insertAtIndex(index, val) {}

  /**
   * Remove a node at a specific index.
   */
  removeAtIndex(index) {}
}


