const nums = [1, 2, 3, 4, 5, 6];

const newArr = nums.map((item) => 2 * item);
console.log(newArr);

Array.prototype.myMap = function (callback) {
  let result = [],
    thisObj = this;

  for (let i = 0; i <= thisObj.length - 1; i++) {
    result.push(callback(thisObj[i]));
  }
  return result;
};

const result = nums.myMap(function (item) {
  return item * 3;
});
console.log(result);
