const LinkedListNode = require('./LinkedListNode');
const isPalindrome = require('./isPalindrome');

function createLinkedList(arr) {
  let head = null;
  let current = null;
  for (let i = arr.length - 1; i >= 0; i--) {
    let node = new LinkedListNode(arr[i]);
    if (!head) {
      head = node;
      current = node;
    } else {
      current.next = node;
      current = node;
    }
  }
  return head;
}

function testIsPalindrome() {
  // Test cases
  const testCases = [
    { input: [1, 2, 2, 1], expected: true },
    { input: [1, 2, 3, 2, 1], expected: true },
    { input: [1, 2, 3, 4, 2, 1], expected: false },
    { input: [1], expected: true },
    { input: [], expected: true },
    { input: [1, 2, 3, 4, 5], expected: false }
  ];

  testCases.forEach((testCase, index) => {
    const listHead = createLinkedList(testCase.input);
    const result = isPalindrome(listHead);
    if (result === testCase.expected) {
      console.log(`Test case ${index + 1}: Passed`);
    } else {
      console.error(`Test case ${index + 1}: Failed (Expected ${testCase.expected} but got ${result})`);
    }
  });
}

testIsPalindrome();
