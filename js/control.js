'use strict';

var Control = {
  secretWord :      "" ,

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
                          alert( "GameOn" ) ;
                          const input = String.fromCharCode( evt.charCode ) ;
                          Control.inputLetter( input ) ;
                      if ( ( that.errors.length === 6) || ( that.matches.length === that.secretWord.length ) )
                      {
                        alert( "GameOff" ) ;
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
                      Monigote.errors = 0 ;
                    } ,

  storeInput :      function ( input )
                    {
                      if ( this.secretWord.contains( input ) )
                      {
                        this.matches.unshift( input ) ;
                      } else {
                        this.errors.unshift( input ) ;
                        this.errorToMonigote() ;
                      }
                    } ,

  alreadyGiven :    function ( input )
                    {
                      let
                          inErrors  = this.errors.indexOf( input ) !== -1 ,
                          inMatches = this.matches.indexOf( input ) !== -1 ;
                      return ( inErrors || inMatches ) ;
                    } ,
  errorToMonigote : function()
                    {
                      Monigote.errors++ ;
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
