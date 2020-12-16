// using the nestedArray above, log every number in the array and the nested array  
let nestedArray = [0, 1, [2, 3, 4], 5, 6, 7, [], [8, 9, 10], 11, 12, [13]]
function nestedLoop (array){
    for (let i = 0; i < array.length; i++){
        let num = array[i]
        if (Array.isArray(num)){
            for (let k = 0; k < num[k]; k++){
                let numElement = num[k]
                console.log(numElement)
            }
        } else {console.log(num)}
    }
    return 'please work'
}
console.log(nestedLoop(nestedArray))