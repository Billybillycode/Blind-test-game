const player = document.getElementById("audio-player");

class Music {
  constructor(name, song, src) {
    this.name = name;
    this.song = song;
    this.src = src;
  }

  play() {
      console.log("ici");
    player.src = "../musique/" + this.src;
    player.play();
  }
}

export const musics = [
  new Music("Gala", "Freed from desire", "GALA-freed-from-desire.mp3"),
  new Music("Saian Supa Crew", "Angela", "GALA-freed-from-desire.mp3"),
  new Music("Sniper", "Gravé dans la roche", "GALA-freed-from-desire.mp3"),
  new Music("Ricky Martins", "Maria", "GALA-freed-from-desire.mp3"),
  new Music("Aqua", "Barbie Girl", "GALA-freed-from-desire.mp3"),
  new Music("Lunatic", "La lettre", "GALA-freed-from-desire.mp3"),
];

export function randomizeArray(arrayMusic) {
  arrayMusic.sort(() => Math.random() - 0.5);
  return arrayMusic;
}

function pickCurrentSong() {}

const fruits = [1, 2, 3]

export function pickOtherRandomSongs(arrayMusic, currentSong) {
  const randomSongs = [];
  // on prend arrayMusic, slice currentSong de array Music, push 2 fois 
  arrayMusic.forEach(song => {
      if (currentSong.name !== song.name && randomSongs.length < 2)
      randomSongs.push(song.name)
  });

  return randomSongs;
}

randomizeArray(musics);

// YESSSS !!!!!

// faire un array avec les musiques l'une après l'autre
// function après cette étape hire function
