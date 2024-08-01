// Activity1

// Task1
for (let i = 1; i <= 10; i++) {
    // console.log(i);
}
// Task2
for (let i = 1; i <= 10; i++) {
    // console.log(i*5);
}
// Activity2
// Task3
var a = 1;
var b = 0;
while (a <= 10) {
    b = b + a;
    a++;
}
// console.log(b);

// Task4
var c = 10;
while (c >= 1) {
    // console.log(c);
    c--;
}
// Activity3
// Task5
var d = 1;
do {
    // console.log(d);
    d++;
} while (d <= 5);

// Task6
var e = 4;
var fact = 1;
do {
    fact = fact * e
    e--;
} while (e >= 1);
// console.log(fact);

// Activity4
// Task7
let m = 5;

for (let i = 1; i <= m; i++) {
    let stars = '';
    for (let j = 1; j <= i; j++) {
        stars += '*';
    }
    // console.log(stars);
}

var n = "*"
for (let i = 1; i <= 5; i++) {
    // console.log(n);
    n = n + "*";
}

// Activity5
// Task8
for (let i = 1; i <= 10; i++) {
    if (i==5) {
        continue
    }
    // console.log(i);    
}
// Task9
for (let i = 1; i <= 10; i++) {
    if (i==7) {
        break
    }
    // console.log(i);    
}
