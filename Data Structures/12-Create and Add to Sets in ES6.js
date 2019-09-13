let checkSet=()=>{
  var set = new Set([1, 2, 3, 3, 2, 1, 2, 3, 1]);
  set.add('Taco');
  set.add('Cat');
  set.add('Awesome');
  console.log(Array.from(set));
  return set;
}

checkSet();

