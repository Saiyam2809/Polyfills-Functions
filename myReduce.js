Array.prototype.myReduce = function (callback, initialValue) {
  let accumulator = initialValue;

  for (let i = 0; i < this.length; i++) {
    accumulator = callback(accumulator, this[i], i, this);
  }

  return accumulator;
};

const arr = [1, 2, 3, 4];

const sum̥ = arr.myReduce((acc, curr) => {
  return acc + curr;
}, 0);
console.log("🚀 ~ sum̥:", sum̥)
