//1
// console.log(2 * 2 * 2);

// console.log(Math.pow(2, 3));

//2
let mass = [2, 3, 5, 6, 7];

for (let i = 0; i < mass.length; i++) {
    const nun = mass[i];
    console.log(nun);

}
console.log(" ");

mass.forEach(nums => console.log(nums));

//3
let doubled = mass.map(element => element * 2);
console.log(doubled);

//4
const players = [
    { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
    { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
    { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
    { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
    { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
];

players.forEach(element => console.log(element.name));

//5
players.forEach(element => console.log(element.points * 1.1));
console.log(" ");

//6
players.forEach(element => {
    if (element.online === true) {
        console.log(element.name);
    }
}

);
//6.1
console.log(" ");
players.forEach(element => {
    if (element.online !== true) {
        console.log(element.name);
    }
}

);
console.log(" ");
//6.2
players.forEach(element => {
    if (element.timePlayed > 249) {
        console.log(element.name);
    }
}

);

console.log(" ");
//my test 1
let topPlayeres = [];
players.forEach(element => {
    if (element.timePlayed > 249 && element.points > 50) {
        topPlayeres.push(element.name);
    }
});

console.log("Top:", topPlayeres);

console.log(" ");
//my test 2
const playersMore = [
    { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false, awards: 0},
    { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true, awards: 0 },
    { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true, awards: 0 },
    { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false, awards: 0 },
    { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true, awards: 0 },
    { id: 'player-6', name: 'Maria', timePlayed: 390, points: 64, online: false, awards: 1 },
    { id: 'player-7', name: 'Mark', timePlayed: 430, points: 97, online: false, awards: 0 },
    { id: 'player-8', name: 'Ivan', timePlayed: 650, points: 248, online: true, awards: 4 },
    { id: 'player-9', name: 'Anna', timePlayed: 510, points: 151, online: false, awards: 0 },
    { id: 'player-10', name: 'kristi', timePlayed: 180, points: 88, online: true, awards: 0 },
    { id: 'player-11', name: 'Dan', timePlayed: 399, points: 71, online: false, awards: 1 },
    { id: 'player-12', name: 'Lana', timePlayed: 490, points: 102, online: true, awards: 2 },
    { id: 'player-13', name: 'Alina', timePlayed: 256, points: 41, online: true, awards: 0},
    { id: 'player-14', name: 'Vova', timePlayed: 130, points: 61, online: false, awards: 0 },
    { id: 'player-15', name: 'Misha', timePlayed: 60, points: 38, online: true, awards: 0 },
    { id: 'player-16', name: 'Karina', timePlayed: 380, points: 60, online: false, awards: 1 },
    { id: 'player-17', name: 'Leila', timePlayed: 440, points: 100, online: false, awards: 2 },
    { id: 'player-18', name: 'Olga', timePlayed: 450, points: 258, online: true, awards: 0 },
    { id: 'player-19', name: 'Lara', timePlayed: 310, points: 121, online: false, awards: 0 },
    { id: 'player-20', name: 'Dela', timePlayed: 200, points: 94, online: true, awards: 0 },
];

playersMore.forEach(element => {
    if (element.timePlayed > 250 && element.points > 100) {
        console.log(element.name);
    }
})
console.log(" ");
playersMore.forEach(element => {
    if (element.timePlayed > 59) {
        console.log(element.name);
    }
})
console.log(" ");

playersMore.forEach(element => {
    if (element.timePlayed > 100 && element.points > 200 && element.awards > 1) {
        console.log("TOP:");
        console.log(element.name);
    }
})