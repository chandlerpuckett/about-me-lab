'use strict';

/*
  Requirements:
  - 5 prompts
    yes or no questions
    add console.log() within the app
    replace with alerts() before final submission
    must accept either yes/no OR y/n
    make sure to use .toUpperCase() or to.LowerCase() to correctly format the answer string

  - Personalized welcome prompt
    - display users name back to them with a greeting!
    - display name back in the FINAL message also

============================================================================

  1. Greeting
    use prompt() & ask user their name
    store users name as variable for later use

  2. Question-1
    prompt() Am I from SC?
    --- if else statement
    --- alert() correct answer + blurb w/extra info

  3. Question-2
    prompt() Am I 27?
      --- if else statement
      --- alert() correct answer + blurb w/extra info

  4. Question-3
    prompt() bilingual?
    --- if else statement
    --- alert() correct answer + blurb w/extra info

  5. Question-4
    prompt() morning person?
    --- if else statement
    --- alert() correct answer + blurb w/extra info

  6. Question-5
    prompt() aliens?
    --- if else statement
    --- alert() correct answer + blurb w/extra info
*/

// ========== GLOBAL VAR + GREETING ========== //

var userName = prompt('What\'s your name?');
var arrayTally = [];

alert('Howdy ' + userName + '!' + ' Nice to meet you. I\'m Chandler. here\'s a little bit of info about me!');

// ========== Question 1 ========== //


var answer1 = prompt('Am I from South Carolina?') .toLowerCase() .replace('yes','y');
if (answer1 === 'y') {
  alert('DING DING DING! great job! ' + userName + '! I\'m from Greenwood, South Carolina!');
  arrayTally.push(1);
} else {
  alert('Nope! I\'m originally from Greenwood, South Carolina!');
  arrayTally.push(0);
}

// ========== Question 2 ========== //

var answer2 = prompt('Have I ever spent more than one month in the woods?') .toLowerCase() .replace('yes','y');
if (answer2 === 'y') {
  alert('DING DING DING! I spent two months in the woods of north georgia taking part in a wilderness program');
  arrayTally.push(1);
} else {
  alert('NOPE! I spent two months in the woods of north georgia taking part in a wilderness program');
  arrayTally.push(0);
}

// ========== Question 3 ========== //

var answer3 = prompt('Am I bilingual?') .toLowerCase() .replace('no','n');
if (answer3 === 'n'){
  alert('DING DING DING! Just english. I\'ve tried to teach myself French but never stuck with it long enough to learn.');
  arrayTally.push(1);
} else {
  alert('NOPE. Just english');
  arrayTally.push(0);
}

// ========== Question 4 ========== //

var answer4 = prompt('Am I a morning person?') .toLowerCase() .replace('no', 'n');
if (answer4 === 'n'){
  alert('DING DING DING! hell to the nah. I love to sleep');
  arrayTally.push(1);
} else {
  alert('hell to the nah. I love to sleep');
  arrayTally.push(0);
}

// ========== Question 5 ========== //

var answer5 = prompt('Do aliens exist?') .toLowerCase() .replace('yes', 'y');
if (answer5 === 'y'){
  alert(' 👽 ' + 'I WANT TO BELIEVE ' + ' 👽' );
  arrayTally.push(1);
} else {
  alert(' 👽👽👽👽👽👽👽👽👽👽👽 ');
  arrayTally.push(0);
}

// ========== Question 6 ========== //

var tries = 4;

do {
  var guess = prompt('How old am I? Hint: guess a number between 25 and 35');
  var userGuess = parseInt(guess);

  tries--;

  if (userGuess >= 31) {
    alert('NOPE, lower. ' + tries + ' tries left.');
  } else if (userGuess <= 29) {
    alert('NOPE, higher. ' + tries + ' tries left.');
  } else if (userGuess === 30) {
    arrayTally.push(1);
    alert('Great job ' + userName + '!');
    break;
  }

} while (tries > 0);

if (tries === -1){
  arrayTally.push(0);
  alert('No more tries. I\'m 30');

}

// ========== Question 7 ========== //

var tries2 = 6;
var cityArray = ['london','daytona beach','berlin','vancouver','hay\'s kansas','orlando','montreal'];
// var cityAnswers = cityArray.toString(); // quicker way, but format issues?

console.log(cityGuess);

do {
  var cityGuess = prompt('What\'s my favorite city to visit? ' + cityArray[0] + ', ' + cityArray[1]+', '+cityArray[2]+', '+cityArray[3]+', '+cityArray[4]+', '+cityArray[5]+', or '+cityArray[6]+'?').toLowerCase();

  console.log(cityGuess);

  tries2--;

  if (cityGuess === cityArray[6]){
    alert('Great job! I love Montreal!');
    arrayTally.push(1);
    break;

  } else {
    alert('NOPE! ' + tries2 + ' Tries left. Hint: ' + cityAnswers);
  }

  console.log(cityGuess);

} while (tries2 > 0);

if (tries2 === 0){
  alert('No more tries. My favorite city to visit is Montreal!');
  arrayTally.push(0);
}

// ========== FINAL SCORE ========== //

var sum = 0;

for (var i = 0; i < arrayTally.length; i++){
  var tally = sum += arrayTally[i];
}

alert('Congrats ' + userName + ' you got ' + tally + ' out of 7 questions correct');







