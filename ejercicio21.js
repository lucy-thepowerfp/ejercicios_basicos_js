const users = [
    { name: "Tony", years: 43 },
    { name: "Peter", years: 18 },
    { name: "Natasha", years: 14 },
    { name: "Bruce", years: 32 },
    { name: "Khamala", years: 16 },
];

let overAge = []
let underAge = []

for(user of users){
    if(user.years >= 18){
        overAge.push(" " + user.name)
    }
    if(user.years < 18){
        underAge.push(" " + user.name)
    }
}

console.log("Usuarios menores de edad:" + underAge + "\nUsuarios mayores de edad:" + overAge);

