
// your code goes here

let bubbleSort=(inpArray)=>{
  for(let i=0;i<inpArray.length-1;i++){
    let isArrayAlreadySorted=true;
      for(let j=0;j<inpArray.length-i;j++){
          if(inpArray[j]>inpArray[j+1]){
              let temp=inpArray[j];
              inpArray[j]=inpArray[j+1];
              inpArray[j+1]=temp;
              isArrayAlreadySorted=false; // for breaking
          }
      }
      if(isArrayAlreadySorted === true)
        break;
  }
  return inpArray;
}

console.log(bubbleSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]));

