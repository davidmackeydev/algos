// multiplesOf3Or5

function solution(number) {
  // create variable to hold the sums
  var sum = 0;
  // use for loop to go through the numbers leading up
  for (var i = 1; i < number; i++) {
    // check each number if it is a multiple of 3 or 5
    if (i % 3 == 0 || i % 5 == 0) {
      // add the number to the sum if it passes the check
      sum += i
    }
  }
  // return the sum
  return sum;
}