// uses an object to count score
const score = JSON.parse(localStorage.getItem("score")) || {
  wins: 0,
  losses: 0,
  ties: 0,
};

updateScoreElement();

function playGame(playerMove) {
  const computerMove = pickComputerMove();

  let result = "";

  if (playerMove === "Sunlight") {
    if (computerMove === "Vampire") {
      result = "You win";
    } else if (computerMove === "Werewolf") {
      result = "Tie";
    } else if (computerMove === "Zombie") {
      result = "You lose";
    }
  } else if (playerMove === "Silver Bullet") {
    if (computerMove === "Vampire") {
      result = "You lose";
    } else if (computerMove === "Werewolf") {
      result = "You win";
    } else if (computerMove === "Zombie") {
      result = "Tie";
    }
  } else if (playerMove === "Axe") {
    if (computerMove === "Vampire") {
      result = "Tie";
    } else if (computerMove === "Werewolf") {
      result = "You lose";
    } else if (computerMove === "Zombie") {
      result = "You win";
    }
  }

  if (result === "You win") {
    score.wins++;
  } else if (result === "You lose") {
    score.losses++;
  } else if (result === "Tie") {
    score.ties++;
  }

  console.log(score.losses);

  // Saves score in local Storage
  // Only a string can be saved so have to convert
  localStorage.setItem("score", JSON.stringify(score));

  document.querySelector(".js_result").innerHTML = result;
  document.querySelector(
    ".js_moves"
  ).innerHTML = `You ${playerMove} - ${computerMove} Computer.`;
  updateScoreElement();
}

function updateScoreElement() {
  document.querySelector(
    ".js_score"
  ).innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

function pickComputerMove() {
  const randomNumber = Math.random();

  let computerMove = "";

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = "Vampire";
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = "Werewolf";
  } else if (randomNumber >= 2 / 3 && randomNumber < 3 / 3) {
    computerMove = "Zombie";
  }

  return computerMove;
}
