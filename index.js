let counter = 0;
const getData = () => {
  console.log("Fecthing data..." + Date());
};

const debounce = (getData, delay) => {
  let flag = true;
  return function () {
    if (flag) {
      getData.call();
      flag = false;
      setTimeout(() => {
        flag = true;
      }, delay);
    }
  };
};

const betterFunction = debounce(getData, 2000);
