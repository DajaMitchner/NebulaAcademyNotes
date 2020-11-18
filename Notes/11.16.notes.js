// using the nestedArray above, log every number in the array and the nested array  
let nestedArray = [0, 1, [2, 3, 4], 5, 6, 7, [], [8, 9, 10], 11, 12, [13]]
// function nestedLoop (array){
//         for (let i = 0; i < array.length; i++){
//             let num = array [i]
//             if (Array.isArray(num)){
//                 for (let k = 0; k < num.length; k++){
//                     let numElement = num[k]
//                     console.log(numElement)
//                 }
//             } else {console.log(num)}
//         } return 'Done!'
//     }
//     console.log(nestedLoop(nestedArray))

// log only the odd numbers in the array and in the nested arrays 

// function nestedLoop (array){
//     for (let i = 0; i < array.length; i++){
//                 let num = array [i]
//                 for (let k = 0;k < num.length; k++){
//                        let elementNum = num[k]
//                        if (elementNum % 2 === 1){
//                           console.log(elementNum)
//                        }
//                     }
//                 }
//             return 'done'
//         }
//         console.log(nestedLoop(nestedArray))