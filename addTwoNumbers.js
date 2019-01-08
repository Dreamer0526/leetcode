/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  if (!l1) return l2;
  if (!l2) return l1;

  let { value, carry } = addTwoDigits(l1.val, l2.val, 0);
  let result = new ListNode(value);
  let tail = result;
  l1 = l1.next;
  l2 = l2.next;

  while (l1 || l2) {
    const v1 = l1 ? l1.val : 0;
    const v2 = l2 ? l2.val : 0;

    const sum = addTwoDigits(v1, v2, carry);
    value = sum.value;
    carry = sum.carry;

    tail.next = new ListNode(value);

    tail = tail.next;
    l1 = l1 ? l1.next : null;
    l2 = l2 ? l2.next : null;
  }

  if (carry) {
    tail.next = new ListNode(1);
  }

  return result;
};

const addTwoDigits = (d1, d2, p) => {
  const sum = d1 + d2 + p;
  const value = sum % 10;
  const carry = sum < 10 ? 0 : 1;

  return {
    value,
    carry
  };
};

function ListNode(val) {
  this.val = val;
  this.next = null;
}

// TEST

let l1 = new ListNode(1);

let l2 = new ListNode(9);
l2.next = new ListNode(9);
l2.next.next = new ListNode(9);

const res = addTwoNumbers(l1, l2);
console.log(res);
