const settingsForm = document.getElementById('settings-form');
const word = document.getElementById('word');
const text = document.getElementById('text');
const scoreEl = document.getElementById('score');
const timeEl = document.getElementById('time');
const endgameEl = document.getElementById('end-game-container');
const finalScore = document.getElementById('finalscore');


// Create a variable with an array of words for the game
let words = ["ant", "blamed", "clown", "deliquescent", "event", "fairy","loquacious", "man", "nymph", "perfume", "runway","spark","world"]

// Initialize a score and time variable
let count = 0;
let secs = 10;


// *************** GIVEN CODE: NO NEED TO CHANGE ***************
// Initialized randomWord variable
let randomWord;

// Focuses on the input box
text.focus();

// getRandomWord() Function: returns random word from array when called
function getRandomWord() {
  return words[Math.floor(Math.random() * words.length)];
}

// Settings select
let difficulty = "easy";

settingsForm.addEventListener('change', e => {
  difficulty = e.target.value;
});

// *********************************************************


// FUNCTIONS

// Create a function that displays a random word to the webpage. Use the 'randomWord' variable to store to word.
function addWordToDOM() {
  randomWord = getRandomWord();
  word.innerHTML = randomWord;
}

// Create a function that increments the score and displays it to the webpage.
function updateScore() {
  count++;
  scoreEl.innerHTML = count;
}

// Create a function to display the score and game over screen.
function gameOver() {
  endgameEl.style.display = "flex";
  finalScore.innerHTML = "Your final score is "+ count;
  scoreEl.style.display = "none";
  timeEl.style.display = "none";
}

// Create a function that decrements the time and displays it to the webpage.
function updateTime() {
  timeEl.innerHTML = secs+"s";
  secs--;
  if (secs === -1){
    clearInterval(timeInterval);
    gameOver();
  }
}


// Create a 'timeInterval' variable that updates the time every 1 second.
const timeInterval = setInterval(updateTime, 1000);

// Call a function to display the first word to the webpage.
addWordToDOM();


// EVENT LISTENERS

// This event listener listens for an input in the text box and when triggered, passes in the event as a variable 'e' and stores the user's inputed text in a variable 'insertedText'.
text.addEventListener("input", (e) => {
  const insertedText = e.target.value;
  if (insertedText === randomWord){
    updateScore();
    addWordToDOM();
    e.target.value="";
    if (difficulty === "hard"){
      secs = secs+2;
    }
    if (difficulty === "medium"){
      secs = secs+3;
    }
    if (difficulty === "easy"){
      secs = secs+5;
    }
  updateTime();
  }

  // Check if the user's input matches the word displayed on the webpage, then:
  // 1. display a new word
  // 2. update the score
  // 3. clear the input box by setting e.target.value = ""
  // 4. if the difficulty is hard, add 2 more seconds to the time, if the difficulty is medium, add 3 more seconds, else add 5 more seconds
  // 5. lastly, update the time

  // add code here...

});
