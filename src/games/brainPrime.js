import { isPrime } from '../index.js'
import { getRandomInt } from '../index.js'
import readlineSync from 'readline-sync'
import { askNameGreeting } from '../index.js'

let localUserName = askNameGreeting()
let result
let randomNam1
export const brainPrime = () => {
  let result2
  for (let i = 0; i < 3; i++) {

    randomNam1 = getRandomInt()

    result = isPrime(randomNam1)
    if (result === true) {
      result2 = 'yes'
    } else { result2 = 'no'}

    //console.log(result2)

    console.log('Answer "yes" if given number is prime. Otherwise answer "no".')

    console.log(`Question: ${randomNam1}`)

    var userAnswer = readlineSync.question('Your answer: ')

    if (userAnswer == result2) {
      console.log('Correct!')
    } else {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${result2}".
        Let's try again, ${localUserName}!`)
      return
    }
  }
  console.log(`Congratulations, ${localUserName}!`)
}

