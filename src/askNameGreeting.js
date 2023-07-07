import readlineSync from 'readline-sync';
export const askNameGreeting = () => {
    console.log('Welcome to the Brain Games!')
    var userName = readlineSync.question('May I have your name? ');
    console.log('Hi, ' + userName + '!');
    return userName
}