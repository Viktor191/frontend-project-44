import readlineSync from 'readline-sync';
import { getRandomInt, askNameGreeting } from '../index.js';
import { gameLaunchTemplate } from '../indexTest.js'

const localUserName = askNameGreeting();
const even = (x) => {
  if (Number.isInteger(x) === true) { return x % 2 === 0; } return undefined;
};
const brainEven = () => {
  let randomNam;
  let gameInfo = {};
  let objName = {}
  objName.localUserName = localUserName;

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  const oneRoundPlay = () => {
    gameInfo = {};
    let correctAnswer;
    randomNam = getRandomInt();
    console.log(`Question: ${randomNam}`);
    const userAnswer = readlineSync.question('Your answer: ');
    gameInfo.userAnswer = userAnswer;
    gameInfo.localUserName = objName.localUserName;

    if (even(randomNam) === true) {
      correctAnswer = 'yes';
      gameInfo.correctAnswer = correctAnswer;
    } else { correctAnswer = 'no'; gameInfo.correctAnswer = correctAnswer;}

    return gameInfo;
  };
  gameLaunchTemplate(oneRoundPlay);

};
export default brainEven;
