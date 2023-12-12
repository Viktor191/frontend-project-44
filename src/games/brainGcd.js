import { getGameLaunchTemplate, getRandomInt, NOD } from '../index.js';

const getOneRoundPlay = () => {
  const GAME_INFO = {};
  const randomNam1 = getRandomInt();
  const randomNam2 = getRandomInt();

  GAME_INFO.correctAnswer = NOD(randomNam1, randomNam2);
  GAME_INFO.questionOfRound = `${randomNam1} ${randomNam2}`;

  console.log(`Подсказка для тестов ${GAME_INFO.correctAnswer}`);

  return GAME_INFO;
};
const brainGcd = () => {
  const gameDescription = 'Find the greatest common divisor of given numbers.';

  getGameLaunchTemplate(getOneRoundPlay, gameDescription);
};
export default brainGcd;
