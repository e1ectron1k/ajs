(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.ajs = factory());
})(this, (function () {
    function info() {
        const m = new Map();
        m.set('name', 'ajs');
        m.set('version', '1.0.0');
        return m;
    }
    return { info: info };
}));
