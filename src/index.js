import readlineSync from 'readline-sync';
export const askNameGreeting = () => {
    let name;
    console.log('Welcome to the Brain Games!')
    var userName = readlineSync.question('May I have your name? ');
    console.log('Hi, ' + userName + '!');
    name = userName
    return name
}
export const getRandomInt = () => {
    let min = 1;
    let max = 101;
    return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
}
export const getRandomIntSign = () => {
    let min = 0;
    let max = 3;
    let arrSign = ['+', '*', '-'];
    let namberSign = Math.floor(Math.random() * (max - min)) + min;
    return arrSign[namberSign];
    //Максимум не включается, минимум включается
}
export function NOD () {
    for (var x = arguments[0], i = 1; i < arguments.length; i++) {
        var y = arguments[i];
        while (x && y) {
            x > y ? x %= y : y %= x;
        }
        x += y;
    }
    return x;
}