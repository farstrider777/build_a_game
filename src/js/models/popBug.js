import { writeTest, youWin, youLose} from '../view/template.js';
import { thisGame, endValue } from '../controller.js';
import $ from 'jquery';


function popBug () {

  thisGame.board.numberOfCycles++;
  thisGame.board.chosenHoles = [];

  /*
  // a method on your board called board.showBugs()
  if boards have a holeCount you could...
  var shuffledHoles = _.range(1,this.holeCount).shuffle()
  this.bugs.forEach(function (bug) {
    bug.holeId = shuffledHoles.shift();
    bug.taunt();
  });

  */

  for(var count = 0; count < thisGame.board.currentBugs.length; count++){
    var holeChoice = 1 + Math.floor((Math.random() * 10));
    while(thisGame.board.chosenHoles.includes(holeChoice)){
      holeChoice = 1 + Math.floor((Math.random() * 10));
    }
    $(`#hole-${holeChoice}`).html(thisGame.board.currentBugs[count].name);
    $(`#hole-${holeChoice}`).toggleClass('height0');
    $(`#hole-${holeChoice}`).toggleClass('height60');
    //$(`#hole-${holeChoice}`).addClass(`${currentBugs[count].color}`);
    thisGame.board.chosenHoles.push(holeChoice);
  }

  // this should also be part of bug.taunt()
  setTimeout(function(){
    for(var i = 0; i < thisGame.board.chosenHoles.length; i++){
      $(`#hole-${thisGame.board.chosenHoles[i]}`).toggleClass('height0');
      $(`#hole-${thisGame.board.chosenHoles[i]}`).toggleClass('height60');
    }
  }, 1000);

  if(thisGame.board.currentBugs.length === 0){
    thisGame.scoreboard.level++;
    thisGame.scoreboard.bugsToSquash++;
    thisGame.board.numberOfCycles = 0;
    if(thisGame.scoreboard.bugsToSquash <= 10){
      writeTest(thisGame.scoreboard);
      for (var i = 0; i < thisGame.scoreboard.bugsToSquash; i++) {
        thisGame.board.currentBugs.push(thisGame.board.generateBug(i));
      }
    }else{
      clearInterval(endValue);
      youWin();
    }
  }

  if(thisGame.board.numberOfCycles > 12 - thisGame.scoreboard.level){
    clearInterval(endValue);
    youLose();
  }
}


export { popBug };
