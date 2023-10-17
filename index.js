const nums = [3, 4, 20, 6, 7, 2, 12, 8];

function secLargest(nums) {
  let largest = nums[0];
  let secondLargest = -Infinity;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > largest) {
      secondLargest = largest;
      largest = nums[i];
    } else if (nums[i] < largest && nums[i] > secondLargest) {
      secondLargest = nums[i];
    }
  }
  return secondLargest;
}

console.log(secLargest(nums));
