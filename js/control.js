'use strict';

var Control = {
  secretWord :      "" ,

  toWin :           0 ,
  matches :         [ ] ,
  errors :          [ ] ,
  available :       [
                      "a" , "b" , "c" , "d" ,"e" , "f" , "g" , "h" , "i" , "j" ,
                      "k" , "l" , "m" , "n" , "o" , "p" , "q" , "r" , "s" , "t" ,
                      "u" , "v" , "w" , "x" , "y" , "z"
                    ] ,
  wins :            0 ,
  losses :          0 ,

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

                      this.gameOn() ;
                      return ;
                    } ,

  gameOn :            function()
                    {
                      let evtListener = function ( evt )
                      {
                        const input = String.fromCharCode( evt.charCode ).toLowerCase() ;

                        Control.inputLetter( input ) ;
                        if ( this.errors.length === 6 )
                        {
                          this.losses++ ;
                          const gallowDiv = document.querySelector( "#gallow" ) ;
                          gallowDiv.innerHTML = "<div class ='parts'>You lose! The word was: " + this.secretWord + " and your record is " + this.wins + " wins and " + this.losses + " losses.</div>" ;
                          document.removeEventListener( "keypress", evtListener ) ;

                        } else if ( this.toWin === this.secretWord.length ) {
                          this.wins++ ;
                          const mainDiv = document.querySelector( "#main" ) ;
                          mainDiv.innerHTML = "<div class = 'letter'>You won! The word was: " + this.secretWord + " and your record is " + this.wins + " wins and " + this.losses + " losses.</div>" ;
                          document.removeEventListener( "keypress", evtListener ) ;
                        } else {
                          ;
                        }
                      }.bind( this ) ;
                      document.addEventListener( "keypress" , evtListener ) ;
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
                          inMatches = this.matches.indexOf( input ) !== -1 ,
                          inAvailable = this.available.indexOf( input ) === -1 ;
                      return ( inErrors || inMatches || inAvailable ) ;
                    } ,
  monigoteDraw :    function()
                    {
                      this.fillBox( this.errors.length - 1 , this.errors[ 0 ] , ".parts" ) ;
                    } ,

  button :          function ()
                    {
                      const divLetter = document.querySelector( ".letter" ) ;
                      if ( divLetter === null )
                      {
                        Control.init( Dictionary.randomValue() ) ;
                      } else {
                        Control.resetGame() ;
                        Control.init( Dictionary.randomValue() ) ;
                      }
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
