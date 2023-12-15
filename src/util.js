const getRandomInt = () => {
  const MIN = 1;
  const MAX = 101;

  return Math.floor(Math.random() * (MAX - MIN)) + MIN;
};
export default getRandomInt();
