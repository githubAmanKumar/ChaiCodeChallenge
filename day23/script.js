// Activity1
// Task1

// Function to find the median of two sorted arrays
function findMedianSortedArrays(nums1, nums2) {
    const mergedArray = mergeSortedArrays(nums1, nums2);
    const n = mergedArray.length;
    const mid = Math.floor(n / 2);

    if (n % 2 === 0) {
        // Even length, return average of the two middle elements
        return (mergedArray[mid - 1] + mergedArray[mid]) / 2;
    } else {
        // Odd length, return the middle element
        return mergedArray[mid];
    }
}

// Helper function to merge two sorted arrays
function mergeSortedArrays(arr1, arr2) {
    let i = 0, j = 0;
    const mergedArray = [];

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            mergedArray.push(arr1[i++]);
        } else {
            mergedArray.push(arr2[j++]);
        }
    }

    // Add remaining elements
    while (i < arr1.length) mergedArray.push(arr1[i++]);
    while (j < arr2.length) mergedArray.push(arr2[j++]);

    return mergedArray;
}

// Test cases
const testCases = [
    [[1, 3], [2]],                   // Example case with odd total length
    [[1, 2], [3, 4]],                // Example case with even total length
    [[], [1, 2, 3]],                 // One empty array
    [[1, 2, 3], []],                 // Other empty array
    [[1, 3, 5], [2, 4, 6, 7, 8]]    // General case
];

// Find and log results for test cases
const output = document.getElementById('output');
testCases.forEach((testCase, index) => {
    const result = findMedianSortedArrays(testCase[0], testCase[1]);
    output.textContent += `Test Case ${index + 1}:\nArray 1: [${testCase[0]}]\nArray 2: [${testCase[1]}]\nMedian: ${result}\n\n`;
});

// Activity2
// Task2
// Definition for singly-linked list.
class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

// Function to merge k sorted linked lists
function mergeKLists(lists) {
    if (lists.length === 0) return null;

    const minHeap = [];
    const dummy = new ListNode(0);
    let current = dummy;

    // Add the first node of each list to the min-heap
    for (const list of lists) {
        if (list) minHeap.push(list);
    }
    
    // Min-heap comparator
    minHeap.sort((a, b) => a.val - b.val);

    while (minHeap.length > 0) {
        const node = minHeap.shift(); // Get the smallest node
        current.next = node;
        current = current.next;
        
        if (node.next) {
            minHeap.push(node.next);
            minHeap.sort((a, b) => a.val - b.val); // Re-sort heap
        }
    }

    return dummy.next;
}

// Helper function to convert array to linked list
function arrayToList(arr) {
    const dummy = new ListNode(0);
    let current = dummy;
    for (const val of arr) {
        current.next = new ListNode(val);
        current = current.next;
    }
    return dummy.next;
}

// Helper function to convert linked list to array
function listToArray(head) {
    const arr = [];
    while (head) {
        arr.push(head.val);
        head = head.next;
    }
    return arr;
}

// Test cases
const testCases2 = [
    [[arrayToList([1, 4, 5]), arrayToList([1, 3, 4]), arrayToList([2, 6])]],
    [[arrayToList([]), arrayToList([]), arrayToList([])]],
    [[arrayToList([1]), arrayToList([1]), arrayToList([1])]],
    [[arrayToList([5, 10, 15]), arrayToList([2, 6, 9]), arrayToList([1, 3, 7])]]
];

// Find and log results for test cases
const output2 = document.getElementById('output2');
testCases2.forEach((testCase, index) => {
    const mergedHead = mergeKLists(testCase[0]);
    const mergedArray = listToArray(mergedHead);
    output2.textContent += `Test Case ${index + 1}:\nMerged List: [${mergedArray}]\n\n`;
});

// Activity3
// Task3
function trap(height) {
    let left = 0, right = height.length - 1;
    let left_max = 0, right_max = 0;
    let water_trapped = 0;

    while (left <= right) {
        if (height[left] <= height[right]) {
            if (height[left] >= left_max) {
                left_max = height[left];
            } else {
                water_trapped += left_max - height[left];
            }
            left++;
        } else {
            if (height[right] >= right_max) {
                right_max = height[right];
            } else {
                water_trapped += right_max - height[right];
            }
            right--;
        }
    }

    return water_trapped;
}

// Test cases
const testCases3 = [
    [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1], // Expected output3: 6
    [4, 2, 0, 3, 2, 5], // Expected output3: 9
    [1, 0, 1], // Expected output3: 1
    [2, 0, 2], // Expected output3: 2
    [1, 2, 3, 4, 5, 6, 7, 8, 9] // Expected output3: 0
];

// Find and log results for test cases
const output3 = document.getElementById('output3');
testCases3.forEach((testCase, index) => {
    const result = trap(testCase);
    output3.textContent += `Test Case ${index + 1}:\nArray: [${testCase}]\nTrapped Water: ${result}\n\n`;
});

// Activity4
// Task4
function solveNQueens(n) {
    const solutions = [];
    const board = Array(n).fill(null).map(() => Array(n).fill('.'));
    const cols = new Set(); // Columns with queens
    const diag1 = new Set(); // Main diagonals
    const diag2 = new Set(); // Anti-diagonals

    function backtrack(row) {
        if (row === n) {
            // Found a solution, add it to results
            solutions.push(board.map(r => r.join('')));
            return;
        }
        for (let col = 0; col < n; col++) {
            const d1 = row - col; // Main diagonal identifier
            const d2 = row + col; // Anti-diagonal identifier
            if (cols.has(col) || diag1.has(d1) || diag2.has(d2)) {
                continue; // Skip if conflicts
            }
            // Place queen
            board[row][col] = 'Q';
            cols.add(col);
            diag1.add(d1);
            diag2.add(d2);
            // Recur to place the next queen
            backtrack(row + 1);
            // Remove queen and backtrack
            board[row][col] = '.';
            cols.delete(col);
            diag1.delete(d1);
            diag2.delete(d2);
        }
    }

    backtrack(0);
    return solutions;
}

// Test cases
const testCases4 = [4, 8]; // Example cases: 4x4 and 8x8 boards

const output4 = document.getElementById('output4');
testCases4.forEach(n => {
    const solutions = solveNQueens(n);
    output4.textContent += `N=${n}:\n`;
    solutions.forEach((solution, index) => {
        output4.textContent += `Solution ${index + 1}:\n`;
        solution.forEach(line => output4.textContent += line + '\n');
        output4.textContent += '\n';
    });
    output4.textContent += '\n';
});

// Activity5
// Task5

function wordLadderLength(beginWord, endWord, wordList) {
    if (!wordList.includes(endWord)) return 0; // End word must be in the list

    const wordSet = new Set(wordList);
    const queue = [[beginWord, 1]]; // Each element is [currentWord, level]
    const visited = new Set();
    visited.add(beginWord);

    while (queue.length > 0) {
        const [currentWord, level] = queue.shift();

        if (currentWord === endWord) return level;

        for (let i = 0; i < currentWord.length; i++) {
            const chars = currentWord.split('');
            for (let c = 'a'.charCodeAt(0); c <= 'z'.charCodeAt(0); c++) {
                const newChar = String.fromCharCode(c);
                chars[i] = newChar;
                const newWord = chars.join('');
                if (wordSet.has(newWord) && !visited.has(newWord)) {
                    visited.add(newWord);
                    queue.push([newWord, level + 1]);
                }
            }
        }
    }
    return 0; // No path found
}

// Test cases
const testCases5 = [
    { beginWord: "hit", endWord: "cog", wordList: ["hot","dot","dog","lot","log","cog"] },
    { beginWord: "hit", endWord: "cog", wordList: ["hot","dot","dog","lot","log"] }
];

const output5 = document.getElementById('output5');
testCases5.forEach(({ beginWord, endWord, wordList }) => {
    const length = wordLadderLength(beginWord, endWord, wordList);
    output5.textContent += `Begin Word: ${beginWord}, End Word: ${endWord}\n`;
    output5.textContent += `Word List: ${wordList.join(', ')}\n`;
    output5.textContent += `Shortest Transformation Length: ${length}\n\n`;
});
