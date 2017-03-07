const expect = chai.expect;

describe("Control", function() {
  // aca van a ir los it( ...)

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
  );

  it('should keep secretWord inside Control', function() {
     let word = "cachin";
     Control.init(word);
     expect(Control.secretWord.revealed).to.eql(word);
  });

  it('should ask secretWord if has letter on user input', function()
    {
        Control.init( "verdura" );
        expect( Control.inputLetter( "e" ) ).to.eql( true ) ;
    }
  ) ;
  it ('Should return if given character is in secretWord', function ()
      {
        Control.init( "verdura" ) ;
        expect(Control.secretWord.has( "e" ) ).to.eql( true ) ;
        expect(Control.secretWord.has( "f" ) ).to.eql( false ) ;
      }
  ) ;
});
