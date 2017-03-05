import $ from 'jquery';
import { Scoreboard } from '../models/scoreboard';

function writeTest(object){
  //var prime = new Scoreboard(1, 5);
  $('.container').html(`
    <div class='title'>Welcome to Whack-a-Bug!!!</div>
    <div><img class='board' src='./images/mole_background.jpeg'/></div>
    <div class='instructions'>${object.writeInstructions()}</div>
    <div id='hole-1' class='height0'></div>
    <div id='hole-2' class='height0'></div>
    <div id='hole-3' class='height0'></div>
    <div id='hole-4' class='height0'></div>
    <div id='hole-5' class='height0'></div>
    <div id='hole-6' class='height0'></div>
    <div id='hole-7' class='height0'></div>
    <div id='hole-8' class='height0'></div>
    <div id='hole-9' class='height0'></div>
    <div id='hole-10' class='height0'></div>
    `);
}

export { writeTest };
