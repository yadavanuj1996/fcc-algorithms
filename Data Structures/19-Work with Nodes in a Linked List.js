
class Node {
  constructor(element,next=null){
    this.element = element;
    this.next = next;
  }
};
let  Kitten = new Node('Kitten');
let Puppy = new Node('Puppy');

Kitten.next = Puppy;
// only add code below this line
let Cat=new Node('Cat');
Puppy.next=Cat; 
let Dog=new Node('Dog'); 
Cat.next=Dog;
// test your code
console.log(Kitten.next);


/*
ES 5 solution

var Node = function(element) {
  this.element = element;
  this.next = null;
};
var Kitten = new Node('Kitten');
var Puppy = new Node('Puppy');

Kitten.next = Puppy;
// only add code below this line
var Cat=new Node('Cat');
Puppy.next=Cat; 
var Dog=new Node('Dog'); 
Cat.next=Dog;
// test your code
console.log(Kitten.next);


*/
