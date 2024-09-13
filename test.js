const { isPalindrome, substr, apply } = require('./index');

console.log(isPalindrome('radar')); // true
console.log(substr('hello world', 0, 5)); // hello
console.log(apply(3, (x) => x * 2, 1)); // 8
