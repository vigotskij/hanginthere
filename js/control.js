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
                    var box = document.querySelectorAll( classDiv )[idx];
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
                      const parts = document.querySelectorAll( ".parts" ) ;

                      for ( let idx = 0 ; idx < boxes.length ; idx++ )
                      {
                        mainDiv.removeChild( boxes[ idx ] ) ;
                      }
                      for (let idx = 0 ; idx < parts.length ; idx++ )
                      {
                        mainDiv.removeChild( parts[ idx ] ) ;
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
                    //  let that = this ;
                      document.addEventListener( "keypress" , function( evt ) {
                      //    alert( "GameOn" ) ;
                          const input = String.fromCharCode( evt.charCode ) ;
                          Control.inputLetter( input ) ;
                      if ( ( that.errors.length === 6) || ( this.toWin === this.secretWord.length ) )
                      {
                    //    alert( "GameOff" ) ;
                        this.resetGame() ;
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
                      switch ( this.errors.length ) {
                        case 0 :
                          ;
                          break;
                        case 1 :
                          this.fillBox( 1 , "x" , ".parts" ) ;
                          break;
                        case 2 :
                          this.fillBox( 2 , "x" , ".parts" ) ;
                          break;
                        case 3 :
                          this.fillBox( 3 , "x" , ".parts" ) ;
                          break;
                        case 4 :
                          this.fillBox( 4 , "x" , ".parts" ) ;
                          break;
                        case 5 :
                          this.fillBox( 5 , "x" , ".parts" ) ;
                          break;
                        case 6 :
                          this.fillBox( 6 , "x" , ".parts" ) ;
                          break;
                      }
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
