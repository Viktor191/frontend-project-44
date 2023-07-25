import readlineSync from 'readline-sync';
import { isPrime, getRandomInt, askNameGreeting } from '../index.js';

const localUserName = askNameGreeting();
let result;
let randomNam1;
const brainPrime = () => {
  let result2;
  for (let i = 0; i < 3; i += 1) {
    randomNam1 = getRandomInt();
    result = isPrime(randomNam1);
    if (result === true) {
      result2 = 'yes';
    } else { result2 = 'no'; }

    console.log(result2); // удобно включить для проверки

    console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

    console.log(`Question: ${randomNam1}`);

    const userAnswer = readlineSync.question('Your answer: ');

    if (Number(userAnswer) === result2) {
      console.log('Correct!');
    } else {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${result2}".
        Let's try again, ${localUserName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${localUserName}!`);
};
export default brainPrime;
