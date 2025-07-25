const names = [
    'Peter',
    'Steve',
    'Tony',
    'Natasha',
    'Clint',
    'Logan',
    'Xabier',
    'Bruce',
    'Peggy',
    'Jessica',
    'Marc'
  ];
  function nameFinder(nameList, name) {
    if(nameList.includes(name)){
        return nameList.indexOf(name);
    }else{
        return false;
    }
  }

console.log(nameFinder(names, "Peggy"));