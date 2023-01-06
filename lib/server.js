/*
 * Title: Server Library
 * Description: Server related files
 * Author: ASAD
 * Date: 06/01/2023
 *
 */

// dependencies
const http = require('http');
const { handleReqRes } = require('../helpers/handleReqRes');

// server object - module scaffolding
const server = {};

// configuration
server.config = {
    port: 3000,
};

// create server
server.createServer = () => {
    const createServerVariable = http.createServer(server.handleReqRes);
    createServerVariable.listen(server.config.port, () => {
        console.log(`Lisening to port ${server.config.port}`);
    });
};

// handle Request Response
server.handleReqRes = handleReqRes;

// start the server
server.init = () => {
    server.createServer();
};

// export
module.exports = server;