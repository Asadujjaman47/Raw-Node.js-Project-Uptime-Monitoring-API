/*
 * Title: Not Found Handler
 * Description: 404 Not Found Handler
 * Author: ASAD
 * Date: 05/01/2023
 *
 */

// module scaffolding
const handler = {};

handler.notFoundHandler = (requestProperties, callback) => {
    // console.log('Not Found');

    callback(404, {
        message: 'Your requessted URL was not found!',
    });
};

module.exports = handler;
