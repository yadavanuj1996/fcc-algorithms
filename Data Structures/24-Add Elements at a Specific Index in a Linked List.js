function LinkedList() {
  var length = 0;
  var head = null;

  var Node = function(element) {
    this.element = element;
    this.next = null;
  };

  this.size = function() {
    return length;
  };

  this.head = function() {
    return head;
  };

  this.add = function(element) {
    var node = new Node(element);
    if (head === null) {
      head = node;
    } else {
      var currentNode = head;

      while (currentNode.next) {
        currentNode = currentNode.next;
      }

      currentNode.next = node;
    }
    length++;
  };

  this.addAt=function(index,element){
    let nodeAddedSuccessfully=false;
    let newNode=new Node(element);
    if(index === 0){
      newNode.next=head;
      head=newNode;
      length++;
      nodeAddedSuccessfully=true;
    }  

    let currentNode=head;
    let currentIndex=0;
    while(currentNode.next !=null ){
      if(currentIndex+1 === index){
        newNode.next=currentNode.next;
        currentNode.next=newNode;
        length++;
        nodeAddedSuccessfully=true;
      }
      currentIndex++;
      currentNode=currentNode.next;
    }
    return nodeAddedSuccessfully;
  }
}

