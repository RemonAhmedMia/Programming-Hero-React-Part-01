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


