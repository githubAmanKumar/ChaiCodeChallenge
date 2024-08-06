// Activity1
// Task1

// Define ListNode class
class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

// Function to add two numbers represented by linked lists
function addTwoNumbers(l1, l2) {
    let dummyHead = new ListNode(0); // Dummy node to simplify operations
    let p = l1, q = l2, current = dummyHead;
    let carry = 0;

    while (p !== null || q !== null) {
        let x = (p !== null) ? p.val : 0;
        let y = (q !== null) ? q.val : 0;
        let sum = carry + x + y;
        carry = Math.floor(sum / 10);
        current.next = new ListNode(sum % 10);
        current = current.next;

        if (p !== null) p = p.next;
        if (q !== null) q = q.next;
    }

    if (carry > 0) {
        current.next = new ListNode(carry);
    }

    return dummyHead.next;
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
const l1 = new ListNode(2, new ListNode(4, new ListNode(3))); // Represents 342
const l2 = new ListNode(5, new ListNode(6, new ListNode(4))); // Represents 465

// Add the two numbers and log the result
const sumList = addTwoNumbers(l1, l2);
const output = document.getElementById('output');
output.textContent = `Sum List:\n${printList(sumList)}`;

// Activity2
// Task2

 // Function to find the length of the longest substring without repeating characters
 function lengthOfLongestSubstring(s) {
    let maxLength = 0;
    let start = 0;
    const seen = new Set();

    for (let end = 0; end < s.length; end++) {
        while (seen.has(s[end])) {
            seen.delete(s[start]);
            start++;
        }
        seen.add(s[end]);
        maxLength = Math.max(maxLength, end - start + 1);
    }

    return maxLength;
}

// Test cases
const testCases2 = [
    "abcabcbb", // Example case
    "bbbbb",    // Single repeating character
    "pwwkew",   // Mixed characters
    "",         // Empty string
    "a"         // Single character
];

// Find and log results for test cases
const output2 = document.getElementById('output2');
testCases2.forEach((testCase, index) => {
    const result = lengthOfLongestSubstring(testCase);
    output2.textContent += `Test Case ${index + 1}:\nInput: "${testCase}"\nLength of Longest Substring: ${result}\n\n`;
});

// Activity3
// Task3
// Function to find the container with the most water
function maxArea(height) {
    let maxArea = 0;
    let left = 0;
    let right = height.length - 1;

    while (left < right) {
        const width = right - left;
        const minHeight = Math.min(height[left], height[right]);
        const area = width * minHeight;
        maxArea = Math.max(maxArea, area);

        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return maxArea;
}

// Test cases
const testCases3 = [
    [1, 8, 6, 2, 5, 4, 8, 3, 7], // Example case
    [1, 1],                      // Smallest case
    [4, 3, 2, 1, 4],            // Various heights
    [1, 2, 1, 2, 1, 2, 1, 2],   // Repeating pattern
    [5, 6, 7, 8, 9]              // Increasing heights
];

// Find and log results for test cases
const output3 = document.getElementById('output3');
testCases3.forEach((testCase, index) => {
    const result = maxArea(testCase);
    output3.textContent += `Test Case ${index + 1}:\nInput: [${testCase}]\nMaximum Area: ${result}\n\n`;
});

// Activity4
// Task4

// Function to find all unique triplets in an array that sum up to zero
function threeSum(nums) {
    const triplets = [];
    nums.sort((a, b) => a - b); // Sort the array

    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue; // Skip duplicates for the first element
        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];
            if (sum === 0) {
                triplets.push([nums[i], nums[left], nums[right]]);
                while (left < right && nums[left] === nums[left + 1]) left++; // Skip duplicates
                while (left < right && nums[right] === nums[right - 1]) right--; // Skip duplicates
                left++;
                right--;
            } else if (sum < 0) {
                left++;
            } else {
                right--;
            }
        }
    }

    return triplets;
}

// Test cases
const testCases4 = [
    [-1, 0, 1, 2, -1, -4], // Example case with multiple triplets
    [0, 0, 0, 0],          // All zeros
    [1, 2, -2, -1],        // No valid triplets
    [],                    // Empty array
    [3, -2, -1, 0, 1, 2]   // Example case with mixed numbers
];

// Find and log results for test cases
const output4 = document.getElementById('output4');
testCases4.forEach((testCase, index) => {
    const result = threeSum(testCase);
    output4.textContent += `Test Case ${index + 1}:\nInput: [${testCase}]\nTriplets: ${JSON.stringify(result)}\n\n`;
});

// Activity5
// Task5
// Function to group anagrams
function groupAnagrams(strs) {
    const map = new Map();

    for (const str of strs) {
        // Sort the characters of the string to create a key
        const sortedStr = str.split('').sort().join('');
        
        // Group anagrams together using the sorted string as the key
        if (!map.has(sortedStr)) {
            map.set(sortedStr, []);
        }
        map.get(sortedStr).push(str);
    }

    // Convert the map values to an array of grouped anagrams
    return Array.from(map.values());
}

// Test cases
const testCases5 = [
    ["eat", "tea", "tan", "ate", "nat", "bat"],  // Example case
    [""],                                       // Empty string
    ["a"],                                      // Single character
    ["abc", "bca", "cab", "xyz", "zyx"],        // Mixed anagrams
    ["listen", "silent", "enlist", "inlets", "abc", "cba", "bca"]  // Multiple groups
];

// Find and log results for test cases
const output5 = document.getElementById('output5');
testCases5.forEach((testCase, index) => {
    const result = groupAnagrams(testCase);
    output5.textContent += `Test Case ${index + 1}:\nInput: [${testCase}]\nGrouped Anagrams: ${JSON.stringify(result)}\n\n`;
});
