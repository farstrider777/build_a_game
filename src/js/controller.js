import { Board } from './models/board.js';
import { Scoreboard } from './models/scoreboard.js';

var main = new Board;
var startLevel = 1;
var startBugs = 5;
var prime = new Scoreboard(startLevel, startBugs);
var currentBugs = [];
for (var i = 0; i < startBugs; i++) {
  currentBugs.push(main.generateBug(1));
}
