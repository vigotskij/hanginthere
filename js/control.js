window.Control = {
  createEmptyBox :  function ()
                    {
                      let box = document.createElement( "div" ) ;
                      box.className = "letter" ;
                      let after = document.querySelector( "body" ) ;
                      after.appendChild( box ) ;
                    } ,

  init :            function ( secretWord )
                    {
                      for ( let idx = 0 ; idx < secretWord.length ; idx++ )
                      {
                        window.Control.createEmptyBox( ) ;
                      }
                      Control.secretWord = secretWord ;
                    } ,
  secretWord :      ""
                    ,
  inputLetter :     function ( input )
                    {
                      for ( let idx = 0 ; idx < Control.secretWord.length ; idx++)
                      {
                        if ( input === Control.secretWord[ idx ] )
                        {
                          return true ;
                        }
                      };
                    } ,

} ;
