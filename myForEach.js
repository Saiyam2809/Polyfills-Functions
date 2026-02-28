Array.prototype.myForEach = function (callback) {
    if (typeof callback !== "function") {
        throw new TypeError("Callback must be a function");
    }

    for (let i = 0; i < this.length; i++) {
        if (i in this) { // handle sparse arrays
            callback(this[i], i, this);
        }
    }
};
const arr = [10, 20, 30];
arr.myForEach(function (value, index) {
    console.log(value, index);
});