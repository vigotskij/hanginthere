if (require instanceof Function) {
    var chai = require('chai');
}
const expect = chai.expect;

describe("Monigote", function() {
  it("should create window.Monigote", function()
    {
      expect(typeof window.Monigote).to.eql("object") ;
    }
  ) ;
  it ( 'Should read "errors" From Control' , function(){}) ;
  it ( 'Should draw once for every read on "errors"' , function(){}) ;
  it ( 'Should resetControl when "errors" reach idx = 5' , function(){}) ;
//  it ( '' , function(){}) ;
//  it ( '' , function(){}) ;
//  it ( '' , function(){}) ;
} ) ;
