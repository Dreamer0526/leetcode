/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function (str) {
  if (!str) return 0;

  let firstCh, index;
  for (index = 0; index < str.length; index++) {
    const ch = str[index];
    if (ch !== ' ' && ch !== '-' && ch !== '+' && !VALID_VALUE.includes(ch)) return 0;
    if (ch !== ' ') {
      firstCh = ch;
      break;
    }
  }

  if (!firstCh) return 0;

  const negative = (firstCh === '-');
  let value = VALID_VALUE.includes(firstCh) ? firstCh * 1 : 0;

  for (index = index + 1; index < str.length; index++) {
    const ch = str[index];
    if (!VALID_VALUE.includes(ch)) break;

    value = value * 10 + ch * 1;
    if (value > MAX_VALUE && negative) return MIN_VALUE;
    if (value >= MAX_VALUE && !negative) return MAX_VALUE;
  }

  return negative ? 0 - value : value;
};

const MIN_VALUE = -2147483648;
const MAX_VALUE = 2147483647;
const VALID_VALUE = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];


[
  "42",
  "   -42",
  "4193 with words",
  "words and 987",
  "     ",
  "-91283472332",
  " -2147483647 "
].forEach(test => console.log(myAtoi(test)));
