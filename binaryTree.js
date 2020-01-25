class Node{
    costructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BST{
    constructor(){
        this.root = null;
    }
    insert(val){
        //iteraviely/recursively
        let newNode = new Node(val)
        
        if(this.root === null){
            this.root = newNode;
            return this;
        } else{  //else if there is a root 
            //check left side
            let current = this.root;
            while(true){
                if(val < current.val){ //check to see left/right
                    if(current.left === null){
                        current.left = newNode;
                        return this;
                    } else{
                        current = current.left
                    }
                } // if
                
            } //while
            
        }  //else     
      }//insert
}//class

