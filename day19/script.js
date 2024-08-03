// Activity1
// Task1
function findMatches(text) {
    // Define the regular expression pattern with the global flag
    const pattern = /JavaScript/g;
    
    // Use the match method to find all occurrences
    const matches = text.match(pattern);
    
    // Log the matches
    if (matches) {
        console.log(`Matches found: ${matches.length}`);
        console.log(`Matched strings: ${matches.join(', ')}`);
    } else {
        console.log('No matches found');
    }
}

// Example usage
const exampleText1 = "JavaScript is a versatile language. Learning JavaScript can be fun and challenging. JavaScript is widely used.";
// findMatches(exampleText1);

// Output:
// Matches found: 3
// Matched strings: JavaScript, JavaScript, JavaScript


// Task2
function findDigits(text) {
    // Define the regular expression pattern with the global flag
    const pattern = /\d+/g;
    
    // Use the match method to find all occurrences of digits
    const matches = text.match(pattern);
    // Log the matches
    if (matches) {
        console.log(`Matches found: ${matches.length}`);
        console.log(`Matched digits: ${matches.join(', ')}`);
    } else {
        console.log('No digits found');
    }
}

// Example usage
// const exampleText = "The year is 2024 and the time is 12:45 PM. The room number is 307.";
// findDigits(exampleText);

// Output:
// Matches found: 4
// Matched digits: 2024, 12, 45, 307


// Activity2
// Task3
function findCapitalizedWords(text) {
    // Define the regular expression pattern with the global flag
    const pattern = /\b[A-Z][a-z]*\b/g;
    
    // Use the match method to find all occurrences of capitalized words
    const matches = text.match(pattern);
    
    // Log the matches
    if (matches) {
        console.log(`Matches found: ${matches.length}`);
        console.log(`Capitalized words: ${matches.join(', ')}`);
    } else {
        console.log('No capitalized words found');
    }
}

// Example usage
// const exampleText2 = "Alice went to the Wonderland and met the Queen. She saw a Mad Hatter and a Cheshire Cat.";
// findCapitalizedWords(exampleText2);

// Output:
// Matches found: 6
// Capitalized words: Alice, Wonderland, Queen, She, Mad, Hatter, Cheshire, Cat

// Task4
function findDigitSequences(text) {
    // Define the regular expression pattern with the global flag
    const pattern = /\d+/g;
    
    // Use the match method to find all sequences of digits
    const matches = text.match(pattern);
    
    // Log the matches
    if (matches) {
        console.log(`Matches found: ${matches.length}`);
        console.log(`Digit sequences: ${matches.join(', ')}`);
    } else {
        console.log('No digit sequences found');
    }
}

// Example usage
const exampleText3 = "The flight number is 1234 and the gate is 56. My phone number is 9876543210.";
// findDigitSequences(exampleText3);

// Output:
// Matches found: 4
// Digit sequences: 1234, 56, 9876543210


// Activity3
// Task5
function capturePhoneNumberComponents(phoneNumber) {
    // Define the regular expression pattern with capturing groups
    const pattern = /\((\d{3})\)\s(\d{3})-(\d{4})/;
    
    // Use the match method to find and capture the components
    const matches = phoneNumber.match(pattern);
    
    // Log the captures
    if (matches) {
        console.log(`Area code: ${matches[1]}`);
        console.log(`Central office code: ${matches[2]}`);
        console.log(`Line number: ${matches[3]}`);
    } else {
        console.log('No match found');
    }
}

// Example usage
const examplePhoneNumber = "(123) 456-7890";
// capturePhoneNumberComponents(examplePhoneNumber);

// Output:
// Area code: 123
// Central office code: 456
// Line number: 7890

// Task6
function captureEmailComponents(email) {
    // Define the regular expression pattern with capturing groups
    const pattern = /^([^@]+)@(.+)$/;
    
    // Use the match method to find and capture the components
    const matches = email.match(pattern);
    
    // Log the captures
    if (matches) {
        console.log(`Username: ${matches[1]}`);
        console.log(`Domain: ${matches[2]}`);
    } else {
        console.log('No match found');
    }
}

// Example usage
const exampleEmail = "aman@gmail.com";
// captureEmailComponents(exampleEmail);

// Output:
// Username: aman
// Domain: gmail.com

// Activity4
// Task7
function matchWordAtStart(text) {
    // Define the regular expression pattern with the beginning of the string anchor
    const pattern = /^\b\w+\b/;
    
    // Use the match method to find the word at the beginning of the string
    const match = text.match(pattern);
    
    // Log the match
    if (match) {
        console.log(`Word at the beginning: ${match[0]}`);
    } else {
        console.log('No match found');
    }
}

// Example usage
const exampleTextA = "Hello world, this is a test.";
const exampleTextB = "   Leading spaces should not affect the match.";
const exampleTextC = "NoMatchHere";
// matchWordAtStart(exampleTextA);
// matchWordAtStart(exampleTextB);
// matchWordAtStart(exampleTextC);

// Output:
// Word at the beginning: Hello
// No match found
// NoMatchHere

// Task8
function matchWordAtEnd(text) {
    // Define the regular expression pattern with the end of the string anchor
    const pattern = /\b\w+\b$/;

    // Use the match method to find the word at the end of the string
    const match = text.match(pattern);

    // Log the match
    if (match) {
        console.log(`Word at the end: ${match[0]}`);
    } else {
        console.log('No match found');
    }
}

// Example usage
const exampleTextD = "This is a sample text ending.";
const exampleTextE = "Trailing spaces should not affect the match.     ";
const exampleTextF = "NoMatchHere";
// matchWordAtEnd(exampleTextD);
// matchWordAtEnd(exampleTextE);
// matchWordAtEnd(exampleTextF);

// Output:
// Word at the end: ending
// Word at the end: match
// NoMatchHere

// Activity5
// Task9
function validatePassword(password) {
    // Define the regular expression pattern for password validation
    const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
    
    // Use the test method to validate the password
    const isValid = pattern.test(password);
    
    // Log the result
    if (isValid) {
        console.log('Password is valid.');
    } else {
        console.log('Password is invalid.');
    }
}

// Example usage
const password1 = "A1b@cdef";
const password2 = "password123";
const password3 = "A1b@";
const password4 = "Valid1@Password";
// validatePassword(password1);
// validatePassword(password2);
// validatePassword(password3);
// validatePassword(password4);

// Output:
// Password is valid.
// Password is invalid.
// Password is invalid.
// Password is valid.

// Task10
function validateURL(url) {
    // Define the regular expression pattern for URL validation
    const pattern = /^(https?:\/\/)?([\w\-]+\.)+[\w\-]+(\/[\w\-\.]*)*$/;
    
    // Use the test method to validate the URL
    const isValid = pattern.test(url);
    
    // Log the result
    if (isValid) {
        console.log('URL is valid.');
    } else {
        console.log('URL is invalid.');
    }
}

// Example usage
const url1 = "https://www.example.com";
const url2 = "http://subdomain.example.co.uk/path/to/resource";
const url3 = "ftp://example.com"; // Typically not matched by HTTP/HTTPS URL pattern
const url4 = "example.com"; // Missing protocol
const url5 = "http://example..com"; // Invalid domain
validateURL(url1);
validateURL(url2);
validateURL(url3);
validateURL(url4);
validateURL(url5);

// Output:
// URL is valid.
// URL is valid.
// URL is invalid.
// URL is invalid.
// URL is invalid.
