'use strict';

if (typeof window === 'undefined')
  {
    var chai = require('../bower_components/chai/chai');
    var expect = chai.expect;
    require('../node_modules/mocha-jsdom')({skipWindowCheck:true});

    require('../js/common.js');
    global.Control = require('../js/control.js');
    global.window = {Control: Control};
  }
describe ( "About utilities" , function( )
{
  it ( "Should count occurrences" , function( )
  {
    const idxs = occurrences( "mississippi" , "s" ) ;
    expect( idxs[ 0 ] ).to.eql( 2 ) ;
    expect( idxs[ 1 ] ).to.eql( 3 ) ;
    expect( idxs[ 2 ] ).to.eql( 5 ) ;
    expect( idxs[ 3 ] ).to.eql( 6 ) ;
    // this way you know how many times its repeated
    expect( idxs.length ).to.eql( 4 );
  } ) ;
} ) ;
