//first way to make a stack

let stack = []

// adding and removing from the end
stack.push("google")
stack.push("instagram")
stack.push("youtube")



//2nd way

//everythigng is shifted down; it's very inefficient
//adding and removing from the beggining
stack.unshift("create new file")

stack.unshift("resized file")

stack.unshift("cloned out wrinke")

stack.shift()


//third way is a linked list
class Node{
    constructor(val){
        this.val = val
        this.next = null;
    }
}


class Stack{
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    push(val){
        let newNode = new Node(val)
        
        if(!this.first){
            this.first = newNode;
            this.last = newNode;
        }
        else{
            let temp = this.first
            this.first = newNode;
            this.first.next = temp
        }
        return this.size++
    }
    pop(){
        //noting in the array
        if(!this.first) return null
        let temp = this.first;
        
        //edge case only one thing in the array
        if(this.first === this.last){
            this.last = null
        }
        
        //removing from stack
        this.first = this.first.next
        this.size--
        return temp

    }
}


