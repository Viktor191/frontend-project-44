import readlineSync from 'readline-sync';

const runGameTemplate = (getOneRoundPlay, gameDescription) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  const roundsСount = 3;

  console.log(gameDescription);

  for (let i = 0; i < roundsСount; i += 1) {
    const { roundQuestion, correctAnswer } = getOneRoundPlay();

    console.log(`Question: ${roundQuestion}`);

    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".
        Let's try again, ${name}!`);

      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};
export default runGameTemplate;
