const webpack = require('@nativescript/webpack');
module.exports = (env) => {
    webpack.init(env);
    const config = webpack.resolveConfig();
    config.externalsPresets = { node: false };
    config.resolve.fallback = config.resolve.fallback || {};
    config.resolve.fallback.path = false;
    return config;
};
