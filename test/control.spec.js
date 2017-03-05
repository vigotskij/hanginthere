const expect = chai.expect;

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
  );

  it('should keep secretWord inside Control', function() {
     let word = "cachin";
     Control.init(word);
     expect(Control.secretWord).to.eql(word);
  });

  it('should ask secretWord if has letter on user input', function()
    {
        let   
            _check = "",
            word   =
            {
                length: 2,
                has: function(letter) {
                    _check = letter;
                }
            };

        Control.init(word);
        Control.inputLetter("e");
        expect(_check).to.eql("e");
    }
  ) ;

});
