// Activity1
// Task1
// Function to find indices of two numbers that add up to the target
function findTwoSum(nums, target) {
    const numMap = {}; // Store numbers and their indices
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (numMap[complement] !== undefined) {
            return [numMap[complement], i];
        }
        numMap[nums[i]] = i;
    }
    return []; // Return an empty array if no solution is found
}

// Test cases
const testCases = [
    { nums: [2, 7, 11, 15], target: 9 },
    { nums: [3, 2, 4], target: 6 },
    { nums: [3, 3], target: 6 }
];

// Find and log results for test cases
const output = document.getElementById('output');
testCases.forEach((testCase, index) => {
    const { nums, target } = testCase;
    const result = findTwoSum(nums, target);
    output.textContent += `Test Case ${index + 1}:\nArray: ${nums}\nTarget: ${target}\nIndices: ${result}\n\n`;
});
// Activity2
// Task2
function reverseInteger(num) {
    const INT_MAX = 2 ** 31 - 1;

    let reversed = 0;
    let sign = Math.sign(num);
    num = Math.abs(num);

    while (num !== 0) {
        const digit = num % 10;
        num = Math.floor(num / 10);

        // Check for overflow
        if (reversed > (INT_MAX - digit) / 10) {
            return 0; // Overflow
        }

        reversed = reversed * 10 + digit;
    }

    return reversed * sign;
}

// Test cases
const testCases2 = [123, -456, 120, 0, 1534236469];

// Find and log results for test cases
const output2 = document.getElementById('output2');
testCases2.forEach((testCase, index) => {
    const result = reverseInteger(testCase);
    output2.textContent += `Test Case ${index + 1}:\nInput: ${testCase}\nReversed: ${result}\n\n`;
});

// Activity3
// Task3
// Function to check if a number is a palindrome
function isPalindrome(num) {
    if (num < 0) return false; // Negative numbers are not palindromes

    const strNum = num.toString(); // Convert number to string
    const reversedStrNum = strNum.split('').reverse().join(''); // Reverse the string

    return strNum === reversedStrNum; // Check if original string equals reversed string
}

// Test cases
const testCases3 = [121, -121, 10, 0, 12321];

// Find and log results for test cases
const output3 = document.getElementById('output3');
testCases3.forEach((testCase, index) => {
    const result = isPalindrome(testCase);
    output3.textContent += `Test Case ${index + 1}:\nInput: ${testCase}\nIs Palindrome: ${result}\n\n`;
});

// Activity4
// Task4
// Define ListNode class
class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

// Function to merge two sorted linked lists
function mergeTwoLists(l1, l2) {
    let dummy = new ListNode(); // Create a dummy node to simplify the merge process
    let current = dummy; // Pointer to build the new sorted list

    while (l1 !== null && l2 !== null) {
        if (l1.val < l2.val) {
            current.next = l1;
            l1 = l1.next;
        } else {
            current.next = l2;
            l2 = l2.next;
        }
        current = current.next;
    }

    // Append any remaining nodes from l1 or l2
    current.next = l1 !== null ? l1 : l2;

    return dummy.next; // Return the merged list (excluding dummy node)
}

// Function to print linked list
function printList(head) {
    let result = [];
    let current = head;
    while (current) {
        result.push(current.val);
        current = current.next;
    }
    return result.join(' -> ');
}

// Create test cases
const l1 = new ListNode(1, new ListNode(3, new ListNode(5)));
const l2 = new ListNode(2, new ListNode(4, new ListNode(6)));

// Merge and log the result
const mergedList = mergeTwoLists(l1, l2);
const output4 = document.getElementById('output4');
output4.textContent = `Merged List:\n${printList(mergedList)}`;

// Activity5
// Task5
// Function to check if parentheses are valid
function isValid(s) {
    const stack = [];
    const mapping = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    for (const char of s) {
        if (char in mapping) {
            const topElement = stack.length === 0 ? '#' : stack.pop();
            if (mapping[char] !== topElement) {
                return false;
            }
        } else {
            stack.push(char);
        }
    }

    return stack.length === 0;
}

// Test cases
const testCase5s = [
    '()',
    '()[]{}',
    '(]',
    '([)]',
    '{[]}',
    ''
];

// Find and log results for test cases
const output5 = document.getElementById('output5');
testCase5s.forEach((testCase5, index) => {
    const result = isValid(testCase5);
    output5.textContent += `Test Case ${index + 1}:\nInput: "${testCase5}"\nIs Valid: ${result}\n\n`;
});