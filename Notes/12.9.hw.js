//NUMBER 1
//Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.
// constquarterOf = (month) => {​​​​​​​​
// returnMath.ceil(month / 3)
// }​​​​​​​​
// console.log(quarterOf(3))

//NUMBER 2
// function multiTable(number) {
//     let result = ''
//     for (let i = 1; i <= 10; i++){
//       let total = number * i
//       result += i + ' * ' + number + ' = ' + total + '\n'
//       console.log(result)
//     }
//      return result.slice(0,-1)
//    }
   


//NUMBER THREE
// You have to write a function that accepts three parameters:
// function enough(cap, on, wait) {
// let total = on + wait;
// if (total <= cap){
//       return 0;
//     }else{
//       return total - cap;
//     }
// }



//NUMBER 4
// Build a function that returns an array of integers from n to 1 where n>0.
// const reverseSeq = n => {
//     let arr = []
//     for (let i = n; i >= 1; i--) {
//      arr.push(i);
//   }
//     return arr



//number 5
// When provided with a number between 0-9, return it in words.
// function switchItUp(number){
//    function switchItUp(number){
// let numberObject = {
//     '0' : 'Zero'
//     '1' : 'One'
//     '2' : 'Two'
//     '3' : 'Three'
//     '4' : 'Four'
//     '5' : 'Five'
//     '6' : 'Six'
//     '7' : 'Seven'
//     '8' : 'Eight'
//     '9' : 'Nine'
//   }
//   for (let key in numberObject){
//     if (number === Nunmber(key)){
//       return numberObject[key]
//     }
//   }
//   }


//NUMBER 6
// function warnTheSheep(queue) {
//     queue = queue.reverse()
//   if (queue[0] === 'wolf'){
//     return 'Pls go away and stop eating my sheep'
//   }
//     for (let i = 0; i < queue.length; i++){
//       if (queue[i] === 'wolf'){
//         return `Oi! Sheep number ${i}! You are about to be eaten by a wolf!`
//       }
//     }
//   }