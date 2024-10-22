//Variable dan Operators
//1. JavaScript Variable

// let fullName = "John Doe"; //camel case
// let full_name = "John Doe"; //snake case
// let FullName = "John Doe"; //pascal case

// const gender = "male"; //String
// // gender = "female"; //error
// let age = 30; // Number integer
// age = 31;
// let weight = 85.5; //Number float
// let isMarried = true; //Boolean
// let grade = null; //Null
// let address; //undefined

// console.log(fullName);
// console.log(gender);
// console.log(age);
// console.log(weight);
// console.log(isMarried);
// console.log(grade);
// console.log(address);

//2. JavaScript Operators
//a. Arithmetic Operators (+, -, *, /, %, **)
// let bil1 = 20;
// let bil2 = 5;
// console.log(bil1 + bil2); //25
// console.log(bil1 - bil2); //15
// console.log(bil1 * bil2); //100
// console.log(bil1 / bil2); //4
// console.log(bil1 % bil2); //0
// console.log(bil1 ** bil2); //3200000

// let alas = 5;
// let tinggi = 5;
// let luasSegitiga = 0.5 * alas * tinggi;

//b. Assignment Operator (=, +=, -=, *=, /=)

// let bilangan = 10;
// bilangan = bilangan + 10;
// bilangan += 10;
// console.log(bilangan);

//c. String Operator
// let firstName = "John";
// let lastName = "Doe";
// let fullName = firstName + " " + lastName;
// console.log(fullName);

//d. Relational Operator (==, ===, <, >, ...)

// let bil1 = 10;
// let bil2 = 10;
// let bil3 = "10";
// let bil4 = 5;

// console.log(bil1 == bil2); //true
// console.log(bil1 === bil2); //true
// console.log(bil1 == bil3); //true
// console.log(bil1 === bil3); //false

// console.log(bil1 > bil4); //true
// console.log(bil1 < bil4); //false
// console.log(bil1 != bil2); //false

//e. Ternary Operator
let umur = 17;
let isEligible = umur >= 17 ? "Bisa buat KTP" : "Belum bisa buat KTP";
console.log(isEligible);

//f. logical operator (&&, ||, !)
// AND (&&)
console.log(true && true); //true
console.log(true && false); //false
console.log(false && true); //false
console.log(false && false); //false

// OR (||)
console.log(true || true); //true
console.log(true || false); //true
console.log(false || true); //true
console.log(false || false); //false

//NOT (!)
console.log(!true); //false
console.log(!false); //true