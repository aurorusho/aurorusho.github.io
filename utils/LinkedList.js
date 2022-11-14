class Node {
    // Node for the implementation of linkedlist
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
    }
    // Adds a value to the end of linked list
    // tail is used for a O(1) efficiency
    append (value) {
        const newNode = new Node(value);
        
        // If it is the first value
        if(this.head === null){
            this.head = newNode;
            this.tail = this.head;
            return;
        }
        // else
        this.tail.next = newNode;
        this.tail = this.tail.next;
    }
    // sum() {
    //     let node = this.head;
    //     let n = node.value;
    //     while(node.next !== null){
    //         node = node.next;
    //         n += node.value;
    //     }
    //     return n;
    // }
}
