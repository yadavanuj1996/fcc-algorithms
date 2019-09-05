/*
  1 is taken as highest priority then 2,3 and so on
  if you want to reverse this or implement some other
  priority comparison mechanism simply update 
  comparePriority method 
*/
class PriorityQueue{
  constructor(){
    this.collection = [];
  }
  printCollection() {
    console.log(this.collection);
  }
  enqueue(element){
    this.collection.push(element);
  }
  dequeue(){
    if(this.isEmpty())
      return null;

    let priorityIndex=this.findHighestPriorityIndex();
    let highPriorityElement=this.collection.splice(priorityIndex,1);
    return highPriorityElement[0][0];
  }
  findHighestPriorityIndex(){
    if(this.isEmpty())
      return null;

    let highestPriority=Number.MAX_SAFE_INTEGER;
    let priorityIndex=0;
    for(let i=0;i<this.collection.length;i++){
      //console.log(this.collection[i]);
      if(this.comparePriority(this.collection[i][1] ,highestPriority)){
        // this will run if the present index element  will have higher priority as 1 is the highest priority we are using < (less than) operator.
        priorityIndex=i;
        highestPriority=this.collection[i][1];
      }
    }
    return priorityIndex;
  }
  size(){
    return this.collection.length;
  }
  isEmpty(){
    return this.size() === 0;
  }
  // this contains priority comparision logic
  // change this if you want to change priority comparision logic
  comparePriority(priority1,priority2){
    return priority1 < priority2;
  }
}

let testPriorityQueue=new PriorityQueue();

testPriorityQueue.enqueue(['a',5]);
testPriorityQueue.enqueue(['b',2]);
testPriorityQueue.enqueue(['c',5]);
testPriorityQueue.enqueue(['d',3]);
testPriorityQueue.enqueue(['e',5]);
console.log(testPriorityQueue.dequeue());

