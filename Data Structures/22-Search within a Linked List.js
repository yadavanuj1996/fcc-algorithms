function LinkedList() {
  var length = 0;
  var head = null;

  var Node = function(element){ // {1}
    this.element = element;
    this.next = null;
  };

  this.size = function() {
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

  this.remove = function(element){
    var currentNode = head;
    var previousNode;
    if(currentNode.element === element){
        head = currentNode.next;
    } else {
        while(currentNode.element !== element) {
            previousNode = currentNode;
            currentNode = currentNode.next;
        }

        previousNode.next = currentNode.next;
    }

    length --;
  };

  this.indexOf=function(element){
    let index=-1;
    if(head === null)
      return null;
    
    let currentNode=head;
    let i=0;
    while(currentNode !== null){
      if(currentNode.element === element){
        index=i;
        break;
      }
      i++;
      currentNode=currentNode.next;
    }
    return index;
  }
  this.elementAt=function(index){
    let resultElement=undefined;
    if(head === null)
      return resultElement;
    
    let currentNode=head;
    let i=0;
    while(currentNode !== null){
      if(index === i){
        resultElement=currentNode.element;
        break;
      }
      i++;
      currentNode=currentNode.next;
    }
  return resultElement;
  }
}

