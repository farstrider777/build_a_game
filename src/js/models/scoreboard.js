class Scoreboard{
  constructor(level, bugsToSquash){
    this.level = level;
    this.bugsToSquash = bugsToSquash;
  }
  writeInstructions(){
    var secondsLeft = 27 - this.level * 3;
    // 6 9
    // 5 12
    // 4 15
    // 3 18
    // 2 21
    // 1 24
    return `The boss says: You've got ${secondsLeft} seconds to fix ${this.bugsToSquash} bugs that are in this project`;
  }
}


export { Scoreboard };
