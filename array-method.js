// Object Array এর সাথে map()

const products =[
    {name: 'laptop', price: 32000, brand: 'lenovo' , color: 'black'},
    {name: 'watch', price: 2000, brand: 'iPhone' , color: 'silver'},
    {name: 'book', price: 300, brand: 'humayon-ahmed' , color: 'purple'},
    {name: 'perfumes', price: 700, brand: 'denver' , color: 'blue'},
    {name: 'table', price: 2500, brand: 'lenovo' , color: 'white'},
];

const brands = products.map(product => product.brand);
const prices = products.map(product => product.price);
const names = products.map(product => product.name)
console.log(brands);
console.log(prices);
console.log(names);

// map() হলো JavaScript এর Array Method।
// এটা দিয়ে তুমি একটা array এর প্রতিটা element এর উপর একই কাজ করে নতুন একটা array তৈরি করতে পারো।

const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map(num => num * 2);

console.log(doubled); // [2, 4, 6, 8, 10]
console.log(numbers); // [1, 2, 3, 4, 5] (original array change হয়নি)
//এখানে map() প্রতিটা num কে *2 করে নতুন array বানিয়েছে।

// Array of Strings===
const persons = ["Remon", "Hasan", "Rafi"];

const upperCase = persons.map(name => name.toUpperCase());

console.log(upperCase); // ["REMON", "HASAN", "RAFI"]


//map() এ index ব্যবহার করা যায়==
const songkha = [10, 20, 40];

const withIndex = songkha.map((num, index) => `Index ${index}: ${num}`);

console.log(withIndex);
// ["Index 0: 10", "Index 1: 20", "Index 2: 30"]
