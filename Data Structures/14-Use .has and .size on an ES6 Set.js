function checkSet(arrToBeSet, checkValue){

   // change code below this line
   let set=new Set(arrToBeSet);
   return [set.has(checkValue),set.size];
   // change code above this line

}

checkSet([ 1, 2, 3], 2); // Should return [ true, 3 ]

