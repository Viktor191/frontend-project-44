import readlineSync from 'readline-sync'
import { askNameGreeting } from '../index.js'
import { getRandomArr } from '../index.js'

let result2
const hideElement = () => {
  let randomArr = getRandomArr()
  let min = 0
  let max = randomArr.length
  let randomArrhideEl = []

  let elementIndex = Math.floor(Math.random() * (max - min)) + min
  let result = randomArr[elementIndex]
  console.log(result + ' result')
  randomArrhideEl = randomArr.splice(elementIndex, 1, '*')
  result2 = result
  return randomArr
}

let localUserName = askNameGreeting()
let randomNam1
export const brainProgression = () => {
  for (let i = 0; i < 3; i++) {
    randomNam1 = hideElement()
    console.log('What number is missing in the progression?')

    console.log(`Question: ${randomNam1}`)

    var userAnswer = readlineSync.question('Your answer: ')

    if (userAnswer == result2) {
      console.log('Correct!')
    } else {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${result2}.
        Let's try again, ${localUserName}!`)
      return
    }
  }
  console.log(`Congratulations, ${localUserName}!`)
  return
}



