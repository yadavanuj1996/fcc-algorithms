class Stack{
  constructor(){
    this.collection=[];
  }
 
  // Only change code below this line
  push(element){
    this.collection.unshift(element);
  }
  pop(){
    if(this.isEmpty())
      return null;

    let poppedElement=this.collection.shift();
    return poppedElement;
  }
  peek(){
    if(this.isEmpty())
      return null;
    
    return this.collection[0];
  }
  isEmpty(){
    return this.collection.length === 0;
  }
  clear(){
    this.collection=[];
  }
  print(){
    console.log(collection);
  }
  
  // Only change code above this line
}

