const score = [3, 2, 4];
const accu = 6;

const twoSum = (nums, target) => {
  let output = [0, 0];
  for (let i = 0; i <= nums.length; i++) {
    for (let j = i + 1; j <= nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        output[0] = i;
        output[1] = j;
        break;
      } else {
        continue;
      }
    }
  }
  return output;
};

console.log(twoSum(score, accu));
