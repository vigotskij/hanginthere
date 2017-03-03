window.Control = {
  createEmptyBox :  function ()
                    {
                      document.createElement( div [ letter , letter-box ]) ;
                    } ,
  init :            function ( secretWord )
                    {
                      for ( let idx = 0 ; idx < secretWord.length ; idx++ )
                      {
                        window.Control.createEmptyBox( ) ;
                      }
                    } ,

} ;
