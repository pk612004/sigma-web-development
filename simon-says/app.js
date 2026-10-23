
const colors = ["red", "yellow", "blue", "green"];

const gameSeq = [];
const userSeq = [];

let level = 0;
let started = false;
let acceptingInput = false;
let bestLevel = 0;
let roundToken = 0;

const message = document.querySelector("#message");
const levelDisplay = document.querySelector("#level");
const bestDisplay = document.querySelector("#best");
const startBtn = document.querySelector("#start-btn");
const buttons = document.querySelectorAll(".btn");

// Read the best score saved in this browser
try {
  bestLevel = Number(localStorage.getItem("simonBest")) || 0;
} catch (error) {
  bestLevel = 0;
}

bestDisplay.textContent = bestLevel;

// Temporarily flash a button
function flashButton(button, duration = 300) {
  button.classList.add("flash");

  return new Promise((resolve) => {
    setTimeout(() => {
      button.classList.remove("flash");
      resolve();
    }, duration);
  });
}

// Pause execution for a specified time
function wait(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

// Flash the computer's complete sequence
async function playSequence(token) {
  acceptingInput = false;
  message.textContent = "Watch the sequence carefully!";

  await wait(400);

  for (const color of gameSeq) {
    if (token !== roundToken || !started) return;

    const button = document.getElementById(color);

    await flashButton(button, 350);
    await wait(150);
  }

  if (token !== roundToken || !started) return;

  userSeq.length = 0;
  acceptingInput = true;
  message.textContent = "Your turn! Repeat the sequence.";
}

// Start a new level
function levelUp() {
  if (!started) return;

  level++;
  levelDisplay.textContent = level;

  const randomIndex = Math.floor(Math.random() * colors.length);
  const randomColor = colors[randomIndex];

  gameSeq.push(randomColor);

  playSequence(roundToken);
}

// Check the player's latest click
function checkAnswer(index) {
  if (!started || !acceptingInput) return;

  const clickedColor = userSeq[index];
  const correctColor = gameSeq[index];

  if (clickedColor !== correctColor) {
    gameOver();
    return;
  }

  // The entire sequence has been matched
  if (userSeq.length === gameSeq.length) {
    acceptingInput = false;
    message.textContent = "Correct! Next level...";

    setTimeout(() => {
      if (started) {
        levelUp();
      }
    }, 700);
  }
}

// Handle a player clicking a colored button
function handleButtonClick(event) {
  if (!started || !acceptingInput) return;

  const clickedButton = event.target;
  const clickedColor = clickedButton.id;

  userSeq.push(clickedColor);

  flashButton(clickedButton, 150);

  checkAnswer(userSeq.length - 1);
}

// Start or restart the game
function startGame() {
  roundToken++;

  gameSeq.length = 0;
  userSeq.length = 0;

  level = 0;
  started = true;
  acceptingInput = false;

  levelDisplay.textContent = level;
  message.textContent = "Get ready...";

  levelUp();
}

// End the current game
function gameOver() {
  started = false;
  acceptingInput = false;

  // Invalidate any sequence currently playing
  roundToken++;

  if (level > bestLevel) {
    bestLevel = level;
    bestDisplay.textContent = bestLevel;

    try {
      localStorage.setItem("simonBest", String(bestLevel));
    } catch (error) {
      // The game still works if storage is unavailable
    }
  }

  message.textContent = `Game Over! Your level: ${level}`;
  startBtn.textContent = "Play Again";

  document.body.classList.add("game-over");

  setTimeout(() => {
    document.body.classList.remove("game-over");
  }, 250);
}

// Register click listeners
buttons.forEach((button) => {
  button.addEventListener("click", handleButtonClick);
});

// Start using the button
startBtn.addEventListener("click", startGame);

// Also allow starting with a keyboard key
document.addEventListener("keydown", (event) => {
  if (
    !started &&
    event.key !== "Tab" &&
    event.key !== "Shift" &&
    event.key !== "Control" &&
    event.key !== "Alt"
  ) {
    startGame();
  }
});
