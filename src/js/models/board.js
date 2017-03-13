import { Bug } from './bug';

class Board{
  constructor(){
   // this.bugs = []; board.generate level fill it up with bugs
  }

  generateBug(bugId){
    var colorNumber = Math.random();
    var bugColor;
    if (colorNumber < .15){ bugColor = 'blue'; }
    else if (colorNumber < .3){ bugColor = 'red'; }
    else if (colorNumber < .45){ bugColor = 'yellow'; }
    else if (colorNumber < .6){ bugColor = 'green'; }
    else if (colorNumber < .8){ bugColor = 'purple'; }
    else if (colorNumber < 1){ bugColor = 'orange'; }

    var errorNumber = Math.random();
    var bugError;
    if (errorNumber < .1){
      bugError = 'gulp-notify: [Error running Gulp] Doh!';
    }else if (errorNumber < .2){
      bugError = '_main.Player is not a constructor';
    }else if (errorNumber < .3){
      bugError = 'undefined is not a function';
    }else if (errorNumber < .4){
      bugError = 'ReferenceError: Scoreboard is not defined,';
    }else if (errorNumber < .5){
      bugError = 'Error: Cannot find module';
    }else if (errorNumber < .6){
      bugError = '404 not found';
    }else if (errorNumber < .7){
      bugError = 'Syntax Error: Unexpected token';
    }else if (errorNumber < .8){
      bugError = 'zsh: command not found:';
    }else if (errorNumber < .9){
      bugError = 'infinite loop!!!';
    }else if (errorNumber < 1){
      bugError = 'error: pathspec did not match any file(s) known to git.';
    }

    var fred = new Bug({
      name: bugError,
      color: bugColor,
      id: bugId
    });
    return fred;
  }
}


export { Board };
