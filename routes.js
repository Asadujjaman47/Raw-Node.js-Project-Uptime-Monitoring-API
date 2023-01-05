/*
 * Title: Routes
 * Description: Applicaton Routes
 * Author: ASAD
 * Date: 05/01/2023
 *
 */

// dependencies
const { sampleHandler } = require('./handlers/routeHandlers/sampleHandler');

const routes = {
    sample: sampleHandler,
};

module.exports = routes;
