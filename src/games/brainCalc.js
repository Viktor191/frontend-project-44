import runGameTemplate from '../index.js';
import getRandomInt from '../util.js';

export const getRandomIntSign = () => {
  const MIN = 0;
  const MAX = 3;
  const ARR_SIGN = ['+', '*', '-'];
  const NUMBER_SIGN = Math.floor(Math.random() * (MAX - MIN)) + MIN;

  return ARR_SIGN[NUMBER_SIGN];
};

const getOneRoundPlay = () => {
  const roundInfo = {};
  const randomNam1 = getRandomInt();
  const randomNam2 = getRandomInt();
  let result;
  const operationSign = getRandomIntSign();

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

  runGameTemplate(getOneRoundPlay, gameDescription);
};
export default brainCalc;
