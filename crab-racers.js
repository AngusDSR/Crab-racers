let playerPosition1 = 1;
let playerPosition2 = 1;
let raceOngoing = true;
let Btncolor = "#F05C22";

const resetBtn = document.querySelector('.button-reset');

// Function to toggle the given cell
const toggleActiveClass = (keyPressed) => {
  if (keyPressed === "q") {
    document.querySelector(`#player1-race td:nth-child(${playerPosition1})`).classList.toggle('active');
  } else if (keyPressed === "p") {
    document.querySelector(`#player2-race td:nth-child(${playerPosition2})`).classList.toggle('active');
  }
};

// Function to raise player positions
const racerAdvance = (keyPressed) => {
  if (keyPressed === "q") {
    playerPosition1 += 1;
  } else if (keyPressed === "p") {
    playerPosition2 += 1;
    toggleActiveClass();
  }
};

// to avoid bad style
const endRaceTwo = () => {
  raceOngoing = false;
  resetBtn.style.display = "inline";
  resetBtn.style.backgroundColor = Btncolor;
};

// Function to end race and offer restart
const endRaceOne = () => {
  if (playerPosition1 === 17) {
    window.alert("Player 1 wins!");
    Btncolor = "#3DA4E0";
    endRaceTwo();
  } else if (playerPosition2 === 17) {
    window.alert("Player 2 wins!");
    Btncolor = "##F05C22";
    endRaceTwo();
  }
};

// Event listener for keypresses
document.addEventListener('keydown', (e) => {
  if (raceOngoing) {
    const keyPressed = e.key.toLowerCase();
    toggleActiveClass(keyPressed);
    racerAdvance(keyPressed);
    toggleActiveClass(keyPressed);
    console.log(playerPosition1)
  }
});

document.addEventListener('keyup', (e) => {
  endRaceOne();
});

resetBtn.addEventListener('click', (e) => {
  window.location.reload();
});
