import { Game } from './models/game.js';
import { Board } from './models/board.js';
import { Scoreboard } from './models/scoreboard.js';
import { writeTest} from './view/template.js';
import $ from 'jquery';
import { popBug } from './models/popBug.js';
//import { killBug } from './models/ktest.js';

// Game object
// * board
// * scoreboard (imo, just holds bugs left and timer, level count)
// .startScreen()
// .playScreen()

// this.level = level;
// this.bugsToSquash = bugsToSquash;

var test = new Scoreboard(1, 5);
var test2 = new Board;

var forPass = { scoreboard: test,
  board: test2};

var testGame = new Game(forPass);

console.log(testGame);

var main = new Board;
//var startLevel = 1;
//var startBugs = 5;
var prime = new Scoreboard(1, 5);
writeTest(prime);
var currentBugs = [];
for (var i = 0; i < prime.bugsToSquash; i++) {
  currentBugs.push(main.generateBug(i));
}
//  numb cyles turn count part of board

main.numberOfCycles = -1;

main.chosenHoles = []; // also part of board



// passing a method game.popBug, bind, closure, etc.
// setInterval isn't doing popBug, this is really game.turn
// game.turn does board.showBugs followed by game.checkWinner
// game.checkWinner looks at bugs.length and clears interval if needed
var endValue = setInterval(popBug, 3000);
// game.intervalId = endValue;

//hmmmm make into loop with varibles board.killbug()
// better idea!!! make a die method on bug
// bug.dead defaults to false, when the event fires
// find the bug in game.bugs with matching holdId
// then say bug.die(), which runs the template



// game.board.killBug and tricks for closure/bind so you don't lose this
$('.container').click(main.killBug2);


export { prime, currentBugs, main, endValue};
