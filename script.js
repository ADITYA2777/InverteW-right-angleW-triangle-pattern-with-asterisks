// function printInvertedTriangle(rows){
//     let pattern ="";
//     for (let i = rows; i >= 1; i--){
//         for (let j = 1; j <= i; j++) {
//             pattern += "*";
//         }
//         pattern += "<br/>"
//     }
//    document.getElementById("pattern").innerHTML= pattern;
// }
// let input = parseInt(prompt("enter the number of rows:"));
// printInvertedTriangle(input);


function printDivisibleByThreeNotByTwo(numbers) {
    for (var i = 0; i < numbers.length; i++) {
      var currentNumber = numbers[i];
      if (currentNumber % 3 !== 0 || currentNumber % 2 === 0) {
        continue;
      }
      console.log(currentNumber);
    }
  }
  
  // Example usage
  var numberArray = [1,6,7];
  printDivisibleByThreeNotByTwo(numberArray);




