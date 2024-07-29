// Activity1
// Task1 and Task2
class person {
    constructor(age, firstName, lastName) {
        this.name = "Aman";
        this.age = age;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    greeting() {
        console.log(`Hello! ${this.name} your age is ${this.age}`);
    }
    static genericGreeting() {
        console.log(`Hello everyone, enjoy your day`);
    }
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    set fullName(name) {
        const [firstName, lastName] = name.split(' ');
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

// let a = new person(22);
// a.greeting();

// Activity2
// Task3 and Task4
class student extends person {
    static studentCount = 0;
    constructor(id) {
        super();
        this.id = id;
        student.studentCount++;
        console.log(`Student created: ${this.name}, Total students: ${student.studentCount}`);
    }
    greeting() {
        console.log(`${this.name} your ID is ${this.id}`);
    }
}

// let b = new student("RX100");
// b.greeting();

// Activity3
// Task5
// person.genericGreeting();

// Task6
// const student1 = new student('Aman', 20);
// const student2 = new student('Hitesh', 22);
// const student3 = new student('Piyush', 23);

// Activity4
// Task7
const name = new person(22, 'Aman', 'Kumar');
// console.log(name.fullName);

// Task8
person.fullName = 'Ravishankar Prasad';
// console.log(person.fullName);

// Activity5
// Task9
class Account {
    #balance; // Private field for balance

    constructor(initialBalance = 0) {
        this.#balance = initialBalance;
    }

    // Method to deposit money
    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
            console.log(`Deposited: $${amount}. New balance: $${this.#balance}`);
        } else {
            console.log('Deposit amount must be positive.');
        }
    }

    // Method to withdraw money
    withdraw(amount) {
        if (amount > 0 && amount <= this.#balance) {
            this.#balance -= amount;
            console.log(`Withdrew: $${amount}. New balance: $${this.#balance}`);
        } else if (amount > this.#balance) {
            console.log('Insufficient balance.');
        } else {
            console.log('Withdrawal amount must be positive.');
        }
    }

    getBalance() {
        return this.#balance;
    }
}

// Task10
const myAccount = new Account(100); // Initial balance of $100
myAccount.deposit(50);              // Deposited: $50. New balance: $150
myAccount.withdraw(30);             // Withdrew: $30. New balance: $120
myAccount.withdraw(200);            // Insufficient balance.
console.log(`Final balance: $${myAccount.getBalance()}`); // Final balance: $120