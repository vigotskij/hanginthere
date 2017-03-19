'use strict';

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
      const e = document.createElement("div") ;
      e.id = "main" ;
      const f = document.createElement("div") ;
      f.id = "gallow" ;
      document.querySelector( "body" ).appendChild( e ) ;
      document.querySelector( "body" ).appendChild( f ) ;
    } ) ;
  //  beforeEach( function () {
    //  Control.resetGame() ;
//    } ) ;
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
    it ( 'Should win the game once secretWord is full revealed' , function ( )
        {
          Control.toWin = 0 ;
          Control.init("barata") ;
          Control.inputLetter( "a" ) ;
          expect( Control.toWin ).to.eql( 3 ) ;

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

  describe ( 'About limits of the game' , function(){
    it ( 'Should take lower and upper case letters as same' , function ( )
        {
            Control.init( "coliflor" ) ;
            Control.evtListener( 65 ) ;
            expect( Control.alreadyGiven( "a" ) ).to.eql( true ) ;

        }
      ) ;
    it ( 'Should clean everything after finish the game' , function ( )
        {
          Control.resetGame();
          let boxes002 = document.querySelectorAll(".letter") ;
          expect( Control.secretWord ).to.eql( "" ) ;
          expect( Control.matches.length ).to.eql( 0 ) ;
          expect( Control.errors.length ).to.eql( 0 ) ;
          expect( Control.toWin ).to.eql( 0 ) ;
          expect( boxes002.length ).to.eql( 0 ) ;
        }
    ) ;
    it ( 'Should draw a piece of the hanging dude for every error' , function ( )
      {
        Control.init( "camarao" ) ;
        let gallow = document.querySelectorAll( ".parts" ) ;
        Control.errors.length = 1 ;
        Control.monigoteDraw() ;
        expect( gallow[ 0 ].outerHTML ).to.eql( '<div class="parts">x</div>' ) ;
        Control.errors.length = 2 ;
        Control.monigoteDraw() ;
        expect( gallow[ 1 ].outerHTML ).to.eql( '<div class="parts">x</div>' ) ;
        Control.errors.length = 3 ;
        Control.monigoteDraw() ;
        expect( gallow[ 2 ].outerHTML ).to.eql( '<div class="parts">x</div>' ) ;
        Control.errors.length = 4 ;
        Control.monigoteDraw() ;
        expect( gallow[ 3 ].outerHTML ).to.eql( '<div class="parts">x</div>' ) ;
        Control.errors.length = 5 ;
        Control.monigoteDraw() ;
        expect( gallow[ 4 ].outerHTML ).to.eql( '<div class="parts">x</div>' ) ;
        Control.errors.length = 6 ;
        Control.monigoteDraw() ;
        expect( gallow[ 5 ].outerHTML ).to.eql( '<div class="parts">x</div>' ) ;
      } ) ;
  } ) ;



} ) ;
