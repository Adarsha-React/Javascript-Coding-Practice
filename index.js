const nums = [4, 6, 10, 20, 50, 70];
console.log(nums);

function binarySearch(nums, target) {
  let left = 0,
    right = nums.length,
    mid = 0;

  console.log(right);

  while (left <= right) {
    mid = (left + right) / 2;

    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}

const result = binarySearch(nums, 50);
console.log(result);
