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
  const roundInfo = {};
  const randomNam1 = getRandomInt();
  const randomNam2 = getRandomInt();
  let result;
  const operationSign = getRandomSign();

  roundInfo.roundQuestion = `${randomNam1} ${operationSign} ${randomNam2}`;

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
  console.log(result); // для тестов
  roundInfo.correctAnswer = result.toString();

  return roundInfo;
};

const brainCalc = () => {
  runGame(getOneRoundInfo, GAME_DESCRIPTION);
};

export default brainCalc;
