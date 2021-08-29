const http = require('http');
const app = require('./src/app');
require('dotenv').config();

const port = process.env.PORT;

const Server = {
  async start() {
    const server = http.createServer(app);
    return server.listen(port);
  },
};

Server.start()
  .then(() => console.log('Server is running'))
  .catch((err) => console.error(err));
