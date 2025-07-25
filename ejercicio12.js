const duplicates = [
    'sushi',
    'pizza',
    'burger',
    'potatoe',
    'pasta',
    'ice-cream',
    'pizza',
    'chicken',
    'onion rings',
    'pasta',
    'soda'
  ];
  function removeDuplicates(list) {
    const uniques = [];
    let o = 0;
    for (let i = 0; i < list.length; i++){
        if (!uniques.includes(list[i])){
            uniques[o] = list[i];
            o++;
        }
    }
    return uniques;
  }
console.log(removeDuplicates(duplicates));