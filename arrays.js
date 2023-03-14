arr1 = [3,7,34,90,12];
const result = (arr1.slice(-1));
console.log("last element",result);
arr2 = [true,"green","where",12,56];
const result1 = (arr2.slice(-1));
console.log("last element1",result1);

myPets = ["Cow","Bird","Snake","Dog"];
console.log(myPets.join());

var arr3 = [-5,9,5,3,2,-3,6,8,4,1];
let sortit = arr3.sort()
console.log("sort",sortit);

var arr = ["apple","mango","apple","orange","mango","mango"];
let duplicate = [...new Set(arr)];  //set removes duplicate items from an array by converting the array to set
console.log("duplicate",duplicate);  //the spread syntax includes all the elements of set to a new array
// let duplicated = [...old Set(duplicate)];
// console.log("duplicated",duplicated); 

const arr5 = ["the","way","x",4];
let result2 = arr5.includes("the");  //we use includes() to know if a value exists in an array
console.log("find",result2);

let word = "sevink";
let sorted = word.split('').sort().join('');
console.log(sorted);