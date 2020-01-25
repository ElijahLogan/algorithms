class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}



class BST {
    constructor() {
        this.root = null;
    }
    insert(value) {
        //make new node
        let newNode = new Node(value)

        if (!this.root) {
            this.root = newNode;
            return this;
        } else {
            //get root
            let current = this.root;
            while (true) {
                //frequency check
                if (value === current.value) {
                    current.frequency++
                    return this;
                }
                //check to see if value less then root
                if (value < current.value) {
                    //if so check to see if left note empty
                    if (current.left === null) {
                        current.left = newNode;
                        return this;
                    } else { //go a level owev and try again
                        current = current.left
                    }
                }
                //do the same now to the right side
                else if (value > current.value) {
                    //check to see if right node is empty
                    if (current.right === null) {
                        current.right = newNode;
                        return this;
                    }
                    else {//if not move to right node
                        current = current.right
                    }
                }
            }
        }
    }
}

