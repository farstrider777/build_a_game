import $ from 'jquery';
import { Scoreboard } from '../models/scoreboard';

function writeTest(object){
  //var prime = new Scoreboard(1, 5);
  $('.container').html(`
    <div class='title'>Welcome to Whack-a-Bug!!!</div>
    <img id ='boss' src='./images/boss1.png'/>
    <div class='instructions'><br><br><br>${object.writeInstructions()}</div>
    <div><img id='board' src='./images/mole_background.jpeg'/></div>
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
    <img id="hammer" src='./images/hammer.png'/>
    `);
}

function youWin(){
  $('.container').html(`
    <div class='title'>You Beat Whack-a-Bug!!!</div>
    <img id ='boss' src='./images/boss1.png'/>
    <div class='instructions'><br><br><br>I'm very proud of you!!! How about a raise!!!</div>
    `);
}

function youLose(){
  $('.container').html(`
    <div class='title'>You Lost Whack-a-Bug!!!</div>
    <img id ='boss' src='./images/boss3.png'/>
    <div class='instructions'><br><br><br>You didn't make it, looks like we're gonna have let you go!!!.</div>
    `);
}

export { writeTest, youWin, youLose };
