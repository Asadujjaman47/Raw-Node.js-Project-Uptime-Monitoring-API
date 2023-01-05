/*
 * Title: Uptime Monitoring Application
 * Description: A RESTFul API to monitor up or down time of user defined links
 * Author: ASAD
 * Date: 04/01/2023
 *
 */

// dependencies
const http = require('http');
const { handleReqRes } = require('./helpers/handleReqRes');
const enviroment = require('./helpers/enviroments');
const data = require('./lib/data');

// app object - module scaffolding
const app = {};

// testing file system
// @TODO
// WRITE
// data.create('test', 'newFile', { name: 'Bangladesh', language: 'Bangla' }, (err) => {
//     console.log('error was', err);
// });
// READ
// data.read('test', 'newFile', (err, data) => {
//     console.log(err, data);
// });
// UPDATE
// data.update('test', 'newFile', { name: 'England', language: 'English' }, (err) => {
//     console.log(err);
// });
// DELETE
// data.delete('test', 'newFile', (err) => {
//     console.log(err);
// });

// create server

app.createServer = () => {
    const server = http.createServer(app.handleReqRes);
    server.listen(enviroment.port, () => {
        console.log(`Lisening to port ${enviroment.port}`);
    });
};

// handle Request Response
app.handleReqRes = handleReqRes;

// start the server
app.createServer();
