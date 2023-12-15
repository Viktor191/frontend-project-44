import runGameTemplate from '../index.js';
import getRandomInt from '../util.js';

export function isPrime(num) {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) return false;
  }

  return num !== 1;
}

const getOneRoundPlay = () => {
  const roundInfo = {};
  const randomNam = getRandomInt();
  const isPrimeNumber = isPrime(randomNam);

  if (isPrimeNumber) {
    roundInfo.correctAnswer = 'yes';
  } else { roundInfo.correctAnswer = 'no'; }

  roundInfo.roundQuestion = `${randomNam}`;

  console.log(`Подсказка для тестов ${roundInfo.correctAnswer}`);

  return roundInfo;
};

const brainGcd = () => {
  const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  runGameTemplate(getOneRoundPlay, gameDescription);
};
export default brainGcd;
