/*
	Problem Statement
	https://www.freecodecamp.org/learn/coding-interview-prep/algorithms/inventory-update

	Compare and update the inventory stored in a 2D array against a second 2D array of a fresh delivery. Update the current existing 		inventory item quantities (in arr1). If an item cannot be found, add the new item and quantity into the inventory array. The returned 		inventory array should be in alphabetical order by item.

*/
function updateInventory(arr1, arr2) {
    // All inventory must be accounted for or you're fired!
    let curInv=arr1;
    let newInv=arr2;
    for(let i=0;i<newInv.length;i++){
        let incomingInventoryItemName=newInv[i][1];
        let incomingInventoryItemQuantity=newInv[i][0];
        let prodExistsInCurInv=false; // does not exsit
        let insertionIndex=0; // index at which inventory will enter
        for(let j=0;j<curInv.length;j++){
             if(curInv[j][1] === incomingInventoryItemName){
                curInv[j][0]+=incomingInventoryItemQuantity;
                prodExistsInCurInv=true;
                break;
            }

            if(incomingInventoryItemName>curInv[j][1])
                insertionIndex++;
        }
        if(prodExistsInCurInv === false){
            let itemToBeInserted=[incomingInventoryItemQuantity,incomingInventoryItemName];
            if(insertionIndex === 0)
                curInv.unshift(itemToBeInserted);
            else if(insertionIndex === curInv.length)
                curInv.push(itemToBeInserted);
            else{
                curInv=[...curInv.slice(0,insertionIndex),itemToBeInserted,...curInv.slice(insertionIndex)];
              console.log(curInv);
                
            }
        }
       
    }
    return curInv;
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

updateInventory(curInv, newInv);

