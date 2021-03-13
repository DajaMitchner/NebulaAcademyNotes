// Imagine you start on the 5th floor of a building, then travel down to the 2nd floor, then back up to the 8th floor. You have travelled a total of 3 + 6 = 9 floors of distance.

// Given an array representing a series of floors you must reach by elevator, return an integer representing the total distance travelled for visiting each floor in the array in order.


function elevatorDistance(array) {
    let newArray = [];
    let sum =0; 
                 for(let i=0;i<array.length-1;i++){
          newArray= array[i] - array[i+1];
                     newArray = newArray>0?newArray:(-newArray);
                     sum = sum + newArray;
            }
                 return sum;
             }
    