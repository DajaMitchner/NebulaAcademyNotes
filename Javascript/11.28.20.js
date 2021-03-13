// If the sum of the n largest numbers is higher, return "sum"
// If the product of the n smallest numbers is higher, return "product"
// If the 2 values are equal, return "same"


function sumOrProduct(array, n) {
    let sum = 0
    let product = 1
    
    let answer = array.sort((a,b) => b-a)
    
    for (let i = 0; i < n; i++){
      sum += answer[i];
    } 
    for (let i = answer.length-1 ; i >= answer.length - n; i--)
    product *= answer[i]
    }
  if (sum > product){
    
    return 'sum'
  }
  if (product > sum){
    
    return 'product'
  
  }else{
    
    return 'same'
  }
  //     console.log(answer)
  //     console.log(sum)
  //     console.log(product)
  

//   In this Kata, you will be given directions and your task will be to find your way back.


  function solve(arr){
    let directions =[]
    let roads = []
    for (let i = 0; i < arr.length; i++){
      //find where the string 'on' begins
      let onIdx = arr[i].indexOf('on');
     //push the words before the string 'on' in directions array
      directions.push(arr[i].slice(onIdx+2, arr[i].length));
      roads.push(arr[i].slice(onIdx, arr[i].length))
       if (directions.length > 1){
         for (let i = 0; i < directions.length; i++){
           if (directions[i] === 'Left ' ){
              directions[i] = 'Right'
           }else {
         directions[i] === 'Left'
       }
      }
      }
    } 
    directions.shift()
    directions.push(' Begin')
    let newPath = []
    for (let i = 0; i < directions.length; i++){
      newPath.push(directions[i] + ' on' + roads[i])
    }
    return newPath.reverse()
  }
  
//   A person's Life Path Number is calculated by adding each individual number in that person's date of birth, until it is reduced to a single digit number.

// Complete the function that accepts a date of birth (as a string) in the following format: "yyyy-mm-dd". The function shall return a one digit integer between 1 and 9 which represents the Life Path Number of the given date of birth.

// You do not need to check that the input is correct format, you can assume that it will always be a valid date (as a string) with given format.

function lifePathNumber(dateOfBirth) {
    let sum = 0
    let strCopy2 = dateOfBirth.split('-')
    let year = strCopy2[0] //1879
    let month = strCopy2[1] //03
    let day = strCopy2[2] //14
  console.log(year)
  console.log(month)
  console.log(day)
    let yearSum = 0
  
  for (let i = 0; i < year.length; i++){
     yearSum += Number(year[i]) //yearSum becomes 25 because adding each index
    console.log(yearSum)
  }
    if (yearSum > 9){
      let tens = yearSum.toString() 
      console.log(tens)
      let firstIndex = tens[0]
      let secondIndex = tens[1]
      yearSum = Number(firstIndex) + Number(secondIndex)
      console.log(yearSum)
    } 
  }

//   Given a number , Return _The Maximum number _ could be formed from the digits of the number given .
function maxNumber(array){
    let reversedArr = array.reverse();
  
  return reversedArr;
  }

