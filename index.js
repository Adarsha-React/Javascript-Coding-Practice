const nums = [1, 4, 5, 8, 3, 9];
const target = 9;

const linearSearch = (nums, target) => {
  let steps = 0;
  for (let i = 0; i < nums.length; i++) {
    steps++;
    if (nums[i] === target) {
      console.log("Number of steps taken by Linear Search O(n): " + steps);
      return i;
    }
  }
  return -1;
};

let result = linearSearch(nums, target);
if (result === -1) {
  console.log("Target not found");
} else {
  console.log(`Target found at position :  ${result} `);
}
