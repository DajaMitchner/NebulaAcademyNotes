let animals = {
    kangaroo: {
        name: 'Joey',
        age: 10
    },
    camel: {
        name: 'Cathy',
        age: 2
    },
    cow: {
        name: 'Sean',
        age: 15
    },
    turtle: {
        name: 'Victoria',
        age: 100
    }  
}

// // create a funciton that loops through the animals object 
// // and logs the string for each object: (name) the (animal) is (age) years old. 


function findAnimalInfo(obj){
    
for (let i = 0; i < animals.length; i++){
console.log(obj[i])
}
return `${name} the ${animal} is ${age} years old.`
}
console.log(findAnimalInfo(animals))
