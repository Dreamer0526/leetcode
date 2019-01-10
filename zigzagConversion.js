/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  if (numRows === 1) return s;
  if (!s.length) return s;

  let resultObj = {};
  for (let i = 0; i < numRows; i++) resultObj[i] = [];

  const orderArr = getOrderArray(numRows);
  let pointer = 0;
  for (let i in s) {
    const rowId = orderArr[pointer];
    resultObj[rowId].push(s[i]);
    pointer = (pointer + 1) % orderArr.length;
  }

  let result = "";
  for (let i = 0; i < numRows; i++) {
    result = result + resultObj[i].join("");
  }

  return result;
};

function getOrderArray(n) {
  let arr = new Array();
  for (let i = 0; i < n; i++) arr.push(i);
  for (let i = n - 2; i > 0; i--) arr.push(i);
  return arr;
}

[
  ["PAYPALISHIRING", 3],
  ["PAYPALISHIRING", 4]
]
.forEach(test => console.log(convert(...test)))
