/*
	Problem Statement: 
	https://www.freecodecamp.org/learn/coding-interview-prep/algorithms/no-repeats-please

	Return the number of total permutations of the provided string that don't have repeated consecutive
	letters. Assume that all characters in the provided string are each unique.

	For example, aab should return 2 because it has 6 total permutations (aab, aab, aba, aba, baa, baa),
 	but only 2 of them (aba and aba) don't have the same letter (in this case a) repeating.

*/

let swap=(str,index1,index2)=>{
    let stringArray=str.split('');
    let temp=stringArray[index1];
    stringArray[index1]=stringArray[index2];
    stringArray[index2]=temp;
    return stringArray.join('');
};

let permute=(str,l,r,result)=>{
    if(l===r){
         let regex= /aa|bb|cc|ee|ff|gg|hh|ii|jj|kk|ll|mm|nn|oo|pp|qq|rr|ss|tt|uu|vv|ww|xx|yy|zz/i;
         if(regex.test(str)){
             return result;
         }
         result++;
        return result;
    }
    for(let i=l;i<=r;i++){
        str=swap(str,l,i);
        result=permute(str,(l+1),r,result);
        str=swap(str,l,i); 
    }
    return result;
};

let permAlone=(str)=> {  
  let inputString=str;
  return permute(inputString,0,inputString.length-1,0);
}

console.log(permAlone('aab'));
