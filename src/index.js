import readlineSync from 'readline-sync';

const ROUNDS_COUNT = 3;

const runGame = (getOneRoundInfo, gameDescription) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?');
  console.log(`Hello, ${name}!`);

  console.log(gameDescription);

  for (let i = 0; i < ROUNDS_COUNT; i += 1) {
    const { roundQuestion, correctAnswer } = getOneRoundInfo();

    console.log(`Question: ${roundQuestion}`);

    const userAnswer = readlineSync.question('Your answer: ');
    userAnswer === correctAnswer ? console.log('Correct!') : console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".
      Let's try again, ${name}!`);// снова ошибка линтера, userAnswer
    /*
    if (userAnswer !== correctAnswer) {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".
      Let's try again, ${name}!`);

      return;
    }
    console.log('Correct!');*/
  }

  console.log(`Congratulations, ${name}!`);
};

export default runGame;
