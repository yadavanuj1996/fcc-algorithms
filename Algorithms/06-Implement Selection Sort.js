let selectionSort=(inpArray)=>{
  for(let i=0;i<inpArray.length;i++){
    let smallIndex=i;
    for(let j=i+1;j<inpArray.length;j++){
      if(inpArray[smallIndex] > inpArray[j]){
        smallIndex=j;
      }
    }
    let temp=inpArray[i];
    inpArray[i]=inpArray[smallIndex];
    inpArray[smallIndex]=temp;
  }
  return inpArray;
}


selectionSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]);

