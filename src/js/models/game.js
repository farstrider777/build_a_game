import { Board } from './board.js';
import { Scoreboard } from './scoreboard.js';
import { popBug } from './popBug.js';

class Game{
  constructor(){
    this.board = new Board;
    this.scoreboard = new Scoreboard(1, 5);
  }

  popBug2(){
    popBug();
  }

}

export { Game };
