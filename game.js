const user = document.querySelector(".user");
const userImg = document.getElementById("user-hand");
const pcImg = document.getElementById("pc-hand");
const options = document.querySelector(".options");


document.querySelectorAll(".options > img").forEach((op) => {
  op.addEventListener("click", () => mainFunction(op.alt));
});

function mainFunction(op) {
  userImg.src = `assets/${op}-hand.png`;
  const pcHand = hand_options[Math.floor(Math.random() * 3)];
  pcHandGenerate(pcHand);
  compare(op, pcHand);
}

function pcHandGenerate(choice) {
  pcImg.src = `assets/${choice}-hand.png`;
}


const user_score = document.querySelector(".user-score");
const pc_score = document.querySelector(".pc-score");
let userScore = 0;
let pcScore = 0;

function compare(userHand, pcHand) {
  if (
    (userHand === "rock" && pcHand === "scissors") ||
    (userHand === "paper" && pcHand === "rock") ||
    (userHand === "scissors" && pcHand === "paper")
  ) {
    user_score.textContent = ++userScore;
  } else if (userHand !== pcHand) {
    pc_score.textContent = ++pcScore;
  }
  check(user_score.textContent, pc_score.textContent);
}

const change = document.getElementById("change")
const replay = document.querySelector(".replay");
const hand_options = ["rock", "paper", "scissors"]; 

function check(user, pc) {
  if (user === "5") {
    options.style.visibility = "hidden";
    replay.style.visibility = "visible";
    change.textContent = `You won the game`
  }else if(pc === "5"){
    options.style.visibility = "hidden";
    replay.style.visibility = "visible";
    change.textContent = `Computer won the game`
  }
}


document.querySelector(".play-again").onclick = () => {
  window.location.reload()
};