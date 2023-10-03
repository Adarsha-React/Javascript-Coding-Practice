const nums = [3, 10, 4, 10];

const result = nums.reduce((acc, cur) => {
  return (acc = acc + cur);
});

console.log(result);

Array.prototype.myReduce = function (callback, initialVal) {
  let acc = initialVal,
    context = this;
  for (let i = 0; i < context.length; i++) {
    acc = acc ? callback(acc, context[i], i, context) : context[0];
  }
  return acc;
};

const newResult = nums.myReduce((acc, cur) => {
  return (acc = acc + cur);
}, 0);

console.log(newResult);
