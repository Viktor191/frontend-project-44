import { isPrime, getRandomInt, getGameLaunchTemplate } from '../index.js';

const getOneRoundPlay = () => {
  const GAME_INFO = {};
  const randomNam1 = getRandomInt();
  const isResult = isPrime(randomNam1);
  // randomNam1 = getRandomInt();

  if (isResult === true) {
    GAME_INFO.correctAnswer = 'yes';
  } else { GAME_INFO.correctAnswer = 'no'; }

  GAME_INFO.questionOfRound = `${randomNam1}`;

  console.log(`Подсказка для тестов ${GAME_INFO.correctAnswer}`);

  return GAME_INFO;
};
const brainGcd = () => {
  const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  getGameLaunchTemplate(getOneRoundPlay, gameDescription);
};
export default brainGcd;
