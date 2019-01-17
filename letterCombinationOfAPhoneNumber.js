/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  let result = [];
  if (!digits) return result;

  const mapping = {
    "2": "abc",
    "3": "def",
    "4": "ghi",
    "5": "jkl",
    "6": "mno",
    "7": "pqrs",
    "8": "tuv",
    "9": "wxyz"
  };

  result.push("");
  for (let digit = 0; digit < digits.length; digit++) {
    let localResult = [];
    const candidates = mapping[digits[digit]];

    while (result.length) {
      const seed = result.shift();

      for (let i = 0; i < candidates.length; i++) {
        localResult.push(seed + candidates[i]);
      }
    }

    result = localResult;
  }

  return result;
};


[
  "",
  "23"
].forEach(test => console.log(letterCombinations(test)));
