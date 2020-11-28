//Given an array of integers , Find the maximum product obtained from multiplying 2 adjacent numbers in the array.
// function adjacentElementsProduct(array) {
//     let results = []
//     for (let i = 0; i <= array.length - 2; i = i +2){
//       results.push(array[i] * array [i+1])
//     } console.log(results)
//   }
  //did not finish

//Given an array/list [] of integers , Find The maximum difference between the successive elements in its sorted form.
//  function maxGap (numbers){
//      let max = 0
//         numbers.sort((a,b) => )
//   }

//Given an array/list [] of integers , Find the Nth smallest element in this array of integers

// function nthSmallest(arr, pos){
//     let answer = arr.sort((a,b) => a-b)
//     return answer[pos-1]
// }

//Write a function called repeat_str which repeats the given string src exactly count times.
// function repeatStr (n, s) {
//     return s.repeat(n)



//Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.


// function fakeBin(str){
//     let newStr = ''
//     for (let i = 0; i <= str.length -1; i++){
//         if(Number(str[i]) >= 5){
//             newStr+='1'
//         }
//         else{
//             newStr+='0'
//         }
//     }
//     return newStr
// }