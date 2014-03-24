// Join
var arrayJoin = [1,2,3];
console.debug(arrayJoin.join());
console.debug(arrayJoin.join("|"));
console.debug(arrayJoin.join("-"));

// Reverse
var arrayReverse = [1,2,3];
console.debug(arrayReverse.reverse());

// Sort
var arraySort = [33, 4, 1111, 222];
console.debug(arraySort.sort());
console.debug(arraySort.sort(function(a,b){return a-b;}));
console.debug(arraySort.sort(function(a,b){return b-a;}));

// Concat
var arrayConcat = [1,2,3];
console.debug(arrayConcat.concat([4,5]));

// Slice
var arraySlice = [1,2,3,4,5];

console.debug(arraySlice.slice(0,3));
console.debug(arraySlice.slice(3)); 
console.debug(arraySlice.slice(1,-1)); 
console.debug(arraySlice.slice(-3,-2));

// Splice
var arraySplice = [1,2,3,4,5,6,7,8];
console.debug(arraySplice.splice(4)); 
console.debug(arraySplice.splice(1,2)); 
console.debug(arraySplice.splice(1,1));

// Push e Pop
var stack = []; 

stack.push(1,2); 
console.debug(stack.pop());
stack.push(3); 
console.debug(stack.pop()); 
stack.push([4,5]);
console.debug(stack.pop()); 
console.debug(stack.pop());