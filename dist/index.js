(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof module === 'object' && module.exports) {
        module.exports = factory();
    } else {
        root.ajs = factory();
    }
}(typeof self !== 'undefined' ? self : this, function () {
    function info() {
        const m = new Map();
        m.set('name', 'ajs');
        m.set('version', '1.0.0');
        return m;
    }
    return { info: info };
}));
