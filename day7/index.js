// Activity1
// Task1
const book = {
    title:"Boodhi Kaki",
    author:"Munshi Premchand",
    year:2024,
    meth: function titleAuthor() {
       return console.log(this.title,this.author);
    },
    meth2: function yearUpdate(year) {
        this.year=year;
        return console.log(book);
    }
}
console.log(book);

// Task2
console.log(book.title,book.author);

// Activity2
// Task3
console.log(book.meth());

// Task4
console.log(book.meth2(2025));

// Activity3
// Task5
const library = {
    name:{
        name1:"Munshi",
        name2:"Premchand"
    },
    books:{
        book1:"Boodhi Kaki",
        book2:"Shatranz Ke Khiladi"
    }
}

console.log(library);

// Task6
console.log(library.name,library.books);

// Activity4
// Task7
console.log(book.meth());

// Activity5

// Task8 and Task9
for (const key in book) {
    console.log(key , book[key]);
}
