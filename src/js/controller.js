import { Board } from './models/board.js';
import { Scoreboard } from './models/scoreboard.js';
import { writeTest } from './view/template.js';
import { Hammer } from './models/hammer.js';
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
var Mjölnir = new Hammer;

var currentHoleArray = [];

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
    currentHoleArray = chosenHoles
    //console.log(chosenHoles)
    for(var i = 0; i < chosenHoles.length; i++){
      $(`#hole-${chosenHoles[i]}`).toggleClass('height0');
      $(`#hole-${chosenHoles[i]}`).toggleClass('height60');
      //console.log(i);
    }
  }, 1000);

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

setInterval(popBug, 4000);
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
  $(event.target).toggleClass('height0');
  $(event.target).toggleClass('height60');
  //Mjölnir.squash(currentBugs[0]);
  //console.log(event.target.attributes)
  var res = event.target.attributes['0'].textContent;
  var holeSelected = res.split('-')[1]
  console.log(holeSelected);
  console.log(currentHoleArray);
  var a = currentHoleArray.lastIndexOf(holeSelected);
  console.log(a)
  //Mjölnir.squash(currentBugs[0])
}

$('.container').click(killBug);


export { prime, currentBugs };
