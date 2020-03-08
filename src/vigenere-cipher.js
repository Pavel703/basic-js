module.exports = class VigenereCipheringMachine {

    constructor(direct = true) {
        this._direct = direct;
    }

    encrypt (str = null, key = null) {
        this._validate(str, key);
        let matrix = this._generateMatrix();
        let modifyKey = this._modifyKey(str, key);
        let encryptStr = '';
        str = str.toUpperCase();
        let spaceIncrement = 0;
        for (let i = 0; i < str.length; i++) {
            if (str[i] === ' ') spaceIncrement++;
            encryptStr += matrix[str[i]] ? matrix[str[i]][modifyKey[i - spaceIncrement]] : str[i];
        }
        return encryptStr;
    }

    decrypt (str = null, key = null) {
        this._validate(str, key);

        let matrix = this._generateMatrix();
        let modifyKey = this._modifyKey(str, key);
        let decryptStr = '';

        str = str.toUpperCase();
        if (!this._direct) str = str.split('').reverse().join('');

        let spaceIncrement = 0;
        for (let i = 0; i < str.length; i++) {
            if (str[i] === ' ') spaceIncrement++;
            decryptStr += matrix[str[i]]
                ? Object.keys(matrix[modifyKey[i - spaceIncrement]]).find(key => matrix[modifyKey[i - spaceIncrement]][key] === str[i])
                : str[i];
        }
        return this._direct ? decryptStr : decryptStr.split('').reverse().join('');
    }

    _modifyKey (str, key) {
        let modifyKey = '';
        for (let i = 0; i < Math.ceil(str.length / key.length); i++) {
            modifyKey += key;
        }
        return modifyKey.toUpperCase();
    }

    _generateMatrix () {
        let matrix = {};
        let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
        let alphabetShift = alphabet.slice(0);

        for (let i = 0; i < alphabet.length; i++) {
            matrix[alphabet[i]] = {};
            for (let j = 0; j < alphabet.length; j++) {
                matrix[alphabet[i]][alphabet[j]] = alphabetShift[j];
            }
            alphabetShift.push(alphabetShift.shift());
        }

        return matrix;
    }

    _validate (str, key) {
        if (typeof str !== 'string') {
            throw 'an error 1';
        }
        if (typeof key !== 'string') {
            throw 'an error 2';
        }
    }
};
