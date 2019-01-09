/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  const length = s.length;
  if (!length) return "";

  const single = getLongestWithSingleCenter(s);
  const double = getLongestWithDoubleCenters(s);

  return single.length > double.length ? single : double;
};

function getLongestWithSingleCenter(s) {
  const length = s.length;
  let maxSecondHalf = [];

  for (let center = 0; center < length; center++) {
    let tempMax = [s[center]];
    let radius = 1;

    while (true) {
      const leftEnd = center - radius;
      const rightEnd = center + radius;
      if (leftEnd < 0 || rightEnd >= length) break;

      if (s[leftEnd] !== s[rightEnd]) break;

      tempMax.push(s[leftEnd]);
      radius = radius + 1;
    }

    if (radius > maxSecondHalf.length) {
      maxSecondHalf = tempMax;
    }
  }

  let firstHalf = new Array(...maxSecondHalf);
  firstHalf.reverse();

  const maxPalindrome = firstHalf.slice(0, firstHalf.length - 1).join("") + maxSecondHalf.join("");
  return maxPalindrome;
}

function getLongestWithDoubleCenters(s) {
  const length = s.length;
  let maxSecondHalf = [];

  for (let lCenter = 0; lCenter < length - 1; lCenter++) {
    const rCenter = lCenter + 1;
    if (s[lCenter] !== s[rCenter]) continue;

    let tempMax = [s[rCenter]];
    let radius = 1;

    while (true) {
      const leftEnd = lCenter - radius;
      const rightEnd = rCenter + radius;
      if (leftEnd < 0 || rightEnd >= length) break;

      if (s[leftEnd] !== s[rightEnd]) break;

      tempMax.push(s[rightEnd]);
      radius = radius + 1;
    }

    if (radius > maxSecondHalf.length) {
      maxSecondHalf = tempMax;
    }
  }

  let firstHalf = new Array(...maxSecondHalf);
  firstHalf.reverse();

  const maxPalindrome = firstHalf.join("") + maxSecondHalf.join("");
  return maxPalindrome;
}


[
  "1",
  "babad",
  "cbbd"
].forEach(test => {
  const result = longestPalindrome(test);
  console.log(result);
})
