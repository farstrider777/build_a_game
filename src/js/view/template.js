import $ from 'jquery';
import { Scoreboard } from '../models/scoreboard';

function writeTest(object){
  //var prime = new Scoreboard(1, 5);
  $('.container').html(`
    <div class='title'>Welcome to Whack-a-Bug!!!</div>
    <div><img class='board' src='./images/mole_background.jpeg'/></div>
    <div class='instructions'>${object.writeInstructions()}</div>
    <div id='hole-1'></div>
    <div id='hole-2'></div>
    <div id='hole-3'></div>
    <div id='hole-4'></div>
    <div id='hole-5'></div>
    <div id='hole-6'></div>
    <div id='hole7'></div>
    <div id='hole8'></div>
    <div id='hole9'></div>
    <div id='hole10'></div>
    `);
}

export { writeTest };
