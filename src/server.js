const Hapi = require('hapi');
const Routes = require('./routes');

const server = new Hapi.Server();

server.connection({ port: 8080, host: 'localhost' });

server.route(Routes);

server.start((err) => {
  console.log(err);
  console.log('Server running at:', server.info.uri);
});

module.exports = server;
