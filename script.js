const guessNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
document.querySelector(".number").textContent = guessNumber;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);
  if (!guess) {
    document.querySelector(".message").textContent = "No Number 👀";
  } else if (guess === guessNumber) {
    document.querySelector(".message").textContent = "Excelent to you ";
  } else if (guess > guessNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "to high";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "you lost ";
      document.querySelector(".score").textContent = 0;
    }
  } else if (guess < guessNumber) {
   if (score > 1) {
     document.querySelector(".message").textContent = "to low";
     score--;
     document.querySelector(".score").textContent = score;
   } else {
     document.querySelector(".message").textContent = "you lost ";
     document.querySelector(".score").textContent = 0;
   }
 }
});
