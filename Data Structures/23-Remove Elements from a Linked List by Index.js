function LinkedList() {
  var length = 0;
  var head = null;

  var Node = function(element){ // {1}
    this.element = element;
    this.next = null;
  };

  this.size = function(){
    return length;
  };

  this.head = function(){
    return head;
  };

  this.add = function(element){
    var node = new Node(element);
    if(head === null){
        head = node;
    } else {
        var currentNode = head;

        while(currentNode.next){
            currentNode  = currentNode.next;
        }

        currentNode.next = node;
    }

    length++;
  };

  this.removeAt=function(index){
    let resultElement=null;
    if(head === null)
      return resultElement;
    else if(index === 0){
      let resultElement=head.element;
      head=head.next;
      length--;
      return resultElement;
    }

    let currentNode=head;
    let currentIndex=0;
    while(currentNode.next !== null){
      if(currentIndex+1 === index){
        resultElement=currentNode.next.element;
        currentNode.next=currentNode.next.next;
        length--;
        break;
      }
      currentIndex++;
      currentNode=currentNode.next;      
    }
    return resultElement;
  }

}

