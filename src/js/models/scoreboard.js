class Scoreboard{
  constructor(level, bugsToSquash){
    this.level = level;
    this.bugsToSquash = bugsToSquash;
  }
  writeInstructions(){
    var secondsLeft = 36 - this.level * 3;
    return `Level ${this.level}<br>The boss says: You've got ${secondsLeft} seconds to fix ${this.bugsToSquash} bugs that are in this project`;
  }
}

export { Scoreboard };
