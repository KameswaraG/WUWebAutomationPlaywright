//arrays

let fruits = ['apple', 'banana', 'orange', 'mango'];
let vegetables = ['carrot', 'broccoli', 'spinach', 'potato'];
let name=[];
let marks=[10,15,20,30,40,50];

//length
console.log(fruits.length)
console.log(name.length)

//push -this will add new elements to the array at the end

fruits.push('pineapple')
console.log(fruits)

//pop - this will remove the last element from the array    

fruits.pop()
console.log(fruits)

//unshift - this will add new elements to the array at the beginning
let lengths=fruits.unshift('strawberry')

console.log(fruits)

console.log(lengths)

//shift - this will remove the first element from the array
fruits.shift()

console.log(fruits)

//splice - this method will remove the elements from a specified location and will inster new elemenet if required and return the deleted element in an array

let removedFruits=fruits.splice(1,1,'jamoon')

console.log(fruits)

console.log(removedFruits)

//slice - this method will extract a section of an array and return a new array

let slicedFruits=fruits.slice(1,3) //slice method will return a new array with starting index as 1 and ending index as 3-1(2)

console.log(slicedFruits)

//concat - this method will merge two or more arrays and return a new array

let mergedArray=fruits.concat(vegetables)

console.log(mergedArray)
console.log(mergedArray.length)


//forEach method in arrays will return each element individually

fruits.forEach((fruit)=>{
    console.log('each fruit:',fruit)
})
