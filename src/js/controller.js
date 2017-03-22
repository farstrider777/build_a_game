import { Game } from './models/game.js';
import { writeTest} from './view/template.js';
import $ from 'jquery';

var thisGame = new Game();

writeTest(thisGame.scoreboard);

thisGame.board.currentBugs = [];
for (var i = 0; i < thisGame.scoreboard.bugsToSquash; i++) {
  thisGame.board.currentBugs.push(thisGame.board.generateBug(i));
}

thisGame.board.numberOfCycles = -1;

thisGame.board.chosenHoles = [];

var endValue = setInterval(thisGame.popBug2, 3000);

$('.container').click(thisGame.board.killBug2);

export { endValue, thisGame};
