const Plugin = {
    install(Vue) {
        Vue.registerElement('MassifMap', () => require('../ui').MassifMap, {});
    }
};

export default Plugin;
