const { dirname, join } = require('path');

module.exports = (env, webpack) => {
    // the examples' Massif style ships in the app, so a first run draws without a download
    webpack.Utils.addCopyRule({
        from: join(dirname(require.resolve('@massif-maps/styles/package.json')), 'cartocss'),
        to: 'massif-style'
    });
    webpack.Utils.addCopyRule({
        from: join(dirname(require.resolve('@massif-maps/styles/package.json')), 'cartocss-iconfont'),
        to: 'massif-style-iconfont'
    });
};
