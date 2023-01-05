/* eslint-disable operator-linebreak */
/*
 * Title: Enviroments
 * Description: Handle all enviroment related things
 * Author: ASAD
 * Date: 05/01/2023
 *
 */

// dependencies

// module scaffolding
const enviroments = {};

enviroments.staging = {
    port: 3000,
    envName: 'staging',
    secrectKey: 'hiji_biji_hiji_biji_hiji_biji_',
};

enviroments.production = {
    port: 5000,
    envName: 'production',
    secrectKey: 'hiji_biji_hiji_biji_hiji_biji_2',
};

// determine which enviroment was passed
const currentEnviroment =
    typeof process.env.Node_ENV === 'string' ? process.env.Node_ENV : 'staging';

// export corresponding enviroment object
const environmentToExport =
    typeof enviroments[currentEnviroment] === 'object'
        ? enviroments[currentEnviroment]
        : enviroments.staging;

// export module
module.exports = environmentToExport;
