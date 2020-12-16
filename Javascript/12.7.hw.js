//QUESTION 1
//Return a new array consisting of elements which are multiple of their own index in input array (length > 1).
// function multipleOfIndex(array) {
// 	let newArray = [];
// 	for (let i = 0; i <= array.length-1; i++) {
// 		if (array[i] % i == 0) {
// 			newArray.push(array[i]);
// 		}
// 	}
// 	return newArray;
// }
//PASSED
//QUESTION 2
//Given a random non-negative number, you have to return the digits of this number within an array in reverse order.
// function digitize(n) {
//     return String(n).split('').map(Number).reverse()
//   }
//PASS

//Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.
// function sumMix(x){
//     let total = 0
//     for (let i = 0; i < x.length; i++){
//       total += Math.reduce(x[i])
//     }
//       return total
//     }
//DID NOT PASS

//Your task is to sum the differences between consecutive pairs in the array in descending order.
// function sumOfDifferences(arr) {
//     let newArray = []
//     for (let i = 1; i < arr.length; i++){
//       newArray.push(arr[i] - arr[i-1])
//     }
//     return newArray
//   }
//DID NOT PASS
//This function takes two numbers as parameters, the first number being the coefficient, and the second number being the exponent.
// function derive(coefficient,exponent) {
//     return `${coefficient * exponent}x^${exponent-1}`
//  }
//passed

