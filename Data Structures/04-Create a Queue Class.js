class Queue{
  constructor(){
    this.collection = [];
  }
  print() {
    console.log(collection);
  };
  // Only change code below this line
  enqueue(element){
    this.collection.push(element);
  }
  dequeue(){
    if(this.isEmpty())
      return null;
    
    return this.collection.shift();
  }
  front(){
    if(this.isEmpty())
      return null;
    
    return this.collection[0];
  }
  size(){
    return this.collection.length;
  }
  isEmpty(){
    return this.size() === 0;
  }
  // Only change code above this line
}


/*
	ES5 Solution
	
	function Queue() {
  var collection = [];
  this.print = function() {
    console.log(collection);
  };
  
  // Only change code below this line
  this.enqueue=function (element){
    collection.push(element);
  }
  this.dequeue=function (){
    if(collection.length === 0)
      return null;
    
    return collection.shift();
  }
  this.front=function (){
    if(collection.length === 0)
      return null;
    
    return collection[0];
  }
  this.size= function(){
    return collection.length;
  }
  this.isEmpty=function (){
    return collection.length === 0;
  }
 

  // Only change code above this line
}

*/
