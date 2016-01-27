/**
 * Created by kaiseronline on 26/10/15.
 */

'use strict';

var gzippo = require('gzippo');
var express = require('express');
var connect = require('connect');

var app = express();
app.use(connect.compress());
app.use(express.static(__dirname + '/app/default'));

//DEFINE ALL ROUTES
app.get('/', routes.dashboard.index);
app.post('/*', function(request, response) {
  response.redirect('/');
});

app.listen(process.env.PORT || 3000);