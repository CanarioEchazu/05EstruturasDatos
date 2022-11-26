// 1 --> 2 --> 3 -- > 4 --> 5 -- > null      6 next = null  
// .. append (6)
// 1 --> 2 --> 3 -- > 4 --> 5 --> 6 --> null ..
// .. prepend (0)
// 0 --> 1 --> 2 --> 3 -- > 4 --> 5 --> 6 --> null ..

/*
let singlyLinkedList = {
    head: 1,
    next: {
        value: 2,
        next: { 
            value: 3,
            next: {
                value: 4,
                next: {
                    value: 5,
                }
            }
        }
    }
}

Entonces voy a crear una clase para cargar mejor. */

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class MySinglyLinkedList {
    constructor (value){
        this.head = {
            value: value,
            next: null,
        };
        this.tail = this.head;

        this.length = 1;
    }
    append(value) {
        const newNode = new Node(value);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }
    prepend(value) {
        const NewNode = new Node (value);

        NewNode.next = this.head;
        this.head = NewNode;

        this.length++;
        return this;
    }
    insert(index,value){
        if (index >= this.length){
            return this.append(value);            
        }

        const newNode = new Node(value);
        const firstPointer = this.getTheIndex(index-1);
        const holdingPointer = firstPointer.next;
        firstPointer.next = newNode;
        newNode.next = holdingPointer;

        this.length++;

        return this;
    }

    getTheIndex(index){
        let counter = 0;
        let currentNode = this.head;
        while (counter !== index) {
            currentNode = currentNode.next;
            counter++;
        }

        return currentNode;
    }

    remove (value){
        let currentNode = this.head;
        let previousNode = this.head;

        while (currentNode.value !== value){
            previousNode = currentNode;
            currentNode = currentNode.next;
        }

        previousNode.next = currentNode.next;
        this.length--;
        return this;
    }
}

    
    let myLinkedList = new MySinglyLinkedList(1);