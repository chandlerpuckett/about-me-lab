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



//========== GLOBAL VAR + GREETING ========== //

var score = 0;
var userName = prompt('What\'s your name?');

alert('Howdy ' + userName + '!' + ' Nice to meet you. I\'m Chandler. here\'s a little bit of info about me!');

// ========== FUNCTION INVOCATION ========== //

homeTown();
woods();
bilingual();
morning();
aliens();
ageQuestion();
favoriteCity ();

// ========== Question 1 ========== //

function homeTown(){
  var answer1 = prompt('Am I from South Carolina?') .toLowerCase() .replace('yes','y');
  if (answer1 === 'y') {
    score ++;
    alert('DING DING DING! great job! ' + userName + '! I\'m from Greenwood, South Carolina!');
  } else {
    alert('Nope! I\'m originally from Greenwood, South Carolina!');
  }
}

// ========== Question 2 ========== //

function woods(){
  var answer2 = prompt('Have I ever spent more than one month in the woods?') .toLowerCase() .replace('yes','y');
  if (answer2 === 'y'){
    score ++;
    alert('DING DING DING! I spent two months in the woods of north georgia taking part in a wilderness program');
  } else {
    alert('NOPE! I spent two months in the woods of north georgia taking part in a wilderness program');
  }
}

// ========== Question 3 ========== //

function bilingual(){
  var answer3 = prompt('Am I bilingual?') .toLowerCase() .replace('no','n');
  if (answer3 === 'n'){
    score ++;
    alert('DING DING DING! Just english. I\'ve tried to teach myself French but never stuck with it long enough to learn.');
  } else {
    alert('NOPE. Just english');
  }
}

//========== Question 4 ========== //

function morning(){
  var answer4 = prompt('Am I a morning person?') .toLowerCase() .replace('no', 'n');
  if (answer4 === 'n'){
    score ++;
    alert('DING DING DING! hell to the nah. I love to sleep');
  } else {
    alert('hell to the nah. I love to sleep');
  }
}

// ========== Question 5 ========== //

function aliens(){
  var answer5 = prompt('Do aliens exist?') .toLowerCase() .replace('yes', 'y');
  if (answer5 === 'y'){
    score ++;
    alert(' 👽 ' + 'I WANT TO BELIEVE ' + ' 👽' );
  } else {
    alert(' 👽👽👽👽👽👽👽👽👽👽👽 ');
  }
}

// ========== Question 6 ========== //
function ageQuestion(){
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
      alert('Great job ' + userName + '!' + 'I\'m 30 years old.');
      score ++;
      break;
    }

  } while (tries > 0);

  if (tries === -1){
    alert('No more tries. I\'m 30');
  }
}

//========== Question 7 ========== //

function favoriteCity(){
  var tries2 = 6;
  var cityArray = ['london','daytona beach','berlin','vancouver','hay\'s kansas','orlando','montreal'];
  var cityAnswers = cityArray.toString();

  do {
    var cityGuess = prompt('What\'s my favorite city to visit? ' + cityArray[0] + ', ' + cityArray[1]+', '+cityArray[2]+', '+cityArray[3]+', '+cityArray[4]+', '+cityArray[5]+', or '+cityArray[6]+'?').toLowerCase();

    tries2--;

    if (cityGuess === cityArray[6] || cityGuess === cityArray[3]){
      alert('Great job! I love Montreal & Vancouver! 🇨🇦🇨🇦🇨🇦');
      score ++;
      break;

    } else {
      alert('NOPE! ' + tries2 + ' Tries left. Hint: ' + cityAnswers);
    }

  } while (tries2 > 0);

  if (tries2 === 0){
    alert('No more tries. Montreal & Vancouver are two of my favorite cities 🇨🇦🇨🇦🇨🇦');
  }
}

// ========== FINAL SCORE ========== //

alert('Congrats ' + userName + ' you got ' + score + ' out of 7 questions correct');






