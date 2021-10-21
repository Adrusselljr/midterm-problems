function isEvenlyDivisible(num1, num2) {
  if(num1 % num2 === 0) {
    return true
  }
  else {
    return false
  }
}

function halfSquare(num) {
  return (num * num) / 2
}

function isLong(str) {
  return str.length >= 15
}

function exclaim(str) {
  let count = 0
  for(let i = 0; i < str.length; i++) {
      if(str[i] === '!') {
          count++
      }
  }
  if(str[str.length - 1] !== '!') {
      return `${str}!`
  }
  if(count === 1) {
      return str
  }
  if(count > 1) {
    return str.slice(0, -count + 1)
  }
}

function countWords(str) {
  let count = 0
  for(let i = 0; i < str.length; i++) {
      if(str[i] === " ") {
          count++
      }
  }
  return count += 1
}

function containsDigit(str) {
  let count = 0
  const digits = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
  for(let i = 0; i < str.length; i++) {
    if(digits.includes(str[i]))
    count++
  }
  return count >= 1
}

function containsLowerCase(str) {
  let count = 0
  const lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v" , "w", "x", "y", "z"]
  for(let i = 0; i < str.length; i++) {
    if(lowerCase.includes(str[i]))
    count++
  }
  return count >= 1
}

function containsUpperCase(str) {
  let count = 0
  const upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V" , "W", "X", "Y", "Z"]
  for(let i = 0; i < str.length; i++) {
    if(upperCase.includes(str[i]))
    count++
  }
  return count >= 1
    return true
}

function containsNonAlphanumeric(str) {
  let count = 0
  const specialChar = ["!", "'", '"', "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "[", "]", "{", "}", "|", ";", ":", ",", "<", ".", ">", "/", "?", "`", "~", " "]
  for(let i = 0; i < str.length; i++) {
    if(specialChar.includes(str[i]))
    count++
  }
  return count >= 1
}

function containsSpace(str) {
  let count = 0
  for(let i = 0; i < str.length; i++) {
    if(str[i] === " "){
      count++
    }
  }
  return count >= 1
}

function digits(num) {
  let arr = ("" + num).split('').map(Number)
  for(let i = 0; i < arr.length; i++) {
      if(isNaN(arr[i])) {
          arr.splice(i, 1)
      }
  }
  return arr
}

function truncate(str) {
  let output = ""
  for(let i = 0; i < 8; i++) {
      output += str[i]
  }
  if(str.length < 15) {
      return str
  }
  else {
      return `${output}...`
  }
}

function isValidPassword(str) {
  let count1 = 0
  const digits = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
  let count2 = 0
  const lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v" , "w", "x", "y", "z"]
  let count3 = 0
  const upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V" , "W", "X", "Y", "Z"]
  let count4 = 0
  const specialChar = ["!", "'", '"', "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "[", "]", "{", "}", "|", ";", ":", ",", "<", ".", ">", "/", "?", "`", "~", " "]
  let count5 = 0
  for(let i = 0; i < str.length; i++) {
    if(digits.includes(str[i])) {
      count1++
    }
    if(lowerCase.includes(str[i])) {
      count2++
    }
    if(upperCase.includes(str[i])) {
      count3++
    }
    if(specialChar.includes(str[i])) {
      count4++
    }
    if(str[i] === " ") {
      count5++
    }
  }
  return count1 >= 1 && count2 >= 1 && count3 >= 1 && count4 >= 1 && count5 === 0
}

function onlyPunchy(arr) {
  let outputArr = []
  for(let i = 0; i < arr.length; i++) {
    const word = exclaim(arr[i])
    if(word.length < 15) {
      outputArr.push(exclaim(arr[i]))
    }
  }
  return outputArr
}


module.exports = {
  isEvenlyDivisible,
  halfSquare,
  exclaim,
  isLong,
  containsDigit,
  containsLowerCase,
  containsUpperCase,
  containsNonAlphanumeric,
  containsSpace,
  countWords,
  digits,
  truncate,
  isValidPassword,
  onlyPunchy,
}