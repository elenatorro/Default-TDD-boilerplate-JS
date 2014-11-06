// -- Dependencies ------------------------------------------------------

var should = require("should");
var DefaultObject = require("../lib/DefaultObject");

// -- Tests -------------------------------------------------------------

describe('Default Test: ', function(){
  describe('Group 2', function(){
    it('should return -1 when the value is not present', function(){
      var defaultObject = new DefaultObject();
      defaultObject.defaultVariable().should.eql('default');
    })
  })
})
