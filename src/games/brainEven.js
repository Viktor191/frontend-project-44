import runGame from '../index.js';
import getRandomInt from '../util.js';

const isEven = (x) => x % 2 === 0;

const getOneRoundInfo = () => {
  const roundInfo = {};

  roundInfo.roundQuestion = getRandomInt();

  if (isEven(roundInfo.roundQuestion)) {
    roundInfo.correctAnswer = 'yes';
  } else { roundInfo.correctAnswer = 'no'; }
  console.log(roundInfo.correctAnswer);

  return roundInfo;
};

const brainEven = () => {
  const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

  runGame(getOneRoundInfo, gameDescription);
};

export default brainEven;
