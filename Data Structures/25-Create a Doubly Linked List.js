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

  this.remove=function(element){
    if(this.isEmpty() === true)
      return null;
   if(this.head.data === element){
     this.head.next.prev=null;
     this.head=this.head.next;
     return ;
   }

    let currentNode=this.head;
    while(currentNode !== null){
      if(currentNode.data === element){
        currentNode.prev.next=currentNode.next;
        if(currentNode !== this.tail)
          currentNode.next.prev=currentNode.prev;
      }
      currentNode=currentNode.next;
    } 

  }

  this.isEmpty=function(){
    return this.head === null && this.tail === null; 
  }
  this.hasSingleElement=function(){
    return this.head !== null && this.head === this.tail;
  }
  // change code above this line
};


let doublyLinkedList=new DoublyLinkedList();
doublyLinkedList.add(1);
doublyLinkedList.add(2);
doublyLinkedList.add(453);
doublyLinkedList.remove(453);
console.log(doublyLinkedList.head.next.data);

