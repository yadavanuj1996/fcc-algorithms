var Node = function(data, prev) {
  this.data = data;
  this.prev = prev;
  this.next = null;
};
var DoublyLinkedList = function() {
  this.head = null;
  this.tail = null;
  // change code below this line
   this.add=function(element){
    let newNode=new Node(element,null);
    if(this.isEmpty()){
      this.head=newNode;
      this.tail=newNode;
      return ;
    }
    this.tail.next=newNode;
    newNode.prev=this.tail;
    this.tail=newNode;
  }


  this.reverse=function(){
    if(this.head === this.tail && this.head === null)
      return null;

      let currentNode=this.head;
      while(currentNode !== null){
        let tempPrevHolder=currentNode.prev;
        currentNode.prev=currentNode.next;
        currentNode.next=tempPrevHolder;
        currentNode=currentNode.prev;
      }
      let tempHead=this.head;
      this.head=this.tail;
      this.tail=tempHead;
  }
  this.isEmpty=function(){
    return this.head === null && this.tail === null; 
  }
  this.hasSingleElement=function(){
    return this.head !== null && this.head === this.tail;
  }
  // change code above this line
};


