var assert = require('assert');
var controller = require('../eventController');

describe('Testing version',function(){

  it( 'should match the value', function(){

    let x = controller.version();
    assert.equal(x, "1.0.0");


  });

});

describe('Testing event name from eventObj1 ',function(){

  it( 'should match the value', function(){

    let x = controller.events();

    assert.equal(x[0].eventName, "DevOps Bootcamp 1");



  });

});

