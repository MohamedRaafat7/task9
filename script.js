
// problem 7


let string = "saas";
let counts = {};

for (let char of string) {
  counts[char] = (counts[char] || 0) + 1;
}

if (Object.values(counts).every(count => count === 2)) {
  console.log("true");
} else {
  console.log("false");
}








// problem 8


let countes = {};
let  board = ['x', 'o', 'x', 'o', 'x', 'o', 'x', 'o', 'x']
for (let char of board){
    countes[char] = (countes[char] || 0) + 1;
}
if (countes['x']>4){
    console.log("x");
}
else {
    console.log("o");
}





// problem 9



function findIndix(array, character) {
    let firstIndex = array.indexOf(character);
    let lastIndex = array.lastIndexOf(character);
  
    return [firstIndex, lastIndex];
  }
  let array1 = ['h', 'e', 'l', 'l', 'o'];
let character1 = 'l';
let result1 = findIndix(array1, character1);
console.log(result1); // Output: [2, 3]






// problem 10
function checkConsecutiveSum(array, target) {
    for (let i = 0; i < array.length; i++) {
      let sum = array[i];
      for (let j = i + 1; j < array.length; j++) {
        sum += array[j];
        if (sum === target) {
          return true;
        }
      }
    }
    return false;
  }
  let arrayy1 = [1, 2, 3, 4, 5];
let target1 = 7;
let resultt1 = checkConsecutiveSum(arrayy1, target1);
console.log(resultt1); // Output: true


