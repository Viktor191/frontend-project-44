import readlineSync from 'readline-sync';
import { getRandomInt, askNameGreeting } from '../index.js';

// const localUserName = askNameGreeting();
const even = (x) => {
  if (Number.isInteger(x) === true) { return x % 2 === 0; } return undefined;
};
const brainEven2 = () => {
  let randomNam;
  let gameInfo = {};
  gameInfo.question = 'Answer "yes" if the number is even, otherwise answer "no". TEST Even2';
  //console.log('Answer "yes" if the number is even, otherwise answer "no". TEST Even2');
    randomNam = getRandomInt();
    console.log(`Question: ${randomNam}`);
    const userAnswer = readlineSync.question('Your answer: ');
    let correctAnswer;
    gameInfo.userAnswer = userAnswer;

    if (even(randomNam) === true) {
      correctAnswer = 'yes';
    } else { correctAnswer = 'no'; }
    gameInfo.correctAnswer = correctAnswer;

    console.log(gameInfo);
    return gameInfo;
};
export default brainEven2;
