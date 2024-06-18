import http from 'http';
import app from './app.js';
import { defaultPort } from './config/index.js';

const port = Number(process.env.PORT || defaultPort);

const server = http.createServer(app);
server.listen(port);

server.on('error', (err) => {
  console.error(err);
});
server.on('listening', () => {
  console.log(`server listening port: ${port}`);
});
