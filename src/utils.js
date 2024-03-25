// ARRAYS
// FOR LOOP

const array = [1,2,3,4,5];
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}

// FOR OF LOOP IS A MORE MODERN WAY OF ITERATING OVER ITERABLE OBJECTS SUCH AS ARRAYS, STRINGS, MAPS, SET. IT ITERATES OVER THE VALUES OF THE ARRAY DIRECTLY WITHOUT NEEDING AN INDEX

const array = [1, 2, 3, 4, 5];
for (const element of array) {
    console.log(element);
}

// The forEach() method is a higher-order function available on arrays that accepts a callback function. 
// It invokes the callback function once for each element in the array, passing the current element as an argument.

const array = [1, 2, 3, 4, 5];
array.forEach(element => {
    console.log(element);
});

// The map() method creates a new array by applying a callback function to each element of the original array.
// It returns a new array with the results of calling the callback function on each element.

const array = [1, 2, 3, 4, 5];
const newArray = array.map(element => element * 2);
console.log(newArray); // Outputs: [2, 4, 6, 8, 10]

// OBJECTS

// For...in Loop:
// The for...in loop iterates over the enumerable properties of an object, including properties inherited from its prototype chain. 
// It's commonly used for iterating over object properties when you don't need to distinguish between own and inherited properties.

const obj = { a: 1, b: 2, c: 3 };
for (const key in obj) {
    console.log(key, obj[key]);
}

// Note: When using for...in loop, 
// it's a good practice to check if the property is an object's own property using hasOwnProperty() method to avoid iterating over inherited properties.
const obj = { a: 1, b: 2, c: 3 };
for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
        console.log(key, obj[key]);
    }
}

// Object.keys():
// The Object.keys() method returns an array of a given object's own enumerable property names. 
// It provides a way to iterate over an object's own properties only.
const obj = { a: 1, b: 2, c: 3 };
Object.keys(obj).forEach(key => {
    console.log(key, obj[key]);
});

// Object.entries():
// The Object.entries() method returns an array of a given object's own enumerable property [key, value] pairs. 
// It's useful for iterating over both keys and values simultaneously.
const obj = { a: 1, b: 2, c: 3 };
Object.entries(obj).forEach(([key, value]) => {
    console.log(key, value);
});

// Object.getOwnPropertyNames():
// The Object.getOwnPropertyNames() method returns an array of all own (non-inherited) property names of a given object, both enumerable and non-enumerable.
const obj = { a: 1, b: 2, c: 3 };
Object.getOwnPropertyNames(obj).forEach(key => {
    console.log(key, obj[key]);
})
