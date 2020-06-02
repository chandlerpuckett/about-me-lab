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
    prompt() Am I from SC or TN?
    --- if else statement
    --- alert() correct answer + blurb w/extra info

  3. Question-2
    prompt() How old am I?
    - value between 25 - 35
    - direct user when they're close (within 5 years), getting closer (within 2 years)
      --- if else statement
      --- alert() correct answer + blurb w/extra info

  4. Question-3
    prompt() Favorite Dish? Spaghetti or Steak?
    --- if else statement
    --- alert() correct answer + blurb w/extra info

  5. Question-4
    prompt() Favorite subject in school? Science or Art?
    --- if else statement
    --- alert() correct answer + blurb w/extra info

  6. Question-5
    prompt() Morning Person or Night Owl?
    --- if else statement
    --- alert() correct answer + blurb w/extra info

*/

var userName = prompt('Howdy! I\'m Chandler. What\'s your name?');
console.log(userName);

alert('Welcome' + userName + '. Here\'s a quick bit of info about me');






