const Plugin = {
    install(Vue) {
        Vue.registerElement('CartoMap', () => require('../ui').CartoMap, {});
    },
};

export default Plugin;
