'use strict';
const memo = new Map();
memo.set(0, 0);
memo.set(1, 0);
memo.set(2, 1);
function tribo(n) {
    if (memo.has(n)) {
        return memo.get(n);
    }
    const value = tribo(n - 1) + tribo(n - 2) + tribo(n - 3);
    memo.set(n, value);
    return value;
}
const length = 40;
for (let i = 0; i <= length; i++) {
    console.log(tribo(i));
}