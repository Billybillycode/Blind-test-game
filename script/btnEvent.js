// answer Quiz btn
const choiceBtns = [
  document.getElementById("btn1"),
  document.getElementById("btn2"),
  document.getElementById("btn3"),
];

function checkAnswer(evt) {
  console.log(evt.target);
}

choiceBtns.forEach((btn) => {
  btn.onclick = checkAnswer;
});

//start blind test btn
// faire démarer le player avec start

export const listenStartButton = (callback) => {
  document.getElementById("startClick").addEventListener("click", callback);
}

