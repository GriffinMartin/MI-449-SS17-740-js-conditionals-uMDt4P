var triviaButton = document.getElementById('start-trivia')

function correctAns () {
  window.alert('😊 ' + 'Right Answer! Great Job!' + ' 🤓')
}

function wrongAns () {
  window.alert('Wrong :(')
}

function respondToAnswer (answerWasCorrect) {
  if (answerWasCorrect) {
    correctAns()
  } else {
    wrongAns()
  }
  categoryFunc()
}

triviaButton.addEventListener('click', function () {
  var startEntry = window.prompt('Would you like to play Spartan Trivia?').trim().toLowerCase()
  if (startEntry === 'yes') {
    window.alert('Good Luck!')
    categoryFunc()
  } else {
    window.alert('=(')
  }
})

function sportsTrivia () {
  var sportsAns1 = window.prompt('Who is the MSU Basketball Coach?').trim().toLowerCase()
  respondToAnswer(sportsAns1 === 'tom izzo' || sportsAns1 === 'izzo')
}

function historyTrivia () {
  var historyAns1 = window.prompt('What year was MSU founded?').trim().toLowerCase()
  respondToAnswer(historyAns1 === '1855')
}

function geographyTrivia () {
  var geographyAns1 = window.prompt('What city is MSU in?').trim().toLowerCase()
  respondToAnswer(geographyAns1 === 'east lansing' || geographyAns1 === 'el')
}

function mysteryTrivia () {
  var mysteryAns1 = parseInt(window.prompt('Test your luck, guess a number 1-10'))
  var mysteryNumber = Math.floor((Math.random() * 10) + 1)
  if (mysteryAns1 === mysteryNumber) {
    respondToAnswer('Wow, lucky guess it was ' + mysteryNumber + '!')
  } else {
    window.alert('Aww good try! The number was ' + mysteryNumber)
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
