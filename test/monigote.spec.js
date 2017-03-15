'use strict' ;

describe ( 'Monigote' , function()
{
  it ( 'Should create window.Monigote' , function ( )
    {
      expect(typeof window.Monigote).to.eql("object") ;
    } ) ;
    it ( 'Should warn when errors reach its limit' , function ( )
      {
        Monigote.errors = 4 ;
        expect( Monigote.hangman() ).to.eql( ' you still alive' ) ;
        Monigote.errors++ ; // 5
        expect( Monigote.hangman() ).to.eql( ' you still alive' ) ;
        Monigote.errors++ ; // 6
        expect( Monigote.hangman() ).to.eql( ' you dead, madafaca' ) ;
      } ) ;
  it ( 'Should draw a piece of the hanging dude for every error' , function ( )
    {
        Monigote.errors = 0 ;
        Monigote.draw() ;
        expect().to.eql() ;
        Monigote.errors = 1 ;
        Monigote.draw() ;
        expect().to.eql() ;
        Monigote.errors = 2 ;
        Monigote.draw() ;
        expect().to.eql() ;
        Monigote.errors = 3 ;
        Monigote.draw() ;
        expect().to.eql() ;
        Monigote.errors = 4 ;
        Monigote.draw() ;
        expect().to.eql() ;
        Monigote.errors = 5 ;
        Monigote.draw() ;
        expect().to.eql() ;
        Monigote.errors = 6 ;
        Monigote.draw() ;
        expect().to.eql() ;
    } ) ;

    describe ( 'About interaction with Control' , function ()
    {
      it ( 'Should receive errors from Control' , function ( )
        {
          Monigote.errors = 0 ;
          Control.init( "granada" ) ;
          Control.inputLetter( "e" ) ;
          expect( Control.errors.length ).to.eql( Monigote.errors ) ;
          Control.inputLetter( "j" ) ;
          expect( Control.errors.length ).to.eql( Monigote.errors ) ;
          Control.inputLetter( "r" ) ;
          expect( Control.errors.length ).to.eql( Monigote.errors ) ;
        } ) ;
      it ( 'Should kill tha madafaca when it is hanging time', function ( )
        {
          Monigote.errors = 5 ;
          Control.init( "grava" ) ;
          Control.inputLetter( "q" ) ;
          // lo siguiente debería ser que se espera un alert o algo por el estilo
          // que avise que el juego se terminó
          expect( Monigote.hangman() ).to.eql( ' you dead, madafaca' ) ;
          expect( Control.secretWord ).to.eql( '' ) ;
          expect( Control.errors.length ).to.eql( 0 ) ;
          expect( Control.matches.length ).to.eql( 0 ) ;
        } ) ;

    } ) ;
  } ) ;
