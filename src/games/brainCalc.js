import runGame from '../index.js';
import getRandomInt from '../util.js';

const GAME_DESCRIPTION = 'What is the result of the expression?';

export const getRandomSign = () => {
  const min = 0;
  const max = 3;
  const arrSign = ['+', '*', '-'];
  const numberSign = getRandomInt(min, max);

  return arrSign[numberSign];
};

const getOneRoundInfo = () => {
  const randomNam1 = getRandomInt();
  const randomNam2 = getRandomInt();
  let result;
  const operationSign = getRandomSign();

  const roundQuestion = `${randomNam1} ${operationSign} ${randomNam2}`;

  switch (operationSign) {
    case '+':
      result = randomNam1 + randomNam2;
      break;
    case '-':
      result = randomNam1 - randomNam2;
      break;
    case '*':
      result = randomNam1 * randomNam2;
      break;
    default:
      console.log('error');
  }
  const correctAnswer = result.toString();

  return {
    correctAnswer,
    roundQuestion,
  };
};

const brainCalc = () => {
  runGame(getOneRoundInfo, GAME_DESCRIPTION);
};

export default brainCalc;
