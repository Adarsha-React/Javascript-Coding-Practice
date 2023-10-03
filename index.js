const nums = [3, 5, 7, 9, 11, 13];

nums.forEach((item) => console.log(item));

Array.prototype.myForEach = function (callBack) {
  let context = this;
  for (let i = 0; i < context.length; i++) {
    callBack(context[i]);
  }
};
nums.myForEach((item) => console.log(item));
