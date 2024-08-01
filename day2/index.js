var num1 = 1;
var num2 = 2;
var num3 = 5;
var age = 50;
// Activity 1
// Task1
console.log("sum", num1 + num2);
// Task2
console.log("sub", num1 - num2);
// Task3
console.log("mul", num1 * num2);
// Task4
console.log("div", num1 / num2);
// Task5
console.log("rem", num1 % num2);

// Activity 2
// Task6
num3 += num1;
console.log(num3);
// Task7
num3 -= num1;
console.log(num3);
// Activity 3
// Task8
if (num1 > num2) {
    console.log("num1 is bigger");
} else {
    console.log("num2  is bigger");
}
// Task9
if (age >= 18) {
    console.log("you can vote");
} else {
    console.log("you can not vote");
}
// Task10
if (true == 1) {
    console.log("test pass true of true == 1");
}else{
    console.log("test fail of true == 1");
}
if (true === 1) {
    console.log("test pass of true === 1");
}else{
    console.log("test fail of true === 1");
}

// Activity 4

// Task11
if (age = 18 && age > 18) {
    console.log("you can vote");
} else {
    console.log("you can not vote");
}
// Task12
if (age = 18 || age > 18) {
    console.log("you can vote");
} else {
    console.log("you can not vote");
}
// Task13
if (!false) {
    console.log("true");
}

// Activity 5
// Task14
console.log((age > 17) ? "can vote" : "can't vote");
