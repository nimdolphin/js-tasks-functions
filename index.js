const isPalindrome = (value) => {
  const str = String(value).replace(/\s+/g, '').toLowerCase();

  if (str.length <= 1) {
    return true;
  }

  if (str[0] !== str[str.length - 1]) {
    return false;
  }

  return isPalindrome(str.slice(1, -1));
};

const substr = (str, start = 0, length = str.length) => {
  const strLength = str.length;

  if (start < 0) {
    start = strLength + start;
    if (start < 0) start = 0;
  }

  if (start >= strLength) {
    return '';
  }

  if (length < 0) {
    length = 0;
  }

  if (length === undefined || start + length > strLength) {
    length = strLength - start;
  }

  let result = '';
  for (let i = start; i < start + length; i++) {
    result += str[i];
  }

  return result;
};

const apply = (count, func, arg) => {
  if (count < 0) {
    throw new Error("you can't use a negative count");
  }

  let result = arg;
  for (let i = 0; i < count; i++) {
    result = func(result);
  }
  return result;
};

module.exports = { isPalindrome, substr, apply };
