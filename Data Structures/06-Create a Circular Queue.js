

class CircularQueue {
   constructor(size) {

     this.queue = [];
     this.read = 0;
     this.write = 0;
     this.max = size - 1;
     while (size > 0) {
        this.queue.push(null);
        size--;
     }
   }

   print() {
     return this.queue;
   }

  enqueue(item) {
    if(this.queue[this.write] === null){
      this.queue[this.write++]=item;

      if(this.write > this.max)
        this.write=0;
      
      return item;
    }
    return null;
  }

  dequeue() {
    if(this.queue[this.read] !== null){
      let dequeuedElement=this.queue[this.read];
      this.queue[this.read++]=null;
      
      if(this.read > this.max)
        this.read=0;

      return dequeuedElement;
    }
    return null;
  }
  
}




/* 
first solution 

class CircularQueue {
   constructor(size) {

     this.queue = [];
     this.read = 0;
     this.write = 0;
     this.max = size - 1;
     while (size > 0) {
        this.queue.push(null);
        size--;
     }
   }

   print() {
     return this.queue;
   }

   enqueue(item) {
    if(!this.isWritePermissable())
      return null;

    
    this.queue[this.write]=item;
    let enqueuedElement=this.queue[this.write];

    if(this.write === this.max)
      this.write=0;
    else 
      this.write++;

    return enqueuedElement;
   }

   dequeue() {
    if(!this.isReadPermissable())
      return null;
    
    let dequeuedElement=this.queue[this.read];
    this.queue[this.read]=null;
    if(this.read === this.max)
      this.read=0;
    else 
      this.read++;

    return dequeuedElement;
   }

   isWritePermissable(){
     let presentWriteIndex=this.write;
    
     let prevWriteIndex=presentWriteIndex === 0 ? this.max : presentWriteIndex-1;
      
  
      if(presentWriteIndex === this.read && this.queue[prevWriteIndex] !== null)
        return false;
      else
        return true;
   }

   isReadPermissable(){
     let presentReadIndex=this.read;
    
     let nextReadIndex=presentReadIndex === this.max ? 0 : presentReadIndex+1;
      
  
      if(presentReadIndex === this.write && this.queue[nextReadIndex] === null)
        return false;
      else
        return true;
   }
}

let testCircularQueue=new CircularQueue(5);
testCircularQueue.enqueue(1);
testCircularQueue.enqueue(2);
testCircularQueue.enqueue(3);
testCircularQueue.enqueue(4);
testCircularQueue.enqueue(5);
console.log(testCircularQueue.dequeue());
console.log(testCircularQueue.dequeue());
console.log(testCircularQueue.enqueue(6));
console.log(testCircularQueue.print());

*/
