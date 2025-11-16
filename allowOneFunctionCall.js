// Given a function fn, return a new function that is identical to the original function except that it ensures fn is called at most once.
//
//     The first time the returned function is called, it should return the same result as fn.
//     Every subsequent time it is called, it should return undefined.


var once = function (fn) {
// Замыкание — это когда вложенная функция помнит переменные из внешней функции,
// даже после того, как внешняя функция уже завершила работу.
    let called = false;
    return function (...args) {
        if (!called) {
            called = true;
            return fn(...args);
        }
    }
};

fn = (a, b, c) => (a + b + c)

const onceFn = once(fn);

console.log(onceFn(1, 2, 3))
console.log(onceFn(2, 3, 6))


// onceFn([1, 2, 3]); // 6
// onceFn([2, 3, 6]); // returns undefined without calling fn