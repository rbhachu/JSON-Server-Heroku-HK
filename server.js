const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('./data/db.json'); // path to JSON File
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 8000; // port to use to run JSON Server

server.use(middlewares);
server.use(router);
//server.listen(port);
server.listen(port, () => {
    console.log('JSON Server is running')
  })