const nums = [1, 2, 3, 4, 5, 6];

nums.forEach((item) => console.log(item));

Array.prototype.myForEach = function (callback) {
  let thisObj = this;
  for (let i = 0; i <= thisObj.length - 1; i++) {
    callback(thisObj[i]);
  }
};

nums.myForEach(function (item) {
  console.log(item);
});
