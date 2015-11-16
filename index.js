/**
 * Static HTTP Server
 *
 * Create a static file server instance to serve files
 * and folder in the './html' folder
 */

// modules
var static = require( 'node-static' ),
    http = require( 'http' );

// config
var file = new static.Server( './html', {
    cache: 3600,
    gzip: true
} );

// serve
http.createServer( function ( request, response ) {
    request.addListener( 'end', function () {
        file.serve( request, response );
    } ).resume();
} ).listen( process.env.PORT || 5000 );
