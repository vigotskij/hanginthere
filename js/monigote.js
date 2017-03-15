 var Monigote = {
  errors :        0 ,

  draw :          function()
                  {
                    // acá si que no tengo idea de cómo hacer, pero tiene que
                    // dibujar con cada incremento de this.errors.
                    ;
                  } ,
  hangman :       function()
                  {
                    // esto deberìa leer activamente errors, dentro de Monigote,
                    // y actuar según la cantidad de errores.
                    if ( this.errors < 6 ) { return ' you still alive' ; }
                    else { Control.resetGame() ; return ' you dead, madafaca' ; }
                    // antes de llamar a resetGame, bien podría salir un alert,
                    // o algo por el estilo... para pensarlo.
                  } ,

}


// en realidad, empiezo a pensar que monigote no tiene mucho sentido como
// módulo aparte. Creo que mañana paso estas dos funciones a Control
// con sus respectivos tests, y eliminaré Monigote.errors
