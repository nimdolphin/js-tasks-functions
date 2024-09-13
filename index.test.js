const { isPalindrome, substr, apply } = require('./index');

test('isPalindrome should return true for palindrome strings and numbers', () => {
  expect(isPalindrome('radar')).toBe(true);
  expect(isPalindrome(404)).toBe(true);
  expect(isPalindrome('hello')).toBe(false);
});

test('substr should return correct substring', () => {
  expect(substr('abba', 0, 1)).toBe('a');
  expect(substr('abba', 1, 2)).toBe('bb');
  expect(substr('abba', -10, 2)).toBe('ab');
  expect(substr('abba', 100, 3)).toBe('');
});

test('apply should correctly apply function multiple times', () => {
  expect(apply(3, (x) => x * 2, 1)).toBe(8);
  expect(apply(2, (x) => x + 1, 5)).toBe(7);
  expect(() => apply(-1, (x) => x - 1, 5)).toThrow(
    "you can't use a negative count"
  );
});
