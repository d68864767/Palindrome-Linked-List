const LinkedListNode = require('./LinkedListNode');

function isPalindrome(head) {
  if (!head || !head.next) {
    return true;
  }

  // Find the middle of the linked list
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // Reverse the second half of the linked list
  let prev = null;
  while (slow) {
    let next = slow.next;
    slow.next = prev;
    prev = slow;
    slow = next;
  }

  // Compare the first half and the reversed second half
  let left = head;
  let right = prev;
  while (right) {
    if (left.value !== right.value) {
      return false;
    }
    left = left.next;
    right = right.next;
  }

  return true;
}

module.exports = isPalindrome;
