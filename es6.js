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

// Spread Operator===============
// ... তিনটা ডট হলো Spread Operator।
// এটা দিয়ে আমরা array বা object এর ভেতরের element গুলোকে ছড়িয়ে (expand) দিতে পারি।

// 01:Array তে Spread Operator (Basic):

const number = [1, 2, 3];
console.log(...number); 
// Output: 1 2 3

// 02Array কপি করা (Clone)

const arr1 = [10, 20, 30];
const arr2 = [...arr1]; 

console.log(arr2); // [10, 20, 30]
console.log(arr1 === arr2); // false (নতুন array তৈরি হয়েছে)

// 03:Array Merge করা

const a = [1, 2];
const b = [3, 4];
const c = [...a, ...b];

console.log(c); // [1, 2, 3, 4]

// 04:Array এর মধ্যে নতুন element যোগ করা

const nums = [2, 3, 4];
const updated = [1, ...nums, 5];

console.log(updated); // [1, 2, 3, 4, 5]

// 05:Object এ Spread Operator (Basic)

const person = { name: "Remon", age: 22 };
const clone = { ...person };

console.log(clone); // { name: "Remon", age: 22 }

