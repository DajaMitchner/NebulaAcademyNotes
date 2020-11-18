//let nested = [1, 2, 3, [4, 5], 6, [7, 8, 9], [10], 11, 12, 13, [14, 15], [], 17, [18], 19, 20]
// function nestedLoop (array){
//     for (let i = 0; i < array.length; i++){
//         let num = array [i]
//         if (Array.isArray(num)){
//             for (let k = 0; k < num.length; k++){
//                 let numElement = num[k]
//                 console.log(numElement)
//             }
//         } else {console.log(num)}
//     } return 'Done!'
// }
// console.log(nestedLoop(nested)) // 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 Done!

// function nestedLoop (array){
//     let total = 0
//     for (let i = 0; i < array.length; i++){
//         let num = array [i]
//         for (let k = 0;k < num.length; k++){
//                let elementNum = num[k]
//                if (elementNum % 2 === 1){
//                    total += elementNum
//                }
//             }
//         }
//     return total
// }
// console.log(nestedLoop(nested))// 36

// function nestedLoop (array){
//     for (let i = 0; i < array.length; i++){
//         let evenNum= array [i]
//         if (Array.isArray(evenNum)){
//         for (let k = 0;k < num.length; k++){
//                let elementNum = evenNum[k]
//                if (elementNum%2 === 0){
//                    console.log(elementNum)
//                }
//            }
//         } else if (evenNum % 2 === 0)
//     console.log(evenNum)
//     }
//     return 'Done!'
// }
//     console.log(nestedLoop(nested))//

//let nestedArr = ['full', 'stack', ['node', 'react',], [], ['redux'], ['html', 'css'], 'sql']

// function nestedLoop (array){
//     for (let i = 0; i < array.length; i++){
//         let loop = array[i]
//         if (Array.isArray(loop)){
//          for (let j = 0; j < loop.length; j++){
//             let nest= loop[j]
//             console.log(nest)
//         }
//     } else {
//        console.log(loop)
//     }
// }
//     return 'done!'
// }    
// console.log(nestedLoop(nestedArr)) //full stak node react redux html css sql done!

// function nest (array){
//     for (let i = 0; i<array.length; i++){
//         console.log(array)
//         let nestedLoop = array[i]
//         if (Array.isArray(nestedLoop))
//        nestedLoop.push('nested')
        
//     } return array
// }
// console.log(nest(nestedArr)) // [
//     'full',
//     'stack',
//     [ 'node', 'react', 'nested' ],
//     [ 'nested' ],
//     [ 'redux', 'nested' ],
//     [ 'html', 'css', 'nested' ],
//     'sql'
//   ]

// function nestedLoop (array){
//         for (let i = 0; i < array.length; i++){
//             let nest = array[i]
//             if (Array.isArray(array)){
//                 for (let k = 0; k < nest.length; k++){
//                let elementNest = nest[k]
//                if (elementNest.includes('a')){
//             console.log(elementNest)
            
//             }
//         }
//     } else if (nest.includes('a'){
//         console.log(nest)
//     }
    
//     return 'Done!'
// }
//console.log(nestedLoop(nestedArr))

// function four (array){
//     for (let i = 0; i < array.length; i++){
//         let element = array [i]
//         if (Array.isArray(element)){
//             for (let k = 0;k < element.length; k++){
//             let nestedElement = element[k]
//                 if (nestedElement.length === 4){
//                 console.log(nestedElement)
//                  }
//             }
//         } else if (element.length === 4){
//             console.log(element)
//         }
//     } 
//     return 'done'
// }
// console.log(four(nestedArr)) // full node html done

