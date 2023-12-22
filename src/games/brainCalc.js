import runGame from '../index.js';
import getRandomInt from '../util.js';

export const getRandomSign = () => {
  const min = 0;
  const max = 3;
  const arrSign = ['+', '*', '-'];
  const numberSign = Math.floor(Math.random() * (max - min)) + min;

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
  const gameDescription = 'What is the result of the expression?';

  runGame(getOneRoundInfo, gameDescription);
};

export default brainCalc;
