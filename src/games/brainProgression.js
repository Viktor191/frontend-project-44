import { getGameLaunchTemplate, getRandomArr } from '../index.js';

let correctAnswer;
const hideElement = () => {
  const randomArr = getRandomArr();
  const min = 0;
  const max = randomArr.length;
  const elementIndex = Math.floor(Math.random() * (max - min)) + min;
  const result = randomArr[elementIndex];
  // console.log(`${result} result`);
  randomArr.splice(elementIndex, 1, '..');
  correctAnswer = result;
  return randomArr.join(' ');
};

const getOneRoundPlay = () => {
  const GAME_INFO = {};
  const randomNam1 = hideElement();

  GAME_INFO.correctAnswer = correctAnswer;
  GAME_INFO.questionOfRound = `${randomNam1}`;

  console.log(`Подсказка для тестов ${GAME_INFO.correctAnswer}`);

  return GAME_INFO;
};
const brainProgression = () => {
  const gameDescription = 'What number is missing in the progression?';

  getGameLaunchTemplate(getOneRoundPlay, gameDescription);
};
export default brainProgression;
