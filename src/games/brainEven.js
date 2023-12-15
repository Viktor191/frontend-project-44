import runGameTemplate from '../index.js';
import getRandomInt from '../util.js';

const isEven = (x) => {
  if (Number(x) === true) { return x % 2 === 0; } return undefined;
};

const getOneRoundPlay = () => {
  const roundInfo = {};

  const questionOfRound = getRandomInt();
  roundInfo.roundQuestion = questionOfRound;

  if (isEven(questionOfRound)) {
    roundInfo.correctAnswer = 'yes';
  } else { roundInfo.correctAnswer = 'no'; }
  console.log(roundInfo.correctAnswer);// для тестов

  return roundInfo;
};

const brainEven = () => {
  const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

  runGameTemplate(getOneRoundPlay, gameDescription);
};
export default brainEven;
