const express = require('express');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config.js');
const api = require('./api');
const app = express();
 
const compiler = webpack(webpackConfig);
 
app.use(express.static(__dirname + '/www'));
 
app.get('/images/:page', api.getImagesFromPage);
 
const server = app.listen(3000, function() {
  const host = server.address().address;
  const port = server.address().port;
  console.log('image gallery listening at http://%s:%s', host, port);
});