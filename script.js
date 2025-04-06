let guessNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = Number(localStorage.getItem('highscore'))||0;
document.querySelector('.highscore').textContent = highscore
const displayMessage = function(message){
  document.querySelector(".message").textContent= message
}
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  // when dont have input
  if (!guess) {
    displayMessage("No Number 👀");
  }
  // when player win
   else if (guess === guessNumber) {
    document.querySelector(".number").textContent = guessNumber;
    displayMessage("Wow you won 😍");
    document.querySelector('body').style.backgroundColor ='green'
    document.querySelector('.number').style.color = 'green'
    document.querySelector('.number').style.fontSize ='3em'
    if(score > highscore){
      highscore = score;
      document.querySelector('.highscore').textContent = highscore
      localStorage.setItem('highscore',highscore)
    }
  }
  // when the guess is wrong
  else if(guess !== guessNumber){
    if (score > 1) {
      displayMessage(guess > guessNumber ? "to high 📉" : "to low 📈");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("you lost 🥺 ");
      document.querySelector('body').style.backgroundColor ='red'
      document.querySelector(".number").textContent = guessNumber;
      document.querySelector(".number").style.color = 'red';
      document.querySelector(".score").textContent = 0;
    }
  }})
//play again button functionality
document.querySelector('.btn-again').addEventListener("click",function(){
  score=20
  guessNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".score").textContent = score;
  displayMessage("start guessing...");
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor ='rgb(56, 83, 56)'
  document.querySelector('.number').style.color = 'rgb(56, 83, 56)'
  document.querySelector('.number').style.fontSize ='2em'
  document.querySelector(".number").textContent = '?';


})