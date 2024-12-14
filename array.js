let arr = [1, 2, 3, 4, 5, 6];

Array.prototype.at2 = function (index) {
    if (number < 0) {
        return this[this.length - index];
    }
    return this[index];
};

Array.prototype.concat2 = function (...args) {
    const result = [...this];

    for (let arr of args) {
        for (let item of arr) {
            result.push(item);
        }
    }

    return result;
};

Array.prototype.entries2 = function () {
    let index = 0;
    const array = this;

    return {
        [Symbol.iterator]() {
            return this;
        },
        next() {
            if (index < array.length) {
                return { value: [index, array[index++]], done: false };
            } else {
                return { value: undefined, done: true };
            }
        },
    };
};

Array.prototype.every2 = function (callBack) {
    for (let i = 0; i < this.length; ++i) {
        if (!callBack(this[i], i, this)) {
            return false;
        }
    }
    return true;
};

Array.prototype.fill2 = function (value, start = 0, end = this.length) {
    const len = this.length;
    let s = start < 0 ? Math.max(len + start, 0) : Math.min(start, len);
    let e = end < 0 ? Math.max(len + end, 0) : Math.min(end, len);

    for (let i = s; i < e; i++) {
        this[i] = value;
    }

    return this;
};

Array.prototype.filter2 = function (callBack) {
    if (typeof callBack !== 'function') {
        throw new TypeError(`${callBack} isn't a function`);
    }

    const result = [];

    for (let i = 0; i < this.length; ++i) {
        if (callBack(this[i], i, this)) {
            result.push(this[i]);
        }
    }

    return result;
};

Array.prototype.find2 = function (callBack) {
    if (typeof callBack !== 'function') {
        throw new TypeError(`${callBack} isn't a function`);
    }

    for (let i = 0; i < this.length; ++i) {
        if (callBack(this[i], i, this)) {
            return this[i];
        }
    }
};

Array.prototype.findIndex2 = function (callBack) {
    if (typeof callBack !== 'function') {
        throw new TypeError(`${callBack} isn't a function`);
    }

    for (let i = 0; i < this.length; ++i) {
        if (callBack(this[i], i, this)) {
            return i;
        }
    }

    return -1;
};

Array.prototype.findLast2 = function (callBack) {
    if (typeof callBack !== 'function') {
        throw new TypeError(`${callBack} isn't a function`);
    }

    for (let i = this.length - 1; i >= 0; --i) {
        if (callBack(this[i], i, this)) {
            return this[i];
        }
    }

    return undefined;
};

Array.prototype.findLastIndex2 = function (callBack) {
    if (typeof callBack !== 'function') {
        throw new TypeError(`${callBack} isn't a function`);
    }

    for (let i = this.length - 1; i >= 0; --i) {
        if (callBack(this[i], i, this)) {
            return i;
        }
    }

    return -1;
};

Array.prototype.flat2 = function (depth = 1) {
    let result = [];

    function flatten(arr, depth) {
        for (let el of arr) {
            if (Array.isArray(el) && depth > 0) {
                flatten(el, depth - 1);
            } else {
                result.push(el);
            }
        }
    }
    flatten(this, depth);

    return result;
};

Array.prototype.flatMap2 = function (callback, thisArg) {
    if (typeof callback !== 'function') {
        throw new TypeError(`${callback} is not a function`);
    }

    const result = [];

    for (let i = 0; i < this.length; i++) {
        if (i in this) {
            const mappedValue = callback(thisArg, this[i], i, this);
            if (Array.isArray(mappedValue)) {
                result.push(...mappedValue);
            } else {
                result.push(mappedValue);
            }
        }
    }

    return result;
};

Array.prototype.forEach2 = function (callBack) {
    if (typeof callback !== 'function') {
        throw new TypeError(`${callback} is not a function`);
    }

    for (let i = 0; i < this.length; ++i) {
        callBack(this[i], i, this);
    }
};

Array.prototype.includes2 = function (valueToFind, fromIndex = 0) {
    let start = Math.max(
        fromIndex >= 0 ? fromIndex : this.length + fromIndex,
        0,
    );

    for (let i = start; i < this.length; i++) {
        if (
            this[i] === valueToFind ||
            (Number.isNaN(this[i]) && Number.isNaN(valueToFind))
        ) {
            return true;
        }
    }
    return false;
};

Array.prototype.indexOf2 = function (searchElement, fromIndex = 0) {
    let start = Math.max(
        fromIndex >= 0 ? fromIndex : this.length + fromIndex,
        0,
    );

    for (let i = start; i < this.length; i++) {
        if (this[i] === searchElement) {
            return i;
        }
    }

    return -1;
};

Array.prototype.join = function (str = ',') {
    let result = '';

    if (typeof str != 'string') {
        return undefined;
    }

    for (let i = 0; i < this.length; ++i) {
        result += this[i];
        if (i < this.length - 1) {
            result += str;
        }
    }

    return result;
};

Array.prototype.keys2 = function () {
    const self = this;
    let index = 0;

    return {
        next() {
            if (index < self.length) {
                return { value: index++, done: false };
            }
            return { value: undefined, done: true };
        },
        [Symbol.iterator]() {
            return this;
        },
    };
};

Array.prototype.lastIndexOf2 = function (searchElement, fromIndex) {
    let start = fromIndex === undefined ? this.length - 1 : fromIndex;

    if (start < 0) {
        start = this.length + start;
    }

    for (let i = Math.min(start, this.length - 1); i >= 0; i--) {
        if (this[i] === searchElement) {
            return i;
        }
    }

    return -1;
};

Array.prototype.map2 = function (callBack) {
    const result = [];

    for (let i = 0; i < this.length; ++i) {
        result.push(callBack(this[i], i, this));
    }

    return result;
};

Array.prototype.pop2 = function () {
    if (this.length === 0) {
        return undefined;
    }

    const poppedElement = this[this.length - 1];

    this.length = this.length - 1;

    return poppedElement;
};

Array.prototype.push2 = function (...elements) {
    this.splice(this.length, 0, ...elements);
    return this.length;
};

Array.prototype.reverse2 = function () {
    let start = 0;
    let end = this.length - 1;

    while (start < end) {
        [this[start], this[end]] = [this[end], this[start]];

        start++;
        end--;
    }

    return this;
};

Array.prototype.reduce2 = function (callBack, start) {
    let i = typeof start !== 'undefined' ? 0 : 1;
    let result = typeof start !== 'undefined' ? start : this[0];

    for (; i < this.length; ++i) {
        result = callBack(result, this[i], i, this);
    }

    return result;
};

Array.prototype.shift2 = function () {
    if (this.length === 0) return undefined;

    const result = this[0];

    for (let i = 1; i < this.length; ++i) {
        this[i - 1] = this[i];
    }
    this.length -= 1;

    return result;
};

Array.prototype.slice2 = function (start = 0, end = this.length) {
    start =
        start < 0
            ? Math.max(this.length + start, 0)
            : Math.min(start, this.length);
    end = end < 0 ? Math.max(this.length + end, 0) : Math.min(end, this.length);

    if (start >= end) {
        return [];
    }

    const arr = [];

    for (let i = start; i < end; i++) {
        arr.push(this[i]);
    }

    return arr;
};

Array.prototype.some = function (callBack) {
    for (let i = 0; i < this.length; ++i) {
        if (callBack(this[i], i, this)) {
            return true;
        }
    }
    return false;
};

Array.prototype.splice2 = function (start, deleteCount, ...args) {
    start =
        start < 0
            ? Math.max(this.length + start, 0)
            : Math.min(start, this.length);

    deleteCount =
        deleteCount === undefined
            ? this.length - start
            : Math.min(deleteCount, this.length - start);

    const deletedItems = this.slice(start, start + deleteCount);

    const rightPart = this.slice(start + deleteCount);
    this.length = start;
    this.push(...args, ...rightPart);

    return deletedItems;
};

Array.prototype.toReversed2 = function () {
    let start = 0;
    let end = this.length - 1;
    const result = [...this];
    while (start < end) {
        [result[start], result[end]] = [result[end], result[start]];

        start++;
        end--;
    }

    return result;
};

Array.prototype.toSpliced2 = function (start, deleteCount, ...args) {
    start =
        start < 0
            ? Math.max(this.length + start, 0)
            : Math.min(start, this.length);

    deleteCount =
        deleteCount === undefined
            ? this.length - start
            : Math.min(deleteCount, this.length - start);

    const result = [...this];

    result.splice(start, deleteCount, ...args);

    return result;
};

Array.prototype.toString2 = function () {
    if (this.length === 0) return '';

    let result = '';
    for (let i = 0; i < this.length; i++) {
        result += (i === 0 ? '' : ',') + String(this[i]);
    }

    return result;
};

Array.prototype.unshift2 = function (item) {
    this.length += 1;

    for (let i = this.length - 1; i > 0; i--) {
        this[i] = this[i - 1];
    }

    this[0] = item;

    return this.length;
};

Array.prototype.values2 = function () {
    let index = 0;
    const array = this;

    return {
        next: function () {
            if (index < array.length) {
                return { value: array[index++], done: false };
            } else {
                return { value: undefined, done: true };
            }
        },
    };
};

Array.prototype.with2 = function (index, value) {
    const result = [...this];
    result[index] = value;
    return result;
};
