String.prototype.at2 = function (index) {
    if (index < 0) {
        index = this.length + index;
    }
    return this.charAt(index);
};

String.prototype.charAt2 = function (index) {
    return this[index] || '';
};

String.prototype.concat2 = function (...args) {
    return this + args.join('');
};

String.prototype.endsWith2 = function (searchString, length) {
    const strLength = length === undefined ? this.length : length;
    return (
        this.substring(strLength - searchString.length, strLength) ===
        searchString
    );
};

String.prototype.includes2 = function (searchString, position = 0) {
    return this.indexOf(searchString, position) !== -1;
};

String.prototype.indexOf2 = function (searchString, position = 0) {
    for (let i = position; i < this.length; i++) {
        if (this.slice(i, i + searchString.length) === searchString) {
            return i;
        }
    }
    return -1;
};

String.prototype.lastIndexOf2 = function (
    searchString,
    position = this.length - 1,
) {
    for (let i = position; i >= 0; i--) {
        if (this.slice(i, i + searchString.length) === searchString) {
            return i;
        }
    }
    return -1;
};

String.prototype.matcц2 = function (regexp) {
    const result = [];
    let match;
    while ((match = regexp.exec(this)) !== null) {
        result.push(match);
    }
    return result.length > 0 ? result : null;
};

String.prototype.matchAll2 = function (regexp) {
    const matches = [];
    let match;
    while ((match = regexp.exec(this)) !== null) {
        matches.push(match);
    }
    return matches;
};

String.prototype.padEnd2 = function (targetLength, padString = ' ') {
    let result = this;
    while (result.length < targetLength) {
        result += padString;
    }
    return result.slice(0, targetLength);
};

String.prototype.padStart2 = function (targetLength, padString = ' ') {
    let result = this;
    while (result.length < targetLength) {
        result = padString + result;
    }
    return result.slice(0, targetLength);
};

String.prototype.repeat2 = function (count) {
    count = Math.max(0, Math.floor(count));
    return new Array(count + 1).join(this);
};

String.prototype.replaceAll2 = function (searchValue, replaceValue) {
    return this.split(searchValue).join(replaceValue);
};

String.prototype.slice2 = function (beginIndex, endIndex) {
    if (beginIndex < 0) beginIndex = this.length + beginIndex;
    if (endIndex < 0) endIndex = this.length + endIndex;

    if (endIndex === undefined) endIndex = this.length;

    if (beginIndex > endIndex) return '';

    let result = '';
    for (let i = beginIndex; i < endIndex; i++) {
        result += this[i];
    }
    return result;
};

String.prototype.split2 = function (separator, limit) {
    return this.split(separator, limit);
};

String.prototype.startsWith2 = function (searchString, position = 0) {
    return this.indexOf(searchString, position) === position;
};

String.prototype.toLowerCase2 = function () {
    return this.toLowerCase();
};

String.prototype.toString2 = function () {
    return String(this);
};

String.prototype.toUpperCase2 = function () {
    return this.toUpperCase();
};

String.prototype.trim2 = function () {
    return this.replace(/^\s+|\s+$/g, '');
};

String.prototype.trimEnd2 = function () {
    return this.replace(/\s+$/, '');
};

String.prototype.trimStart2 = function () {
    return this.replace(/^\s+/, '');
};
String.prototype.at2 = function (index) {
    if (index < 0) {
        index = this.length + index;
    }
    return this.charAt(index);
};

String.prototype.charAt2 = function (index) {
    return this[index] || '';
};

String.prototype.concat2 = function (...args) {
    return this + args.join('');
};

String.prototype.endsWith2 = function (searchString, length) {
    const strLength = length === undefined ? this.length : length;
    return (
        this.substring(strLength - searchString.length, strLength) ===
        searchString
    );
};

String.prototype.includes2 = function (searchString, position = 0) {
    return this.indexOf(searchString, position) !== -1;
};

String.prototype.indexOf2 = function (searchString, position = 0) {
    for (let i = position; i < this.length; i++) {
        if (this.slice(i, i + searchString.length) === searchString) {
            return i;
        }
    }
    return -1;
};

String.prototype.lastIndexOf2 = function (
    searchString,
    position = this.length - 1,
) {
    for (let i = position; i >= 0; i--) {
        if (this.slice(i, i + searchString.length) === searchString) {
            return i;
        }
    }
    return -1;
};

String.prototype.localeCompare2 = function (compareString, locales, options) {
    return this < compareString ? -1 : this > compareString ? 1 : 0;
};

String.prototype.match2 = function (regexp) {
    return this.match(regexp);
};

String.prototype.matchAll2 = function (regexp) {
    const matches = [];
    let match;
    while ((match = regexp.exec(this)) !== null) {
        matches.push(match);
    }
    return matches;
};

String.prototype.padEnd2 = function (targetLength, padString = ' ') {
    let result = this;
    while (result.length < targetLength) {
        result += padString;
    }
    return result.slice(0, targetLength);
};

String.prototype.padStart2 = function (targetLength, padString = ' ') {
    let result = this;
    while (result.length < targetLength) {
        result = padString + result;
    }
    return result.slice(0, targetLength);
};

String.prototype.repeat2 = function (count) {
    return new Array(count + 1).join(this);
};

String.prototype.replace2 = function (searchValue, replaceValue) {
    return this.split(searchValue).join(replaceValue);
};

String.prototype.replaceAll2 = function (searchValue, replaceValue) {
    return this.split(searchValue).join(replaceValue);
};

String.prototype.slice2 = function (beginIndex, endIndex) {
    if (beginIndex < 0) beginIndex = this.length + beginIndex;
    if (endIndex < 0) endIndex = this.length + endIndex;

    if (endIndex === undefined) endIndex = this.length;

    if (beginIndex > endIndex) return '';

    let result = '';
    for (let i = beginIndex; i < endIndex; i++) {
        result += this[i];
    }
    return result;
};

String.prototype.split2 = function (separator) {
    if (separator === undefined) {
        return [this];
    }

    if (separator === '') {
        return Array.from(this);
    }

    const result = [];
    let start = 0;
    let index;

    while ((index = this.indexOf(separator, start)) !== -1) {
        result.push(this.slice(start, index));
        start = index + separator.length;
    }

    result.push(this.slice(start));

    return result;
};

String.prototype.startsWith2 = function (searchString, position = 0) {
    return this.indexOf(searchString, position) === position;
};

String.prototype.toLowerCase2 = function () {
    let result = '';
    for (let i = 0; i < this.length; i++) {
        let charCode = this.charCodeAt(i);
        if (charCode >= 65 && charCode <= 90) {
            result += String.fromCharCode(charCode + 32);
        } else {
            result += String.fromCharCode(charCode);
        }
    }
    return result;
};

String.prototype.toString2 = function () {
    return String(this);
};

String.prototype.toUpperCase2 = function () {
    let result = '';
    for (let i = 0; i < this.length; i++) {
        let charCode = this.charCodeAt(i);
        if (charCode >= 97 && charCode <= 122) {
            result += String.fromCharCode(charCode - 32);
        } else {
            result += String.fromCharCode(charCode);
        }
    }
    return result;
};

String.prototype.trim2 = function () {
    return this.replace(/^\s+|\s+$/g, '');
};

String.prototype.trimEnd2 = function () {
    return this.replace(/\s+$/, '');
};

String.prototype.trimStart2 = function () {
    return this.replace(/^\s+/, '');
};
