var triviaButton = document.getElementById('start-trivia')

function correctAns () {
  window.alert('Correct!')
}
function wrongAns () {
  window.alert('Wrong :(')
}

triviaButton.addEventListener('click', function () {
  var startEntry = window.prompt('Would you like to play Spartan Trivia?').trim().toLowerCase()
  if (startEntry === 'yes') {
    window.alert('Good luck!')
    categoryFunc()
  } else {
    window.alert('=(')
  }
})

function sportsTrivia () {
  var sportsAns1 = window.prompt('Who is the MSU Basketball Coach?').trim().toLowerCase()
  if (sportsAns1 === 'tom izzo' || sportsAns1 === 'izzo') {
    correctAns()
    categoryFunc()
  } else {
    wrongAns()
    categoryFunc()
  }
}

function historyTrivia () {
  var historyAns1 = window.prompt('What year was MSU founded?').trim().toLowerCase()
  if (historyAns1 === '1855') {
    correctAns()
    categoryFunc()
  } else {
    wrongAns()
    categoryFunc()
  }
}

function geographyTrivia () {
  var geographyAns1 = window.prompt('What city is MSU in?').trim().toLowerCase()
  if (geographyAns1 === 'east lansing' || geographyAns1 === 'el') {
    correctAns()
    categoryFunc()
  } else {
    wrongAns()
    categoryFunc()
  }
}

function mysteryTrivia () {
  var mysteryAns1 = parseInt(window.prompt('Test your luck, guess a number 1-10'))
  var mysteryNumber = Math.floor((Math.random() * 10) + 1)
  if (mysteryAns1 === mysteryNumber) {
    correctAns()
    categoryFunc()
  } else {
    wrongAns()
    window.alert('The number was ' + mysteryNumber)
    categoryFunc()
  }
}

function categoryFunc () {
  var categoryEntry = window.prompt('Select a category: sports, history, geography or mystery').trim().toLowerCase()
  if (categoryEntry === 'sports') {
    sportsTrivia()
  } else if (categoryEntry === 'history') {
    historyTrivia()
  } else if (categoryEntry === 'geography') {
    geographyTrivia()
  } else if (categoryEntry === 'mystery') {
    mysteryTrivia()
  } else {
    window.alert('You failed to choose a category')
  }
}
