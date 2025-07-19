const marvelHeros = ["thor", "Ironman", "spiderman"]
const dcHeros = ["Superman", "flash","batman"]

marvelHeros.push(dcHeros)
console.log(marvelHeros);            // [ 'thor', 'Ironman', 'spiderman', [ 'Superman', 'flash', 'batman' ] ]
console.log(marvelHeros[3][1]);     //  flash

marvelHeros.concat(dcHeros)
console.log(marvelHeros);     // [ 'thor', 'Ironman', 'spiderman' ]

const allHeros = marvelHeros.concat(dcHeros)
console.log(allHeros);       //  [ 'thor', 'Ironman', 'spiderman', 'Superman', 'flash', 'batman' ]

const allNewHeros = [...marvelHeros, ...dcHeros]
console.log(allNewHeros);    //  [ 'thor', 'Ironman', 'spiderman', 'Superman', 'flash', 'batman' ]

const another_array =[1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
let real_another_array = another_array.flat(Infinity)
console.log(real_another_array);                     // [1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]

console.log(Array.isArray("Pradip"));       // false
console.log(Array.from("Pradip"));         // [ 'P', 'r', 'a', 'd', 'i', 'p' ]
console.log(Array.from({name: "Pradip"}));       // []

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));    //  [ 100, 200, 300 ]
