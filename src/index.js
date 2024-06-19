const http = require('http');
const app = require('./app.js');
const { defaultPort } = require('./config/index.js');

const port = Number(process.env.PORT || defaultPort);

const server = http.createServer(app);
server.listen(port);

server.on('error', (err) => {
  console.error(err);
});
server.on('listening', () => {
  console.log(`server listening port: ${port}`);
});
