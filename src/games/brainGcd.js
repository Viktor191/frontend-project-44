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
  const randomNam1 = getRandomInt();
  const randomNam2 = getRandomInt();

  const correctAnswer = getGreatestCommonDivisor(randomNam1, randomNam2).toString();
  const roundQuestion = `${randomNam1} ${randomNam2}`;

  return {
    correctAnswer,
    roundQuestion,
  };
};

const brainGcd = () => {
  runGame(getOneRoundInfo, GAME_DESCRIPTION);
};

export default brainGcd;
