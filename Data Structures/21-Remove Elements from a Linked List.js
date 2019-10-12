/*
	Very specific implementation for the problem no tail is used for complete and standard solution check the below link
	https://github.com/yadavanuj1996/js-algorithms-data-structure/blob/a715cceb0f77f088cdea5aac9cd8e7e0be141131/linked-list/LinkedList.js

*/
class Node {
    constructor(element,next=null){
      this.element = element;
      this.next = null;
    }
  };

class LinkedList {
  constructor(){
    this.length = 0;
    this.headPointer = null;
  }

  head(){
    return this.headPointer;
  }

  size(){
    return this.length;
  }

  add(element){
   let newNode=new Node(element);
    if(this.isEmpty()){
      this.headPointer=newNode;
    }
    else{
      let currentNode=this.headPointer;
      while(currentNode.next != null){
        currentNode=currentNode.next
      }      
      currentNode.next=newNode;
    }
    this.length++;
  }
  remove(element){
    if(this.isEmpty()){
      return null;
    }
    else if(this.headPointer.element === element){
      this.headPointer=this.headPointer.next;
       this.length--;
    }
    let currentNode=this.headPointer;
    while(currentNode.next !== null){
      if(currentNode.next.element === element){
        currentNode.next=currentNode.next.next;
        this.length--;
      }
      currentNode=currentNode.next;
    }
    return null;
  }
  isEmpty(){
    return this.headPointer === null;
  }
 
}

let newLinkedList=new LinkedList();
newLinkedList.add(2);
newLinkedList.add(4);
newLinkedList.add(5);
console.log(newLinkedList);
