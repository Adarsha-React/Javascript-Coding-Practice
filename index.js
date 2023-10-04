const nums = [10, 9, 2, 20, 30];

// nums.sort((a, b) => a - b);
// console.log(nums[nums.length - 1]);

function findMin(nums) {
  let minimum = nums[0];
  for (let i = 1; i <= nums.length; i++) {
    if (nums[i] > minimum) {
      minimum = nums[i];
    }
  }

  return minimum;
}

console.log(findMin(nums));
