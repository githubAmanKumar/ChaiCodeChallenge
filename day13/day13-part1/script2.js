function add(a,b) {
    return a+b;
}

const person = {
    name: 'Aman Kumar',
    age: 21,
    greet() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    },
    haveBirthday() {
        this.age += 1;
        return `Happy Birthday! I am now ${this.age} years old.`;
    }
};


export { person , add}