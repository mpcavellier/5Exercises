function without(sourceArray, itemsToRemoveArray){
    //iterating through itemsToRemoveArray
    for(let i = 0; i < itemsToRemoveArray.length; i++){
        //nested forEach loop
    sourceArray.forEach(element => {
        //forEach element in sourceArray, check if current element is equal to current element in itemsToRemoveArray and if it is, remove this current element from sourceArray
        if(itemsToRemoveArray[i] == element){
            //splice removes an element at a specific index by this syntax: (startingindex, numberofelementstoremove, optionalreplacementvalue)
            //to find the starting index to satisfy splice's syntax requirements we simply just use the index of the current element
            sourceArray.splice(sourceArray.indexOf(element), 1);
            }
        })
    }
    //return new modified sourceArray that has unwanted elements removed from it
    return sourceArray;
}

let array1 = [0, 5, 9, 15, 22];
let array2 = [0, 15];
console.log(without(array1, array2));