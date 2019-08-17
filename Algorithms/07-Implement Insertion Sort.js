/*
	Insertion Sort Solution implemented using while loop and with improved readability.
*/



let insertionSort=(inpArray)=>{
  for(let i=1;i<inpArray.length;i++){
    let currentElement=inpArray[i];
    let j=i-1;
    while(j>=0 && inpArray[j] > currentElement){
        inpArray[j+1]=inpArray[j];
        j--;
    }
    inpArray[j+1]=currentElement;
  }
  return inpArray;
}

insertionSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]);



/*
First Solution using for loop 
let insertionSort=(inpArray)=>{
  for(let i=1;i<inpArray.length;i++){
    let currentElement=inpArray[i];
    let j=i-1;
    for(;j>=0;j--){
      if(inpArray[j] > currentElement)
        inpArray[j+1]=inpArray[j];
      else 
        break;
    }
    inpArray[j+1]=currentElement;
  }
  return inpArray;
}

insertionSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]);

*/
