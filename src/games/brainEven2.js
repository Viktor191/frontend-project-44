import readlineSync from 'readline-sync';
import { getRandomInt, askNameGreeting } from '../index.js';
import { getGameLaunchTemplate } from '../indexTest.js'

const isEven = (x) => {
  if (Number.isInteger(x) === true) { return x % 2 === 0; } return undefined;
};

let randomNum;

const oneRoundPlay = () => {
  const GAME_INFO = {};

  randomNum = getRandomInt();
  GAME_INFO.randomNum = randomNum;

  if (isEven(randomNum) === true) {
    GAME_INFO.correctAnswer = 'yes';
  } else { GAME_INFO.correctAnswer = 'no';}
  return GAME_INFO;
};

const brainEven = () => {
  const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

  getGameLaunchTemplate(oneRoundPlay, gameDescription);
};
export default brainEven;