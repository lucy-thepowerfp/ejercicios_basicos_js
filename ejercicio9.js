const numbers = [1, 2, 3, 5, 45, 37, 58];

function sumNumbers(numberList) {
  let result = 0;
  for(let i = 0; i < numberList.length; i++){
    result = result + numberList[i];
  }
  return result;
}

console.log(sumNumbers(numbers));