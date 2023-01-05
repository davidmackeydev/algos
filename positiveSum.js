// positiveSum

var tacocat = 0

function positiveSum(arr) {
  let sum = 0
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    if (arr[i] >= 0) {
      sum += arr[i]
    }
  }
  return sum
}

console.log(positiveSum([1, 2, 3, 4, 10, -7]));
