import runGame from '../index.js';
import getRandomInt from '../util.js';

const GAME_DESCRIPTION = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (x) => x % 2 === 0;

const getOneRoundInfo = () => {
  const roundQuestion = getRandomInt();
  const correctAnswer = isEven(roundQuestion) ? 'yes' : 'no';

  return {
    correctAnswer,
    roundQuestion,
  };
};

const brainEven = () => {
  runGame(getOneRoundInfo, GAME_DESCRIPTION);
};

export default brainEven;
