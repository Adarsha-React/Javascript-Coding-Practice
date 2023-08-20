//Two point sum = 0
const numbers = [-6, -3, 1, 2, 3, 4, 5, 7];

const twoPointSum = (numbers) => {
  //Initialize two pointers
  let start = 0,
    end = numbers.length - 1,
    sum = 0;

  while (start < end) {
    sum = numbers[start] + numbers[end];
    if (sum === 0) {
      console.log(`Indices are - ${start} and ${end}`);
      break;
    } else if (sum < 0) {
      start++;
    } else {
      end--;
    }
  }
  return null; // if no pair found
};

twoPointSum(numbers); //output - Indices are - 1 and 4
