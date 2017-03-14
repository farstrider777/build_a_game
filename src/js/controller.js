import { Board } from './models/board.js';
import { Scoreboard } from './models/scoreboard.js';
import { writeTest, youWin, youLose} from './view/template.js';
import { Game } from './models/game.js';
import $ from 'jquery';

// Game object
// * board
// * scoreboard (imo, just holds bugs left and timer, level count)
// .startScreen()
// .playScreen()

// this.level = level;
// this.bugsToSquash = bugsToSquash;

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


/*

function killBug(event){
  $('.sound_effect').html('<audio autoplay>   <source src="images/gavel.mp3" type="audio/mpeg"> </audio>');
  var res = event.target.attributes['0'].textContent;
  var holeNumber = res.split('-')[1];
  if(holeNumber == 10){
    $('.sound_effect').html('<audio autoplay>   <source src="images/explode_bug.mp3" type="audio/mpeg"> </audio>');
    $('.exp-container').html(`<img class='explosion-10' src='images/explosion.gif'/>`);
    setTimeout(function(){ $('.exp-container').html(''); }, 700);
    $('.hammer').animate({
      left: '550px', /// 55 * 10
      bottom: '50px' // 5 * 10
    });
    $('.hammer').animate({
      bottom: '-25px', // -2.5 * 10
      left: '400px',  // -40 * 10
    });
  }
  if(holeNumber == 9){
    $('.sound_effect').html('<audio autoplay>   <source src="images/explode_bug.mp3" type="audio/mpeg"> </audio>');
    $('.exp-container').html(`<img class='explosion-9' src='images/explosion.gif'/>`);
    setTimeout(function(){ $('.exp-container').html(''); }, 700);
    $('.hammer').animate({
      left: '350px',
      bottom: '50px',
    });
    $('.hammer').animate({
      bottom: '-25px',
      left: '400px',
    });
  }
  if(holeNumber == 8){
    $('.sound_effect').html('<audio autoplay>   <source src="images/explode_bug.mp3" type="audio/mpeg"> </audio>');
    $('.exp-container').html(`<img class='explosion-8' src='images/explosion.gif'/>`);
    setTimeout(function(){ $('.exp-container').html(''); }, 700);
    $('.hammer').animate({
      left: '150px',
      bottom: '50px',
    });
    $('.hammer').animate({
      bottom: '-25px',
      left: '400px',
    });
  }

  if(holeNumber == 7){
    $('.sound_effect').html('<audio autoplay>   <source src="images/explode_bug.mp3" type="audio/mpeg"> </audio>');
    $('.exp-container').html(`<img class='explosion-7' src='images/explosion.gif'/>`);
    setTimeout(function(){ $('.exp-container').html(''); }, 700);
    $('.hammer').animate({
      left: '550px',
      bottom: '165px'
    });
    $('.hammer').animate({
      bottom: '-25px',
      left: '400px',
    });
  }
  if(holeNumber == 6){
    $('.sound_effect').html('<audio autoplay>   <source src="images/explode_bug.mp3" type="audio/mpeg"> </audio>');
    $('.exp-container').html(`<img class='explosion-6' src='images/explosion.gif'/>`);
    setTimeout(function(){ $('.exp-container').html(''); }, 700);
    $('.hammer').animate({
      left: '400px',
      bottom: '165px',
    });
    $('.hammer').animate({
      bottom: '-25px',
      left: '400px',
    });
  }
  if(holeNumber == 5){
    $('.sound_effect').html('<audio autoplay>   <source src="images/explode_bug.mp3" type="audio/mpeg"> </audio>');
    $('.exp-container').html(`<img class='explosion-5' src='images/explosion.gif'/>`);
    setTimeout(function(){ $('.exp-container').html(''); }, 700);
    $('.hammer').animate({
      left: '250px',
      bottom: '165px'
    });
    $('.hammer').animate({
      bottom: '-25px',
      left: '400px',
    });
  }
  if(holeNumber == 4){
    $('.sound_effect').html('<audio autoplay>   <source src="images/explode_bug.mp3" type="audio/mpeg"> </audio>');
    $('.exp-container').html(`<img class='explosion-4' src='images/explosion.gif'/>`);
    setTimeout(function(){ $('.exp-container').html(''); }, 700);
    $('.hammer').animate({
      left: '100px',
      bottom: '165px'
    });
    $('.hammer').animate({
      bottom: '-25px',
      left: '400px',
    });
  }

  if(holeNumber == 3){
    $('.sound_effect').html('<audio autoplay>   <source src="images/explode_bug.mp3" type="audio/mpeg"> </audio>');
    $('.exp-container').html(`<img class='explosion-3' src='images/explosion.gif'/>`);
    setTimeout(function(){ $('.exp-container').html(''); }, 700);
    $('.hammer').animate({
      left: '550px',
      bottom: '270px'
    });
    $('.hammer').animate({
      bottom: '-25px',
      left: '400px',
    });
  }
  if(holeNumber == 2){
    $('.sound_effect').html('<audio autoplay>   <source src="images/explode_bug.mp3" type="audio/mpeg"> </audio>');
    $('.exp-container').html(`<img class='explosion-2' src='images/explosion.gif'/>`);
    setTimeout(function(){ $('.exp-container').html(''); }, 700);
    $('.hammer').animate({
      left: '350px',
      bottom: '270px',
    });
    $('.hammer').animate({
      bottom: '-25px',
      left: '400px',
    });
  }
  if(holeNumber == 1){
    $('.sound_effect').html('<audio autoplay>   <source src="images/explode_bug.mp3" type="audio/mpeg"> </audio>');
    $('.exp-container').html(`<img class='explosion-1' src='images/explosion.gif'/>`);
    setTimeout(function(){ $('.exp-container').html(''); }, 700);
    $('.hammer').animate({
      left: '150px',
      bottom: '270px'
    });
    $('.hammer').animate({
      bottom: '-25px',
      left: '400px',
    });
  }
  for(var count = 0; count < main.chosenHoles.length; count++){
    if(holeNumber == main.chosenHoles[count]){
      currentBugs.splice(count, 1);
    }
  }
}

*/


// game.board.killBug and tricks for closure/bind so you don't lose this
var fun = new Game;
$('.container').click(fun.killBug);


export { prime, currentBugs };
