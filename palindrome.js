const score = 0;

const isPalindrome = (x) => {
  const xArray = Array.from(String(x), Number);

  for (let i = 0; i <= xArray.length; i++) {
    let j = xArray.length;

    while (j - i > 1) {
      if (xArray[i] != xArray[j - 1 - i]) {
        return false;
      } else {
        return true;
      }
    }
  }
};

console.log(isPalindrome(score));
