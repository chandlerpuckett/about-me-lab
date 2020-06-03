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

console.log('running');

// ========== Question 1 ========== // working code, try to simplify during Loop Lab

// function askName(){
//   var userName = prompt('Howdy! Whats your name?');
//   return userName;
// }

// function question1(userName){
//   var answer1 = prompt(userName + ', Where am I from? South Carolina, or Tennessee?') .toLowerCase();
//   while((answer1 !== 'south carolina') || (answer1 === 'tennessee')){
//     answer1 = prompt('nope! try again ' + userName + '. South Carolina, or Tennessee?');
//   }
//   return answer1;
// }

// function correct1(answer1){
//   if (answer1 === 'south carolina'){
//     alert ('DING DING DING! Great Job ' + userName + '!');
//   }
// }

// var userName = askName();
// var answer1 = question1(userName);
// correct1(answer1);
// ==================================================================================

var author = 'Chandler';
var userName = prompt('What\'s your name?');

alert('Howdy ' + userName + '!' + ' Nice to meet you. I\'m ' + author + ', here\'s a little bit of info about me!');

var answer1 = prompt('Am I from South Carolina?') .toLowerCase() .replace('yes','y');
// console.log(answer1);
if (answer1 === 'y') {
  alert('DING DING DING! great job! ' + userName + '! I\'m from Greenwood, South Carolina!');
} else {
  alert('Nope! I\'m originally from Greenwood, South Carolina!');
}

var answer2 = prompt('Am I 27 years old?') .toLowerCase() .replace('no','n');
// console.log(answer2);
if (answer2 === 'n') {
  alert('DING DING DING! great job! I\'m 30 years old.');
} else {
  alert('nope! I\'m 30 years old.');
}

var answer3 = prompt('Am I bilingual?') .toLowerCase() .replace('no','n');
// console.log(answer3);
if (answer3 === 'n'){
  alert('DING DING DING! Just english. I\'ve tried to teach myself French but never stuck with it long enough to learn.');
} else {
  alert('NOPE. Just english');
}

var answer4 = prompt('Am I a morning person?') .toLowerCase() .replace('no', 'n');
// console.log(answer4);
if (answer4 === 'n'){
  alert('DING DING DING! hell to the nah. I love to sleep');
} else {
  alert('hell to the nah. I love to sleep');
}

var answer5 = prompt('Do aliens exist?') .toLowerCase() .replace('yes', 'y');
// console.log(answer5);
if (answer5 === 'y'){
  alert(' 👽 ' + 'I WANT TO BELIEVE ' + ' 👽' );
} else {
  alert(' 👽👽👽👽👽👽👽👽👽👽👽 ');
}









