//Return the remaining elements of an array after chopping off n elements from the head.

function slasher(arr, howMany) {
  var newArr = arr.slice(howMany);
  return newArr;
}
console.log(slasher([1, 2, 3], 0));
console.log(slasher([1, 2, 3], 0));
console.log(slasher([1, 2, 3], 9));
console.log(slasher(["burgers", "fries", "shake"], 1));
console.log(slasher([1, 2, "chicken", 3, "potatoes", "cheese", 4], 5));
