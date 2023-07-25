import readlineSync from 'readline-sync';

export const askNameGreeting = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};
export const getRandomInt = () => {
  const min = 1;
  const max = 101;
  return Math.floor(Math.random() * (max - min)) + min;
  // Максимум не включается, минимум включается
};
export const getRandomIntSign = () => {
  const min = 0;
  const max = 3;
  const arrSign = ['+', '*', '-'];
  const namberSign = Math.floor(Math.random() * (max - min)) + min;
  return arrSign[namberSign];
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
  const min = 5;
  const max = 11;
  const arr = [];
  let result = getRandomInt();
  const progressionStep = getRandomInt();

  const maxLengthArr = Math.floor(Math.random() * (max - min)) + min;
  arr.push(result);

  for (let i = 0; i < maxLengthArr - 1; i += 1) {
    result += progressionStep;
    arr.push(result);
  }
  return arr;
  // Максимум не включается, минимум включается
};

export function isPrime(num) {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) return false;
  }
  return num !== 1;
}
