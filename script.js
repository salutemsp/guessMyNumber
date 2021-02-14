'use strict';
const message = document.querySelector('.message');
const check = document.querySelector('.check');
let score = 20;
let hs = 0;
let secretNumber = Math.trunc(
  Math.random(document.querySelector('.number').value) * 20 + 1
);

const setMessage = text => {
  {
    return (message.textContent = text);
  }
};

const setScore = function (score) {
  return (document.querySelector('.score').textContent = score);
};

//set the highscore
const highScore = function () {
  if (score > hs) {
    hs = score;
    document.querySelector('.highscore').textContent = hs;
  }
};

const setBGcolor = color =>
  (document.querySelector('body').style.backgroundColor = color);

const Game = function () {
  const guess = Number(document.querySelector('.guess').value);

  // if there is no input
  if (!guess) {
    message.textContent = 'Guess a Number ';

    // if you win
  } else if (guess === secretNumber) {
    setBGcolor('#60b347');
    document.querySelector('.number').textContent = secretNumber;
    highScore();
    setMessage('🎉 You Win');
    check.disabled = true;

    //if guess is different
  } else if (guess !== secretNumber) {
    if (score > 1) {
      score--;
      setScore(score);
      guess > secretNumber ? setMessage('Too high') : setMessage('Too Low');
    } else {
      setScore(0);
      setMessage('Game over');
    }
  }
};

check.addEventListener('click', function () {
  Game();
});

document.querySelector('.again').addEventListener('click', function () {
  setBGcolor('#222');
  score = 20;
  setScore(score);
  const guess = document.querySelector('.guess');
  guess.value = '';
  setMessage('Start Guessing ...');
  document.querySelector('.number').textContent = '?';
  check.disabled = false;
  secretNumber = Math.trunc(
    Math.random(document.querySelector('.number').value) * 20
  );
});

document.addEventListener('keydown', function (e) {
  if (e.key === 'Enter' && !check.disabled === true) {
    Game();
  }
});
