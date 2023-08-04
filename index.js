const nums = [1, 2, 3, 4];

const sum = nums.reduce((cur, acc) => {
  return (acc = acc + cur);
}, 0);

console.log(sum);

Array.prototype.myReduce = function (callback, initialValue) {
  let acc = initialValue !== undefined ? initialValue : this[0];

  for (let i = 0; i < this.length; i++) {
    acc = callback(acc, this[i]);
  }

  return acc;
};

const result = nums.myReduce(function (acc, cur) {
  return (acc = acc + cur);
}, 0);

console.log(result);
