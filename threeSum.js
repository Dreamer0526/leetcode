/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const array = [...nums].sort((a, b) => a - b);
  const length = array.length;

  let triples = [];

  for (let i = 0; i <= length - 3; i++) {
    if (i > 0 && array[i] === array[i - 1]) continue;

    let l = i + 1;
    let r = length - 1;

    while (l < r) {
      const sum = array[i] + array[l] + array[r];
      if (sum > 0) {
        do {
          r = r - 1;
        } while (l < r && array[r] === array[r + 1]);

      } else if (sum < 0) {
        do {
          l = l + 1
        } while (l < r && array[l] === array[l - 1]);
      } else {
        triples.push([array[i], array[l], array[r]]);
        do {
          r = r - 1;
        } while (l < r && array[r] === array[r + 1]);
        do {
          l = l + 1
        } while (l < r && array[l] === array[l - 1]);
      }
    }
  }

  return triples;
};


[
  [-1, 0, 1, 2, -1, -4],
  [-1, -1, -1, -1, 0, 1, 1, 1, 1],
  [-4, -2, -2, -2, 0, 1, 2, 2, 2, 3, 3, 4, 4, 6, 6]
].forEach(test => console.log(threeSum(test)))
