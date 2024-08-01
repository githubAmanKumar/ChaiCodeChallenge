// Activity1

// Task1
function checkEvenOdd(num) {
    if (num % 2 == 0) {
        return console.log("even");
    } else {
        return console.log("odd");
    }
}
// checkEvenOdd(7);

// Task2
function Square(num) {
    return console.log(num ** 2);
}
// Square(8);

// Activity2
// Task3
const max = function (num1, num2) {
    if (num1 > num2) {
        console.log(num1 + " is bigger");
    } else {
        console.log(num2 + " is bigger");
    }
}
// max(5, 3);

// Task4
const conc = function (str1, str2) {
    console.log(str1 + " " + str2);
}
// conc("Hello", "world");

// Activity3
// Task5
const sum = (a, b) => {
    return console.log(a + b);
}
// sum(6,2);

// Task6
function checkChar(str,char) {
    for (let i = 0; i < str.length; i++) {
        if(str[i]==char){
            console.log(true);
        }
    }
}
// checkChar("str","t");

// Activity4
// Task7
function product(a, b=4){
    return console.log(a * b);
}
// product(2)

// Task8
function greet(name, age=22){
    return console.log(`Hello my name is ${name} and I am ${age} years old`);
}
// greet("Aman",50);

// Activity5
// Task9
function parent(child,num){
    return console.log(`${child("Aman")} and having ${num} years of experience`);
}
// parent(greet,3);

// Task10
function anotherParent(func1,func2,val) {
    return func2(func1(val))
}
function func1(year){
    console.log(`Welcome to ${year}`);
}
function func2(func){
    return func;
}
// anotherParent(func1,func2,2024);
