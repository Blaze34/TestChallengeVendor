import config from '../config';
import app from '../server/main';
import _debug from 'debug';
import socketServer from 'socket.io';
import childProcess from 'child_process';

const debug = _debug('app:bin:server');
const port = config.server_port;
const host = config.server_host;

const server = app.listen(port);

var io = socketServer.listen(server);

const ls = childProcess.spawn('python', ['bin/main.py', '/dev/ttyUSB0']);

ls.stdout.on('data', function(data) {
  let result;
  try {
    result = JSON.parse(data);
  } catch (exception) {
    console.log('JSON.parse error', data.toString());
  }
  io.emit('credit', result);
});

ls.stderr.on('data', function(data) {
  console.log('stderr', data.toString());
});

debug(`Server is now running at http://${host}:${port}.`);
