var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })

  it('can add', function(){
    calculator.clearClick();
    calculator.numberClick(2);
    calculator.numberClick(0);
    calculator.operatorClick("+");
    calculator.numberClick(5);
    calculator.operatorClick("=");
    assert.equal(25, calculator.runningTotal);
  })

  it('can subtract', function(){
    calculator.clearClick();
    calculator.numberClick(2);
    calculator.numberClick(0);
    calculator.operatorClick("-");
    calculator.numberClick(5);
    calculator.operatorClick("=");
    assert.equal(15, calculator.runningTotal);
  })

  it('can multiply', function(){
    calculator.clearClick();
    calculator.numberClick(2);
    calculator.numberClick(0);
    calculator.operatorClick("*");
    calculator.numberClick(5);
    calculator.operatorClick("=");
    assert.equal(100, calculator.runningTotal);
  })

  it('can divide', function(){
    calculator.clearClick();
    calculator.numberClick(2);
    calculator.numberClick(0);
    calculator.operatorClick("/");
    calculator.numberClick(4);
    calculator.operatorClick("=");
    assert.equal(5, calculator.runningTotal);
  })

  it('can click all numbers', function(){
    calculator.clearClick();
    calculator.numberClick(1);
    calculator.numberClick(2);
    calculator.operatorClick("+");
    calculator.numberClick(3);
    calculator.numberClick(4);
    calculator.operatorClick("+");
    calculator.numberClick(5);
    calculator.numberClick(6);
    calculator.operatorClick("+");
    calculator.numberClick(7);
    calculator.numberClick(8);
    calculator.operatorClick("+");
    calculator.numberClick(9);
    calculator.numberClick(0);
    calculator.operatorClick("=");
    assert.equal(270, calculator.runningTotal);
  })

  it('can click all operators', function(){
    calculator.clearClick();
    calculator.numberClick(1);
    calculator.operatorClick("+");
    calculator.numberClick(10);
    calculator.operatorClick("-");
    calculator.numberClick(2);
    calculator.operatorClick("*");
    calculator.numberClick(3);
    calculator.operatorClick("/");
    calculator.numberClick(9);
    calculator.operatorClick("=");
    assert.equal(3, calculator.runningTotal);
  })

  it('can clear the calcultor', function(){
    calculator.clearClick();
    calculator.numberClick(10);
    calculator.operatorClick("*");
    calculator.numberClick(5);
    calculator.operatorClick("=");
    calculator.clearClick();
    assert.equal(0, calculator.runningTotal);
  })




});
