const arr = [1, 2, 3, 4, 5];

// Activity1
// Task1
// console.log(arr);

// Task2
// console.log(arr[0]);
// console.log(arr[arr.length-1]);

// Activity2
// Task3
arr.push(6);
// console.log(arr);

// Task4
arr.pop();
// console.log(arr);

// Task5
arr.shift();
// console.log(arr);

// Task6
arr.unshift(1);
// console.log(arr);

// Activity3
// Task7
const newArr1 = arr.map(val => 2 * val);
// console.log(newArr1);

// Task8
const newArr2 = arr.filter(val => val % 2 == 0);
// console.log(newArr2);

// Task9
const newArr3 = arr.reduce((a, b) => a + b);
// console.log(newArr3);

// Activity4
// Task10
for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i]);   
}

// Task11
// arr.forEach(val=>console.log(val))

// Activity5
// Task12
const arrMul = [[1,2,3],[4,5,6],[7,8,9]]
// arrMul.forEach((val)=>val.forEach(val2=>console.log(val2)))

// Task13
console.log(arrMul[1][1]);
