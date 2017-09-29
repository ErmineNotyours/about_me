'use strict';

var userPoints = 0;

console.log('hello');
alert('Welcome to my guessing game');

var user = prompt('What is your name?');
alert('Hi ' + user + '! I am so glad you want to play my game.');

var answer = prompt('is Arthur\'s favorite food ?').toLowercase();
console.log(answer);

if (answer === 'yes' || answer === 'Y') {
  userPoints++;
}else{
  alert('Wrong! Actually....');
}
alert('You have ' + userPoints + ' points.')
