const avengers = ['Hulk', 'Thor', 'Iron Man', 'Captain A.', 'Spiderman', 'Captain M.'];


function findLongestWord(stringList) {
    let biggestindex = 0;
    let biggestlength = 0;
    for (let i = 0; i < stringList.length; i++){
        if(stringList[i].length > biggestlength){
            biggestindex = i;
            biggestlength = stringList[i].length;
        }
    }
    return stringList[biggestindex];
}

console.log(findLongestWord(avengers));
