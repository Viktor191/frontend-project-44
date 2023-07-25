import readlineSync from 'readline-sync';
import { getRandomInt, askNameGreeting } from '../index.js';

const localUserName = askNameGreeting();
const even = (x) => {
  if (Number.isInteger(x) === true) { return x % 2 === 0; } return undefined;
};
const brainEven = () => {
  let randomNam;

  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    randomNam = getRandomInt();
    console.log(`Question: ${randomNam}`);
    const userAnswer = readlineSync.question('Your answer: ');
    let correctAnswer;
    //
    if (even(randomNam) === true) {
      correctAnswer = 'yes';
    } else { correctAnswer = 'no'; }
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".
        Let's try again, ${localUserName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${localUserName}!`);
};
export default brainEven;
