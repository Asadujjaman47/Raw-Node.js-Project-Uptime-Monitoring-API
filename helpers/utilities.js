/*
 * Title: Utilities
 * Description: Important utility functions
 * Author: ASAD
 * Date: 05/01/2023
 *
 */
// dependencies
const crypto = require('crypto');
const environments = require('./enviroments');

// module scaffolding
const utilities = {};

// parse JSON string to Object
utilities.parseJSON = (jsonString) => {
    let output;

    try {
        output = JSON.parse(jsonString);
    } catch {
        output = {};
    }

    return output;
};

// hash string
utilities.hash = (str) => {
    if (typeof str === 'string' && str.length > 0) {
        const hash = crypto.createHmac('sha256', environments.secrectKey).update(str).digest('hex');

        return hash;
    }
    return false;
};

// export module
module.exports = utilities;
