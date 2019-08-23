/*
	This is merge sort solution using more general and generic approach if you want a more
	more javascript specific solution using shift unshift and push look at the commented
	solution below this one.
*/


let merge=(inpArray,p,q,r)=>{
  let leftArray=[];
  let rightArray=[];

  for(let i=0;i<q-p+1;i++){
    leftArray[i]=inpArray[i+p];
  }
  leftArray[q-p+1]=Number.MAX_SAFE_INTEGER;
  for(let j=0;j<r-q;j++){
    rightArray[j]=inpArray[j+q+1];
  }
  rightArray[r-q]=Number.MAX_SAFE_INTEGER;
  // using i for leftArray and j for rightArray
  let i=0,j=0;
  for(let k=p;k<=r;k++){
    if(leftArray[i]<=rightArray[j]){
      inpArray[k]=leftArray[i];
      i++;
    }
    else if(leftArray[i]>rightArray[j]){
      inpArray[k]=rightArray[j];
      j++;
    }
  }
};

let mergeSort=(inpArray,p=0,r=inpArray.length-1)=>{
  if(p < r){
    let q=parseInt((p+r)/2);
    mergeSort(inpArray,p,q);
    mergeSort(inpArray,q+1,r);
    merge(inpArray,p,q,r);
  }
  return inpArray;
};

//test case
mergeSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]);

/*
	This solution is more of js specific and been implemented using unshift, shift & push while the above one
	is more easy and generic to understand and implement in other languages. 

let merge=(inpArray,p,q,r)=>{
  let leftArray=[Number.MAX_SAFE_INTEGER];
  let rightArray=[Number.MAX_SAFE_INTEGER];
  let resultArray=[];
  // fillng the left array elementes till index q
  for(let i=q;i>=p;i--){
    leftArray.unshift(inpArray[i]);
  } 
  
  // fillng the right array elementes from q+1 to index r
  for(let j=r;j>=q+1;j--){
    rightArray.unshift(inpArray[j]);
  } 
  // merging the two arrays comparing the first values of both array
  for(let k=p;k<=r;k++){
    if(leftArray[0]<=rightArray[0]){
      resultArray.push(leftArray[0]);
      leftArray.shift();
    }
    else if(rightArray[0]<leftArray[0]){
      resultArray.push(rightArray[0]);
      rightArray.shift();
    }
  }
  for(let i=p;i<=r;i++){
    inpArray[i]=resultArray[i-p];
  }
};

let mergeSort=(inpArray,p=0,r=inpArray.length-1)=>{
  if(p < r){
    let q=parseInt((p+r)/2);
    mergeSort(inpArray,p,q);
    mergeSort(inpArray,q+1,r);
    merge(inpArray,p,q,r);
  }
  return inpArray;
};

//test case
console.log(mergeSort([2,5,3,1,7,4]));
//mergeSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]);

*/

