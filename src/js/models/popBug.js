import { writeTest, youWin, youLose} from '../view/template.js';
import { main, currentBugs, prime, endValue } from '../controller.js';
import $ from 'jquery';


function popBug () {

  main.numberOfCycles++;
  main.chosenHoles = [];

  /*
  // a method on your board called board.showBugs()
  if boards have a holeCount you could...
  var shuffledHoles = _.range(1,this.holeCount).shuffle()
  this.bugs.forEach(function (bug) {
    bug.holeId = shuffledHoles.shift();
    bug.taunt();
  });

  */

  for(var count = 0; count < currentBugs.length; count++){
    var holeChoice = 1 + Math.floor((Math.random() * 10));
    while(main.chosenHoles.includes(holeChoice)){
      holeChoice = 1 + Math.floor((Math.random() * 10));
    }
    $(`#hole-${holeChoice}`).html(currentBugs[count].name);
    $(`#hole-${holeChoice}`).toggleClass('height0');
    $(`#hole-${holeChoice}`).toggleClass('height60');
    //$(`#hole-${holeChoice}`).addClass(`${currentBugs[count].color}`);
    main.chosenHoles.push(holeChoice);
  }

  // this should also be part of bug.taunt()
  setTimeout(function(){
    for(var i = 0; i < main.chosenHoles.length; i++){
      $(`#hole-${main.chosenHoles[i]}`).toggleClass('height0');
      $(`#hole-${main.chosenHoles[i]}`).toggleClass('height60');
    }
  }, 1000);

  if(currentBugs.length === 0){
    prime.level++;
    prime.bugsToSquash++;
    main.numberOfCycles = 0;
    if(prime.bugsToSquash <= 10){
      //prime.level = startLevel;
      //prime.bugsToSquash = startBugs;
      writeTest(prime);
      for (var i = 0; i < prime.bugsToSquash; i++) {
        currentBugs.push(main.generateBug(i));
      }
    }else{
      clearInterval(endValue);
      youWin();
    }
  }

  if(main.numberOfCycles > 12 - prime.level){
    clearInterval(endValue);
    youLose();
  }
}

//var endValue = setInterval(popBug, 3000);

export { popBug }
