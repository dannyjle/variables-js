function main() {
  let numberOfCupsOfCoffee = 1
  let fullName = 'Danny Le'
  console.log(
    `My name is ${fullName} and I only drink ${numberOfCupsOfCoffee} cup of coffee a day!`
  )

  const aboutMe = {
    fullName: 'Danny Le',
    luckyNumber: 7,
    favoriteMovies: 'Howl`s Moving Castle, Shutter Island, and Evil Dead',
  }
  console.log(aboutMe)

  let userName = window.prompt('What is your name?')
  console.log(userName)

  let firstOperand = parseFloat(window.prompt('Pick a number!'))
  console.log(firstOperand)
  let secondOperand = parseFloat(window.prompt('Pick another number!'))
  console.log(secondOperand)

  let sum = firstOperand + secondOperand
  let difference = secondOperand - firstOperand
  let product = firstOperand * secondOperand
  let quotient = firstOperand / secondOperand
  let remainder = firstOperand % secondOperand

  console.log(
    `With your inputted numbers of ${firstOperand} and ${secondOperand}, we can add them to get a value of ${sum} and subtract them to get the difference of ${difference}. We can also show the product of ${product}, with the differencing being ${difference}, and the display the remainder of ${remainder}!`
  )

  let numbers = [
    49497, 32735, 40602, 44051, 14943, 15533, 30465, 46229, 28021, 12914, 30450,
    28359, 25249, 15359, 10538, 34439, 21662, 40502, 38555, 22440, 23933, 35522,
    33617, 10059, 22625, 29962, 49517, 12348, 48986, 30572, 46720, 13275, 30678,
    11659, 40455, 26756, 26892, 38741, 32924, 26896, 24904, 27743, 45810, 16370,
    40057, 17079, 47045, 46745, 20343, 21851, 39033, 20086, 19450, 24616, 24639,
    22368, 27844, 23546, 21090, 37987, 42983, 44664, 15440, 24789, 28938, 38995,
    37001, 32169, 31977, 45588, 39910, 21960, 29834, 27442, 45482, 46923, 22310,
    23939, 34644, 29966, 48050, 19968, 45518, 33523, 22561, 37279, 44832, 33345,
    28297, 15277, 18327, 43383, 37782, 17275, 21283, 25453, 10464, 43087, 24830,
    17639,
  ]

  let smallest = numbers[0]
  let largest = numbers[0]
  for (let i = 0; i < numbers.length; i++) {
    if (smallest >= numbers[i]) smallest = numbers[i]
    if (largest <= numbers[i]) largest = numbers[i]
  }
  console.log(smallest)
  console.log(largest)

  // Using Math.min and Math.max method to find min and max number
  // console.log(Math.min(...numbers))
  // console.log(Math.max(...numbers))

  // Using .reduce to find the sum
  //   let arraySum = numbers.reduce(function (a, b) {
  //     return a + b
  //   }, 0)
  //   console.log(arraySum)

  let arraySum = 0
  for (let i = 0; i < numbers.length; i++) {
    arraySum = arraySum + numbers[i]
  }
  console.log(arraySum)

  let average = arraySum / numbers.length
  console.log(average)

  const stats = {
    smallest: smallest,
    largest: largest,
    sum: arraySum,
    average: average,
  }
  console.log(stats)
}

document.addEventListener('DOMContentLoaded', main)
