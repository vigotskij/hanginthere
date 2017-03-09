window.Control = {
  secretWord :      "" ,

  matches :         [ ] ,
  errors :          [ ] ,

  input :           "" ,

  createEmptyBox :  function ()
                    {
                      let box = document.createElement( "div" ) ;
                      box.className = "letter" ;
                      let after = document.querySelector( "body" ) ;
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
                      const first = secretWord [ 0 ] ;
                      const last = secretWord [ secretWord.length - 1 ] ;
                      const end = secretWord.length - 1
                      this.revealFirst() ;
                      this.revealLast() ;
                    } ,

  inputLetter :     function ( input )
                    {
                      this.input = input ;
                      if ( this.alreadyGiven ( this.input ) )
                      {
                        this.removeInput() ;
                        return 'hey! already given!' ;
                      } else {
                        this.storeInput( this.input ) ;
                        //this.revealFromSecretWord( this.secretWord.occurrences( input ) ) ;
                      }
                    } ,

  removeInput :     function ()
                    {
                      this.input = "" ;
                    } ,
  resetControl :    function ()
                    {
                      this.secretWord = "" ;
                      this.matches = [] ;
                      this.errors = [] ;
                      removeInput() ;
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
  } ;

function contains( element , collection )
{
  return collection.indexOf( element ) !== -1 ;
}
String.prototype.contains = function ( input )
{
    return contains( input , this ) ;
};

function occurrences( input , word , fn )
{
        let result = [] ;
        let idx = -1 ;
        while ( ( idx = word.indexOf( input , idx + 1) ) !== -1 )
        {
          result.push( idx ) ;
          if ( typeof fn === 'function' )
          {
            fn( input , idx) ;
          }
        }
        return result ;
}

String.prototype.occurrences = function ( input, fn )
{
    return occurrences( input , this , fn );
}

function found( letter , idx )
{
  return ( letter + " is at " + idx + "<br>" ) ;
}
