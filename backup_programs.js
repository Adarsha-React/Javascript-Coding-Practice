//Reverse the string
let inputText = "Adarsha PC";
console.log(name.split("").reverse().join(""));

const reverseString = (inputText) => {
  let reversedText = "";
  for (let singleChar of inputText) {
    reversedText = singleChar + reversedText;
  }
  return reversedText;
};

console.log(reverseString(inputText));

//palindrome or not
const Palindrome = (str) => {
  let isPalindrome = false;

  const reversedString = str.split("").reverse().join("");
  reversedString === str ? (isPalindrome = true) : (isPalindrome = false);
  return isPalindrome;
};

const isPalindrome = Palindrome("adar");
console.log(isPalindrome);

// find the max occurance of letter in provided string

const maxChar = (str) => {
  const resultObj = {};

  for (let singleChar of str) {
    if (!resultObj[singleChar]) {
      resultObj[singleChar] = 1;
    } else {
      resultObj[singleChar] = resultObj[singleChar] + 1;
    }
  }

  let charCount = 0;
  let maxChar = "";

  for (let key in resultObj) {
    if (resultObj[key] >= charCount) {
      charCount = resultObj[key];
      maxChar = key;
    }
  }
  console.log(`${maxChar}:${charCount}`);
};

maxChar("aaaabbbeee");

// reverse the integer

const reverseInteger = (inputNumber) => {
  if (inputNumber < 0) {
    return -1 * parseInt(inputNumber.toString().split("").reverse().join(""));
  } else {
    return parseInt(inputNumber.toString().split("").reverse().join(""));
  }
};

const result = reverseInteger(-111100);
console.log(result);

//call, apply and Bind methods
// call & apply methods will be invoked immediately but not bind method (it can be invoked later whenever we want)
// Mainly we use these methods when we want to borrow some common function

let printName = function (homeTown, stateName) {
  console.log(
    this.firstName +
      " " +
      this.lastName +
      " from " +
      homeTown +
      ", " +
      stateName
  );
};

let name = {
  firstName: "Adarsha",
  lastName: "PC",
};

let name2 = {
  firstName: "Deepashree",
  lastName: "PK",
};

//function borrowing -

printName.apply(name, ["Bangalore", "Karntaka"]);
printName.call(name2, "Mandya", "Karnataka");

let printFullName = printName.bind(name, "Bangalore", "Karnataka");
console.log(printFullName);

printFullName();

let nameObj = {
  firstName: "Adarsha",
  lastName: "PC",
};

//let printName = function (homeTown, country) {
console.log(
  this.firstName + " " + this.lastName + " from " + homeTown + ", " + country
);
//};

//let printFullName = printName.bind(nameObj, "Bangalore");
printFullName("India");

//Polyfill for bind method
Function.prototype.myBind = function (...args) {
  let objRef = this,
    params = args.slice(1);
  return function (...args2) {
    objRef.apply(args[0], [...params, ...args2]);
  };
};

let printFullName2 = printName.myBind(nameObj, "Karnataka");
printFullName2("India");
//======================================================================

let names = ["Adarsha", "Deepashree", "Darshan"];
let consoleFunction = (name) => {
  console.log(name);
};

// names.forEach(consoleFunction);
Array.prototype.myForEach = function (callBack) {
  let refObj = this;
  for (i = 0; i < refObj.length; i++) {
    callBack(refObj[i]);
  }
};

names.myForEach(consoleFunction);
//=============================================================================
// let multiply = function (x, y) {
//   console.log(x * y);
// };

// let multiplyByTwo = multiply.bind(this, 2, 3);
// multiplyByTwo(5);

// let multiply = function (x) {
//   return function (y) {
//     console.log(x * y);
//   };
// };

// let multiplyByTwo = multiply(2);
// multiplyByTwo(3);

// const calculateVolume = (length, breadth, height) => {
//   return length * breadth * height;
// };
// console.log(calculateVolume(2, 2, 2));

// function calculateVolume(length) {
//   return function (breadth) {
//     return function (height) {
//       return length * breadth * height;
//     };
//   };
// }

// function sum(a) {
//   return function (b) {
//     return function (c) {
//       return a + b + c;
//     };
//   };
// }

// const sumB = sum(2);
// console.log(sumB(2)(2));

// add(4)(5)(6)();

// function add(a) {
//   return function (b) {
//     if (b) {
//       return add(a + b);
//     } else {
//       return a;
//     }
//   };
// }

// console.log(add(4)(5)());

//Updating the DOM element using currying
// function updateHeaderText(id) {
//   return function (content) {
//     document.querySelector("#" + id).textContent = content;
//   };
// }
// const updateHeader = updateHeaderText("header");
// updateHeader("next header 1");
// updateHeader("next header 2");

// function sum(a, b, c, d) {
//   return a + b + c + d;
// }

// function curry(inFunction) {
//   console.log(inFunction.length);
// }

// const totalSum = curry(sum);

// const fruits = ["Apples", "Banana", "Grapes", "Orange"];

// // fruits.forEach(logFunction);

// function logFunction(inputValue) {
//   console.log(inputValue);
// }

// Array.prototype.myForEach = function (logFunction) {
//   for (let i = 0; i < this.length; i++) {
//     logFunction(fruits[i]);
//   }
// };

// fruits.myForEach(logFunction);

// nameObj = {
//   firstName: "Adarsha",
//   lastName: "PC",
// };

// const printName = function (country) {
//   console.log(this.firstName + " " + this.lastName + " " + country);
// };

// const printMyName = printName.bind(nameObj);
// printMyName("India");

// Function.prototype.myBind = function (...args) {
//   let thisObj = this;
//   let params = args.slice(1);
//   return function (...args2) {
//     thisObj.apply(args[0], [...params, ...args2]);
//   };
// };

// const printMyName2 = printName.myBind(nameObj, "Bangalore");
// printMyName2("Karnataka");

// const arr = [0, -1, 2, -3, 1];
// const x = -2;

// function checkSum(arr, x) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       let sum = arr[i] + arr[j];
//       if (sum === x) {
//         return true;
//       }
//     }
//   }
//   return false;
// }

// const result = checkSum(arr, x);
// console.log(result);

const arr = [4, 100, 4, 7, 5, 3, 8];

// arr.sort((a, b) => {
//   return a - b;
// });

// const arrSize = arr.length;

// console.log("Minimum: " + arr[0]);
// console.log("Maximum: " + arr[arrSize - 1]);

// function findMinMax(arr) {
//   let min = arr[0];
//   let max = arr[0];

//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] < min) {
//       min = arr[i];
//     } else if (arr[i] > max) {
//       max = arr[i];
//     }
//   }

//   return [min, max];
// }

// const [min, max] = findMinMax(arr);
// console.log(min, max);

//generate fibanocci series

// const fibFucntion = (inputValue) => {
//   let fibArr = [0, 1];

//   for (i = 2; i < inputValue; i++) {
//     fibArr.push(fibArr[i - 2] + fibArr[i - 1]);
//   }
//   return fibArr;
// };

// const result = fibFucntion(10);
// console.log(result);

//=================
// function secondLargest(arr) {
//   if (arr.length < 2) {
//     console.log("We should have atleast two numbers");
//     return;
//   }
//   arr.sort();

//   console.log(arr);

//   for (let i = arr.length - 2; i >= 0; i--) {
//     if (arr[i] != arr[arr.length - 1]) {
//       return arr[i];
//     }
//   }
// }

// console.log(secondLargest(arr));

// const arr = [1, 3, 10, 33, 55, 78];

// function secondLargest(arr) {
//   let largest = Number.NEGATIVE_INFINITY;
//   let secLargest = Number.NEGATIVE_INFINITY;

//   if (arr.length < 2) {
//     console.log("We should have atleast two numbers");
//     return;
//   }

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > largest) {
//       largest = arr[i];
//     }
//   }

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > secLargest && arr[i] < largest) {
//       secLargest = arr[i];
//     }
//   }

//   return secLargest;
// }

// const result = secondLargest(arr);
// console.log(result);

// const sum = (a) => (b) => b ? sum(a + b) : a;

// console.log(sum(10)(10)(10)());

// function add(...args) {
//   let a = args.reduce((acc, cur) => {
//     return (acc += cur);
//   }, 0);

//   return function (...args) {
//     let b = args.reduce((acc, cur) => {
//       return (acc += cur);
//     }, 0);
//     if (b) {
//       return add(a + b);
//     } else {
//       return a;
//     }
//   };
// }

// console.log(add(1, 2, 3)(2, 2, 2, 2)());

//values.forEach((item) => console.log(item));

// Array.prototype.myForEach = function (callback) {
//   for (let i = 0; i < this.length; i++) {
//     callback(this[i], i, this);
//   }
// };

// values.myForEach((item, index, arr) => console.log(item, index, arr));

//Array.prototype.myMap = function (callback) {
//   const newValues = [];
//   let thisObj = this;
//   for (let i = 0; i < thisObj.length; i++) {
//     newValues.push(callback(this[i]));
//   }
//   return newValues;
// };

// const newValues = values.myMap((item) => item * 2);
// console.log(newValues);

// let counter = 0;
// const getData = () => {
//   console.log("Fecthing data..." + Date());
// };

// const debounce = (getData, delay) => {
//   let flag = true;
//   return function () {
//     if (flag) {
//       getData.call();
//       flag = false;
//       setTimeout(() => {
//         flag = true;
//       }, delay);
//     }
//   };
// };

// const betterFunction = debounce(getData, 2000);

// const mapOfString = (str) => {
//   const map = {};
//   str.split("").forEach((item) => (map[item] = map[item] ? map[item] + 1 : 1));
//   return map;
// };

// const checkPalindrome = (str1, str2) => {
//   const mapOfString1 = mapOfString(str1);
//   const mapOfString2 = mapOfString(str2);
//   console.log(
//     Object.keys(mapOfString1).length,
//     Object.keys(mapOfString2).length
//   );

//   if (Object.keys(mapOfString1).length !== Object.keys(mapOfString2).length) {
//     return false;
//   }

//   for (let key in mapOfString1) {
//     if (mapOfString1[key] !== mapOfString2[key]) {
//       return false;
//     }
//   }

//   return true;
// };

// console.log(checkPalindrome("hel", "hel"));

// =====

// const mapOfString = (str) => {
//   let map = {};
//   str
//     .split("")
//     .filter((item) => item !== " ")
//     .forEach((item) => (map[item] = map[item] ? map[item] + 1 : 1));
//   return map;
// };

// const mapObj = mapOfString("hell");
// console.log(mapObj);
// let max = 1,
//   char = "";

// for (let key in mapObj) {
//   if (mapObj[key] > max) {
//     max = mapObj[key];
//     char = key;
//   }
// }

// console.log(`${char}: ${max}`);

//===

// const lengthOfLongestString = (str) => {
//   if (!str) {
//     return false;
//   }

//   let start = 0,
//     end = 0,
//     maxLength = 0;

//   let uniqueCharacters = new Set();

//   while (end < str.length) {
//     if (!uniqueCharacters.has(str[end])) {
//       uniqueCharacters.add(str[end]);
//       end++;
//       maxLength = Math.max(maxLength, uniqueCharacters.size);
//     } else {
//       uniqueCharacters.delete(str[end]);
//       start++;
//     }
//   }
//   return maxLength;
// };

// console.log(lengthOfLongestString("abcabcbb"));

//Promise and Async await

// const pr = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     resolve("Promise 1 resolved");
//   }, 3000);

//   console.log("Inside promise");
// });

// pr.then(function (respose) {
//   console.log(respose);
// }).catch(function (err) {
//   console.log();
// });

// function printNumbers() {
//   for (let i = 0; i < 10; i++) {
//     console.log(i);
//   }
// }

// printNumbers();

// const pr2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Promise 2 resovled");
//   }, 3000);
// });

// async function handlePromise() {
//   const data = await pr2;
//   console.log(data);
//   console.log("Inside promise 2");
// }

// handlePromise();

// function printNumbers() {
//   for (let i = 0; i < 10; i++) {
//     console.log(i);
//   }
// }

// printNumbers();

//Fibonacci

// const fib = (n) => {
//   const result = [];
//   for (let i = 0; i <= n; i++) {
//     if (i <= 1) {
//       result.push(i);
//     } else {
//       result.push(result[i - 2] + result[i - 1]);
//     }
//   }
//   return result;
// };

// console.log(fib(6));

//print the numbers without using any loo
// const print = (num) => {
//   console.log("Current...", num);
//   if (num === 0) return;
//   print(num - 1);
//   console.log(num);
// };

// print(5);

// var cars = {
//   label: "Autos",
//   subs: [
//     {
//       label: "SUVs",
//       subs: [],
//     },
//     {
//       label: "Trucks",
//       subs: [
//         {
//           label: "2 Wheel Drive",
//           subs: [],
//         },
//         {
//           label: "4 Wheel Drive",
//           subs: [
//             {
//               label: "Ford",
//               subs: [],
//             },
//             {
//               label: "Chevrolet",
//               subs: [],
//             },
//           ],
//         },
//       ],
//     },
//     {
//       label: "Sedan",
//       subs: [],
//     },
//   ],
// };

// const iterateObject = (obj) => {
//   for (let key in obj) {
//     if (typeof obj[key] === "object" && obj[key] !== null) {
//       iterateObject(obj[key]);
//     } else {
//       console.log(key + " : " + obj[key]);
//     }
//   }
// };

// iterateObject(cars);
