//que with an array

let q = []
//involvies reshifting each index
//adding to the end
q.push("1st")
q.push("2nd")
q.push("3rd")

console.log(q)
// [ '1st', '2nd', '3rd' ]



//removing from the begining
console.log(q.shift())
// ----------------------




//adding to the beginii
a = []
a.unshift("1st")
a.unshift("2nd")
a.unshift("3rd")

console.log(a.pop())

//popping from the end works well
// ----------------------------------------------'

class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class Queue{
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    enqueue(val){
        let newNode = new Node(val)
        if(!this.first){
            this.first = newNode;
            this.last = newNode;
        }else{
            this.last.next = newNode;
            this.last = newNode;
        }
        return this.size++
    }
    
    dequeue(){
        if(!this.first) return null;
        let temp = this.first;
        //edge caae
        if(this.last === this.first){
            this.last = null;
            this.first = null;
        }
        this.first = this.first.next
        this.size--
        return temp
        
    }
}

let queue = new Queue()
