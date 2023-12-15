import runGameTemplate from '../index.js';
import getRandomInt from '../util.js';

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
};

const hideElement = () => {
  const hideElementInfo = {};
  const randomArr = getRandomArr();
  const min = 0;
  const max = randomArr.length;
  const elementIndex = Math.floor(Math.random() * (max - min)) + min;
  const result = randomArr[elementIndex];

  randomArr.splice(elementIndex, 1, '..');

  hideElementInfo.correctAnswer = result.toString();
  hideElementInfo.randomNam = randomArr.join(' ');

  return hideElementInfo;
};

const getOneRoundPlay = () => {
  const roundInfo = {};
  const randomArrayAndCorrectAnswer = hideElement();

  roundInfo.correctAnswer = randomArrayAndCorrectAnswer.correctAnswer;
  roundInfo.roundQuestion = `${randomArrayAndCorrectAnswer.randomNam}`;

  console.log(`Подсказка для тестов ${roundInfo.correctAnswer}`);

  return roundInfo;
};

const brainProgression = () => {
  const gameDescription = 'What number is missing in the progression?';

  runGameTemplate(getOneRoundPlay, gameDescription);
};
export default brainProgression;
