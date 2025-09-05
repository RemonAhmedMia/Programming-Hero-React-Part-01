const numbers = [45,67,90,87];
const students ={
    name : 'Rimon',
    age : 23,
    movies : ['King Khan' , 'Dhakar Sultan'],
};
const about = `my name is ${students.name} i am ${students.age} years old, has numbers ${numbers[0]} also favourite movie is ${students.movies[1]}`;
console.log(about);

// =====================

// JavaScript এ function লিখার একটা শর্টকাট পদ্ধতি হলো Arrow Function।
// এটা => (fat arrow) ব্যবহার করে লেখা হয়।

// সাধারণ ফাংশন (Normal Function)
function add(a, b) {
  return a + b;
}
console.log(add(5, 3)); // 8

// একই কাজ Arrow Function দিয়ে
const add = (a, b) => {
  return a + b;
};
console.log(add(5, 3)); // 8

// আরও শর্টকাট

// যদি ফাংশনের ভেতরে শুধু return থাকে, তাহলে {} আর return বাদ দেওয়া যায়।

const add = (a, b) => a + b;
console.log(add(5, 3)); // 8

// এক লাইনের Arrow Function
// যদি শুধু একটাই প্যারামিটার থাকে, তাহলে () ও বাদ দেওয়া যায়।

const square = x => x * x;
console.log(square(4)); // 16

const addFiftySix = num => num + 56;

// check even==========

const isEven = x => x%2 == 0;
//  Multiplae Parameteer=========

const addThree = (x,y,z) => x+y+z;

// multiple line==========

const doMath = (num1, num2, num3) => {
    const add = num1 + num2 + num3;
    return add;
};

console.log(doMath(2, 3, 4)); // 9

