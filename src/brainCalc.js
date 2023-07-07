import readlineSync from 'readline-sync';
import {getRandomInt} from "./getRandom.js";
import {getRandomIntSign} from "./getRandom.js";
const askNameGreeting = () => {
    var userName = readlineSync.question('May I have your name? ');

    return ('Hi, ' + userName + '!');
}
/*
const getRandomInt = () => {
    let min = 1;
    let max = 101;
    return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
}
const getRandomIntSign = () => {
    let min = 0;
    let max = 3;
    let arrSign = ['+', '*', '-'];
    let namberSign = Math.floor(Math.random() * (max - min)) + min;
    return arrSign[namberSign];
    //Максимум не включается, минимум включается
}
*/

export const brainCalc = () => {
    let randomNam1;
    let randomNam2;
    let result;
    let operationSign;
    console.log('Welcome to the Brain Games!')
    var userName = readlineSync.question('May I have your name? ');
    console.log('Hi, ' + userName + '!');
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
        Let's try again, ${userName}!`)
            return
        }
    }
    console.log(`Congratulations, ${userName}!`);
}