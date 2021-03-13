//number 1
//Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.
// function between(a, b) {
//     let arr = []
//     for (let i = a; i <= b; i++){
//       arr.push(i)
//     }
//         return arr
//       }
    // set up a new variable for the value of a
    // set up a new variable for the value of b
    // create a new array in order to push the returned value
    // return the value of a (in new variable) less than or equal to value of b (in new variable)
    // push results into a new array

//number 2
//Complete the function, which calculates how much you need to tip based on the total amount of the bill and the service.
// function calculateTip(amount, rating) {
//     let newRate = rating.toLowerCase()
//       if(newRate=== "excellent"){
//     return Math.ceil(amount*20/100);
//   }
//   else if(newRate === "great"){
//     return Math.ceil(amount*15/100);
//   }
  
//   else if(newRate === "good"){
//     return Math.ceil(amount*10/100);
//   }
  
//   else if(newRate === "poor"){
//     return Math.ceil(amount*5/100);
//   }
  
//   else if(newRate === "terrible"){
//     return Math.ceil(amount*0/100)
//   }
//     else {
    //   return 'Rating not recognised'
   // }
  //  }

//number 3
//Given a number n, draw stairs using the letter "I", n tall and n wide, with the tallest in the top left.
//   function drawStairs(n) {
//     let newOne = 0
//     let result = ''
//     if (n > newOne){
//     result += 'I';
//       }
//     else {
//       result += ' ' + 'I'
//       newOne++
//     }
//       return result;
//   }
// function drawStairs(n) {
//     let result = []
//     for (let i = 0; i < n; i++){
//       retuslt[i] = `${' '.repeat(i)}I`
//     }
//     return result.join('\n')
//   }
//passing one test case, trying to figure out how to get the first stair to have 'I' = '/n'

//number 4
//Simple, remove the spaces from the string, then return the resultant string.
// function noSpace(x){
//     return x.split(' ').join('')
//     }

//number 5 leetcode
// var twoSum = function(nums, target) {
//     let result = []
//     for (let i = 0; i < nums.length; i++){
//         for (let j = 1; j < nums.length; j++){
//             if (nums[i] + nums[j] = target){
//                 return [i,j]
//             }
//         }
//     }
// };