// const http = require('http'); //default pkg in node.js system
// const app = require('./app'); //app is the listener for incoming requests
import app from './app.js';
import http from 'http';
import createDebug from 'debug';
//creates a debug with a namespace ei DEBUG = node-ng
const debug = createDebug('node-ng');

const normalizePort = val => {
    const port = parseInt(val, 10);
    return isNaN(port) ? val : port >= 0 ? port : false;
}

const onError = err => {
    if (err.syscall !== "listen") {
        throw err;
    }
    const bind = typeof addr === "string" ? "pipe" + addr : "port" + port;
    switch (err) {
        case "EACCES":
            console.error(bind + " requires elevated privileges");
            break;
        case "EADDRINUSE" :
            console.error(bind + " is already in use");
            break;
        default:
            throw err;
    }
}

const onListening = () => {
    const addr = server.address();
    const bind = typeof port === "string" ? "pipe " + port : "port " + port;
    debug("Listening on " + bind);
};

const port = normalizePort(process.env.PORT || "3000");
app.set("port", port);

const server = http.createServer(app);
// .on is to wait for errors and simply listening
server.on("error", onError);
server.on("listening", onListening);
server.listen(port);
// We need to use hostings environment variable for port but for dev we'll use 3000
// they are injected on runtime but can be accessed
// we need to ctrl z to end the process