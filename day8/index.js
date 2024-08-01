// Activity1
// Task1
var name = "Hitesh Sir";
var age = 22;
// console.log(`Teacher : ${name} ,age : ${age}`);
// Task2
// console.log(`${name} 
//     lorem ipsum ygduvwhdvyg hueecugeuve
//     yguhuhiciejecece fehfuehuheufuef
//     gughuhihihijijini`);
// Activity2
// Task3
const arr = ["ChaiAurCode", "Javascript", "ReactJs"];
[elem1, elem2] = arr;
// console.log(elem1, elem2);
// Task4
const book = {
    title: "Boodhi Kaki",
    author: "Munshi Premchand",
};
const { title, author } = book;
// console.log(title +"'s author is "+ author);
// Activity3
// Task5
const newArr = [...arr, "Next Js"]
// console.log(newArr);

// Task6
var total = 0;
function sum(...int) {
    int.forEach(val => total += val);
    return total;
}
// console.log(sum(1,2,3));

// Activity4
// Task7
function mul(num1, num2 = 1) {
    return num1 * num2
}
// console.log(mul(2));
// console.log(mul(2,2));

// Activity5
// Task8
const name2 = "Aman Kumar";
const course = "MCA";
const objLit = {
    meth() {
        return { 
            name2,
            course
        };
    }
}
// console.log(objLit.meth());

// Task9
const key1 = "name2";
const key2 = "course";

const objLit2 = {
    [key1]: "Aman Kumar",
    [key2]: "MCA"
};

console.log(objLit2);
