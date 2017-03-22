import { writeTest, youWin, youLose} from '../view/template.js';
import { thisGame, endValue} from '../controller.js';
import $ from 'jquery';

function popBug () {

  thisGame.board.numberOfCycles++;
  thisGame.board.chosenHoles = [];

  if(!thisGame.scoreboard.countEnd){
    thisGame.scoreboard.countEnd = thisGame.scoreboard.writeCountdown(36 - thisGame.scoreboard.level * 3);
  }

  for(var count = 0; count < thisGame.board.currentBugs.length; count++){
    var holeChoice = 1 + Math.floor((Math.random() * 10));
    while(thisGame.board.chosenHoles.includes(holeChoice)){
      holeChoice = 1 + Math.floor((Math.random() * 10));
    }
    $(`#hole-${holeChoice}`).html(thisGame.board.currentBugs[count].name);
    $(`#hole-${holeChoice}`).toggleClass('height0');
    $(`#hole-${holeChoice}`).toggleClass('height60');
    thisGame.board.chosenHoles.push(holeChoice);
  }

  setTimeout(function(){
    for(var i = 0; i < thisGame.board.chosenHoles.length; i++){
      $(`#hole-${thisGame.board.chosenHoles[i]}`).toggleClass('height0');
      $(`#hole-${thisGame.board.chosenHoles[i]}`).toggleClass('height60');
    }
  }, 1000);

  if(thisGame.board.currentBugs.length === 0){
    clearInterval(thisGame.scoreboard.countEnd);
    thisGame.scoreboard.countEnd = thisGame.scoreboard.writeCountdown(33 - thisGame.scoreboard.level * 3);

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
