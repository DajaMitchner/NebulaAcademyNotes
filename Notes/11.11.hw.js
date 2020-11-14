//let numArray = [9, 12, 3, 0, 8, 50, 101, 8, 4, 15, 3, 2]
//PROBLEM #1

// function oddNumbers(num1){
//     let odds = []
//     for (let i = 0; i < num1.length; i++){
//         if (num1[i] % 2 === 1){
//            odds.push(num1[i])
//         }
//     } return odds
// }
// console.log(oddNumbers(numArray))

//PROBLEM #2
// function evenNums (array){
// let count = 0
//     for (let i = 0; i < array.length; i++){
//     if (array[i] % 2 === 0){
//        count+=1
//     }
//     } return count
// }
// console.log(evenNums(numArray)) //7 

//PROBLEM #3
// function everyNum (num){
//     let total = 0
//     for (let i = 0; i < num.length; i++){
        
//             total += num[i]
//         }
//      return total
// }
// console.log(everyNum(numArray)) //215

//PROBLEM #4

// function acceptArray (array, value){
//    for (let i = 0; i < array.length; i++){
//        if (array[i] === value){
//            return true
//        }
//    } 
//    return false
// }
// console.log(acceptArray([40,7,8,23,43], 23)) //true
// console.log(acceptArray(['kale', 'spinach','arugula'], 'iceberg')) //false




//PROBLEM #5
// let colors = ['blue', 'purple', 'pink']
// function colorArray (favorite){
//     let newArray = []
//     for (let i = colors.length - 1; i >= 0; i--){
//         newArray.push(favorite[i])
//     } return newArray

// }
//console.log(colorArray(colors)) //pink purple blue done

//PROBLEM #6
// let numArray = ['1','2','3','4','5','6','7','8','9','10']
// function arrayNotByThree (param){
//     let total = []
//     for (let i = 0; i < param.length; i++){
//         if (param[i] % 3 > 0){
//         total.push(param[i])
//     }
//     } 
//     return total
// }
// console.log(arrayNotByThree(numArray)) //1,2,4,5,7,8,10

//PROBLEM #7

//let numArray = ['1','2','3','4','5','6','7','8','9','10']
// function arrayNotByThree (param){
//     let total = 0
//     for (let i = 0; i < param.length; i++){
//         if (param[i] % 3 > 0){
//         total += param[i]
//     }
//     } 
//     return total
// }
// console.log(arrayNotByThree(numArray)) //173