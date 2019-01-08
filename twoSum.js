/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  if (!nums || !(nums instanceof Array)) return;

  const length = nums.length;
  if (!length) return;

  for (let i = 0; i < length - 1; i++) {
    for (let j = i + 1; j < length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }

  return;
};


const tests = [
  [
    [], 1
  ],
  [
    [2, 7, 11, 15], 9
  ]
]

tests.forEach(test => {
  const result = twoSum(...test);
  console.log(result);
});
