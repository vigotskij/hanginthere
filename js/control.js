window.Control = {
  createEmptyBox :  function ()
                    {
                      let box = document.createElement( "div" ) ;
                      box.className = "letter" ;
                      let after = document.querySelector( "body" ) ;
                      after.appendChild( box ) ;
                    } ,

  fillFirstBox :    function ( firstChar )
                    {
                      let firstBox = document.querySelector( ".letter" ) ;
                      firstBox.innerText = firstChar ;
                    } ,

  fillLastBox :     function ( lastChar )
                    {
                      let boxes = document.querySelectorAll( ".letter" ) ;
                      let lastBox = boxes[ boxes.length - 1 ] ;
                      lastBox.innerText = lastChar ;
                    } ,
  fillBoxes :       function ( first , last )
                    {
                      this.fillFirstBox( first ) ;
                      this.fillLastBox( last ) ;
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

                      this.fillBoxes ( first , last ) ;
                    } ,
  secretWord :      "" ,

  inputLetter :     function ( input )
                    {
                      this.input = input ;
                      if ( this.alreadyGiven ( this.input ) )
                      {
                        this.removeInput() ;
                        return 'hey! already given!' ;
                      } else {
                        this.storeInput( this.input ) ;
                      }
                    } ,

  input :           "" ,
  removeInput :     function ()
                    {
                      this.input = "" ;
                    } ,
  matches :         [ ] ,
  errors :          [ ] ,

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
