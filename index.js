const nums = [3, 5, 7, 9, 11, 13];

const result = nums.filter((item) => item > 9);
console.log(result);

Array.prototype.myFilter = function (callBack) {
  let context = this,
    result = [];
  for (let i = 0; i < context.length; i++) {
    if (callBack(context[i])) {
      result.push(context[i]);
    }
  }
  return result;
};

const newResult = nums.myFilter((item) => item > 9);
console.log(newResult);
