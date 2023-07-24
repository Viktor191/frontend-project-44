import readlineSync from 'readline-sync'
import { getRandomInt, getRandomIntSign } from '../index.js'
import { askNameGreeting } from '../index.js'
import { NOD } from '../index.js'

let localUserName = askNameGreeting()
export const brainGcd = () => {
  let randomNam1
  let randomNam2
  let result
  let operationSign

  console.log('Find the greatest common divisor of given numbers.')
  for (let i = 0; i < 3; i++) {
    randomNam1 = getRandomInt()
    randomNam2 = getRandomInt()
    console.log(`Question: ${randomNam1} ${randomNam2}`)
    result = NOD(randomNam1, randomNam2)
    var userAnswer = readlineSync.question('Your answer: ')
    if (userAnswer == result) {
      console.log('Correct!')
    } else {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${result}".
        Let's try again, ${localUserName}!`)
      return
    }
  }
  console.log(`Congratulations, ${localUserName}!`)
}