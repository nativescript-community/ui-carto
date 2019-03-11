const Plugin = {
    install(Vue) {
        Vue.registerElement('CartoMap', () => require('../ui/ui').CartoMap, {});
    }
};

export default Plugin;
