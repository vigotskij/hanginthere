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
                      if ( this.match( input ) && !this.alreadyGiven( input ) )
                      {
                        this.storeInput( input ) ;
                      }
                      if ( this.alreadyGiven ( input ) )
                      {
                        return 'hey! already given!' ;
                      }
                    } ,
  repeatedLetter :  function ( input )
                    {
                      let repeated ;
                      if ( this.match ( input ) )
                      {
                        let firstIndex = this.secretWord.indexOf( input ) ;
                        if ( this.secretWord.indexOf( input , firstIndex + 1 ) !== -1 )
                        {
                          repeated = true ;
                        } else {
                          repeated = false ;
                        }
                      } else {
                        repeated = false ;
                      }
                      return repeated ;
                    } ,
  input :           "" ,
  removeInput :     function ()
                    {
                      this.input = "" ;
                    } ,
  matches :         [] ,
  errors :          [] ,

  storeInput :      function ( input )
                    {
                      if ( this.match( input ) )
                      {
                        this.matches.unshift( input ) ;
                      } else {
                        this.errors.unshift( input ) ;
                      }
                    } ,

  match :         function ( input )
                    {
                      return this.secretWord.indexOf(input) !== -1 ;
                    } ,

  alreadyGiven :    function ( input )
                    {
                      let result ;
                      for ( let idx = 0 ; idx < this.matches.length ; idx++ )
                      {
                        if ( this.matches[ idx ] === input )
                        {
                          result = true ;
                        }
                      }
                      for ( let idx = 0 ; idx < this.errors.length ; idx++ )
                      {
                        if ( this.errors[ idx ] === input )
                        {
                          result = true ;
                        }
                      }
                      result = false ;
                      return result ;
                    } ,

} ;
