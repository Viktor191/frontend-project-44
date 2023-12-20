import runGame from '../index.js';
import getRandomInt from '../util.js';

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
  console.log(arr);
  return arr;
};

const getCorrectAnswerGetRandomNumber = () => {
  const CorrectAnswerRandomNumber = {};
  const randomArr = getRandomArr();
  const min = 0;
  const max = randomArr.length;
  const elementIndex = Math.floor(Math.random() * (max - min)) + min;
  const result = randomArr[elementIndex];

  randomArr.splice(elementIndex, 1, '..');

  CorrectAnswerRandomNumber.correctAnswer = result.toString();
  CorrectAnswerRandomNumber.randomNam = randomArr.join(' ');

  return CorrectAnswerRandomNumber;
};

const getOneRoundInfo = () => {
  const roundInfo = {};
  const randomArrayAndCorrectAnswer = getCorrectAnswerGetRandomNumber();

  roundInfo.correctAnswer = randomArrayAndCorrectAnswer.correctAnswer;
  roundInfo.roundQuestion = `${randomArrayAndCorrectAnswer.randomNam}`;

  console.log(`Подсказка для тестов ${roundInfo.correctAnswer}`);

  return roundInfo;
};

const brainProgression = () => {
  const gameDescription = 'What number is missing in the progression?';

  runGame(getOneRoundInfo, gameDescription);
};

export default brainProgression;
