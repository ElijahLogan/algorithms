class Node{
    constructor(val){
        this.val = val;
        this.next = null
    }
}


class LinkedList{
    //creating list
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    //pushing to null
    push(val){
        let newNode = new Node(val)
        
        // when list is emptu/
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }
        
        //when there is more than one element//
        else{
            this.tail.next = newNode;
            this.tail = newNode
        }
    }
    
    pop(){
        if(!this.head) return undefined;
        let current = this.head;
        let newTail = current;
        while(current.next){
            newTail = current;
            current = current.next;
        }
    this.tail = newTail
    this.tail.next = null
    this.length--
    if(this.length === 0){
        this.head = 0;
        this.tail = 0
    }
    return current
    }
 
}

let list = new LinkedList()


