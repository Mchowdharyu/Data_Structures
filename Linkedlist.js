// linkedlist in JavaScript



class Node {
    constructor(data){

        this.data = data;
        this.next = null;

    }
}

class Head{
    constructor(){  
        //The intial list is Empty
        this.head = null;

    }

    //add a new Node to end of the list

    append(data) {

        const newNode =  new Node(data);
        if(this.head  === null) {
            //If the list is empty make new node as head
            this.head = newNode;
        } else {
            //If the list is not empty ,find the last node and appaend the new node
          let current = this.head;
          while (current.next !== null) {
            current = current.next;
          }
          current.next = newNode;
        }
    }


// Display the list of elements

printList() {
    let current = this.head;
    let result = '';
    while( current !== null) {
        result += current.data + ' ->';
        current = current.next;
    }
    result += null; //To represnt the end of the list
    console.log(result);
}

//Remove the first node with a specific value

remove(value) {
    if(this.head === null) {
        console.log('This is empty list')
        return;
    }

//If we want to remove the head node
if(this.head.data === value){
    this.head =  this.head.next;
    return;
}    
let current = this.head;
let previous = null;

while (current != null && current.data !== value){
    previous = current;
    current  = current.next;
}
//If the value is nor found

if (current ===  null) {
    console.log('value is not found in the list')
    return;
}

//Rmove the node
previous.next = current.next;
}
}
