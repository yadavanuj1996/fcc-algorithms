
class Set {
    constructor() {
    // collection will hold our set
    this.collection = [];
    }
    // this method will check for the presence of an element and return true or false
    has(element) {
        return this.collection.indexOf(element) !== -1;
    }
    // this method will return all the values in the set
    values() {
        return this.collection;
    }
    add(item){
        if(!this.has(item)){
            this.collection.push(item);
            return true;
        }
        
        return false;
    }
    remove(item){
        if(this.has(item)){
            let itemIndex=this.collection.findIndex((x)=>x === item);
            this.collection.splice(itemIndex,1);
            return true;
        }
          
        return false;
    }
    size(){
        return this.collection.length;
    }
}


