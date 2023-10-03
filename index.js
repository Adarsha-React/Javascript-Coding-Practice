const nums = [3, 5, 7, 9, 11, 13];

const result = nums.map((item) => item * 2);
console.log(result);

Array.prototype.myMap = function (callBack) {
  let context = this;
  let result = [];
  console.log(callBack);
  for (let i = 0; i < context.length; i++) {
    result.push(callBack(context[i]));
  }
  return result;
};

const newResult = nums.myMap(function (item) {
  return item * 3;
});
console.log(newResult);
