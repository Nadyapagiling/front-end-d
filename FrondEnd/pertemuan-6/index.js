//JavaScript Array
//Deklarasi Array
//Cara 1. Array Literal
// let numbers = [1, 2, 3, 4, 5];
// console.log(numbers);
// //Cara 2. Kata kunci new
// let numbers2 = new Array(6, 7, 8, 9, 10);
// console.log(numbers2);

// Tipe data yang bisa disimpan dalam array
// let numbers = [1, 2, 3, 4, 5]; //number
// let students = ["John", "Jane", "Bob"]; //string
// let john = ["John", 30, true, [80, 90, 100]]; //mixed
// console.log(john);

// //Array Length
// console.log(numbers.length); //5
// console.log(students.length); //3
// console.log(john.length); //4

// //Mengakses element/data tertentu didalam array
// //Melalui index array. Index selalu dimulai 0
// console.log(numbers[2]); //3
// console.log(students[1]); //Jane
// console.log(john[2]); //true
// console.log(john[3][1]); //90

// //Mengakses element/data terakhir dalam array
// let numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(numbers2[numbers2.length - 1]);

//Array Method
let array = [1, 2, 3, "hallo", false, true];
console.log(array);
//1. toString()
console.log(array.toString());
//2. join()
console.log(array.join());
console.log(array.join(" "));
console.log(array.join("-"));
//3. pop()
array.pop(); //hapus index terakhir
console.log(array);
//4. push()
array.push("Selamat Pagi");
console.log(array); //tambah di index terakhir
//5. shift()
array.shift();
console.log(array); //hapus index pertama
//6. unshift()
array.unshift("Selamat Pagi");
console.log(array); //tambah di index pertama
//7. splice()
array.splice(3, 1);
console.log(array); //hapus index ke-3
array.splice(3, 0, 4, 5);
console.log(array); //tambah 4, 5 di index ke-3
//8. concat()
let buah = ["pisang", "apel", "jeruk"];
let sayur = ["tomat", "bayam", "wortel"];
let biji = ["kedelai", "kacang tanah", "kacang polong"];

let makanan = buah.concat(sayur, biji);
console.log(makanan);
//9. slice()
let sayuran = makanan.slice(3, 6); //tomat, bayam, wortel
console.log(sayuran);
let bijian = makanan.slice(6);
console.log(bijian); //kedelai, kacang tanah, kacang polong