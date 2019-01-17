/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  const array = [...nums].sort((a, b) => a - b);
  const length = array.length;

  let globalDiff = Number.MAX_VALUE;

  for (let i = 0; i <= length - 3; i++) {
    if (i > 0 && array[i] === array[i - 1]) continue;

    let localDiff = Number.MAX_VALUE;
    let prevDiff;

    let l = i + 1;
    let r = length - 1;

    while (l < r) {
      const sum = array[i] + array[l] + array[r];
      const diff = sum - target;

      if (diff === 0) return target;

      if (prevDiff && prevDiff * diff < 0) {
        globalDiff = absMin(prevDiff, diff);
        break;
      }

      localDiff = absMin(localDiff, diff);

      if (diff > 0) {
        do {
          r = r - 1;
        } while (l < r && array[r] === array[r + 1]);

      } else { // diff < 0
        do {
          l = l + 1
        } while (l < r && array[l] === array[l - 1]);
      }
    }

    globalDiff = absMin(globalDiff, localDiff);
  }

  return target + globalDiff;
}

function absMin(a, b) {
  return Math.abs(a) < Math.abs(b) ? a : b;
}

console.log(threeSumClosest([-1, 2, 1, -4], 1));
console.log(threeSumClosest([1, 2, 4, 8, 16, 32, 64, 128], 82));
