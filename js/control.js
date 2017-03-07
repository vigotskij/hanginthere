window.Control = {
  createEmptyBox :  function ()
                    {
                      let box = document.createElement( "div" ) ;
                      box.className = "letter" ;
                      let after = document.querySelector( "body" ) ;
                      after.appendChild( box ) ;
                    } ,

  fillFirstBoxWithFirstChar : function ( firstChar )
                    {
                      let firstBox = document.querySelector( ".letter" ) ;
                      firstBox.innerText = firstChar ;
                    } ,

  fillLastBoxWithLastChar : function ( lastChar )
                    {
                      let boxes = document.querySelectorAll( ".letter" ) ;
                      let lastBox = boxes[ boxes.length - 1 ] ;
                      lastBox.innerText = lastChar ;
                    } ,
  init :            function ( secretWord )
                    {
                      for ( let idx = 0 ; idx < secretWord.length ; idx++ )
                      {
                        window.Control.createEmptyBox( ) ;
                      }

                      this.secretWord.revealed = secretWord ;
                      this.secretWord.initialized = true ;
                      this.secretWord.first = secretWord [ 0 ] ;
                      this.secretWord.last = secretWord [ secretWord.length - 1 ] ;

                      this.fillFirstBoxWithFirstChar ( this.secretWord.first ) ;
                      this.fillLastBoxWithLastChar ( this.secretWord.last ) ;
                    } ,
  secretWord :      {
                        revealed : "" ,
                        initialized : false ,
                        first : "" ,
                        last : "" ,

  //                    order : "" , // I guess it has to exist, but I don't know
                                     // how to make it happen (yet).
  //                    lettersMatch : "" , // same than last key.

                        has : function ( input )
                        {
                          return this.revealed.indexOf(input) !== -1 ;
                        } ,
                    } ,
  inputLetter :     function ( input )
                    {
                      this.input = input ;
                      if ( this.secretWord.has( input ) && !this.alreadyGiven( input ) )
                      {
                        this.storeInput( input ) ;
                      }
                      this.secretWord.has( input ) ;
                    } ,
  repeatedLetter :   function ( input )
                    {
                      let repeated ;
                      if ( this.secretWord.has( input ) >= 0 )
                      {
                        let firstIndex = this.secretWord.revealed.indexOf( input ) ;
                        if ( this.secretWord.revealed.indexOf( input , firstIndex + 1 ) !== -1 )
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
                      for ( let idx = 0 ; idx < this.secretWord.revealed.length; idx++) {
                        if ( this.secretWord.revealed[ idx ] === input )
                        {
                          return true ;
                        }
                      }
                      return false ;
                    } ,

  alreadyGiven :    function ( input )
                    {
                      for ( let idx = 0 ; idx < this.matches.length ; idx++ )
                      {
                        if ( this.matches[ idx ] === input )
                        {
                          return true ;
                        }
                      }
                      for ( let idx = 0 ; idx < this.errors.length ; idx++ )
                      {
                        if ( this.errors[ idx ] === input )
                        {
                          return true ;
                        }
                      }
                      return false ;
                    } ,

} ;
