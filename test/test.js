
// Import Chai
import chai from 'chai';

// Import Any Files to Test

// Set Chai Constants
const expect = chai.expect;
const should = chai.should();
const assert = chai.assert;

import { Player } from '../src/js/main';
import { Board } from '../src/js/models/board'

describe('Test our game', function () {

  it('test player', function () {
    //let item = new Player();

    var bill = new Player({
      hitPoints: 7,
      attackValue: 5
    });
    //item.tick();
    assert.equal(7, bill.hitPoints);
    assert.equal(5, bill.attackValue);
  });

  describe('Testing the Creation of Something', function () {

    it('should exist after we create it', function () {
      let x = new Board;
      expect(x).to.be.an.instanceof(Board);
    });

  });

  // describe('Testing the Creation of Something', function () {
  //
  //   it('should exist after we create it', function () {
  //     let x = new Object;
  //     expect(x).to.be.an.instanceof(Object);
  //   });
  //
  // });


});






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
