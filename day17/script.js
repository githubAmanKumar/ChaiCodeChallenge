// Activity1
// Task1
class Node {
    constructor(value) {
        this.value = value; // Stores the data of the node
        this.next = null;  // Points to the next node in the list
    }
}

const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);

// Linking nodes
node1.next = node2;
node2.next = node3;

// Print linked list values
let currentNode = node1;
while (currentNode !== null) {
    // console.log(currentNode.value);
    currentNode = currentNode.next;
}

// Output:
// 1
// 2
// 3


// Task2

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    // Add a node to the end of the linked list
    add(value) {
        const newNode = new Node(value);

        if (this.size === 0) {
            // If the list is empty, set both head and tail to the new node
            this.head = newNode;
            this.tail = newNode;
        } else {
            // Otherwise, add the new node to the end and update the tail
            this.tail.next = newNode;
            this.tail = newNode;
        }

        this.size++;
    }

    // Remove a node from the end of the linked list
    remove() {
        if (this.size === 0) {
            console.log("The list is empty.");
            return;
        }

        if (this.size === 1) {
            // If there's only one node, set head and tail to null
            this.head = null;
            this.tail = null;
        } else {
            // Otherwise, traverse to the second last node
            let current = this.head;
            while (current.next !== this.tail) {
                current = current.next;
            }
            // Remove the last node and update the tail
            current.next = null;
            this.tail = current;
        }

        this.size--;
    }

    // Display all nodes in the linked list
    display() {
        let current = this.head;
        while (current !== null) {
            console.log(current.value);
            current = current.next;
        }
    }
}

// Example usage
const list = new LinkedList();
list.add(1);
list.add(2);
list.add(3);
// console.log("Linked List:");
// list.display(); // Output: 1, 2, 3

list.remove();
// console.log("After removing the last node:");
// list.display(); // Output: 1, 2

list.remove();
list.remove();
// console.log("After removing all nodes:");
// list.display(); // Output: (nothing, list is empty)

// Activity2
// Task3
class Stack1 {
    constructor() {
        this.top = null; // Points to the top node of the stack1
        this.size = 0;   // Tracks the number of elements in the stack1
    }

    // Add an element to the top of the stack1
    push(value) {
        const newNode = new Node(value);
        newNode.next = this.top; // New node points to the previous top
        this.top = newNode;      // Update top to the new node
        this.size++;
    }

    // Remove and return the element from the top of the stack1
    pop() {
        if (this.size === 0) {
            console.log("Stack1 is empty.");
            return null;
        }

        const removedValue = this.top.value; // Get the value of the top node
        this.top = this.top.next; // Update top to the next node
        this.size--;
        return removedValue;
    }

    // View the element at the top of the stack1 without removing it
    peek() {
        if (this.size === 0) {
            console.log("Stack1 is empty.");
            return null;
        }

        return this.top.value; // Return the value of the top node
    }

    // Check if the stack1 is empty
    isEmpty() {
        return this.size === 0;
    }

    // Get the size of the stack1
    getSize() {
        return this.size;
    }
}

// Example usage
const stack1 = new Stack1();
// stack1.push(1);
// stack1.push(2);
// stack1.push(3);
// console.log("Top element:", stack1.peek()); // Output: Top element: 3
// console.log("Popped element:", stack1.pop()); // Output: Popped element: 3
// console.log("Top element after pop:", stack1.peek()); // Output: Top element after pop: 2
// console.log("Is stack1 empty?", stack1.isEmpty()); // Output: Is stack1 empty? false
// console.log("Size of stack1:", stack1.getSize()); // Output: Size of stack1: 2


// Task4
class Stack {
    constructor() {
        this.top = null; // Points to the top node of the stack
        this.size = 0;   // Tracks the number of elements in the stack
    }

    // Add an element to the top of the stack
    push(value) {
        const newNode = new Node(value);
        newNode.next = this.top; // New node points to the previous top
        this.top = newNode;      // Update top to the new node
        this.size++;
    }

    // Remove and return the element from the top of the stack
    pop() {
        if (this.size === 0) {
            console.log("Stack is empty.");
            return null;
        }

        const removedValue = this.top.value; // Get the value of the top node
        this.top = this.top.next; // Update top to the next node
        this.size--;
        return removedValue;
    }

    // View the element at the top of the stack without removing it
    peek() {
        if (this.size === 0) {
            console.log("Stack is empty.");
            return null;
        }

        return this.top.value; // Return the value of the top node
    }

    // Check if the stack is empty
    isEmpty() {
        return this.size === 0;
    }

    // Get the size of the stack
    getSize() {
        return this.size;
    }
}

// Function to reverse a string using the Stack class
function reverseString(str) {
    const stack = new Stack();
    
    // Push all characters of the string onto the stack
    for (let char of str) {
        stack.push(char);
    }
    
    // Pop characters from the stack and build the reversed string
    let reversedStr = '';
    while (!stack.isEmpty()) {
        reversedStr += stack.pop();
    }
    
    return reversedStr;
}

// Test the function
// const originalString = "aman";
// const reversedString = reverseString(originalString);
// console.log("Original string:", originalString); // Output: Original string: hello
// console.log("Reversed string:", reversedString); // Output: Reversed string: olleh

// Activity3
// Task5
class Queue {
    constructor() {
        this.front = null; // Points to the front node of the queue
        this.rear = null;  // Points to the rear node of the queue
        this.size = 0;     // Tracks the number of elements in the queue
    }

    // Add an element to the rear of the queue
    enqueue(value) {
        const newNode = new Node(value);

        if (this.size === 0) {
            // If the queue is empty, set both front and rear to the new node
            this.front = newNode;
            this.rear = newNode;
        } else {
            // Otherwise, add the new node to the end and update the rear
            this.rear.next = newNode;
            this.rear = newNode;
        }

        this.size++;
    }

    // Remove and return the element from the front of the queue
    dequeue() {
        if (this.size === 0) {
            console.log("Queue is empty.");
            return null;
        }

        const removedValue = this.front.value; // Get the value of the front node
        this.front = this.front.next; // Update front to the next node

        // If the queue becomes empty after dequeue, set rear to null
        if (this.size === 1) {
            this.rear = null;
        }

        this.size--;
        return removedValue;
    }

    // View the element at the front of the queue without removing it
    peek() {
        if (this.size === 0) {
            console.log("Queue is empty.");
            return null;
        }

        return this.front.value; // Return the value of the front node
    }

    // Check if the queue is empty
    isEmpty() {
        return this.size === 0;
    }

    // Get the size of the queue
    getSize() {
        return this.size;
    }
}

// Example usage
const queue = new Queue();
// queue.enqueue(1);
// queue.enqueue(2);
// queue.enqueue(3);
// console.log("Front element:", queue.peek()); // Output: Front element: 1
// console.log("Dequeued element:", queue.dequeue()); // Output: Dequeued element: 1
// console.log("Front element after dequeue:", queue.peek()); // Output: Front element after dequeue: 2
// console.log("Is queue empty?", queue.isEmpty()); // Output: Is queue empty? false
// console.log("Size of queue:", queue.getSize()); // Output: Size of queue: 2


// Task6
// Function to simulate a printer queue
function simulatePrinterQueue(jobs) {
    const printerQueue = new Queue();
    
    // Add print jobs to the queue
    for (let job of jobs) {
        console.log(`Adding job: ${job}`);
        printerQueue.enqueue(job);
    }
    
    console.log("Processing print jobs:");
    // Process each job in the queue
    while (!printerQueue.isEmpty()) {
        const job = printerQueue.dequeue();
        console.log(`Printing job: ${job}`);
    }
}

// Test the printer queue simulation
const printJobs = ['Document1.pdf', 'Document2.docx', 'Image1.png'];
// simulatePrinterQueue(printJobs);

// Activity4
// Task7
class TreeNode {
    constructor(value) {
        this.value = value;   // The value stored in the node
        this.left = null;    // Pointer to the left child node
        this.right = null;   // Pointer to the right child node
    }
}

// Example usage
const root = new TreeNode(10);
root.left = new TreeNode(5);
root.right = new TreeNode(15);

root.left.left = new TreeNode(3);
root.left.right = new TreeNode(7);

root.right.left = new TreeNode(12);
root.right.right = new TreeNode(18);

// console.log("Root value:", root.value); // Output: Root value: 10
// console.log("Left child value:", root.left.value); // Output: Left child value: 5
// console.log("Right child value:", root.right.value); // Output: Right child value: 15
// console.log("Left-Left child value:", root.left.left.value); // Output: Left-Left child value: 3
// console.log("Left-Right child value:", root.left.right.value); // Output: Left-Right child value: 7
// console.log("Right-Left child value:", root.right.left.value); // Output: Right-Left child value: 12
// console.log("Right-Right child value:", root.right.right.value); // Output: Right-Right child value: 18


// Task8
class BinaryTree {
    constructor() {
        this.root = null; // The root of the binary tree
    }

    // Insert a value into the binary tree
    insert(value) {
        const newNode = new TreeNode(value);

        if (this.root === null) {
            // If the tree is empty, set the new node as the root
            this.root = newNode;
        } else {
            // Otherwise, insert the node in the correct position
            this._insertNode(this.root, newNode);
        }
    }

    // Helper method to recursively insert a node
    _insertNode(node, newNode) {
        if (newNode.value < node.value) {
            // Insert in the left subtree
            if (node.left === null) {
                node.left = newNode;
            } else {
                this._insertNode(node.left, newNode);
            }
        } else {
            // Insert in the right subtree
            if (node.right === null) {
                node.right = newNode;
            } else {
                this._insertNode(node.right, newNode);
            }
        }
    }

    // Perform an in-order traversal of the binary tree
    inOrderTraversal() {
        const result = [];
        this._inOrderTraversal(this.root, result);
        return result;
    }

    // Helper method to recursively perform in-order traversal
    _inOrderTraversal(node, result) {
        if (node !== null) {
            this._inOrderTraversal(node.left, result);  // Visit left subtree
            result.push(node.value);  // Visit current node
            this._inOrderTraversal(node.right, result); // Visit right subtree
        }
    }
}

// Example usage
const binaryTree = new BinaryTree();
// binaryTree.insert(10);
// binaryTree.insert(5);
// binaryTree.insert(15);
// binaryTree.insert(3);
// binaryTree.insert(7);
// binaryTree.insert(12);
// binaryTree.insert(18);

// console.log("In-order Traversal:", binaryTree.inOrderTraversal());
// Output: In-order Traversal: [3, 5, 7, 10, 12, 15, 18]


// Activity5
// Task9
class Graph1 {
    constructor() {
        this.adjacencyList = {}; // Stores the adjacency list for the graph1
    }

    // Add a vertex to the graph1
    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    }

    // Add an edge between two vertices
    addEdge(vertex1, vertex2) {
        if (!this.adjacencyList[vertex1]) {
            this.addVertex(vertex1);
        }
        if (!this.adjacencyList[vertex2]) {
            this.addVertex(vertex2);
        }
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1); // For an undirected graph1
    }

    // Perform a breadth-first search (BFS) starting from a given vertex
    bfs(startVertex) {
        const result = [];
        const visited = new Set();
        const queue = [];

        queue.push(startVertex);
        visited.add(startVertex);

        while (queue.length > 0) {
            const vertex = queue.shift(); // Dequeue a vertex
            result.push(vertex);

            // Enqueue all adjacent vertices that have not been visited
            for (const neighbor of this.adjacencyList[vertex]) {
                if (!visited.has(neighbor)) {
                    visited.add(neighbor);
                    queue.push(neighbor);
                }
            }
        }

        return result;
    }
}

// Example usage
const graph1 = new Graph1();
// graph1.addVertex('A');
// graph1.addVertex('B');
// graph1.addVertex('C');
// graph1.addVertex('D');
// graph1.addEdge('A', 'B');
// graph1.addEdge('A', 'C');
// graph1.addEdge('B', 'D');
// graph1.addEdge('C', 'D');

// console.log("BFS starting from 'A':", graph1.bfs('A'));
// Output: BFS starting from 'A': ['A', 'B', 'C', 'D']


// Task10
class Graph {
    constructor() {
        this.adjacencyList = {}; // Stores the adjacency list for the graph
    }

    // Add a vertex to the graph
    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    }

    // Add an edge between two vertices
    addEdge(vertex1, vertex2) {
        if (!this.adjacencyList[vertex1]) {
            this.addVertex(vertex1);
        }
        if (!this.adjacencyList[vertex2]) {
            this.addVertex(vertex2);
        }
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1); // For an undirected graph
    }

    // Perform a breadth-first search (BFS) starting from a given vertex
    bfs(startVertex) {
        const result = [];
        const visited = new Set();
        const queue = [];

        queue.push(startVertex);
        visited.add(startVertex);

        while (queue.length > 0) {
            const vertex = queue.shift(); // Dequeue a vertex
            result.push(vertex);

            // Enqueue all adjacent vertices that have not been visited
            for (const neighbor of this.adjacencyList[vertex]) {
                if (!visited.has(neighbor)) {
                    visited.add(neighbor);
                    queue.push(neighbor);
                }
            }
        }

        return result;
    }

    // Find the shortest path between two nodes using BFS
    findShortestPath(startVertex, endVertex) {
        const visited = new Set();
        const queue = [[startVertex]]; // Each element is a path
        const paths = { [startVertex]: [] }; // To reconstruct the path

        visited.add(startVertex);

        while (queue.length > 0) {
            const path = queue.shift();
            const vertex = path[path.length - 1];

            if (vertex === endVertex) {
                return path;
            }

            for (const neighbor of this.adjacencyList[vertex]) {
                if (!visited.has(neighbor)) {
                    visited.add(neighbor);
                    queue.push([...path, neighbor]);
                    paths[neighbor] = path;
                }
            }
        }

        return null; // Return null if no path is found
    }
}

// Example usage
const graph = new Graph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
graph.addEdge('C', 'D');
graph.addEdge('D', 'E');

console.log("BFS starting from 'A':", graph.bfs('A'));
// Output: BFS starting from 'A': ['A', 'B', 'C', 'D', 'E']

const shortestPath = graph.findShortestPath('A', 'E');
console.log("Shortest path from 'A' to 'E':", shortestPath);
// Output: Shortest path from 'A' to 'E': ['A', 'C', 'D', 'E']
