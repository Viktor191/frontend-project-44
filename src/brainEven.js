import readlineSync from 'readline-sync';
const getRandomInt = () => {
    let min = 1;
    let max = 101;
    return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
}


const even = (x) => {
    if(Number.isInteger(x) == true){return x % 2 == 0}else{return undefined}
}

export const brainEven = () => {
    let randomNam

    console.log('Welcome to the Brain Games!')

    var userName = readlineSync.question('May I have your name? ');

    console.log('Hi, ' + userName + '!');

    console.log('Answer "yes" if the number is even, otherwise answer "no".')

    for(let i = 0; i < 3; i++) {
        randomNam = getRandomInt()
        console.log(`Question: ${randomNam}`)

        var userAnswer = readlineSync.question('Your answer: ');

        if(userAnswer === 'yes' && even(randomNam) === true) {
            console.log('Correct!')
        }
        if(userAnswer === 'no' && even(randomNam) === false) {
            console.log('Correct!')
        }
        if(userAnswer === 'yes' && even(randomNam) === false) {
            return `'yes' is wrong answer ;(. Correct answer was 'no'.
        Let's try again, Bill!`
        }
        if(userAnswer === 'no' && even(randomNam) === true) {
            return `'no' is wrong answer ;(. Correct answer was 'yes'.
        Let's try again, Bill!`
        }

    }

    console.log(`Congratulations, ${userName}!`);
};

