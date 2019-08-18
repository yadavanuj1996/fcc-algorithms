
let quickSort=(inpArray,p=0,r=inpArray.length-1)=>{
  if(p < r){
    let q=partition(inpArray,p,r);
    quickSort(inpArray,p,q-1);
    quickSort(inpArray,q+1,r);
  }
  return inpArray;
}

let partition=(inpArray,p,r)=>{
  let pivot=inpArray[r];
  let i=p-1;
  let j=p;
  
  while(j<r){
    if(inpArray[j] < pivot){
      // swapping
      let temp=inpArray[i+1];
      inpArray[i+1]=inpArray[j];
      inpArray[j]=temp;
      i++;
    }
    j++;
  }
  // swapping to place pivot on correct position
  let temp=inpArray[i+1];
  inpArray[i+1]=inpArray[r];
  inpArray[r]=temp;
  return i+1;
}

// test array:
//[1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]
let testArray=[1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92];
quickSort(testArray);


