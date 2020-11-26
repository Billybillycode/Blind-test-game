


let musics = [
    {
        artist : "Gala",
        song: "Freed from desire",
    },
    {
        artist : "Saian Supa crew",
        song: "Angela",
    },
];




class Music {
    constructor(name, song, src) {
        this.name = name;
        this.song = song;
        this.src = src;
    }
}

let music1 = new Music('Gala','Freed from disire')
let music2 = new Music('Saian Supa Crew','Angela')
let music3 = new Music('Sniper', 'Gravé dans la roche')
let music4 = new Music('Ricky Martins', 'Maria')
let music5 = new Music('Aqua', 'Barbie Girl')
let music6 = new Music('Lunatic', 'La lette')


let arrayMusic = ['music2', 'music3', 'music4', 'music5', 'music6'];
function randomArray(arrayMusic) {
arrayMusic.sort(() => Math.random() - 0.5);
}
console.log(" - -- - - random - -- - - - ")
randomArray(arrayMusic);
// YESSSS !!!!!

console.log(arrayMusic)

console.log(" - - -- - -- - ")


let randomArrayMusic = arrayMusic[Math.floor(Math.random()*arrayMusic.length)];

console.log(" - - - - - - - - ")
//console.log(randomArrayMusic)

// faire un array avec les musiques l'une après l'autre
// function après cette étape hire function
console.log(Music)
console.log(music4)
console.log(arrayMusic)