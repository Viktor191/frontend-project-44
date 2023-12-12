import { getRandomInt, getGameLaunchTemplate } from '../index.js';

const isEven = (x) => {
  if (Number.isInteger(x) === true) { return x % 2 === 0; } return undefined;
};

let QUESTION_OF_ROUND;

const getOneRoundPlay = () => {
  const GAME_INFO = {};

  QUESTION_OF_ROUND = getRandomInt();
  GAME_INFO.questionOfRound = QUESTION_OF_ROUND;

  if (isEven(QUESTION_OF_ROUND) === true) {
    GAME_INFO.correctAnswer = 'yes';
  } else { GAME_INFO.correctAnswer = 'no';}
  return GAME_INFO;
};

const brainEven = () => {
  const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

  getGameLaunchTemplate(getOneRoundPlay, gameDescription);
};
export default brainEven;
