import { Board } from './models/board.js';
import { Scoreboard } from './models/scoreboard.js';
import { writeTest } from './view/template.js';
import $ from 'jquery';

var main = new Board;
var startLevel = 1;
var startBugs = 5;
var prime = new Scoreboard(startLevel, startBugs);
writeTest(prime);
var currentBugs = [];
for (var i = 0; i < startBugs; i++) {
  currentBugs.push(main.generateBug(1));
}

var holeChoice = 1 + Math.floor((Math.random() * 10));
$(`#hole-${holeChoice}`).html(currentBugs[0].name);
$(`#hole-${holeChoice}`).removeClass('height0');
$(`#hole-${holeChoice}`).addClass('height60');

holeChoice = 1 + Math.floor((Math.random() * 10));
$(`#hole-${holeChoice}`).html(currentBugs[1].name);
$(`#hole-${holeChoice}`).removeClass('height0');
$(`#hole-${holeChoice}`).addClass('height60');

holeChoice = 1 + Math.floor((Math.random() * 10));
$(`#hole-${holeChoice}`).html(currentBugs[2].name);
$(`#hole-${holeChoice}`).removeClass('height0');
$(`#hole-${holeChoice}`).addClass('height60');

holeChoice = 1 + Math.floor((Math.random() * 10));
$(`#hole-${holeChoice}`).html(currentBugs[3].name);
$(`#hole-${holeChoice}`).toggleClass('height0');
$(`#hole-${holeChoice}`).toggleClass('height60');

holeChoice = 1 + Math.floor((Math.random() * 10));
$(`#hole-${holeChoice}`).html(currentBugs[4].name);
$(`#hole-${holeChoice}`).toggleClass('height0');
$(`#hole-${holeChoice}`).toggleClass('height60');

function killBug(event){
  console.log(event.target);
  $(event.target).toggleClass('height0');
  $(event.target).toggleClass('height60');
}

$('#hole-1').click(killBug);


export { prime, currentBugs };
