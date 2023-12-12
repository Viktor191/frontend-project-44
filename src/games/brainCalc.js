import { getRandomInt, getGameLaunchTemplate, getRandomIntSign } from '../index.js';

const getOneRoundPlay = () => {
  const GAME_INFO = {};
  const randomNam1 = getRandomInt();
  const randomNam2 = getRandomInt();
  let result;
  const operationSign = getRandomIntSign();

  GAME_INFO.questionOfRound = `${randomNam1} ${operationSign} ${randomNam2}`;

  if (operationSign === '+') {
    result = randomNam1 + randomNam2;
  }
  if (operationSign === '-') {
    result = randomNam1 - randomNam2;
  }
  if (operationSign === '*') {
    result = randomNam1 * randomNam2;
  }
  GAME_INFO.correctAnswer = result;

  return GAME_INFO;
};

const brainCalc = () => {
  const gameDescription = 'What is the result of the expression?';

  getGameLaunchTemplate(getOneRoundPlay, gameDescription);
};
export default brainCalc;
