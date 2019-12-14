
var displayTree = tree => console.log(JSON.stringify(tree, null, 2));

function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;

  this.getLeftChild=function(){
    return this.left;
  }
  this.getRightChild=function(){
    return this.right;
  }
  this.hasNoLeftChild=function(){
    return this.left === null; 
  }

  this.hasNoRightChild=function(){
    return this.right === null; 
  }

  this.addLeftChild=function(element){
    this.left=new Node(element);
  }
  
  this.addRightChild=function(element){
    this.right=new Node(element);
  }
  this.isGreaterThan=function(element){
    return this.value > element;
  }
  this.isLessThan=function(element){
    return this.value < element;
  }
}

function BinarySearchTree() {
  this.root = null;

  this.add=function(element){
    if(this.isEmpty()){
      this.root=new Node(element);
      return ;
    }
    let currentNode=this.root;
   
    while(currentNode !== null){
      if(currentNode.isGreaterThan(element)){
        if(currentNode.hasNoLeftChild()){
          currentNode.addLeftChild(element);
          return ;
        }
        currentNode=currentNode.getLeftChild(); 
      }
      else if(currentNode.isLessThan(element)){
        if(currentNode.hasNoRightChild()){
          currentNode.addRightChild(element);
          return ;
        }

        currentNode=currentNode.getRightChild(); 
      }
      else{
        return null;
      }
    }
  }
  
  this.findMin=function(){
    if(this.isEmpty())
      return null;

    let currentNode=this.root;
    while(currentNode.getLeftChild() !== null){
      currentNode=currentNode.getLeftChild();
    }
    return currentNode.value;
  }

  this.findMax=function(){
    if(this.isEmpty())
      return null;

    let currentNode=this.root;
    while(currentNode.getRightChild() !== null){
      currentNode=currentNode.getRightChild();
    }
    return currentNode.value;
  }

  this.isPresent=function(element){
    let isElementFound=false;
    if(this.isEmpty() === true){
      return isElementFound;
    }

    let currentNode=this.root;
    while(currentNode !== null){
      if(currentNode.value === element){
        isElementFound=true;
        break;
      }
      else if(currentNode.isGreaterThan(element))
        currentNode=currentNode.getLeftChild();
      else if(currentNode.isLessThan(element))
        currentNode=currentNode.getRightChild();
    }
    return isElementFound;
  }

  this.isEmpty=function(){
    return this.root === null
  }
}



