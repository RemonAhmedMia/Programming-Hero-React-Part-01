
// step-01
const numbrs = [42, 43];
const x = numbrs[0];
const y = numbrs[1];
console.log(x, y);

// eitar update version

const [a , b] = [32,90];
console.log(a,b);

// onno arek vhabe

const values = [30,35];
const [i,k] = values;
console.log(i,k);

// ===========================
// ধরো তোমার কাছে একটা object আছে:
const person = {
  name: "Remon",
  age: 22,
  city: "Dhaka"
};
//সাধারনভাবে আমরা এভাবে access করি:
console.log(person.name); // Remon
console.log(person.age);  // 22
console.log(person.city); // Dhaka
// কিন্তু Destructuring ব্যবহার করলে আমরা এক লাইনেই সব বের করতে পারি:
const { name, age, city } = person;

console.log(name); // Remon
console.log(age);  // 22
console.log(city); // Dhaka

// 2. Variable নাম পরিবর্তন করা
const { name: userName, age: userAge } = person;
console.log(userName); // Remon
console.log(userAge);  // 22


// Nested Object Destructuring==========
// object-এর ভেতরে object থাকলেও destructure করা যায়:

const user = {
  id: 1,
  profile: {
    username: "remon22",
    email: "remon@example.com"
  }
};

const { profile: { username, email } } = user;

console.log(username); // remon22
console.log(email);    // remon@example.com

// **function-এ argument হিসেবে object পেলে destructure করা যায়:
function showInfo({ name, age }) {
  console.log(`Name: ${name}, Age: ${age}`);
}
showInfo(person);
// Output: Name: Remon, Age: 22

// **============

const employee = {
    id: "vs code",
    designation : "developer",
    machine : "mac",
    langueges : ["html" , "css" , "javascript"],
    specification: {
        height: 45,
        width: 56,
        drink: "water",
        address: "kumarkhali"
    }
}
const {machine,id} = employee;
const {height, width} = employee.specification
