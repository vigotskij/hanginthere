window.Control = {
  createEmptyBox :  function ()
                    {
                      let box = document.createElement( "div" ) ;
                      box.className = "letter" ;
                      let after = document.getElementsByTagName( "body" ) ;
//                      document.body.insertBefore( box , after ) ;
                      after.innerHTML = box ; // acá esperaba que creara un box por vuelta
                                              // pero no crea ninguno
                                              // también creo que estoy más cerca :D

                    } ,
  init :            function ( secretWord )
                    {
                      for ( let idx = 0 ; idx < secretWord.length ; idx++ )
                      {
                        window.Control.createEmptyBox( ) ;
                      }
                    } ,

} ;
