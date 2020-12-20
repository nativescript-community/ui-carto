// require('./ts_helpers');
import Vue from 'nativescript-vue';
import App from './App.vue';
import { registerLicense } from 'nativescript-carto/ui';
import * as application from '@nativescript/core/application';
import { knownFolders } from '@nativescript/core/file-system';

const currentApp = knownFolders.currentApp();
require('source-map-support').install({
    environment: 'node',
    handleUncaughtExceptions: false,
    retrieveSourceMap(source) {
        const sourceMapPath = source + '.map';
        const sourceMapRelativePath = sourceMapPath.replace('file://', '').replace(currentApp.path + '/', '');

        return {
            url: sourceMapRelativePath + '/',
            map: currentApp.getFile(sourceMapRelativePath).readTextSync(),
        };
    },
});
// setShowDebug(true);

import CollectionView from '@nativescript-community/ui-collectionview/vue';
Vue.use(CollectionView);

import CartoPlugin from 'nativescript-carto/vue';
Vue.use(CartoPlugin);

// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = true;
// setShowDebug(true)
// Vue.config.silent = (TNS_ENV === 'production')

if (global.isAndroid) {
    application.on(application.launchEvent, () => {
        console.log('launchEvent', !!application.android.context);
        registerLicense(
            'XTUN3Q0ZGSjlTY054SWd2N2NpMTlmdW5LZ3B6OG5NWEhBaFFoSXd5RU9TZnlYd0htWm1SUDF2SjBiR25VUUE9PQoKYXBwVG9rZW49NWI5MTdkMTAtOThhYy00YjU2LTk1NGEtMzYxYWFhNzE4ZjQ3CnBhY2thZ2VOYW1lPWNvbS5ha3lsYXMubmF0aXZlc2NyaXB0LmNhcnRvZGVtbwpvbmxpbmVMaWNlbnNlPTEKcHJvZHVjdHM9c2RrLWFuZHJvaWQtNC4qCndhdGVybWFyaz1jYXJ0b2RiCg==',
            (result) => {
                console.log('registeredLicense', result);
            }
        );
    });
} else {
    registerLicense(
        'XTUMwQ0ZRQ0lvQ0lPaXVqaWV3cHUrVHpuRnBIbFg0UzJPd0lVUENLckxhYnNIR21OZVQ3T3g2dndEU2Q3UkdnPQoKYXBwVG9rZW49ZTkzNGZlZjgtNjg0MS00ZjUzLTk5OTktYWM1NzljNDFlNjk1CmJ1bmRsZUlkZW50aWZpZXI9Y29tLmFreWxhcy5uYXRpdmVzY3JpcHQuY2FydG9kZW1vCm9ubGluZUxpY2Vuc2U9MQpwcm9kdWN0cz1zZGstaW9zLTQuKgp3YXRlcm1hcms9Y2FydG9kYgo='
    );
}

new Vue({
    render: (h) => h('frame', [h(App)]),
}).$start();
