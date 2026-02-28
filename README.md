📦 JavaScript Polyfill Functions

A collection of core JavaScript array method polyfills implemented from scratch to deeply understand how native methods work internally.

This project recreates commonly used Array.prototype methods using pure JavaScript logic — without relying on built-in implementations.

🚀 Implemented Polyfills
✅ myMap

Creates a new array by transforming each element using a callback function.

[1, 2, 3].myMap(x => x * 2)
// [2, 4, 6]
✅ myForEach

Executes a callback for each element in the array.
Does not return a new array.

[1, 2, 3].myForEach(x => console.log(x))
✅ myFilter

Creates a new array containing elements that pass a condition.

[1, 2, 3, 4].myFilter(x => x % 2 === 0)
// [2, 4]
✅ myReduce

Reduces the array to a single value using an accumulator.

[1, 2, 3, 4].myReduce((acc, curr) => acc + curr, 0)
// 10
✅ myFlat

Flattens nested arrays up to a specified depth.

[1, [2, [3]]].myFlat(2)
// [1, 2, 3]
🧠 Concepts Covered

Prototype chaining

Higher-order functions

Callback execution

Recursion

Accumulator pattern

Depth control logic

Handling initial values

Time & space complexity
