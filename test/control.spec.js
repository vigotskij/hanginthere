const expect = chai.expect;

describe("Control", function() {
  // aca van a ir los it( ...)
  it("should create window.Control", function()
    {
      expect(typeof window.Control).to.eql("object")
    }
  ) ;
  describe( 'About secretWord' , function ()
  {
    it('should paint N empty boxes for secretWord letters', function()
      {
        Control.init("pindonga") ;
        document.querySelectorAll(".letter") ;
        let boxes = document.querySelectorAll(".letter") ;
        chai.expect(boxes.length).to.eql("pindonga".length) ;
      //parece que al control que me pasaste no le falta nada

      }
    );

    it('should keep secretWord inside Control', function() {
      const word = "cachin";
      Control.init(word);
      expect(Control.secretWord).to.eql(word);
    }
    );

  //  it( 'should ask secretWord if has letter on user input' , function()
  //    {
  //        Control.init( "verdura" ) ;
  //        expect( Control.inputLetter( "e" ) ).to.eql( true ) ;
  //    }
  //  ) ;
    it ( 'Should return if given character is in secretWord' , function ( )
        {
          Control.init( "verdura" ) ;
          expect( Control.match( "e" ) ).to.eql( true ) ;
          expect( Control.match( "f" ) ).to.eql( false ) ;
        }
    ) ;
    it ( 'Should return if given character is repeated' , function ( )
        {
            Control.init( "faraona" ) ;
            expect( Control.repeatedLetter( "a" ) ).to.eql( true ) ;
            expect( Control.repeatedLetter( "o" ) ).to.eql( false ) ;
            expect( Control.repeatedLetter( "x" ) ).to.eql( false ) ;
        }
    ) ;
  } ) ;
  describe ( 'About input and inputs' , function()
  {
    it ( 'Should keep input inside Control' , function ()
      {
        const inp = "e" ;
        Control.inputLetter( inp ) ;
        expect( Control.input ).to.eql( inp ) ;
      }
    ) ;
    it ( 'Should remove input after use' , function ()
      {
        const inp = "f" ;
        Control.inputLetter( inp ) ;
        Control.removeInput() ;
        expect( Control.input ).to.eql( "" ) ;
      }
    ) ;
    it ( 'Should keep track of previous inputs' , function ( )
      {
        const inp1 = "d" ;
        const inp2 = "f" ;
        Control.inputLetter( inp1 ) ;
        Control.removeInput() ;
        Control.inputLetter( inp1 ) ;
        expect( Control.alreadyGiven( inp1 ) ).to.eql( true ) ;
        expect( Control.alreadyGiven( inp2 ) ).to.eql( false ) ;
      } ) ;
    it ( 'Should warn if current input has been already given' , function ( )
      {
        const inp = "e" ;
        Control.inputLetter( inp ) ;
        expect( Control.inputLetter( inp ) ).to.eql('hey! already given!') ;
      } ) ;
    it ( 'Should not take repeated inputs' , function ( )
      {
        Control.inputLetter( "e" ) ;
        Control.removeInput() ;
        Control.inputLetter( "e" ) ;
        expect( Control.input ).to.eql( '' ) ;
        } ) ;
    it ( 'Should store inputs' , function ( )
      {
        Control.removeInput() ;
        Control.init( "granada" ) ;
        Control.inputLetter( "g" ) ;
        Control.removeInput() ;
        Control.inputLetter( "f" ) ;
        Control.removeInput() ;
        expect( Control.matches[ 0 ] ).to.eql( "g" ) ;
        expect( Control.errors[ 0 ] ).to.eql( "f" ) ;
      } ) ;
    } ) ;

} ) ;
