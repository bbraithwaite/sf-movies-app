'use strict';

/**
 * Module dependencies.
 */

var restify = require('restify');
var packageConfig = require('./package');
var port = (process.env.PORT || 4000);

/**
 * Create server object.
 **/
var server = restify.createServer({
  name: packageConfig.name,
  version: packageConfig.version
});

/**
 * Register sub-modules.
 **/
require('./lib/sf-movies-api/application')(server);
require('./lib/sf-movies-web/application')(server);

/**
 * Start listening on server.
 **/
server.listen(port, function listen() {
	console.log('Server running at http://127.0.0.1:' + port);	
});
