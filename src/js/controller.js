import { Game } from './models/game.js';
import { Board } from './models/board.js';
import { Scoreboard } from './models/scoreboard.js';
import { writeTest} from './view/template.js';
import $ from 'jquery';
import { popBug } from './models/popBug.js';

// .startScreen()
// .playScreen()

var thisGame = new Game();

writeTest(thisGame.scoreboard);
var currentBugs = [];
for (var i = 0; i < thisGame.scoreboard.bugsToSquash; i++) {
  currentBugs.push(thisGame.board.generateBug(i));
}
//  numb cyles turn count part of board

thisGame.board.numberOfCycles = -1;

thisGame.board.chosenHoles = [];

var endValue = setInterval(popBug, 3000);

$('.container').click(thisGame.board.killBug2);


export { currentBugs, endValue, thisGame};
