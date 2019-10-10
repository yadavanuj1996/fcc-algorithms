/*
	ES6 Solution
	Note: as the head is a method on which tests are carried out thus headPointer is used to point to head in linkedlist
	for more readable ES6 implementation check the first commented solution below this solution.
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
    if(this.headPointer === null){
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
}

let newLinkedList=new LinkedList();
newLinkedList.add(2);
newLinkedList.add(4);
newLinkedList.add(5);
console.log(newLinkedList);

/*
 LinkedList implementation with better readability 
 Note: will not pass test cases simply change the showHead method and head variable.

 class Node {
    constructor(element,next=null){
      this.element = element;
      this.next = null;
    }
  };

class LinkedList {
  constructor(){
    this.length = 0;
    this.head = null;
  }

  showHead(){
    return this.head;
  }

  size(){
    return this.length;
  }

  add(element){
    let newNode=new Node(element);
    if(this.head === null){
      this.head=newNode;
    }
    else{
      let currentNode=this.head;
      while(currentNode.next != null){
        currentNode=currentNode.next
      }      
      currentNode.next=newNode;
    }
    this.length++;
  }
}

*/

/*

ES 5 solution with head and null being acting as private variable (NOTE: There is no full support for private variables in js although
ECMAScript standards have added them very recently and is yet not being used.)

	
function LinkedList() {
  var length = 0;
  var head = null;

  var Node = function(element){
    this.element = element;
    this.next = null;
  };

  this.head = function(){
    return head;
  };

  this.size = function(){
    return length;
  };

  this.add = function(element){
    if(head === null){
      head=new Node(element);
    }
    else{
      let node=head;
      for(;node.next != null;node=node.next);
      node.next=new Node(element);
    }
    length++;
  };
}


*/
