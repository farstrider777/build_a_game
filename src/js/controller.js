import { Board } from './models/board.js';
import { Scoreboard } from './models/scoreboard.js';
import { writeTest, youWin} from './view/template.js';
//import { Hammer } from './models/hammer.js';
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
//var Mjölnir = new Hammer;

var numberOfCycles = -1;

var chosenHoles = [];

// function chooseHole(){
//   for(var count = 0; count < currentBugs.length; count++){
//     if(!currentBugs[count].dead){
//       var holeChoice = 1 + Math.floor((Math.random() * 10));
//       if(!chosenHoles.includes(holeChoice)){
//         $(`#hole-${holeChoice}`).html(currentBugs[count].name);
//         $(`#hole-${holeChoice}`).toggleClass('height0');
//         $(`#hole-${holeChoice}`).toggleClass('height60');
//         chosenHoles.push(holeChoice);
//       }else{ chooseHole(); }
//     }
//   }
// }


function popBug () {

  numberOfCycles++;
  chosenHoles = [];

  for(var count = 0; count < currentBugs.length; count++){
    if(!currentBugs[count].dead){
      var holeChoice = 1 + Math.floor((Math.random() * 10));
      while(chosenHoles.includes(holeChoice)){
        holeChoice = 1 + Math.floor((Math.random() * 10));
      }

      $(`#hole-${holeChoice}`).html(currentBugs[count].name);
      $(`#hole-${holeChoice}`).toggleClass('height0');
      $(`#hole-${holeChoice}`).toggleClass('height60');
      chosenHoles.push(holeChoice);

    }
  }

  //chooseHole();

  setTimeout(function(){

    //console.log(chosenHoles)
    for(var i = 0; i < chosenHoles.length; i++){
      $(`#hole-${chosenHoles[i]}`).toggleClass('height0');
      $(`#hole-${chosenHoles[i]}`).toggleClass('height60');
      //console.log(i);
    }
  }, 1000);

  if(numberOfCycles > 3 * (9 - prime.level)){
    console.log("youlose")
  }

  if(currentBugs.length === 0){
    console.log("next level")
    startLevel++;
    startBugs++;
    if(startBugs <= 10){
      prime.level = startLevel;
      prime.bugsToSquash = startBugs;
      writeTest(prime);
      for (var i = 0; i < startBugs; i++) {
        currentBugs.push(main.generateBug(1));
      }
    }else{ youWin(); }
  }

    // holeChoice = 1 + Math.floor((Math.random() * 10));
    // $(`#hole-${holeChoice}`).html(currentBugs[0].name);
    // $(`#hole-${holeChoice}`).toggleClass('height0');
    // $(`#hole-${holeChoice}`).toggleClass('height60');
    //
    // setTimeout(function(){
    //   $(`#hole-${holeChoice}`).toggleClass('height0');
    //   $(`#hole-${holeChoice}`).toggleClass('height60');
    // }, 1000);


  // Mjölnir.squash(currentBugs[0]);
  // console.log(currentBugs[0])
}

setInterval(popBug, 3000);
//
// holeChoice = 1 + Math.floor((Math.random() * 10));
// $(`#hole-${holeChoice}`).html(currentBugs[1].name);
// $(`#hole-${holeChoice}`).removeClass('height0');
// $(`#hole-${holeChoice}`).addClass('height60');
//
// holeChoice = 1 + Math.floor((Math.random() * 10));
// $(`#hole-${holeChoice}`).html(currentBugs[2].name);
// $(`#hole-${holeChoice}`).removeClass('height0');
// $(`#hole-${holeChoice}`).addClass('height60');
//
// holeChoice = 1 + Math.floor((Math.random() * 10));
// $(`#hole-${holeChoice}`).html(currentBugs[3].name);
// $(`#hole-${holeChoice}`).toggleClass('height0');
// $(`#hole-${holeChoice}`).toggleClass('height60');
//
// holeChoice = 1 + Math.floor((Math.random() * 10));
// $(`#hole-${holeChoice}`).html(currentBugs[4].name);
// $(`#hole-${holeChoice}`).toggleClass('height0');
// $(`#hole-${holeChoice}`).toggleClass('height60');





function killBug(event){
  //console.log(event.target);
  //$(event.target).toggleClass('height0');
  //$(event.target).toggleClass('height60');
  //Mjölnir.squash(currentBugs[0]);
  //console.log(event.target.attributes)
  var res = event.target.attributes['0'].textContent;
  //console.log(res.split('-')[1]);
  var holeNumber = res.split('-')[1]
  for(var count = 0; count < chosenHoles.length; count++){
    //console.log(holeNumber)
    //console.log(chosenHoles[count])
    if(holeNumber == chosenHoles[count]){
      //Mjölnir.squash(currentBugs[count])
      //console.log("inside if")
      currentBugs.splice(count, 1);
      console.log(currentBugs)
    }
  };


  // console.log(holeSelected);
  // console.log(chosenHoles);
  // var a = chosenHoles.lastIndexOf(holeSelected);
  // console.log(holeSelected);
  // console.log(chosenHoles.lastIndexOf(5))
  // console.log(a)


  //Mjölnir.squash(currentBugs[0])
}

$('.container').click(killBug);


export { prime, currentBugs };
