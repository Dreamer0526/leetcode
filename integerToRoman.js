/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
  const integer = toStringOfLen(num, 4);

  const T = ['M', 'C', 'X', 'I'];
  const F = ['D', 'L', 'V'];

  let roman = "";
  for (let i = 0; i < 4; i++) {
    const bit = integer[i] * 1;
    if (!bit) continue;

    if (bit === 9) {
      roman = roman + T[i] + T[i - 1];

    } else if (bit === 4) {
      roman = roman + T[i] + F[i - 1];

    } else {
      if (bit >= 5) {
        roman = roman + F[i - 1];
      }
      for (let j = 0; j < bit % 5; j++) {
        roman = roman + T[i];
      }
    }
  }

  return roman;
};

function toStringOfLen(num, len) {
  const str = num.toString();
  const lenOfPrefix = len - str.length;
  return lenOfPrefix < 0 ? null : (Array(lenOfPrefix + 1).join(0) + str);
}

[
  1,
  3,
  4,
  9,
  58,
  1994,
  3999
].forEach(test => console.log(intToRoman(test)));
