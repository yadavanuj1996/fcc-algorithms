class Set {
    constructor(){
        this.collection = [];
    }

    has(element){
        return ( this.collection.indexOf(element) !== -1);
    }

    values(){
        return  this.collection;
    }
 
    add(element){
        if(!this.has(element)){
             this.collection.push(element);
            return true;
        }
        return false;
    }
 
   remove(element){
        if(this.has(element)){
           var index = this.collection.indexOf(element);
            this.collection.splice(index,1);
            return true;
        }
        return false;
    }
 
   size(){
        return this.collection.length;
    }

    union(secondSet){
        let unionSet=new Set();
        this.collection.forEach((x)=>{
            unionSet.add(x);
        });

        secondSet.collection.forEach((x)=>{
            unionSet.add(x);
        });
        return unionSet;
    }
    intersection(secondSet){
        let intersectionSet=new Set();
        this.collection.forEach((x)=>{
            if(!intersectionSet.has(x) && secondSet.has(x)){
                intersectionSet.add(x);
            }
        });
        return intersectionSet;
    }
    
}


