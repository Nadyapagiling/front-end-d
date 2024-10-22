//1

const yearUntilRetirement = ({ firstName, year }) => {
    const age = calculateAge(year);
    const retirement = 60 - age;

    if (retirement > 0) {
        console.log(`${firstName} retires`` in ${retirement} years`)
    } else {
        console.log(`(${firstName} is already retired.`);
    }
};
export default yearUntilRetirement;

const addNumber = (...numbers) => {
    
    let sum = 0;
    numbers.map((item) => (sum += item));
    return sum;
};
console.log(addNumber(1, 2, 3, 4, 5, 6, 7));
export { addNumber };

let phi = 3.14;
let power = 2;
let radius = 0;

const calculateArea = ({ radius, power }) => phi * Math.pow(radius, power);

radius = 21;
let area21 = calculateArea({ radius, power: 2 });

radius = 7;
let area7 = calculateArea({ radius, power: 2 });

console.log(`Area with 21 radius: ${area21} and area with 7 radius: ${area7}`);

console.log(`area with 21 radius: ${area21} and area with 7 radius: ${area7}`);
export { calculateArea };
 


const makeAjaxRequest = ({ url, method = 'GET' }) => {
    console.log(url, method);
};

makeAjaxRequest({ url: 'www.google.com' });
export { makeAjaxRequest };