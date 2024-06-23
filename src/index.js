const http = require('http');
const app = require('./app');
const { defaultPort } = require('./config');

const port = Number(process.env.PORT || defaultPort);

const server = http.createServer(app);
server.listen(port);

server.on('error', (err) => {
  console.error(err);
});
server.on('listening', () => {
  console.log(`server listening port: ${port}`);
});
