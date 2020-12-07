// Your task is to find the first element of an array that is not consecutive.
// function firstNonConsecutive (arr) {
//     for (let i = 1; i < arr.length; i++){
//       if (arr[i-1] + 1 !== arr[i]){
//       return arr[i]
//     }
//     }
//     return null
//     }




//Your task is to create functionisDivideBy (or is_divide_by) to check if an integer number is divisible by each out of two arguments.
// function isDivideBy(number, a, b) {
//     return [a, b].every(i => number % i === 0);
//   } //passed



//Given 2 strings, a and b, return a string of the form short+long+short, with the shorter string on the outside and the longer string on the inside. The strings will not be the same length, but they may be empty ( length 0 ).
// function solution(a, b){
//     if (a > b)
//       return b + a + b;
//   return a + b + a;
//     } //PASSING 3 NOT 4




//The first input array is the key to the correct answers to an exam, like ["a", "a", "b", "d"]. The second one contains a student's submitted answers.
// function checkExam(array1, array2) {
//     let score = 0
//   for(let i = 0; i < array1.length; i++) {
//           if(array1[i].charAt(0) == array2[i].charAt(0)) {
//               score += 4;
//           } else if(array2[i].charAt(0)) {
//               score -= 1;
//           }
//   }
//     }        //getting undefined


//Complete the solution so that it reverses the string passed into it.
// function solution(str){
//     let reverseString = "";
//     for (let letters of str) {
//         reverseString = letters + reverseString;
//     }
//     return reverseString
// }


//Given a random non-negative number, you have to return the digits of this number within an array in reverse order.
// function digitize(str) {
//     let array = str.split(", ");
//        return array.reverse()
   
//    }