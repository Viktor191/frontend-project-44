import readlineSync from 'readline-sync';
import {getRandomInt} from "./getRandom.js";
import {getRandomIntSign} from "./getRandom.js";
import {askNameGreeting} from "./askNameGreeting.js";


let localUserName = askNameGreeting ()
export const brainCalc = () => {
    let randomNam1;
    let randomNam2;
    let result;
    let operationSign;

    console.log('What is the result of the expression?')
    for(let i = 0; i < 3; i++) {
        randomNam1 = getRandomInt();
        randomNam2 = getRandomInt();
        operationSign = getRandomIntSign()
        console.log(`Question: ${randomNam1} ${operationSign} ${randomNam2}`);
        if(operationSign === '+') {
            result = randomNam1 + randomNam2
        }
        if(operationSign === '-') {
            result = randomNam1 - randomNam2
        }
        if(operationSign === '*') {
            result = randomNam1 * randomNam2
        }
        var userAnswer = readlineSync.question('Your answer: ');
        if(userAnswer == result) {
            console.log('Correct!')
        } else {
            console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${result}.
        Let's try again, ${localUserName}!`)
            return
        }
    }
    console.log(`Congratulations, ${localUserName}!`);
}