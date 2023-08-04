const nums = [1, 2, 3, 4, 5, 6];

const newArr = nums.filter((item) => item > 3);
console.log(newArr);

Array.prototype.myFilter = function (callback) {
  let result = [],
    thisObj = this;
  for (let i = 0; i <= thisObj.length - 1; i++) {
    if (callback(thisObj[i])) result.push(thisObj[i]);
  }
  return result;
};

const result = nums.myFilter(function (item) {
  return item > 3;
});

console.log(result);
