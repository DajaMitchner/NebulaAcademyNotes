let studentObject1 = {
name: 'Tim',
id: 1,
age: 22
    }

let studentObject2 = {
name: 'Lisa',
id: 2,
age: 19
    }
   
// PROBLEM #1
    
    //Using the first studentObject1 above, create a function that returns the string, 'Tim is 22 years old'

// function loopAge (object){
//     for (let key in object){
//         let person = key
//         let personName = object[key].name
//         let personAge = object[key].age
//     console.log(`${personName} the ${person} is ${personAge} years old.`)
//     } return 'done'
// } 
//     console.log(loopAge(studentObject1))
// undefined the name is undefined years old.
// undefined the id is undefined years old.
// undefined the age is undefined years old.
// done
    
    
    
    //  Problem #2
    
    //  Create a fucntion that takes in the two objects above, check to see if the person is above the age of 21 or not.
    
    //  if they are 21+, return the string, 'welcome, (name)!'
    
    //  if not, return the string, 'try again in a couple years'
    
    //  Problem #3
    
    //  create a function that returns the keys in an array
    // console.log(Object.keys(studentObject1)) //[ 'name', 'id', 'age' ]
    // console.log(Object.keys(studentObject2)) //[ 'name', 'id', 'age' ]
    //  create a funciton that return the values in an array
    // console.log(Object.values(studentObject1)) //[ 'Tim', 1, 22 ]
    // console.log(Object.values(studentObject2)) //[ 'Lisa', 2, 19 ]
    //  Problem #4
    
    //  Create a function that deletes the 'id' key value pairs
    // delete studentObject1.id
    // console.log(studentObject1) //{ name: 'Tim', age: 22 }
    // delete studentObject2.id
    // console.log(studentObject2) // { name: 'Lisa', age: 19 }
   
   
    //  Problem #5
    
    //  create a function that takes in the student objects above and their birthdates (come up with their birthdates) as parameters.
    
    //  This function will add a new birthdate key value pair to the object