class Scoreboard{
  constructor(level, bugsToSquash){
    this.level = level;
    this.bugsToSquash = bugsToSquash;
  }
  writeInstructions(){
    return `The boss says: You've got 30 seconds to fix ${this.bugsToSquash} bugs that are in this project`;
  }
}


export { Scoreboard };
