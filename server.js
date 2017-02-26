'use strict';

var os = require('os');
var http = require('http');
var handleRequest = function (req, res) {
  res.writeHead(200);
  res.end(os.hostname());
};
var www = http.createServer(handleRequest);
www.listen(process.env.PORT || 8080);