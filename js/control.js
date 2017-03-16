'use strict';

var Control = {
  secretWord :      "" ,

  toWin :           0 ,
  matches :         [ ] ,
  errors :          [ ] ,

  createEmptyBox :  function ()
                    {
                      let box = document.createElement( "div" ) ;
                      box.className = "letter" ;
                      let after = document.querySelector( "#main" ) ;
                      after.appendChild( box ) ;
                    } ,
  createGallowBox : function ()
                    {
                      let box = document.createElement( "div" ) ;
                      box.className = "parts" ;
                      let after = document.querySelector( "#gallow" ) ;
                      after.appendChild( box ) ;
                    } ,
  fillBox :         function (idx, letter , classDiv )
                    {
                    var box = document.querySelectorAll( classDiv )[idx] ;
                    box.innerText = letter ;
                    } ,
  revealFromSecretWord : function ( idx )
                    {
                      this.fillBox( idx , this.secretWord[ idx ] , ".letter" ) ;
                    } ,
  revealFirst :     function()
                    {
                      this.revealFromSecretWord( 0 ) ;
                    } ,
  revealLast :      function()
                    {
                      this.revealFromSecretWord( this.secretWord.length - 1 )
                    } ,
  cleanBoxes :      function ()
                    {
                      const mainDiv = document.querySelector( "#main" ) ;
                      const boxes = document.querySelectorAll( ".letter" ) ;
                      const gallowDiv = document.querySelector( "#gallow" ) ;
                      const parts = document.querySelectorAll( ".parts" ) ;

                      for ( let idx = 0 ; idx < boxes.length ; idx++ )
                      {
                        mainDiv.removeChild( boxes[ idx ] ) ;
                      }
                      for (let idx = 0 ; idx < parts.length ; idx++ )
                      {
                        gallowDiv.removeChild( parts[ idx ] ) ;
                      }
                    } ,
  init :            function ( secretWord )
                    {
                      for ( let idx = 0 ; idx < secretWord.length ; idx++ )
                      {
                        this.createEmptyBox( ) ;
                      }
                      for ( let idx = 0 ; idx < 6 ; idx++ )
                      {
                        this.createGallowBox() ;
                      }

                      this.secretWord = secretWord ;

                //      this.revealFirst() ;
                  //    this.revealLast() ;
                      this.gameOn() ;

                    } ,

gameOn :            function()
                    {
                      document.addEventListener( "keypress" , function( evt ) {
                          const input = String.fromCharCode( evt.charCode ) ;
                          Control.inputLetter( input ) ;
                      if ( that.errors.length === 6 )
                      {
                        alert( "yo, you r dead!" ) ;
                        this.resetGame() ;
                      } else if ( this.toWin === this.secretWord.length ) {
                        alert( "yo, you r saved!") ;
                        this.resetGame() ;
                      } else {
                        ;
                      }
                    }.bind( this ) ) ;
                    } ,

  inputLetter :     function ( input )
                    {
                      if ( this.alreadyGiven ( input ) )
                      {
                        return 'hey! already given!' ;
                      } else {
                        this.storeInput( input ) ;

                        this.secretWord.occurrences( input , this.revealFromSecretWord.bind( this ) ) ;
                      }
                    } ,

  resetGame :    function ()
                    {
                      this.secretWord = "" ;
                      this.matches = [] ;
                      this.errors = [] ;
                      this.toWin = 0 ;
                      this.cleanBoxes() ;
                    } ,

  storeInput :      function ( input )
                    {
                      if ( this.secretWord.contains( input ) )
                      {
                        this.matches.unshift( input ) ;
                      } else {
                        this.errors.unshift( input ) ;
                        this.monigoteDraw() ;
                      }
                    } ,

  alreadyGiven :    function ( input )
                    {
                      let
                          inErrors  = this.errors.indexOf( input ) !== -1 ,
                          inMatches = this.matches.indexOf( input ) !== -1 ;
                      return ( inErrors || inMatches ) ;
                    } ,
  monigoteDraw :    function()
                    {
                      this.fillBox( this.errors.length - 1 , "x" , ".parts" ) ;
                    } ,
  hangman :         function()
                    {
                      // esto deberìa leer activamente errors, dentro de Monigote,
                      // y actuar según la cantidad de errores.
                      if ( this.errors.length < 6 ) { return ' you still alive' ; }
                      else { this.resetGame() ; return ' you dead, madafaca' ; }
                      // antes de llamar a resetGame, bien podría salir un alert,
                      // o algo por el estilo... para pensarlo.
                    } ,
  requestWord :     function()
                    {
                      ;
                    } ,
  listeningForInput : function()
                    {
                      ;
                    } ,
  listeningForWord :  function()
                    {
                      ;
                    } ,
  } ;

function contains( element , collection )
{
  return collection.indexOf( element ) !== -1 ;
}
String.prototype.contains = function ( input )
{
    return contains( input , this ) ;
};

String.prototype.occurrences = function ( input, fn )
{
    return occurrences( this, input , fn );
}

if (typeof window !== 'undefined') {
    window.Control = Control;
} else {
    module.exports = Control;
}
