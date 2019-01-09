/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  const length = s.length;
  if (!length) return 0;

  let maxLength = 0;
  let tempMax = 0;

  for (let head = 0; head < length; head++) {
    if (length - head + 1 < maxLength) return maxLength;

    tempMax = 1;
    let countObj = {};
    countObj[s[head]] = true;

    for (let tail = head + 1; tail < length; tail++) {
      if (countObj[s[tail]]) break;

      tempMax = tempMax + 1;
      countObj[s[tail]] = true;
    }

    maxLength = Math.max(maxLength, tempMax);
  }

  return maxLength;
};


[
  "",
  "abcabcbb",
  "bbbbb",
  "pwwkew",
  "1234567890qwertyuiopasdfghjklzxcvbnm1"
]
.forEach(test => {
  const result = lengthOfLongestSubstring(test);
  console.log(result);
});
