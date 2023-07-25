import readlineSync from 'readline-sync';
import { askNameGreeting, getRandomArr } from '../index.js';

let result2;
const localUserName = askNameGreeting();
let randomNam1;
const hideElement = () => {
  const randomArr = getRandomArr();
  const min = 0;
  const max = randomArr.length;
  const elementIndex = Math.floor(Math.random() * (max - min)) + min;
  const result = randomArr[elementIndex];
  console.log(`${result} result`);
  randomArr.splice(elementIndex, 1, '..');
  result2 = result;
  return randomArr.join(' ');
};

const brainProgression = () => {
  for (let i = 0; i < 3; i += 1) {
    randomNam1 = hideElement();
    console.log('What number is missing in the progression?');

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
export default brainProgression;
