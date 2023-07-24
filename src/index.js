import readlineSync from 'readline-sync';

export const askNameGreeting = () => {
    let name;
    console.log('Welcome to the Brain Games!');
    var userName = readlineSync.question('May I have your name? ');
    console.log('Hello, ' + userName + '!');
    name = userName;
    return name;
}
export const getRandomInt = () => {
    let min = 1;
    let max = 101;
    return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
};
export const getRandomIntSign = () => {
    let min = 0;
    let max = 3;
    let arrSign = ['+', '*', '-'];
    let namberSign = Math.floor(Math.random() * (max - min)) + min;
    return arrSign[namberSign];
    //Максимум не включается, минимум включается
}

export function NOD() {
    for (var x = arguments[0], i = 1; i < arguments.length; i++) {
        var y = arguments[i];
        while (x && y) {
            x > y ? x %= y : y %= x;
        };
        x += y;
    }
    return x;
}
export const getRandomArr = () => {
    let min = 5;
    let max = 11;
    let arr = [];
    let result = getRandomInt();
    let progressionStep = getRandomInt();

    let maxLengthArr = Math.floor(Math.random() * (max - min)) + min;
    arr.push(result);

    for (let i = 0; i < maxLengthArr - 1; i++) {
        result = result + progressionStep;
        arr.push(result);
    }
    return arr;
    //Максимум не включается, минимум включается
};
export function isPrime(num) {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return num !== 1;
}