// Activity1
// Task1
function bubbleSort(arr) {
    let n = arr.length;
    let swapped;

    // Traverse through all array elements
    for (let i = 0; i < n - 1; i++) {
        swapped = false;

        // Last i elements are already in place
        for (let j = 0; j < n - i - 1; j++) {
            // Traverse the array from 0 to n-i-1
            // Swap if the element found is greater than the next element
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                swapped = true;
            }
        }

        // If no two elements were swapped by inner loop, then break
        if (!swapped) break;
    }

    return arr;
}

// Example usage
const number = [64, 25, 1, 22, 11];
// const sortedNumber = bubbleSort(number);
// console.log("Sorted array:", sortedNumber);
// Output: Sorted array: [1, 11, 22, 25, 64]


// Task2
function selectionSort(arr) {
    let n = arr.length;

    // Traverse through all array elements
    for (let i = 0; i < n - 1; i++) {
        // Find the index1 of the minimum element in the unsorted part of the array
        let minIndex1 = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex1]) {
                minIndex1 = j;
            }
        }

        // Swap the found minimum element with the first element of the unsorted part
        if (minIndex1 !== i) {
            let temp = arr[i];
            arr[i] = arr[minIndex1];
            arr[minIndex1] = temp;
        }
    }

    return arr;
}

// Example usage
// const sortedNumber = selectionSort(number);
// console.log("Sorted array:", sortedNumber);
// Output: Sorted array: [1, 11, 22, 25, 64]


// Task3
function quicksort(arr) {
    // Helper function to perform the partitioning
    function partition(low, high) {
        const pivot = arr[high];
        let i = low - 1;
        
        for (let j = low; j < high; j++) {
            if (arr[j] < pivot) {
                i++;
                // Swap arr[i] and arr[j]
                [arr[i], arr[j]] = [arr[j], arr[i]];
            }
        }
        // Swap arr[i + 1] and arr[high] (or pivot)
        [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
        return i + 1;
    }

    // Recursive quicksort function
    function quicksortRecursive(low, high) {
        if (low < high) {
            const pi = partition(low, high);
            quicksortRecursive(low, pi - 1);
            quicksortRecursive(pi + 1, high);
        }
    }

    quicksortRecursive(0, arr.length - 1);
    return arr;
}

// Example usage
// const sortNumber = quicksort(number);
// console.log("Sorted array:", sortNumber);
// Output: Sorted array: [1, 11, 22, 25, 64]


// Activity2
// Task4
function linearSearch(arr, target1) {
    // Iterate through the array
    for (let i = 0; i < arr.length; i++) {
        // Check if the current element is the target1
        if (arr[i] === target1) {
            return i; // Return the index1 if found
        }
    }
    return -1; // Return -1 if the target1 is not found
}

// Example usage
const numbers = [34, 78, 12, 89, 23];
const target1 = 34;
const index1 = linearSearch(numbers, target1);

// if (index1 !== -1) {
//     console.log(`Target1 ${target1} found at index1 ${index1}.`);
// } else {
//     console.log(`Target1 ${target1} not found in the array.`);
// }
// Output: Target1 89 found at index1 3.


// Task5
function binarySearch(arr, target) {
    let low = 0;
    let high = arr.length - 1;

    while (low <= high) {
        // Calculate the middle index
        const mid = Math.floor((low + high) / 2);
        
        // Check if the target is present at mid
        if (arr[mid] === target) {
            return mid; // Target found at index mid
        }
        
        // If the target is greater, ignore the left half
        if (arr[mid] < target) {
            low = mid + 1;
        } 
        // If the target is smaller, ignore the right half
        else {
            high = mid - 1;
        }
    }
    
    return -1; // Target not found
}

// Example usage
const sortedNumbers = [12, 23, 34, 45, 56, 67, 78, 89, 90];
const target = 45;
// const index = binarySearch(sortedNumbers, target);

// if (index !== -1) {
//     console.log(`Target ${target} found at index ${index}.`);
// } else {
//     console.log(`Target ${target} not found in the array.`);
// }
// Output: Target 45 found at index 3.


// Activity3
// Task6
function countCharacterOccurrences(str) {
    // Create an object to store character counts
    const charCount = {};

    // Loop through each character in the string
    for (const char of str) {
        // If the character is not in the object, add it with a count of 1
        if (charCount[char]) {
            charCount[char]++;
        } else {
            charCount[char] = 1;
        }
    }

    return charCount;
}

// Example usage
const inputString1 = "Aman Kumar";
// const counts = countCharacterOccurrences(inputString1);

// // Log the character counts
// for (const [char, count] of Object.entries(counts)) {
//     console.log(`Character '${char}' occurs ${count} times.`);
// }
// Example Output:
// Character 'h' occurs 1 times.
// Character 'e' occurs 1 times.
// Character 'l' occurs 3 times.
// Character 'o' occurs 2 times.
// Character ' ' occurs 1 times.
// Character 'w' occurs 1 times.
// Character 'r' occurs 1 times.
// Character 'd' occurs 1 times.


// Task7
function longestUniqueSubstring(str) {
    let start = 0; // Start index of the sliding window
    let maxLength = 0; // Length of the longest substring found
    let charSet = new Set(); // Set to store unique characters in the current window

    // Iterate over each character in the string
    for (let end = 0; end < str.length; end++) {
        // While the character is already in the set, remove characters from the start
        while (charSet.has(str[end])) {
            charSet.delete(str[start]);
            start++;
        }
        
        // Add the current character to the set
        charSet.add(str[end]);
        
        // Update the maximum length of the substring
        maxLength = Math.max(maxLength, end - start + 1);
    }
    
    return maxLength;
}

// Example usage
const inputString = "abcabcbb";
// const length = longestUniqueSubstring(inputString);

// console.log(`Length of the longest substring without repeating characters: ${length}`);
// Output: Length of the longest substring without repeating characters: 3

// Activity4
// Task8
function rotateArray(arr, k) {
    // Handle edge cases
    if (arr.length === 0 || k % arr.length === 0) {
        return arr; // No rotation needed
    }
    
    // Normalize k to be within the bounds of the array length
    k = k % arr.length;
    
    // Slice the array into two parts and concatenate
    const rotatedArray = arr.slice(-k).concat(arr.slice(0, -k));
    
    return rotatedArray;
}

// Example usage
const originalArray = [1, 2, 3, 4, 5, 6, 7];
const k = 3;
// const rotated = rotateArray(originalArray, k);

// console.log(`Original array: [${originalArray}]`);
// console.log(`Rotated array by ${k} positions: [${rotated}]`);
// Output:
// Original array: [1, 2, 3, 4, 5, 6, 7]
// Rotated array by 3 positions: [5, 6, 7, 1, 2, 3, 4]


// Task9
function mergeSortedArrays(arr1, arr2) {
    let mergedArray = [];
    let i = 0; // Pointer for arr1
    let j = 0; // Pointer for arr2

    // Traverse both arrays and merge them
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            mergedArray.push(arr1[i]);
            i++;
        } else {
            mergedArray.push(arr2[j]);
            j++;
        }
    }

    // If there are remaining elements in arr1, append them
    while (i < arr1.length) {
        mergedArray.push(arr1[i]);
        i++;
    }

    // If there are remaining elements in arr2, append them
    while (j < arr2.length) {
        mergedArray.push(arr2[j]);
        j++;
    }

    return mergedArray;
}

// Example usage
const sortedArray1 = [1, 3, 5, 7];
const sortedArray2 = [2, 4, 6, 8];
// const merged = mergeSortedArrays(sortedArray1, sortedArray2);

// console.log(`Merged array: [${merged}]`);
// Output: Merged array: [1, 2, 3, 4, 5, 6, 7, 8]


// Activity5
// Task10
function fibonacci(n) {
    if (n <= 0) return 0; // Handle non-positive input
    if (n === 1) return 1; // Base cases

    // Create an array to store Fibonacci numbers up to n
    let dp = new Array(n + 1);
    dp[0] = 0; // F(0)
    dp[1] = 1; // F(1)

    // Fill the array using the previously computed values
    for (let i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }

    return dp[n];
}

// Example usage
const maxNumber = 10; // Find Fibonacci numbers up to F(10)
// for (let i = 0; i <= maxNumber; i++) {
//     console.log(`F(${i}) = ${fibonacci(i)}`);
// }
// Output:
// F(0) = 0
// F(1) = 1
// F(2) = 1
// F(3) = 2
// F(4) = 3
// F(5) = 5
// F(6) = 8
// F(7) = 13
// F(8) = 21
// F(9) = 34
// F(10) = 55

// Task11
function knapsack(weights, values, capacity) {
    const n = weights.length;
    // Create a 2D array to store the maximum values for each capacity and item
    let dp = Array(n + 1).fill(null).map(() => Array(capacity + 1).fill(0));

    // Fill the dp array
    for (let i = 1; i <= n; i++) {
        for (let w = 1; w <= capacity; w++) {
            // If the weight of the current item is more than the capacity w, skip it
            if (weights[i - 1] > w) {
                dp[i][w] = dp[i - 1][w];
            } else {
                // Choose the maximum between including the item and not including it
                dp[i][w] = Math.max(dp[i - 1][w], dp[i - 1][w - weights[i - 1]] + values[i - 1]);
            }
        }
    }

    // The maximum value that can be obtained with the given capacity
    return dp[n][capacity];
}

// Example usage
const weights = [1, 2, 3, 8, 7, 4];
const values = [20, 5, 10, 40, 15, 25];
const capacity = 10;

const maxValue = knapsack(weights, values, capacity);

console.log(`Maximum value that can be obtained: ${maxValue}`);
// Output: Maximum value that can be obtained: 60
