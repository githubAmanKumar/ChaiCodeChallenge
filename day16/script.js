// Activity1
// Task1
function factorial(num) {
    if (num === 0 || num === 1) {
        return 1; // Base case: factorial of 0 or 1 is 1
    } else {
        return num * factorial(num - 1); // Recursive case: num * factorial of num - 1
    }
}

// // Test cases
// console.log(factorial(3)); // Output: 6
// console.log(factorial(4)); // Output: 24
// console.log(factorial(5)); // Output: 120
// console.log(factorial(0)); // Output: 1
// console.log(factorial(1)); // Output: 1

// Task2
function fibonacci(n) {
    if (n <= 0) {
        return 0; // Base case: Fibonacci of 0 is 0
    } else if (n === 1) {
        return 1; // Base case: Fibonacci of 1 is 1
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2); // Recursive case
    }
}

// Test cases
// console.log(fibonacci(0)); // Output: 0
// console.log(fibonacci(1)); // Output: 1
// console.log(fibonacci(2)); // Output: 1
// console.log(fibonacci(3)); // Output: 2
// console.log(fibonacci(4)); // Output: 3
// console.log(fibonacci(5)); // Output: 5
// console.log(fibonacci(6)); // Output: 8
// console.log(fibonacci(7)); // Output: 13
// console.log(fibonacci(8)); // Output: 21


// Activity2
// Task3
function arrSum(arr) {
    // Helper function to use recursion with additional parameters
    function sumHelper(arr, index) {
        if (index >= arr.length) {
            return 0; // Base case: if index exceeds array length, return 0
        }
        return arr[index] + sumHelper(arr, index + 1); // Recursive case
    }
    return sumHelper(arr, 0); // Initial call to the helper function with index 0
}

// Test cases
// console.log(arrSum([1, 6, 8])); // Output: 15
// console.log(arrSum([2, 4, 6, 8, 10])); // Output: 30
// console.log(arrSum([10, 20, 30])); // Output: 60
// console.log(arrSum([])); // Output: 0
// console.log(arrSum([5])); // Output: 5

// Task4
function findMax(arr) {
    // Helper function to use recursion with additional parameters
    function maxHelper(arr, index, currentMax) {
        if (index >= arr.length) {
            return currentMax; // Base case: if index exceeds array length, return current max
        }
        // Update the current max if the current element is greater
        currentMax = arr[index] > currentMax ? arr[index] : currentMax;
        return maxHelper(arr, index + 1, currentMax); // Recursive case
    }
    // Initial call to the helper function with index 0 and the first element as the initial max
    return maxHelper(arr, 0, arr[0]);
}

// Test cases
// console.log(findMax([1, 6, 8])); // Output: 8
// console.log(findMax([2, 4, 6, 8, 10])); // Output: 10
// console.log(findMax([10, 20, 30])); // Output: 30
// console.log(findMax([5])); // Output: 5
// console.log(findMax([-10, -20, -30, -5])); // Output: -5


// Activity3
// Task5

function strRev(str) {
    function revfun(str, index) {
        if (index < 0) {
            return ""; // Base case: when index is less than 0, return an empty string
        }
        // Accumulate the reversed string by appending the current character
        return str[index] + revfun(str, index - 1);
    }
    // Start the recursion with the last character index
    return revfun(str, str.length - 1);
}

// Test case
// console.log(strRev("Aman")); // Output: "namA"
// console.log(strRev("Hello, World!")); // Output: "!dlroW ,olleH"
// console.log(strRev("JavaScript")); // Output: "tpircSavaJ"
// console.log(strRev("OpenAI")); // Output: "IAnepO"

// Task6
let str = "nitin";

let revStr = function strRev(str) {
    function revfun(str, index) {
        if (index < 0) {
            return ""; // Base case: when index is less than 0, return an empty string
        }
        // Accumulate the reversed string by appending the current character
        return str[index] + revfun(str, index - 1);
    }
    // Start the recursion with the last character index
    return revfun(str, str.length - 1);
}(str);
if (str == revStr) {
    // console.log("Pallindrome");
} else {
    // console.log("Not Pallindrom");
}

// Activity4
// Task7
function binarySearch(arr, target, low = 0, high = arr.length - 1) {
    if (low > high) {
        return -1; // Base case: target not found
    }

    const mid = Math.floor((low + high) / 2);

    if (arr[mid] === target) {
        return mid; // Base case: target found
    } else if (arr[mid] < target) {
        return binarySearch(arr, target, mid + 1, high); // Search in the right half
    } else {
        return binarySearch(arr, target, low, mid - 1); // Search in the left half
    }
}

// Test cases
const sortedArr = [1, 2, 3, 5, 10];
// console.log(binarySearch(sortedArr, 2)); // Output: 1
// console.log(binarySearch(sortedArr, 10)); // Output: 4
// console.log(binarySearch(sortedArr, 1)); // Output: 0
// console.log(binarySearch(sortedArr, 3)); // Output: 2
// console.log(binarySearch(sortedArr, 7)); // Output: -1 (not found)


// Task8
function countOccurrences(arr, target) {
    // Helper function to use recursion with additional parameters
    function countHelper(arr, target, index) {
        if (index >= arr.length) {
            return 0; // Base case: if index exceeds array length, return 0
        }
        // Check if the current element matches the target
        const match = arr[index] === target ? 1 : 0;
        // Recursively count the occurrences in the rest of the array
        return match + countHelper(arr, target, index + 1);
    }
    // Start the recursion with the first index
    return countHelper(arr, target, 0);
}

// Test cases
// console.log(countOccurrences([1, 2, 3, 4, 2, 2, 5], 2)); // Output: 3
// console.log(countOccurrences([7, 8, 7, 7, 10], 7)); // Output: 3
// console.log(countOccurrences([1, 1, 1, 1, 1], 1)); // Output: 5
// console.log(countOccurrences([10, 20, 30], 5)); // Output: 0
// console.log(countOccurrences([], 5)); // Output: 0


// Activity5
// Task9
// Definition for a binary tree node
class TreeNod {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

function inOrderTraversal(rootu) {
    if (rootu === null) {
        return; // Base case: if the node is null, return
    }

    // Traverse the left subtree
    inOrderTraversal(rootu.left);

    // Visit the rootu node
    console.log(rootu.val);

    // Traverse the right subtree
    inOrderTraversal(rootu.right);
}

// Example usage
// Create a binary tree
//       1
//      / \
//     2   3
//    / \
//   4   5
const rootu = new TreeNod(1);
rootu.left = new TreeNod(2);
rootu.right = new TreeNod(3);
rootu.left.left = new TreeNod(4);
rootu.left.right = new TreeNod(5);

// Perform in-order traversal and log the nodes
// inOrderTraversal(rootu);
// Output: 4, 2, 5, 1, 3


// Task10
// Definition for a binary tree node
class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

function calculateDepth(root) {
    if (root === null) {
        return 0; // Base case: if the node is null, the depth is 0
    }

    // Recursively calculate the depth of the left subtree
    const leftDepth = calculateDepth(root.left);

    // Recursively calculate the depth of the right subtree
    const rightDepth = calculateDepth(root.right);

    // The depth of the tree is the maximum of the depths of the subtrees plus 1
    return Math.max(leftDepth, rightDepth) + 1;
}

// Example usage
// Create a binary tree
//       1
//      / \
//     2   3
//    / \
//   4   5
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

// Calculate and log the depth of the tree
console.log(calculateDepth(root)); // Output: 3

// Another test case
// Create another binary tree
//         1
//        / \
//       2   3
//      /
//     4
//    /
//   5
const root2 = new TreeNode(1);
root2.left = new TreeNode(2);
root2.right = new TreeNode(3);
root2.left.left = new TreeNode(4);
root2.left.left.left = new TreeNode(5);

// Calculate and log the depth of the tree
console.log(calculateDepth(root2)); // Output: 4

// Empty tree
console.log(calculateDepth(null)); // Output: 0
