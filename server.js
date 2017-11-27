var serverFactory = require('spa-server');

var server = serverFactory.create({
 path: './dist',
 port: process.env.PORT || 8080,
 fallback: '/index.html'
});

server.start();
