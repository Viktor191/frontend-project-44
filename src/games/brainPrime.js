import runGame from '../index.js';
import getRandomInt from '../util.js';

const GAME_DESCRIPTION = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export function isPrime(num) {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) return false;
  }

  return num !== 1;
}

const getOneRoundInfo = () => {
  const randomNam = getRandomInt();
  const isPrimeNumber = isPrime(randomNam);

  const correctAnswer = isPrimeNumber ? 'yes' : 'no';
  const roundQuestion = `${randomNam}`;

  return {
    correctAnswer,
    roundQuestion,
  };
};

const brainGcd = () => {
  runGame(getOneRoundInfo, GAME_DESCRIPTION);
};

export default brainGcd;
