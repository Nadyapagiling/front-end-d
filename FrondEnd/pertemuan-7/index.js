//JavaScript Object & Conditional
// Deklarasi Object
// Object Literal
let john = {
    firstName: "John", //properti & value
    age: 30,
    isMarried: true,
    grade: [80, 90, 100],
    sayGreetings: function () {
      console.log("Hello my name is " + this.firstName);
    },
    address: {
      street: "Jl. Arnold Mononutu",
      city: "Minahasa Utara",
      province: "Sulawesi Utara",
      postalCode: 95371,
    },
  };
  console.log(john);
  
  //Mengakses properti dalam object
  //1. Dot notation
  console.log(john.firstName); //John
  console.log(john.age); //30
  john.age = 31; // Ubah nilai
  console.log(john);
  john.job = "Teacher"; //Tambah properti baru
  console.log(john);
  //2. Bracket notation
  console.log(john["isMarried"]); //true
  john["nationality"] = "Indonesia"; // Tambah properti baru
  console.log(john);
  
  //Object Method
  john.sayGreetings();
  
  //Object inside Object
  console.log(john.address.city);
  
  //Delete property object
  delete john.grade;
  console.log(john);
  
  //JavaScript Conditonal
  // 1. if - else
  
  //Jika temprature >= 37 tampilkan cuaca panas
  //else tampilkan cuaca dingin
  
  temp = 34;
  if (temp >= 37) {
    console.log("Cuaca hari ini panas");
  } else {
    console.log("Cuaca hari ini dingin");
  }
  
  // 2. if - else if - else
  
  // Jika nilai 100 - 80 grade A
  // Jika nilai 70 - 80 grade B
  // Jika nilai 50 - 70 grade C
  // Jika nilai < 50 grade D
  
  let nilai = 40;
  if (nilai >= 80 && nilai <= 100) {
    console.log("Grade A");
  } else if (nilai >= 70 && nilai < 80) {
    console.log("Grade B");
  } else if (nilai >= 50 && nilai < 70) {
    console.log("Grade C");
  } else {
    console.log("Grade D");
  }
  
  // Switch - case
  // 1 tampilkan january
  // 2 tampilkan february
  // 3 tampilkan maret
  // :
  // 12 tampilkan desember
  
  let month = 12;
  switch (month) {
    case 1:
      console.log("January");
      break;
    case 2:
      console.log("February");
      break;
    case 3:
      console.log("Maret");
      break;
    default:
      console.log("Not found");
      break;