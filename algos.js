//Codewars
//EvenOrOdd Kata

// Solution:
// function evenOrOdd(number) {
//   number = number.toString()
//   number = number[number.length - 1]
//   console.log(number)
//   if (number == 2 || number == 4 || number == 6 || number == 8) {
//     return `Even`
//   } else return 'Odd'
// }

// Mathematical Solution:
// function evenOrOdd(number) {
//   if (number % 2 == 0) {
//     return "Even"
//   } return "Odd"
// }

// console.log(evenOrOdd(123456789))

//Convert a Number to a String!
function numberToString(num) {
  return num.toString()
}