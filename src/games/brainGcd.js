import readlineSync from 'readline-sync';
import { getRandomInt, askNameGreeting, NOD } from '../index.js';

const localUserName = askNameGreeting();
const brainGcd = () => {
  let randomNam1;
  let randomNam2;
  let result;
  console.log('Find the greatest common divisor of given numbers.');
  for (let i = 0; i < 3; i += 1) {
    randomNam1 = getRandomInt();
    randomNam2 = getRandomInt();
    result = NOD(randomNam1, randomNam2);
    console.log(`Question: ${randomNam1} ${randomNam2}`);
    // console.log('Подсказка для тестов' + result);
    const userAnswer = readlineSync.question('Your answer: ');
    if (Number(userAnswer) === result) {
      console.log('Correct!');
    } else {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${result}".
        Let's try again, ${localUserName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${localUserName}!`);
};
export default brainGcd;
