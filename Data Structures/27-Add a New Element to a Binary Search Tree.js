

var displayTree = tree => console.log(JSON.stringify(tree, null, 2));

function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
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
        currentNode=currentNode.left; 
      }
      else if(currentNode.isLessThan(element)){
        if(currentNode.hasNoRightChild()){
          currentNode.addRightChild(element);
          return ;
        }

        currentNode=currentNode.right; 
      }
      else{
        return null;
      }
    }
  }

  this.isEmpty=function(){
    return this.root === null
  }
}






/*
First Rough Solution 
var displayTree = tree => console.log(JSON.stringify(tree, null, 2));

function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
  this.hasNoLeftChild=function(){
    return this.left === null; 
  }

  this.hasNoRightChild=function(){
    return this.right === null; 
  }
}

function BinarySearchTree() {
  this.root = null;

  this.add=function(element){
    let newNode=new Node(element);
    if(this.root === null){
      this.root=newNode;
      return ;
    }
    let currentNode=this.root;
    let isElementInserted=false;
    while(currentNode !== null){
      if(currentNode.value > element){
        if(currentNode.hasNoLeftChild()){
          currentNode.left=newNode;
          isElementInserted=true;
          break;
        }
        currentNode=currentNode.left; 
      }
      else if(currentNode.value < element){
        if(currentNode.hasNoRightChild()){
          currentNode.right=newNode;
          isElementInserted=true;
          break;
        }

        currentNode=currentNode.right; 
      }
      else{
        isElementInserted=false;
        break;
      }
    }
    if(isElementInserted === false)
      return null;
  }
}

*/


