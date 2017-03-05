import $ from 'jquery';
import { Scoreboard } from '../models/scoreboard';

function writeTest(){
  var prime = new Scoreboard(1, 5);
  $('.container').html(`
    <div class='title'>Welcome to Whack-a-Bug!!!</div>
    <div><img class='board' src='./images/mole_background.jpeg'/></div>
    <div class='instructions'>${prime.writeInstructions()}</div>

    `);
}

export { writeTest };
