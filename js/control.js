window.Control = {
  createEmptyBox :  function ()
                    {
                      let box = document.createElement( "div" ) ;
                      box.className = "letter" ;
                      let after = document.querySelector( "body" ) ;
                      after.appendChild( box ) ;
                    } ,

  fillFirstBoxWithFirstChar : function ( const firstChar )
                    {
                      let firstBox = document.querySelector( "letter" ) ;
                      firstBox.innerHTML = firstChar ;
                    } ,

  fillLastBoxWithLastChar : function ( const lastChar )
                    {
                      let boxes = document.querySelectorAll( "letter" ) ;
                      let lastBox = boxes[ boxes.length - 1 ] ;
                      lastBox.innerHTML = lastChar ;
                    }
  init :            function ( const secretWord )
                    {
                      for ( let idx = 0 ; idx < secretWord.length ; idx++ )
                      {
                        window.Control.createEmptyBox( ) ;
                      }

                      Control.secretWord.revealed = secretWord ;
                      Control.secretWord.initialized = true ;
                      Control.secretWord.first = secretWord [ 0 ] ;
                      Control.secretWord.last = secretWord [ secretWord.length - 1 ] ;

                      fillFirstBoxWithFirstChar ( ) ;
                      fillLastBoxWithLastChar ( ) ;
                    } ,
  secretWord :      {
                        revealed : "" ,
                        initialized : false ,
                        first : "" ,
                        last : "" ,

                        order : "" , // I guess it has to exist, but I don't know
                                    // how to make it happen (yet).
                        lettersQuantity : "" , // same than last key.

                        has : function ( const input )
                        {
                          for ( let idx = 0 ; idx < Control.secretWord.length ; idx++)
                          {
                            if ( input === Control.secretWord.revealed[ idx ] )
                            {
                              return true ;
                            }
                          };
                        } ,
                    }
                    ,
  inputLetter :     function ( const input ) {}
                    //

} ;
