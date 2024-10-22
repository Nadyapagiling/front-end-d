// 1. String Literals

let fullName = "John Doe";
let age = 30;
let address = "Manado";

// Halo nama saya John Doe, umur saya 30 tahun
// dan saya tinggal di Manado

let kalimat1 =
  "Halo nama saya " +
  fullName +
  ", umur saya " +
  age +
  " tahun dan saya tinggal di " +
  address;

console.log(kalimat1);

let kalimat2 = `Halo nama saya ${fullName}, umur saya ${age} tahun dan saya tinggal di ${address}`;
console.log(kalimat2);

// 2. Arrow Function
function sayGreetings1(fullName) {
  return `Hello my name is ${fullName}`;
}
console.log(sayGreetings1("John Doe"));

const sayGreetings2 = () => `Hello my name is ${fullName}`;
console.log(sayGreetings2("John Doe"));

//Arrow Function pada IIFE
let output1 = (() => "Helo")();

//Arrow Function pada Callback Func
let numbers = [1, 2, 3, 4, 5];
let output2 = numbers.map((item) => item);
console.log(output2);

// 3. Default Parameter
const sayGreetings3 = (fullName, age, address) => {
  if (!fullName) {
    fullName = "John Doe";
  }
  if (!age) {
    age = 30;
  }
  if (!address) {
    address = "Manado";
  }
  console.log(
    `Halo nama saya ${fullName}, umur saya ${age} tahun dan saya tinggal di ${address}`
  );
};

sayGreetings3("Stenly", 35, "Airmadidi");

const sayGreetings4 = (fullName = "John Doe", age = 30, address = "Manado") => {
  console.log(
    `Halo nama saya ${fullName}, umur saya ${age} tahun dan saya tinggal di ${address}`
  );
};

sayGreetings4();