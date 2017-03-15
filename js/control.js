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

  fillBox :         function (idx, letter)
                    {
                    var box = document.querySelectorAll(".letter")[idx];
                    box.innerText = letter ;
                    } ,
  revealFromSecretWord : function ( idx )
                    {
                      this.fillBox( idx , this.secretWord[ idx ] ) ;
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

                      for ( let idx = 0 ; idx < boxes.length ; idx++ )
                      {
                        mainDiv.removeChild( boxes[ idx ] ) ;
                      }
                    } ,
  init :            function ( secretWord )
                    {
                      for ( let idx = 0 ; idx < secretWord.length ; idx++ )
                      {
                        this.createEmptyBox( ) ;
                      }

                      this.secretWord = secretWord ;

                //      this.revealFirst() ;
                  //    this.revealLast() ;
                      this.gameOn() ;

                    } ,

gameOn :            function()
                    {
                      let that = this ;
                      document.addEventListener( "keypress" , function( evt ) {
                      //    alert( "GameOn" ) ;
                          const input = String.fromCharCode( evt.charCode ) ;
                          Control.inputLetter( input ) ;
                      if ( ( that.errors.length === 6) || ( that.toWin === that.secretWord.length ) )
                      {
                    //    alert( "GameOff" ) ;
                        that.resetGame() ;
                      }
                    } ) ;
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
                      // acá si que no tengo idea de cómo hacer, pero tiene que
                      // dibujar con cada incremento de this.errors.
                      ;
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
