import runGame from '../index.js';
import getRandomInt from '../util.js';

const GAME_DESCRIPTION = 'What number is missing in the progression?';

const generateNumbersArray = () => {
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
  const numbers = generateNumbersArray();
  const indexToHide = getRandomInt(0, numbers.length - 1);
  const result = numbers[indexToHide];

  const correctAnswer = result.toString();
  const roundQuestion = hideArrElement(numbers, indexToHide);

  return {
    correctAnswer,
    roundQuestion,
  };
};

const brainProgression = () => {
  runGame(getOneRoundInfo, GAME_DESCRIPTION);
};

export default brainProgression;
