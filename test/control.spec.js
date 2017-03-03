describe("Control", function() {
  // aca van a ir los it( ...)
  before(function() {
      window.Control.secretWord = {
        length: 5
      }
    }
  );

  it("should create window.Control", function()
    {
      chai.expect(typeof window.Control).to.eql("object")
    }
  ) ;

  it('should paint N empty boxes for secretWord letters', function()
    {
      Control.init("pindonga") ;
      document.querySelectorAll(".letter") ;
      var boxes = document.querySelectorAll(".letter") ;
      chai.expect(boxes.length).to.eql("pindonga".length) ;
      //parece que al control que me pasaste no le falta nada

    }
  ) ;

  it('should ask secretWord if has letter on user input', function()
    {

    }
  ) ;

});
