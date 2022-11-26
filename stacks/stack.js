class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
    constructor() {
        this.items = null;
        this.bottom = null;
        this.length = 0;
    }
    peek(){     // entrega el ultimo elemento de la pila
        return this.top;
    }
    push(value){    // agrega un elemento a la pila
        const newNode = new Node(value);
        if(this.length === 0){
            this.top = newNode;
            this.bottom = newNode;
        }else{
            const holdingPointer = this.top;
            this.top = newNode;
            this.top.next = holdingPointer;
        }
        this.length++;
        return this;
    }
    pop(){      // elimina el ultimo elemento de la pila
        if(!this.top){
            return null;
        }
        if(this.top === this.bottom){
            this.bottom = null;
        }
        const holdingPointer = this.top;
        this.top = this.top.next;
        this.length--;
        return this;
    }
    isEmpty(){      // verifica si la pila esta vacia
        if(this.length === 0){
            return true;
        }else{
            return false;
        }
    }
}