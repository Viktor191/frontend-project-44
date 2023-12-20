import readlineSync from 'readline-sync';
/*
const getRandomInt = () => {
  const min = 1;
  const max = 101;

  return Math.floor(Math.random() * (max - min)) + min;
};
*/

const getRandomInt = () => {
  console.log('Set the border settings for random number generation.');

  const min = readlineSync.question('Enter the lower limit of the range:');
  const max = readlineSync.question('Enter the upper limit of the range:');

  console.log(`Specified range from ${min} to ${max}`);

  return Math.floor(Math.random() * (max - min)) + min;
};

export default getRandomInt;
