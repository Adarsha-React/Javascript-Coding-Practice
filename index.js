const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
const target = 16;

const binarySearch = (nums, target) => {
  let steps = 0,
    start = 0,
    end = nums.length - 1;

  while (start <= end) {
    steps++;
    let mid = Math.round((start + end) / 2);
    if (nums[mid] === target) {
      console.log("Number of steps taken by Binary Search O(log n) : " + steps);
      return mid;
    } else if (nums[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return -1;
};

let result = binarySearch(nums, target);
if (result === -1) {
  console.log("Target not found");
} else {
  console.log(`Target found at position :  ${result} `);
}
