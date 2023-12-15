const getRandomInt = () => {
  const min = 1;
  const max = 101;

  return Math.floor(Math.random() * (max - min)) + min;
};
export default getRandomInt();
