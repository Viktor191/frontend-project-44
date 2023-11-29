import readlineSync from 'readline-sync';
import { getRandomInt, getRandomIntSign, askNameGreeting } from '../index.js';

const localUserName = askNameGreeting();
const brainCalc = () => {
  let randomNam1;
  let randomNam2;
  let result;
  let operationSign;

  console.log('What is the result of the expression?');
  for (let i = 0; i < 3; i += 1) {
    randomNam1 = getRandomInt();
    randomNam2 = getRandomInt();
    operationSign = getRandomIntSign();
    console.log(`Question: ${randomNam1} ${operationSign} ${randomNam2}`);
    if (operationSign === '+') {
      result = randomNam1 + randomNam2;
    }
    if (operationSign === '-') {
      result = randomNam1 - randomNam2;
    }
    if (operationSign === '*') {
      result = randomNam1 * randomNam2;
    }
    console.log('Подсказка для тестов ' + result); // удобно включить для проверки
    const userAnswer = readlineSync.question('Your answer: ');
    if (Number(userAnswer) === result) {
      console.log('Correct!');
    } else {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${result}.
        Let's try again, ${localUserName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${localUserName}!`);
};
export default brainCalc;
