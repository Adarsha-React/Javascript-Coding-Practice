const nums = [4, 5, 6, 2, 10, 66];
console.log(nums);

function linearSearch(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      return true;
    }
  }
  return -1;
}

const result = linearSearch(nums, 20);
console.log(result);
