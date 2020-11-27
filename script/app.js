// - - - - - Mettre chaque effet dans une page différente

import { listenStartButton } from "./btnEvent.js";
import { musics, randomizeArray, pickOtherRandomSongs } from "./musicChoice.js";

const currentMusics = randomizeArray(musics);
let currentMusic = null

let round = 0;

// - - - - - -- - - - - - - - - - -  - - - - - - - - - - - - - - - - - -  -- - - - - - - - - -
// Qu'est-ce que je veux ?
function startRound() {
  currentMusic = currentMusics[round];
  //document.getElementById("appear").innerHTML = "todo todo";
  // 1 play Music
  //currentMusic.play();
  // 2 afficher reponses possibles ???
  const randos = pickOtherRandomSongs(currentMusics, currentMusic);
  console.log([currentMusic.name, ...randos]);
  // utiliser les randos en inner hMl
document.getElementById("btn1").innerHTML = randos[0]
document.getElementById("btn2").innerHTML = randos[1]
document.getElementById("btn3").innerHTML = currentMusic.name
  // 3 ecouter click btn
  
  function listenAnswerButton(btn1, btn2, btn3) {

  }
  // si rep clickee == currentMusic.name : win
  // else loose
}

listenStartButton(startRound);







// 1) regrouper les musiques dans un objet

// 2)Display les musiques a partir du moment où l'on commence
//  2bis) Si j'ai le temps, les displays de manière aléatoire

//3)Afficher les 3 possibilités de réponse en fonction de la musique qui passe

// 4)Ajouter un evênement : si
//      on click sur la bonne musique gagné
//      on click sur la mauvaise musique = perdu

// 5bis) (option) Ajouter un truc marrant en fonction de gagné ou perdu

// un seul essai, ça sera plus simple, le but étant de réussir à toutes les musiques pour avancer, sinon on recommence
// si cette option choisi, les display de manière aléatoire devient plus interressant

// 6Bonus) Réaliser un timer qui démarre au commencement de la musique (définir le temps)
//      soit :
//          si temps écoulé, perdu...
//          si reponse good, reset timer pour la prochaine musique

// design un objet avec vette

// - - - - - -- - - - - - - - - - -  - - - - - - - - - - - - - - - - - -  -- - - - - - - - - -
//Creer l'objet accueillant les musics

// je fais une class qui accueille les musiques

// - - - - - -- - - - - - - - - - -  - - - - - - - - - - - - - - - - - -  -- - - - - - - - - -

// - - - - - - - -- btn

// - - - - - -- - - - - - - - - - -  - - - - - - - - - - - - - - - - - -  -- - - - - - - - - -

//afficher le nom des musique sur les boutons
// - - - - - -- - - - - - - - - - -  - - - - - - - - - - - - - - - - - -  -- - - - - - - - - -

//

//je veux que start aille piocher dans les music
//je vais faire une fonction pour ça.

// - - - - - -- - - - - - - - - - -  - - - - - - - - - - - - - - - - - -  -- - - - - - - - - -

//

// - - - - - -- - - - - - - - - - -  - - - - - - - - - - - - - - - - - -  -- - - - - - - - - -
