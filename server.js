var express = require('express');
var path = require('path');
var history = require('connect-history-api-fallback');
var serveStatic = require('serve-static');

app = express();
var redirectToHTTPS = require('express-http-to-https').redirectToHTTPS
app.use(redirectToHTTPS([/localhost:(\d{4})/], [/\/insecure/]));
app.use(history());
app.use(serveStatic(path.join(__dirname, 'dist')));
var port = process.env.PORT || 5000;
app.listen(port);

console.log('server started ' + port);
