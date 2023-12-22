import runGame from '../index.js';
import getRandomInt from '../util.js';

const getRandomArr = () => {
  const arr = [];
  let result = getRandomInt();
  const progressionStep = getRandomInt();

  const maxLengthArr = getRandomInt(5, 11);
  arr.push(result);

  for (let i = 0; i < maxLengthArr - 1; i += 1) {
    result += progressionStep;
    arr.push(result);
  }

  return arr;
};

const hideArrElement = (arr, elementIndex) => {
  arr.splice(elementIndex, 1, '..');

  return arr.join(' ');
};

const getOneRoundInfo = () => {
  const roundInfo = {};
  const randomArr = getRandomArr();
  const elementIndex = getRandomInt(0, randomArr.length - 1);
  const result = randomArr[elementIndex];

  roundInfo.correctAnswer = result.toString();
  roundInfo.roundQuestion = hideArrElement(randomArr, elementIndex);

  console.log(`Подсказка для тестов ${roundInfo.correctAnswer}`);

  return roundInfo;
};

const brainProgression = () => {
  const gameDescription = 'What number is missing in the progression?';

  runGame(getOneRoundInfo, gameDescription);
};

export default brainProgression;
