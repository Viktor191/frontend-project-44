import readlineSync from 'readline-sync';
export const askNameGreeting = () => {

    // Wait for user's response.
    let userName = readlineSync.question('May I have your name? ');
    console.log('Hello, ' + userName + '!');
}
