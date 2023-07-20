import readlineSync from 'readline-sync'
import { getRandomInt } from '../index.js'
import { askNameGreeting } from '../index.js'

let localUserName = askNameGreeting()
const even = (x) => {
  if (Number.isInteger(x) == true) {return x % 2 == 0} else {return undefined}
}
export const brainEven = () => {
  let randomNam

  console.log('Answer "yes" if the number is even, otherwise answer "no".')
  for (let i = 0; i < 3; i++) {
    randomNam = getRandomInt()
    console.log(`Question: ${randomNam}`)
    var userAnswer = readlineSync.question('Your answer: ')
    let correctAnswer
    if (even(randomNam) === true) {
      correctAnswer = 'yes'
    } else { correctAnswer = 'no' }
    if (userAnswer !== 'yes' && userAnswer !== 'no') {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.
        Let's try again, ${localUserName}!`)
      return
    }
    if (userAnswer === 'yes' && even(randomNam) === true) {
      console.log('Correct!')
    }
    if (userAnswer === 'no' && even(randomNam) === false) {
      console.log('Correct!')
    }
    if (userAnswer === 'yes' && even(randomNam) === false) {
      console.log(`'yes' is wrong answer ;(. Correct answer was 'no'.
        Let's try again, ${localUserName}!`)
      return
    }
    if (userAnswer === 'no' && even(randomNam) === true) {
      console.log(`'no' is wrong answer ;(. Correct answer was 'yes'.
        Let's try again, ${localUserName}`)
      return
    }
  }
  console.log(`Congratulations, ${localUserName}!`)
}

