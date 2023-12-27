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
  const roundInfo = {};
  const randomNam = getRandomInt();
  const isPrimeNumber = isPrime(randomNam);

  roundInfo.correctAnswer = isPrimeNumber ? 'yes' : 'no';
  roundInfo.roundQuestion = `${randomNam}`;

  console.log(`Подсказка для тестов ${roundInfo.correctAnswer}`);

  return roundInfo;
};

const brainGcd = () => {
  runGame(getOneRoundInfo, GAME_DESCRIPTION);
};

export default brainGcd;
