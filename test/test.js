
// Import Chai
import chai from 'chai';

// Import Any Files to Test

// Set Chai Constants
const expect = chai.expect;
const should = chai.should();
const assert = chai.assert;


import { Board } from '../src/js/models/board';
import { Bug } from '../src/js/models/bug';
import { Scoreboard } from '../src/js/models/scoreboard';
//import { Hammer } from '../src/js/models/hammer';

// describe our game
  // describe a bug
    // describe creating a bug
      // it should have a name
      // it should have an id
      // it hsould have a color
      // it should have an explosion
    // describe fighting a bug
      // it should do .... methods
  // describe a Board
    // describe creating a Board
    //

describe('Test our game', function () {

  describe('Testing the Creation of a Bug', function () {


    it('a Bug should exist after we create it', function () {
      let x = new Bug;
      expect(x).to.be.an.instanceof(Bug);
    });

    it('a Bug should have a name property.', function () {
      var bill = new Bug({
        name: 'error',
      });
      assert.equal('error', bill.name);
    });

    it('a Bug should have a color property.', function () {
      var bill = new Bug({
        color: 'red',
      });
      assert.equal('red', bill.color);
    });

    it('a Bug should have an id property.', function () {
      var bill = new Bug({
        id: 2,
      });
      assert.equal(2, bill.id);
    });
  });

  describe('Testing the Creation of a Board', function () {
    it('a Board should exist after we create it', function () {
      let x = new Board;
      expect(x).to.be.an.instanceof(Board);
    });

    it('a Board has a generateBug method that makes a bug with an id = to argument passed to it.', function () {
      var fun = new Board();
      assert.equal(1, fun.generateBug(1).id);
    });

  });




  describe('Testing the Creation of a Scoreboard', function () {
    it('a Scoreboard should exist after we create it', function () {
      let x = new Scoreboard;
      expect(x).to.be.an.instanceof(Scoreboard);
    });

    it('a Scoreboard should have a level property that you enter as an argument', function () {
      var fun = new Scoreboard(2, 5);
      assert.equal(2, fun.level);
    });

    it('a Scoreboard should have a number of bugs to squash you enter as an argument', function () {
      var fun = new Scoreboard(2, 5);
      assert.equal(5, fun.bugsToSquash);
    });

    it('a Scoreboard should have a writeInstructions method that returns a string with the bosses instructions', function() {
      var fun = new Scoreboard(1, 3);
      assert.equal(`Level 1<br>The boss says: You've got 33 seconds to fix ${3} bugs that are in this project`, fun.writeInstructions());
    });

    it('a Scoreboards writeInstructions method should write the number of seconds left based on the level', function() {
      var fun = new Scoreboard(1, 3);
      assert.equal(`Level 1<br>The boss says: You've got 33 seconds to fix ${3} bugs that are in this project`, fun.writeInstructions());
      var fun = new Scoreboard(2, 4);
      assert.equal(`Level 2<br>The boss says: You've got 30 seconds to fix ${4} bugs that are in this project`, fun.writeInstructions());
      var fun = new Scoreboard(3, 5);
      assert.equal(`Level 3<br>The boss says: You've got 27 seconds to fix ${5} bugs that are in this project`, fun.writeInstructions());
      var fun = new Scoreboard(4, 6);
      assert.equal(`Level 4<br>The boss says: You've got 24 seconds to fix ${6} bugs that are in this project`, fun.writeInstructions());
    });


  });


  // describe('Testing the Creation of a Hammer', function () {
  //   it('a Hammer should exist after we create it', function () {
  //     let x = new Hammer;
  //     expect(x).to.be.an.instanceof(Hammer);
  //   });
  //
  //   it('a Hammer should have a squash method that adds a dead property to a bug that it squashes', function() {
  //     var bam = new Hammer;
  //     var bill = new Bug;
  //     bam.squash(bill);
  //     assert.equal(bill.dead, true);
  //   });
  //
  // });
});
  // describe('Testing the Creation of Something', function () {
  //
  //   it('should exist after we create it', function () {
  //     let x = new Object;
  //     expect(x).to.be.an.instanceof(Object);
  //   });
  //
  // });









/*



// Import Chai
import chai from 'chai';

// Import Any Files to Test

// Set Chai Constants
const expect = chai.expect;
const should = chai.should();
const assert = chai.assert;

describe('Something We Want To Test', function () {

  describe('Testing the Creation of Something', function () {

    it('should exist after we create it', function () {
      let x = new Object;
      expect(x).to.be.an.instanceof(Object);
    });

  });


});

*/
