//Destructuring Array
const arr = [1, 2, 3, 4, 5];
const [a, b, c] = arr;
console.log(a, b, c);  

//Destructuring Object
const obj = { name: 'John', age1: 30, occupation: 'Developer'};
const {name1, age1} = obj;
console.log((name1, age1));

//with Partial Items
//Array 
const arr1 = [1, 2, 3, 4, 5];
const [d, ,f] = arr1;
console.log(d, f);
//Object
const obj1 = { name2: 'John', age2:35, occupation: 'Developer'};
const {name2, occupation} = obj1;
console.log(name2, occupation);

//Destructuring dengan menggunakan default value 
//Array
const arr2 = [];
const [w = 7, t = 8] = arr2;
console.log(w, t);
//Object
const obj2 = {};
const {name3 = 'unknown', age3 = 25} = obj2;
console.log(name3,age3);

//Destructuring dengan menggunakan rest operator 
//Array
const arr3 = [1, 2, 3, 4, 5];
const [h, ...rest] = arr3;
console.log(h, rest); // Output: 1 [2, 3, 4, 5]
//Object
const obj3 = { name4: 'John', age: 30, occupation: 'Developer', country: 'USA' };
const { name4, ...rest1 } = obj3;
console.log(name4, rest1); 

const yearUntilRetirement = ({ firstName, year }) => {
    const age = calculateAge(year);
    const retirement = 60 - age;

    if (retirement > 0) {
        console.log(`${firstName} retires`` in ${retirement} years`)
    } else {
        console.log(`(${firstName} is already retired.`);
    }
};

yearUntilRetirement({ year: 1987, firstName: 'John' });

const addNumber = (...numbers) => {
    let sum = 0;
    numbers.forEach(num => sum += num);
    return sum;
};
console.log(addNumber(1, 2, 3, 4, 5, 6, 7));

const calculateArea = ({ radius, power = 2 }) => {
    return phi * Math.pow(radius, power);
  };
  
  radius = 21;
  let area21 = calculateArea({ radius });
  
  radius = 7;
  let area7 = calculateArea({ radius });
  
  console.log(`area with 21 radius: ${area21} and area with 7 radius: ${area7}`);

  const makeAjaxRequest = ({ url, method = 'GET' }) => {
    console.log(url, method);
};

makeAjaxRequest({ url: 'www.google.com' });