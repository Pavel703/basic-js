let _chain = [];

const chainMaker = {
    getLength () {
        return _chain.length;
    },
    addLink (value = '') {
        _chain.push(value === null ? 'null' : value);
        return this;
    },
    removeLink (position) {
        if (typeof position !== 'number' || position < 1 || position > _chain.length) {
            this._destroy();
            throw 'en error';
        }
        _chain.splice(position - 1, 1);
        return this;
    },
    reverseChain () {
        _chain.reverse();
        return this;
    },
    finishChain () {
        let textChain = `( ${_chain.join(' )~~( ')} )`;
        this._destroy();
        return textChain;
    },

    _destroy () {
        _chain = [];
    }
};

module.exports = chainMaker;
