// function dataTypes (randomThings){
//     if (typeof randomThings === 'string'){
//         return randomThings
//     } 
//     if (typeof randomThings === 'number') {
//         return randomThings
//     } 
//     if (typeof randomThings === 'boolean'){
//         return randomThings
//     }
//     if (Array.isArray(randomThings)){
//         return randomThings
//     }

// }
// console.log(dataTypes(4))
// console.log(dataTypes('hello'))
// console.log(dataTypes(true))
// console.log(dataTypes(['saturday', 'sunday']))


//PROBLEM 2
// function question (num1, num2){
//     if(num1 && num2 > 50){
//         return num1 * num2
//     } 
//     if (num1 && num2 < 50){
//         return num1 + num2
//     }
//     if (num1 || num2 < 50){
//         return num1 / num2
//     }
// }
// console.log(question(25, 30)) //55
// console.log(question(45, 29)) // 74
// console.log(question(67, 89)) //5963
// console.log(question(50, 1)) //51

//PROBLEM 3
// let remainder = num1 % num2
// function numbers (num1, num2){
//     if (num1 % num2 === 1){
//         return `the remainder of ${num1} divided by ${num2} is ${remainder}`
//     } else {
//         return `${num1} divided by ${num2} has no remainders`
//     }
// }
// console.log(numbers(8,4)) // 8 divided by 4 has no remainders
// console.log(numbers(21,4))
//PROBLEM 4
// let string = 'hey'
// function word(string1){
//     if (string1.length % 2 === 1){
//         return `the length of ${string1} is an odd number`
//     } if (string1.length % 2 === 0) {
//         return `the length of ${string1} is an even number`
//     }
// }
// console.log(word('hey')) //the length of hey is an odd number
// console.log(word('blue')) //the length of blue is a even number

//PROBLEM 5 
// let array = [ 'blue', 'orange', 'pink']
// let arr = ['blue', 'orange', 'pink', 'yellow']
// function colors(array2){
//     if (array2.length % 2 === 0){
//         array2.pop()
//         array2.unshift('purple')
//         return array2
//     } 
//     if (array2.length % 2 === 1){
//         array2.shift()
//         array2.push('green')
//         return array2
//     }
// }
// console.log(colors(['blue', 'orange', 'pink', 'yellow'])) //purple blue orange pink
// console.log(colors(array)) //orange pink green

