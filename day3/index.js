var num1 = 2;
var num2 = 22;
var num3 = 222;
var age = 22;
// Activity1

// Task1
if (num1 > 0) {
    console.log("number is positive");
} else if (num1 < 0) {
    console.log("number is negative");
} else {
    console.log("number is zero");
}
// Task2
if (age >= 18) {
    console.log("can vote");
} else {
    console.log("can't vote");
}

// Activity2
// Task3
if (num1 > num2) {
    if (num1 > num3) {
        console.log("num1 is bigger");
    } else {
        console.log("num3 is bigger");
    }
} else {
    if (num2 > num3) {
        console.log("num2 is bigger");
    } else {
        console.log("num3 is bigger");
    }
}
// Activity3
// Task4
var day = 3;
var dayname;
switch (day) {
    case 1:
        dayname = "sunday";
        break;
    case 2:
        dayname = "monday";
        break;
    case 3:
        dayname = "tuesday";
        break;
    case 4:
        dayname = "wednesday";
        break;
    case 5:
        dayname = "thursday";
        break;
    case 6:
        dayname = "friday";
        break;
    case 7:
        dayname = "saturday";
        break;

    default:
        console.log("invalid input");
        break;
}
console.log(dayname);
// Task5
var score = 97;
var grade;
switch (true) {
    case (score >= 90):
      grade = 'A';
      break;
    case (score >= 80):
      grade = 'B';
      break;
    case (score >= 70):
      grade = 'C';
      break;
    case (score >= 60):
      grade = 'D';
      break;
    case (score >= 50):
      grade = 'E';
      break;
    default:
      grade = 'F';
  }
//   console.log(grade);

// Activity4
// Task6
val=7;
console.log((val%2==0)?"even":"odd");
// Activity5
// Task7
var year = 2022;
if (year % 4 === 0) {
    if (year % 100 !== 0 || (year % 100 === 0 && year % 400 === 0)) {
        console.log(year + " is a leap year.");
    }
}else{
    console.log(year + " is not a leap year.");
}
