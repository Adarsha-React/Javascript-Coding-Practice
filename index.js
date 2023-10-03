const nums = [6, 5, 2, 8, 9, 4];
// let minIndex = -1;
let temp = 0;

const selectionSort = (nums) => {
  let size = nums.length;
  let minIndex = -1;
  for (let i = 0; i < size; i++) {
    minIndex = i;
    console.log("Outer Loop.................", i);
    for (let j = i + 1; j < size; j++) {
      console.log("Inner Loop....", j);
      if (nums[j] < nums[minIndex]) {
        minIndex = j;
      }
    }

    if (minIndex != i) {
      temp = nums[i];
      nums[i] = nums[minIndex];
      nums[minIndex] = temp;

      console.log(nums);
    }
  }
  return nums;
};

console.log("Before Sort: " + nums);
const result = selectionSort(nums);
console.log("After sort: " + result);
