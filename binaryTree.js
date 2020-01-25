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
    find(value) {
        //make sure root isn't empty
        if (this.root === null) return false;

        //get root
        let current = this.root;

        //found variable
        let found = false;

        //as soon as current is null the loop will stop
        while (current && !found) {
            //if its less go left
            if (value < current.value) {
                current = current.left;
            }
            //if its more go right
            else if (value > current.value) {
                current = current.right
            }
            //if its equal break the loop and return node
            else if (value === current.value) {
                found = true
                return current
            }
        }
        return undefined
    }
}

