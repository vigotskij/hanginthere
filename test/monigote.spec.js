describe ( 'Monigote' , function()
{
  it ( 'Should create window.Monigote' , function ( )
    {
      expect(typeof window.Control).to.eql("object") ;
    } ) ;

  it ( 'Should receive errors from Control' , function ( )
    {
      Control.init( "granada" ) ;
      Control.inputLetter( "e" ) ;
      expect( Control.errors.length ).to.eql( Monigote.errors ) ;
      Control.inputLetter( "j" ) ;
      expect( Control.errors.length ).to.eql( Monigote.errors ) ;
      Control.inputLetter( "r" ) ;
      expect( Control.errors.length ).to.eql( Monigote.errors ) ;
    } ) ;
  it ( 'Should draw a piece of the hanging dude for every error' , function ( )
    {

    } ) ;
  it ( 'Should kill tha madafaca when it is hanging time', function ( )
    {

    } ) ;
  } ) ;
