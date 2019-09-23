var called = 0;
var hash = string => {
  called++;
  var hashed = 0;
  for (var i = 0; i < string.length; i++) {
    hashed += string.charCodeAt(i);
  }
  return hashed;
};
class HashTable {
  constructor(){
    this.collection = {};
  }
  add(key,value){
    let hashedKey=hash(key);
    if(!this.has(key)){
      this.collection[hashedKey]={};
    }
    this.collection[hashedKey][key]=value;
  }
  remove(key){
    let hashedKey=hash(key);
    if(!this.has(key)){
      return null;
    }
    
    if(Object.keys(this.collection[hashedKey]).length === 1)
    delete this.collection[hashedKey];
    else
      delete this.collection[hashedKey][key];
    
  }
  lookup(key){
    if(this.has(key) === false)
      return null;
    
    let hashedKey=hash(key);
    return this.collection[hashedKey][key];
  }
  has(key){
    let hashedKey=hash(key);
      // using toString as the hashing function return the hashed keys in string format
    if(Object.keys(this.collection).indexOf(hashedKey.toString()) !== -1)
      return true;
    else 
      return false;
  }
};

let hashTable=new HashTable();
hashTable.add('ab',2);
hashTable.add('ba',4);
hashTable.add('c',5);
hashTable.remove('ba');
console.log(hashTable.lookup('c'));
console.log(hashTable);
