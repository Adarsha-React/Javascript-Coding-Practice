const nums = [10, 9, 2, 20, , 20, 30];

function findCount(nums) {
  let map = {};

  let minimum = 0,
    keyValue = 0;

  nums.filter((item) => (map[item] = map[item] ? map[item] + 1 : 1));
  console.log(map);

  for (let key in map) {
    if (map[key] > minimum) {
      minimum = map[key];
      keyValue = key;
    }
  }
  return [minimum, keyValue];
}

const result = findCount(nums);

console.log(result);
