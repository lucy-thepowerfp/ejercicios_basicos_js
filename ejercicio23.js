const movies = [
    { name: "Titan A.E.", durationInMinutes: 130 },
    { name: "Nightmare before Christmas", durationInMinutes: 225 },
    { name: "Inception", durationInMinutes: 165 },
    { name: "The Lord of the Rings", durationInMinutes: 967 },
    { name: "Star Wars: A New Hope", durationInMinutes: 214 },
    { name: "Terminator", durationInMinutes: 140 },
    { name: "Spirited Away", durationInMinutes: 80 },  
    { name: "The Matrix", durationInMinutes: 136 },  
    { name: "Amélie", durationInMinutes: 110 },  
    { name: "Eternal Sunshine of the Spotless Mind", durationInMinutes: 108 },
];

let lessthan100 = []
let morethan100lessthan200 = []
let morethan200 = []

for(movie of movies){
    if (movie.durationInMinutes < 100){
        lessthan100.push(" " + movie.name)
    }
    if (movie.durationInMinutes >= 100 && movie.durationInMinutes < 200){
        morethan100lessthan200.push(" " + movie.name)
    }
    if (movie.durationInMinutes >=200){
        morethan200.push(" " + movie.name)
    }
    
}

console.log("Menos de 100 minutos:" + lessthan100);
console.log("Mas de 100 menos de 200 minutos:" + morethan100lessthan200);
console.log("Mas de 200 minutos:" + morethan200);