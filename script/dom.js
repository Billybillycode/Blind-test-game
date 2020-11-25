
  // - - - - - Mettre chaque effet dans une page différente


// - - - - - -- - - - - - - - - - -  - - - - - - - - - - - - - - - - - -  -- - - - - - - - - - 
// Qu'est-ce que je veux ?

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
class Music {
        constructor(name, song) {
            this.name = name;
            this.song = song;
        }
}

let music2 = new Music('Saian Supa Crew','Angela')
let music3 = new Music('Sniper', 'Gravé dans la roche')
let music4 = new Music('Ricky Martins', 'Maria')
let music5 = new Music('Aqua', 'Barbie Girl')
let music6 = new Music('Lunatic', 'La lette')


let array = [];
array.push = ['music2', 'music3', 'music4', 'music5', 'music6'];


// faire un array avec les musiques l'une après l'autre
// function après cette étape hire function
console.log(Music)
console.log(music4)
console.log(array)
console.log(array[0])

// - - - - - -- - - - - - - - - - -  - - - - - - - - - - - - - - - - - -  -- - - - - - - - - - 


// - - - - - - - -- btn
let btn1 = document.getElementById('btn1');
let Btn2 = document.getElementById('btn2');
let Btn3 = document.getElementById('btn3');


btn1.addEventListener("click", function() {
    console.log(document.getElementById("btn1"))
  });
btn1.addEventListener("click", function() {
    console.log(document.getElementById("btn2"))
  });
btn1.addEventListener("click", function() {
    console.log(document.getElementById("btn3"))
  });

// - - - - - -- - - - - - - - - - -  - - - - - - - - - - - - - - - - - -  -- - - - - - - - - - 




