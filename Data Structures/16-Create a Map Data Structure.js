class Map{
  constructor(){
    this.collection = {};
  }
  add(key,value){
    this.collection[key]=value;
  }
  remove(key){
    delete this.collection[key];
  }
  get(key){
    return this.collection[key];
  }
  has(key){
    let mapKeys=Object.keys(this.collection);
    return mapKeys.indexOf(key) !== -1;
  }
  values(){
    let result=[];
    let keys=Object.keys(this.collection);
    keys.forEach((key)=>{
      result.push(this.collection[key]);
    });
    
    /*  
      Using for in 
      for(let key in this.collection){
        result.push(this.collection[key]);
      }
    */
    console.log(result);
    return result;
  }
  size(){
    return Object.keys(this.collection).length;
  }
  clear(){
    this.collection={};
  }
}

