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
