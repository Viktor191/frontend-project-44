import runGame from '../index.js';
import getRandomInt from '../util.js';

export function isPrime(num) {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) return false;
  }

  return num !== 1;
}

const getOneRoundInfo = () => {
  const roundInfo = {};
  const randomNam = getRandomInt();
  const result = isPrime(randomNam);

  roundInfo.correctAnswer = result ? 'yes' : 'no';
  roundInfo.roundQuestion = `${randomNam}`;

  console.log(`Подсказка для тестов ${roundInfo.correctAnswer}`);

  return roundInfo;
};

const brainGcd = () => {
  const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  runGame(getOneRoundInfo, gameDescription);
};

export default brainGcd;
