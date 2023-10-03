Javascript - Closures 🔒 Very important concept in Javascript

A function bundle together with its lexical environment is called closure.

Use cases -

1️⃣ Private variables - If you want to have some private variables in your applications and those can be modified only in special cases.

2️⃣ To maintain the state between the function call

3️⃣ Waiting for an user input, example - button click

Cheers,

Adarsha 🚀

=============
const cart = ["shoes", "pants", "shirts"];

createOrder(cart)
.then(function (orderId) {
return orderId;
})
.catch(function (err) {
console.log(err.message);
});

function createOrder(cart) {
const pr = new Promise(function (resolve, reject) {
if (!validateCart(cart)) {
const error = new Error("Cart is not validated");
reject(error);
}
const orderId = "1234";
if (orderId) {
resolve(orderId);
}
});

return pr;
}

function validateCart(cart) {
return false;
}

=====
const nums = [1, 3, 6, 2, 4, 9, 10];
const target = 20;

function pairNumbers(nums, target) {
for (let i = 0; i <= nums.length; i++) {
for (let j = 1; j <= nums.length - 1; j++) {
if (nums[i] + nums[j] === target) {
return { i, j };
}
}
}
return -1;
}

const result = pairNumbers(nums, target);
console.log(result);

====
function sum(a) {
return function (b) {
if (b) {
return sum(a + b);
} else {
return a;
}
};
}

# console.log(sum(1)(10)());

const mapOfString = (str) => {
const map = {};
str.split("").forEach((item) => (map[item] = map[item] ? map[item] + 1 : 1));
return map;
};

const checkPalindrome = (str1, str2) => {
const mapOfString1 = mapOfString(str1);
const mapOfString2 = mapOfString(str2);
console.log(
Object.keys(mapOfString1).length,
Object.keys(mapOfString2).length
);

if (Object.keys(mapOfString1).length !== Object.keys(mapOfString2).length) {
return false;
}

for (let key in mapOfString1) {
if (mapOfString1[key] !== mapOfString2[key]) {
return false;
}
}

return true;
};

console.log(checkPalindrome("hel", "hel"));
