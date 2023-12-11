import readlineSync from 'readline-sync';
import { getRandomInt, askNameGreeting } from '../index.js';
import { gameLaunchTemplate } from '../indexTest.js'

const even = (x) => {
  if (Number.isInteger(x) === true) { return x % 2 === 0; } return undefined;
};

let randomNam;
const oneRoundPlay = () => {
  let gameInfo = {};
  let correctAnswer;
  randomNam = getRandomInt();
  gameInfo.randomNam = randomNam;

  if (even(randomNam) === true) {
    correctAnswer = 'yes';
    gameInfo.correctAnswer = correctAnswer;
  } else { correctAnswer = 'no'; gameInfo.correctAnswer = correctAnswer;}

  return gameInfo;
};

const brainEven = () => {
  const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';
  
  gameLaunchTemplate(oneRoundPlay, gameDescription);
};
export default brainEven;