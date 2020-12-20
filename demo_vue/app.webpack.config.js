const webpackConfig = require('./webpack.config.js');
const { resolve } = require('path');

module.exports = (env, params = {}) => {
    const {
        fork = true, // --env.fakeall
    } = env;

    const config = webpackConfig(env, params);
    const coreModulesPackageName = fork ? '@akylas/nativescript' : '@nativescript/core';
    config.resolve.modules = [resolve(__dirname, `node_modules/${coreModulesPackageName}`), resolve(__dirname, 'node_modules'), `node_modules/${coreModulesPackageName}`, 'node_modules'];
    Object.assign(config.resolve.alias, {
        '@nativescript/core': `${coreModulesPackageName}`,
        'tns-core-modules': `${coreModulesPackageName}`
    });

    console.log('coreModulesPackageName', coreModulesPackageName);
    return config;
};
