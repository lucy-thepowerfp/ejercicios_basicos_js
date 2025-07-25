const mixedElements = [6, 1, 'Marvel', 1, 'hamburguesa', '10', 'Prometeo', 8, 'Hola mundo'];
function averageWord(list) {
    let sum = 0;
    for(let i = 0; i < mixedElements.length; i++){
        if(typeof mixedElements[i] == "number"){
            sum = sum + mixedElements[i];
        }
        if(typeof mixedElements[i] == "string"){
            sum = sum + mixedElements[i].length;
        }
      }
    let average = sum / mixedElements.length;
    return average;
}

console.log(averageWord(mixedElements));