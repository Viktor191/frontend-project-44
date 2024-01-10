import runGame from '../index.js';
import getRandomInt from '../util.js';

const GAME_DESCRIPTION = 'Find the greatest common divisor of given numbers.';

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

  return roundInfo;
};

const brainGcd = () => {
  runGame(getOneRoundInfo, GAME_DESCRIPTION);
};

export default brainGcd;
