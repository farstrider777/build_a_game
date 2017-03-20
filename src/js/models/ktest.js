import $ from 'jquery';
import { thisGame } from '../controller.js';



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
  for(var count = 0; count < thisGame.board.chosenHoles.length; count++){
    if(holeNumber == thisGame.board.chosenHoles[count]){
      thisGame.board.currentBugs.splice(count, 1);
    }
  }
}

export { killBug };
