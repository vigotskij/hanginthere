describe("Control", function() {
  // aca van a ir los it( ...)
  before(function() {
   window.Control.secretWord = {
        length: 5
   }
});

  it("should create window.Control", function()
    {
      chai.expect(typeof window.Control).to.eql("object")
    }
  );

it('should paint N empty boxes for secretWord letters', function() {});

it('should ask secretWord if has letter on user input', function() {});

});
