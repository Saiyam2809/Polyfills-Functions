/* eslint-disable no-plusplus / 
/ eslint-disable @typescript-eslint/no-this-alias / 
/ eslint-disable no-extend-native */
Array.prototype.myMap = function (callback, thisArg) {
    if (typeof callback !== 'function') {
        throw new TypeError('callback must be a function');
    }
    const result = [];
    const arr = this;
    for (let i = 0; i < arr.length; i++) {
        if (i in arr) {
            result[i] = callback.call(thisArg, arr[i], i, arr);
        }
    }
    console.log('result', result, arr);
    return result;
};
[1, 2, 3].myMap((x) => x * 2);
const fruits = ['apple', 'banana', 'mango'];
const upper = fruits.myMap((fruit) => fruit.toUpperCase());
console.log('upper', upper);