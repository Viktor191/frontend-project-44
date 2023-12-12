import readlineSync from 'readline-sync';
import brainEven2 from './games/brainEven2.js';

export const askNameGreeting = () => {
  console.log('Welcome to the Brain Games!');
  const USER_NAME = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${USER_NAME}!`);
  return USER_NAME;
};
export const getRandomInt = () => {
  const MIN = 1;
  const MAX = 101;
  return Math.floor(Math.random() * (MAX - MIN)) + MIN;
  // Максимум не включается, минимум включается
};
export const getRandomIntSign = () => {
  const MIN = 0;
  const MAX = 3;
  const ARR_SIGN = ['+', '*', '-'];
  const NUMBER_SIGN = Math.floor(Math.random() * (MAX - MIN)) + MIN;
  return ARR_SIGN[NUMBER_SIGN];
  // Максимум не включается, минимум включается
};

export const NOD = (a, b) => { // если не будет проходить проверку изменить тут как было!!!
  while (a !== 0 && b !== 0) {
    if (a > b) { // если а больше б, то а присваиваем а/б
      // eslint-disable-next-line no-param-reassign
      a %= b;
    } else {
      // eslint-disable-next-line no-param-reassign
      b %= a; // наоборот
    }
  }
  return (a + b);
};

export const getRandomArr = () => {
  const MIN = 5;
  const MAX = 11;
  const ARR = [];
  let result = getRandomInt();
  const PROGRESSION_STEP = getRandomInt();

  const MAX_LENGTH_ARR = Math.floor(Math.random() * (MAX - MIN)) + MIN;
  ARR.push(result);

  for (let i = 0; i < MAX_LENGTH_ARR - 1; i += 1) {
    result += PROGRESSION_STEP;
    ARR.push(result);
  }
  return ARR;
  // Максимум не включается, минимум включается
};

export function isPrime(num) {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) return false;
  }
  return num !== 1;
}

const NUMBER_OF_ROUNDS = 3;

export const getGameLaunchTemplate = (oneRoundPlay, gameDescription) => {

  let name = askNameGreeting();
  console.log(gameDescription);

  for (let i = 0; i < NUMBER_OF_ROUNDS; i += 1) {
    let gameInfo = oneRoundPlay();

    console.log(`Question: ${gameInfo.randomNum}`);

    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === gameInfo.correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${gameInfo.correctAnswer}".
        Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};