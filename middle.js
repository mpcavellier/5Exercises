// Implement middle which will take in an array and return the middle-most element(s) of the given array.
// The middle function should return an array with only the middle element(s) of the provided array. This means that the length of the returned elements could vary.

// For arrays with one or two elements, there is no middle. Return an empty array.

// This function should simply be finding the middle elements, not the median

function findMiddle(array){
  let arrlen = array.length;
  //Math.floor takes the result of the input and rounds it down
  //We use Math.floor() to find the middle index of the array because if there *is* a middle index the arraylength has to be odd. For example if we knock out the first and the last index until we get the middle index:
  //[0, 1, 2, 3, 4, 5, 6, 7, 8]
  //   [1, 2, 3, 4, 5, 6, 7]
  //      [2, 3, 4, 5, 6]
  //         [3, 4, 5]
  //            [4]
  // Now, 9/2 = 4.5 and 4.5 rounded down(Math.floor!) is 4 aka the middle index
  // You could solve this manually in a loop if you wanted to but using Math.floor to find the middle index saves a lot of code (and headache IMO)
  const midindex = Math.floor(arrlen / 2);
  //if length of array / 2 has a remainder of 1, it will be an odd array and therefore will have a middle index, so return the middle index
  if(arrlen % 2 == 1){
    return array[midindex];
    //Otherwise, if length of array / 2 has a remainder of 0, it is an even array and therefore will not have a middle index because it is even so return an empty array (as per instructions above)
  } else if(arrlen % 2 == 0){
    return [];
  }
}
let oddLenArray = [1, 3, 5, 7, 9]; //expect output: 5
let evenLenArray = [1, 3, 4, 10]; //expected output: []
console.log(findMiddle(oddLenArray));
console.log(findMiddle(evenLenArray));
