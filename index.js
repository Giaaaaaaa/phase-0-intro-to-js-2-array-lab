const cats = ["Milo", "Otis", "Garfield"];

// Write your solution here!

// This function should append a cat to the end of the array, destructively.
// function destructivelyAppendCat(name) {
//     name.push('aCat');
// }
// destructivelyAppendCat(cats);
// console.log(cats);

// // this function should prepend a cat to the beginning of the cats array, destructively.
// function destructivelyPrependCat(name) {
//     name.unshift('aCat');
// }
// destructivelyPrependCat(cats);
// console.log(cats);

// // this function should remove the last cat from the cats array, destructively.
// function destructivelyRemoveLastCat(name) {
//     name.pop();
// }
// destructivelyRemoveLastCat(cats);
// console.log(cats);

// this function should remove the first cat from the cats array, destructively.
// function destructivelyRemoveFirstCat(name) {
//     name.shift();
// }
// destructivelyRemoveFirstCat(cats);
// console.log(cats);

// this function should append a cat to the cats array and return a new array, leaving the cats array unchanged
// function appendCat(name) {
//     let newArr = [...name, `aCat`];
//     return newArr;
// }
// console.log(cats);
// console.log(appendCat(cats));

// // this function should prepend a cat to the cats array and return a new array, leaving the cats array unchanged
// function prependCat(name) {
//     let newArr = [`aCat`, ...name];
//     return newArr;
// }
// console.log(prependCat(cats));

// // this function should remove the last cat in the cats array and return a new array, leaving the cats array unchanged
// function removeLastCat() {
//     let newArr = cats.slice(0, cats.length - 1);
//     return newArr;
// }
// console.log(cats);
// console.log(removeLastCat());

// // this function should remove the first cat from the cats array and return a new array, leaving the cats array unchanged
// function removeFirstCat() {
//     let newArr = cats.slice(1, cats.length);
//     return newArr;
// }
// console.log(removeFirstCat());