


// answer Quiz btn
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

  //start blind test btn
  // faire démarer le player avec start

let startClick = document.getElementById("startClick");
startClick.addEventListener("click", function() {
        btn1.innerHTML = "music1"
}
