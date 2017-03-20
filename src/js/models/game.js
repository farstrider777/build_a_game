import { Board } from './board.js';
import { Scoreboard } from './scoreboard.js';

class Game{
  constructor(){
    //object = object || {};
    this.board = new Board;
    this.scoreboard = new Scoreboard(1, 5);
    // this.board = object.board;
    // this.scoreboard = object.scoreboard;
  }

  startScreen(){

  }

  playScreen(){

  }


}

// Game object
// * board
// * scoreboard (imo, just holds bugs left and timer, level count)
// .startScreen()
// .playScreen()


export { Game };
