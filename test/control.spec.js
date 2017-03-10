'use strict';
var e = document.createElement ;
if (typeof window === 'undefined') {
    var chai = require('../bower_components/chai/chai');
    var expect = chai.expect;
    require('../node_modules/mocha-jsdom')({skipWindowCheck:true});

    require('../js/common.js');
    global.Control = require('../js/control.js');
    global.window = {Control: Control};
}

describe("Control", function() {
  // aca van a ir los it( ...)
  before( function( )
    {
      e = document.createElement("div") ;
      e.id = "main" ;
      document.querySelector("body").appendChild(e) ;
    } ) ;
  it("should create window.Control", function()
    {
      expect(typeof window.Control).to.eql("object") ;
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
      }
    );

    it('should keep secretWord inside Control', function() {
      const word = "cachin";
      Control.init(word);
      expect(Control.secretWord).to.eql(word);
    }
    );

    it ( 'Should return if given character is in secretWord' , function ( )
        {
          Control.init( "verdura" ) ;
          expect( Control.secretWord.contains( "e" ) ).to.eql( true ) ;
          expect( Control.secretWord.contains( "f" ) ).to.eql( false ) ;
        }
    ) ;
  } ) ;

  describe ( 'About input and inputs' , function()
  {

    it ( 'Should keep track of previous inputs' , function ( )
      {
        const inp1 = "d" ;
        const inp2 = "w" ;
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
    it ( 'Should store inputs' , function ( )
      {
        Control.init( "granada" ) ;
        Control.inputLetter( "g" ) ;
        Control.inputLetter( "f" ) ;
        expect( Control.matches[ 0 ] ).to.eql( "g" ) ;
        expect( Control.errors[ 0 ] ).to.eql( "f" ) ;
      } ) ;
    } ) ;

    describe ( "About utilities" , function( )
    {
      it ( "Should count occurrences" , function( )
      {
        const idxs = occurrences("s", "mississippi");
        expect( idxs[ 0 ] ).to.eql( 2 ) ;
        expect( idxs[ 1 ] ).to.eql( 3 ) ;
        expect( idxs[ 2 ] ).to.eql( 5 ) ;
        expect( idxs[ 3 ] ).to.eql( 6 ) ;
        // this way you know how many times its repeated
        expect( idxs.length ).to.eql( 4 );

      } ) ;
    } ) ;
} ) ;
