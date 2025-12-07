const myArray = [10, 20, 30, 40, 50];
let [a, b, , d] = myArray; // Skipping the third element 
console.log(`a:${a}`);
const myObject = {
    name: 'Alice',
    age: 30,
    city: 'New York',
}
let { name:myName, age } = myObject;
console.log(`name: ${myName}, age: ${age}`);
function displayValues(...array) {
    console.log(array);
    document.getElementById('output').innerText = array.join(', ');
}
function myFunction(a,b,c,d,e,f,g){
    console.log(a,b,c,d,e,f,g)
}
const myArr = [1,2,3,4,5,6,7]
myFunction(...myArray);
let [x, y, ...rest] = myArr;
console.log(`x: ${x}, y: ${y}, rest: ${rest}`);

