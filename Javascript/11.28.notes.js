//iterative verstion
// function countDown(num){
//     for (let i = num; i>0; i--){
//         console.log(i);
//     }
//     return 'All done!'
// }
// console.log(countDown(5)) // 5 4 3 2 1 (i stops at 1 because i is > 0)


//recursuve version
// function countDown(num){
//         if (num <= 0) {
//             //console.log('All done!')
//             return 
//         } else {
//         console.log(num);
//         num--;
//         countDown(num)
//         }
//         return 'done'
// }
// console.log(countDown(3)) //3 2 1 undefined

//num of 10: 10+9+8+7+6+5+4+3+2+1=55

// function sumOf (num){
//     let total = 0;
//     for (let i = num; i > 0; i--){
//         total += i
//     }
//     return total 
// }
// console.log(sumOf(10)) //55

//recursive version
// function sumRange(num){
//     if(num === 1){ 
//         return 1;
//     }
//     return num + sumRange (num-1);
// }
// console.log(sumRange(10)) //55

//let array = [1,2,5,[],5,6,[7,5,6],9]

// function flattenArray(arr){
//     let result = []
//     for (let i = 0; i < arr.length; i++){
//         let element = arr[i]
//         if (Array.isArray(element)){
//             for (let j = 0; j < element[j]; j++){
//                 result.push(element[j])
//             }
//         }
//         else {
//             result.push(element)
//         }
//     }
//     return result
// } 
// console.log(flattenArray([1,2,5,[],5,6,[7,5,6],9])) //[1,2,5,5,6,7,5,6,9]

//recursion
// function flatten(arr){
//     let result = []
//     for (let i = 0; i < arr.length; i++){
//         let element = arr[i]
//         if (Array.isArray(arr[i])){
//             result = result.concat(flatten(arr[i]))
//         } else{
//             result.push(element)
//         }
//     }
//     return result
// }
// console.log(flatten([1,5,6,[3,[5,[6,7,8, [7, 6, [8, [8], 9]]]]]]))
// [1,5,6,3,5,6,7,8,7,6,8,8,9]

