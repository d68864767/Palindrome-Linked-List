const LinkedListNode = require('./LinkedListNode');
const isPalindrome = require('./isPalindrome');

function createLinkedListFromArray(values) {
  let head = null;
  let current = null;

  for (const value of values) {
    if (!head) {
      head = new LinkedListNode(value);
      current = head;
    } else {
      current.next = new LinkedListNode(value);
      current = current.next;
    }
  }

  return head;
}

function printLinkedList(head) {
  let current = head;
  let output = '';
  while (current) {
    output += current.value + (current.next ? ' -> ' : '');
    current = current.next;
  }
  console.log(output);
}

// Example usage:
const values = [1, 2, 2, 1];
const head = createLinkedListFromArray(values);

console.log('Linked List:');
printLinkedList(head);

const result = isPalindrome(head);
console.log('Is palindrome:', result);

// Additional test cases:
const test1 = createLinkedListFromArray([1, 2, 3, 2, 1]);
console.log('Linked List:');
printLinkedList(test1);
console.log('Is palindrome:', isPalindrome(test1));

const test2 = createLinkedListFromArray([1, 2, 3, 4, 2, 1]);
console.log('Linked List:');
printLinkedList(test2);
console.log('Is palindrome:', isPalindrome(test2));
