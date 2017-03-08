import { Board } from './models/board.js';
import { Scoreboard } from './models/scoreboard.js';
import { writeTest, youWin, youLose} from './view/template.js';
import $ from 'jquery';

var main = new Board;
var startLevel = 1;
var startBugs = 5;
var prime = new Scoreboard(startLevel, startBugs);
writeTest(prime);
var currentBugs = [];
for (var i = 0; i < startBugs; i++) {
  currentBugs.push(main.generateBug(i));
}

var numberOfCycles = -1;

var chosenHoles = [];

function popBug () {

  numberOfCycles++;
  chosenHoles = [];

  for(var count = 0; count < currentBugs.length; count++){
    var holeChoice = 1 + Math.floor((Math.random() * 10));
    while(chosenHoles.includes(holeChoice)){
      holeChoice = 1 + Math.floor((Math.random() * 10));
    }
    $(`#hole-${holeChoice}`).html(currentBugs[count].name);
    $(`#hole-${holeChoice}`).toggleClass('height0');
    $(`#hole-${holeChoice}`).toggleClass('height60');
    //$(`#hole-${holeChoice}`).addClass(`${currentBugs[count].color}`);
    chosenHoles.push(holeChoice);
  }

  setTimeout(function(){
    for(var i = 0; i < chosenHoles.length; i++){
      $(`#hole-${chosenHoles[i]}`).toggleClass('height0');
      $(`#hole-${chosenHoles[i]}`).toggleClass('height60');
    }
  }, 1000);

  if(currentBugs.length === 0){
    startLevel++;
    startBugs++;
    numberOfCycles = 0;
    if(startBugs <= 10){
      prime.level = startLevel;
      prime.bugsToSquash = startBugs;
      writeTest(prime);
      for (var i = 0; i < startBugs; i++) {
        currentBugs.push(main.generateBug(i));
      }
    }else{
      clearInterval(endValue);
      youWin();
    }
  }

  if(numberOfCycles > 12 - prime.level){
    clearInterval(endValue);
    youLose();
  }
}

var endValue = setInterval(popBug, 3000);

function killBug(event){
  $('.sound_effect').html('<audio autoplay>   <source src="images/gavel.mp3" type="audio/mpeg"> </audio>');
  var res = event.target.attributes['0'].textContent;
  var holeNumber = res.split('-')[1];
  if(holeNumber == 10){
    $('.sound_effect').html('<audio autoplay>   <source src="images/explode_bug.mp3" type="audio/mpeg"> </audio>');
    $('.exp-container').html(`<img class='explosion-10' src='images/explosion.gif'/>`);
    setTimeout(function(){ $('.exp-container').html(''); }, 700);
    $('.hammer').animate({
      left: '550px',
      bottom: '50px'
    });
    $('.hammer').animate({
      bottom: '-25px',
      left: '400px',
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
  for(var count = 0; count < chosenHoles.length; count++){
    if(holeNumber == chosenHoles[count]){
      currentBugs.splice(count, 1);
    }
  }
}

$('.container').click(killBug);


export { prime, currentBugs };
