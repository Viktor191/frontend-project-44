import { getRandomInt, getGameLaunchTemplate, getRandomIntSign } from '../index.js';

const getOneRoundPlay = () => {
  const GAME_INFO = {};
  let randomNam1;
  let randomNam2;
  let result;
  let operationSign;

  for (let i = 0; i < 3; i += 1) {
    randomNam1 = getRandomInt();
    randomNam2 = getRandomInt();
    operationSign = getRandomIntSign();

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
  }
  return GAME_INFO;
};

const brainCalc = () => {
  const gameDescription = 'What is the result of the expression?';

  getGameLaunchTemplate(getOneRoundPlay, gameDescription);
};
export default brainCalc;
