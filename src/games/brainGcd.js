import runGame from '../index.js';
import getRandomInt from '../util.js';

export const getGreatestCommonDivisor = (a, b) => {
  let first = a;
  let second = b;

  while (first !== 0 && second !== 0) {
    if (first > second) {
      first %= second;
    } else {
      second %= first;
    }
  }

  return first + second;
};
const getOneRoundInfo = () => {
  const roundInfo = {};
  const randomNam1 = getRandomInt();
  const randomNam2 = getRandomInt();

  roundInfo.correctAnswer = getGreatestCommonDivisor(randomNam1, randomNam2).toString();
  roundInfo.roundQuestion = `${randomNam1} ${randomNam2}`;

  console.log(`Подсказка для тестов ${roundInfo.correctAnswer}`);

  return roundInfo;
};

const brainGcd = () => {
  const gameDescription = 'Find the greatest common divisor of given numbers.';

  runGame(getOneRoundInfo, gameDescription);
};

export default brainGcd;
