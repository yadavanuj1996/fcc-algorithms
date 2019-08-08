// Find the Symmetric Difference
/*
Problem Statement: 
Create a function that takes two or more arrays and returns an array of the symmetric difference (△ or ⊕) of the provided arrays.

Given two sets (for example set A = {1, 2, 3} and set B = {2, 3, 4}), the mathematical term "symmetric difference" of two sets is the set of elements which are in either of the two sets, but not in both (A △ B = C = {1, 4}). For every additional symmetric difference you take (say on a set D = {2, 3}), you should get the set with elements which are in either of the two the sets but not both (C △ D = {1, 4} △ {2, 3} = {1, 2, 3, 4}). The resulting array must contain only unique values (no duplicates).

*/
// more readable solution and often east to debug

let symmetricDiffTwoArray=(firstArray,secondArray)=>{
   
  let resultArray=[];
  for(let i=0;i<firstArray.length;i++){
    let currentElement=firstArray[i];
    if(resultArray.indexOf(currentElement) === -1 && secondArray.indexOf(currentElement) === -1)
      resultArray.push(currentElement);
  }

  for(let j=0;j<secondArray.length;j++){
    let currentElement=secondArray[j];
    if(resultArray.indexOf(currentElement) === -1 && firstArray.indexOf(currentElement) === -1)
      resultArray.push(currentElement);
  }

  return resultArray;
}
function sym(...args) {
  let symmetricDiff=args.reduce(symmetricDiffTwoArray,[]);
  return symmetricDiff;
}

console.log(sym([1, 2, 3], [5, 2, 1, 4]));


/*

O (n*m) solution first attempt
let arraySort=(arr)=>{
  return arr.sort((x,y)=>x-y);
}
let symmetricDiffTwoArray=(arr1,arr2)=>{
  arraySort(arr1);
  arraySort(arr2);
  let lastElement=-1;
  let arr2LastElement=-1;
  let resultArray=[];
  for(let i=0;i<arr1.length;i++){
    let currentElement=arr1[i];
    if(currentElement === lastElement){
      arr1[i]=-1;
      continue;
    }
    for(let j=0;j<arr2.length;j++){

      if(arr2[j]>currentElement){
         arr2LastElement=arr2[j];
        break;
      }
    
      else if(arr2[j] === currentElement){
        arr2[j]=-1;
        arr1[i]=-1;
      }
      arr2LastElement=arr2[j];
    }

    lastElement=currentElement;
  }

  for(let k=0;k<arr1.length;k++){
    if(arr1[k]!==-1)
      resultArray.push(arr1[k]);
  }

  for(let k=0;k<arr2.length;k++){
    if(arr2[k]!==-1 && resultArray.indexOf(arr2[k])===-1)
      resultArray.push(arr2[k]);
  }
  return resultArray;
}
function sym(...args) {
  let symmetricDiff=args[0];
   
  for(let i=1;i<args.length;i++){
    symmetricDiff=symmetricDiffTwoArray(symmetricDiff,args[i]);
  
  }
  return symmetricDiff;
}

console.log(sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]));


*/
